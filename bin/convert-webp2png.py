#!/usr/bin/env python3

from PIL import Image
import os
import re
import sys

fromFile = sys.argv[1]
toStr = 'docs/certs/%s.png' % '_'.join(re.sub(r'[^a-zA-Z0-9-_ ]', '', ' '.join(sys.argv[2:])).split(' ')).lower()

im = Image.open(fromFile).convert('RGB')
im.save(toStr, 'png')
print(f'Created a new file:  {toStr}')

os.remove(fromFile)
print(f'Removed source file: {fromFile}')