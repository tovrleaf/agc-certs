#!/usr/bin/env python3

from PIL import Image
import os
import re
import subprocess
import sys

fromFile = sys.argv[1]
fromName = sys.argv[2:]

script = os.path.join(
            os.path.dirname(os.path.realpath(__file__)), '../src/nameTransform.js'
        )

p = subprocess.run(
	['node', script, ' '.join(fromName)], stdout=subprocess.PIPE)
toStr = 'docs/certs/%s' % p.stdout.strip().decode('utf-8')

im = Image.open(fromFile).convert('RGB')
im.save(toStr, 'png')
print(f'Created a new file:  {toStr}')

os.remove(fromFile)
print(f'Removed source file: {fromFile}')