#!/bin/bash

pm2 stop app1
git reset --hard
git pull
npm install
npm run build
pm2 restart app1