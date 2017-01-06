#!/bin/bash

LOG_FILE=/home/pi/log/pissistant.log
touch $LOG_FILE

exec >> $LOG_FILE 2>&1

echo "Starting pissistant..."
npm start
