#!/bin/bash

npm run production
git push heroku master
heroku ps:scale web=1
heroku open

