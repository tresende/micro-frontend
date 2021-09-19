cd ./ecomm 
cd ./cart && yarn && yarn upgrade && cd .. 
cd ./container && yarn && yarn upgrade && cd ..
cd ./products && yarn && yarn upgrade && cd .. 
cd .. 
cd ./game && yarn && yarn upgrade 
cd .. 
cd ./packages
cd ./auth && yarn && yarn upgrade && yarn build && cd ..
cd ./container && yarn && yarn upgrade && yarn build && cd ..
cd ./dashboard && yarn && yarn upgrade && yarn build && cd ..
cd ./marketing && yarn && yarn upgrade && yarn build && cd ..
cd .. 
git add . && git commit -m "⬆ chore: upgrade dependencies" && git push