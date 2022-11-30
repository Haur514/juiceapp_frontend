<!-- # HOW TO USE
* [こちら](https://haur514.github.io/juiceapp_frontend/)にデモページをデプロイしています． -->


# 動作例

https://user-images.githubusercontent.com/82633228/204144072-2edb8c3c-020a-44db-902f-f9df52569743.mp4



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

現在、docker起動スクリプトを実行しても、nginxがうまく起動されない問題が報告されています。
当バグが発生した場合、dockerのほうからnginxを再度起動することで解決します、
