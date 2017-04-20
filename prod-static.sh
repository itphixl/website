#!/bin/bash

set -o errexit

staticDirectoryName="static"
staticDirectoryPath=./static

staticBuildDirectoryName="build"

assetIndexFilePath=./src/assets/index.html

echo "Starting static production ......"

echo "Setting static directory ........"
[ -d $staticDirectoryName ] || mkdir $staticDirectoryName

if [ -d $staticBuildDirectoryName ]
then
  rm -rf $staticBuildDirectoryName
fi

echo "Static directory is okay ........"

echo "Copying index file .............."
cp $assetIndexFilePath $staticDirectoryPath

echo "Starting bundle compiling ......."
npm run prod:static:build

echo "Static production is done ......."

unset mustZip

while read -p "Do you want zip the static production ? (yes | no) ? : " mustZip && ( [[ "$mustZip" != "yes" ]] && [[ "$mustZip" != "no" ]] )
do
  echo "You must enter yes or no"
done

if [ "$mustZip" == "yes" ]
then
  date=$(date +%d%m%Y)

  echo "Zipping the static production ..."
  zip -r production-static-${date}.zip $staticDirectoryPath
  echo "Zipping is done ................."
fi

echo "/ ! \ Warning ..................."
echo "You choose to use the project in static production "
echo "Make sure you can rewrite your virtual configuration file"
echo "please refer if you use apache for example : https://gkedge.gitbooks.io/react-router-in-the-real/content/apache.html"

exit 0
