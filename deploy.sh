#!/bin/sh     
sudo git pull origin master
cd client
npm install
sudo npm run-script build
cd ..
cd ./server
sudo npm install
sudo systemctl restart nginx
sudo pm2 restart all