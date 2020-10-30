#!/bin/bash -e

export PATH=$PATH:/usr/local/node/bin:/usr/local/nodejs/bin
echo $PATH

# root
NODE_ROOT=/usr/local/node
PROJECT_NAME=$pkgname$
CLUSTER_NAME=$PROJECT_NAME-cluster
PROJECT_ROOT=$NODE_ROOT/$PROJECT_NAME

cd $PROJECT_ROOT

echo "npm install start"
npm install --registry=https://registry.npm.taobao.org
echo "npm install done"

# read env
env="dev"
if [ -n "$1" ] ;then
  env="$1";
fi

echo "Environment is ${env}"
echo `whoami`
echo $HOME
echo `which pm2`

# find proper pm2 config file
configFile="pm2.config.json"
pm2 kill
# restart pm2
pm2 startOrGracefulReload $configFile
# reset all metadata
pm2 reset $CLUSTER_NAME
