#!/bin/bash

for ((i=$1;i<=$2;i++))
do
  echo "Simulating user $i"
  casperjs payper.js $i $3 &
  sleep 5
done
