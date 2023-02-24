<!-- # HOW TO USE
* [こちら](https://haur514.github.io/juiceapp_frontend/)にデモページをデプロイしています． -->

## Purpose
あるコミュニティにおける飲食物の販売管理を目的とするアプリケーション。

商品ごとの売り上げを可視化し、管理者による商品の発注個数の算出を支援する。

## HOW TO USE
```
git clone --recursive https://github.com/Haur514/juiceapp_frontend.git
cd juiceapp_frontend
docker-compose up --build
```
[localhost:80](http://localhost:80)にアクセスする．

下記のコマンドで，デモ用のデータを入れることができます．
```
./init/init-database.sh
```
