#!/bin/bash
find ./tables -name *.tab -type f -exec npm start --silent -- {} \; > match.log
#wc -l < match.log
