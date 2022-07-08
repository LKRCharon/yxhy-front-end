# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


cd dist
git init
git add -A -f
git commit -m 'deploy'
git pull --rebase git@github.com:lkrcharon/yxhy-front-end.git gh-pages
git push -f git@github.com:lkrcharon/yxhy-front-end.git gh-pages
cd ..

cd dist
git init
git remote add origin git@github.com:lkrcharon/yxhy-front-end.git  
git add -A -f
git commit -m 'deploy'
git pull --rebase orgin gh-pages
git push -f orgin gh-pages
cd ..

git checkout gh-pages
git checkout develop -- dist
git add dist -f

git commit -m "deploy"

