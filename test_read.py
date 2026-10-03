# -*- coding: utf-8 -*-
import os

with open('prototype.html', 'r', encoding='utf-8') as f:
    old_html = f.read()

print("Read old html:", len(old_html), "bytes")
