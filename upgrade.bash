cd ./ecomm 
cd ./cart && yarn && yarn upgrade && cd .. 
cd ./container && yarn && yarn upgrade && cd ..
cd ./products && yarn && yarn upgrade && cd .. 
cd .. 
cd ./game && yarn && yarn upgrade 
cd .. 
cd ./packages
cd ./auth && yarn && yarn upgrade && cd ..
cd ./container && yarn && yarn upgrade && cd ..
cd ./dashboard && yarn && yarn upgrade && cd ..
cd ./marketing && yarn && yarn upgrade && cd ..
cd .. 
git add . && git commit -m "⬆ chore: upgrade dependencies" && git push