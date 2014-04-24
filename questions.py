#!/usr/env/python
# Python script to retrieve quiz questions in http://tinyurl.com/destressquiz.
# The quiz was destressful in an unintended way.

import argparse
import json
import os
import requests


def main(args):
    known = {}

    # Append to an existing file if possible.
    if os.path.exists(args.solution):
        with open(args.solution, 'r') as f:
            try:
                known = json.load(f)

                # Compute known statistics.
                if args.verbose:
                    int_keys = [int(k) for k in known]
                    max_key = max(int_keys)
                    print 'Highest key found so far: {}'.format(max_key)
                    gaps = set(range(max_key + 1))
                    for i in int_keys:
                        gaps.remove(i)
                    print 'Gaps: {}'.format(gaps)
            except ValueError:
                pass

    for i in range(args.runs):
        # Unprotected endpoing, suspected iptables rate limiting.
        # 1. Be nice.
        # 2. Don't be unnice.
        # You have been warned (:
        resp = requests.get('https://demopage.in/fb/rapidfire/getquestion.php')

        decoded = resp.json()
        print 'Retrieved: {}'.format(len(decoded))
        new = 0
        for item in decoded:
            uid = item['id']
            del item['id']
            if uid not in known:
                known[uid] = item
                new += 1
        print 'New: {}'.format(new)

    with open(args.solution, 'w') as f:
        json.dump(known, f)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-s', '--solution', type=str, default='solution.json',
                        required=False, help='JSON file containing ' +
                        'discovered questions.')
    parser.add_argument('-r', '--runs', type=int, default=1, required=False,
                        help='Number of times to run this script.')
    parser.add_argument('-v', '--verbose', action='store_true',
                        help='Report file statistics at start of run.')
    args = parser.parse_args()
    args.solution = os.path.relpath(args.solution)
    main(args)
