#!/usr/bin/env sh
## Ref.: https://cli.vuejs.org/guide/deployment.html#github-pages

# abort on errors
set -e

cd ..

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
git push -f git@github.com:bibAtdev/cv.git master:gh-pages

cd -
sleep 20s