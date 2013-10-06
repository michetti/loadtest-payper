#!/bin/bash

for ((i=$1;i<=$2;i++))
do
  echo "Simulating user $i"
  casperjs payper.js $i $4 &
  sleep $(echo "$3 / $2" |bc -l)
done
