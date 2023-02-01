# デモ用のユーザを追加' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=r-takaic&displayName=髙市&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=r-takagi&displayName=高木&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=h-watanb&displayName=渡辺&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=shu-hsmt&displayName=橋本&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=m-tanigt&displayName=谷口&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=k-kotou&displayName=古藤&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=m-iriyam&displayName=入山&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=h-yosiok&displayName=吉岡&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=t-ishino&displayName=石野&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=tk-iwase&displayName=岩瀬&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=fumy-oda&displayName=小田&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=r-kaichi&displayName=開地&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=h-takesg&displayName=竹重&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=t-ou&displayName=王&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=y-kaimor&displayName=皆森&attribute=b4' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=hkr-kubo&displayName=久保&attribute=b4' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=w-mabuti&displayName=馬渕&attribute=b4' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=k-mihara&displayName=三原&attribute=b4' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=ryg-wtnb&displayName=渡邊&attribute=b4' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=kusumoto&displayName=楠本&attribute=teature' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=shins&displayName=柗本&attribute=teature' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data 'name=higo&displayName=肥後&attribute=teature' -XPOST

## デモ用のアイテムを追加
curl http://localhost/backend/item/add?name=CocaCola\&sellingprice=80\&costprice=70\&grouping=juice
curl http://localhost/backend/item/add?name=Fanta\&sellingprice=80\&costprice=70\&grouping=juice
curl http://localhost/backend/item/add?name=GogoTea\&sellingprice=100\&costprice=80\&grouping=juice
curl http://localhost/backend/item/add?name=Water\&sellingprice=100\&costprice=40\&grouping=juice
curl http://localhost/backend/item/add?name=PotatoChips\&sellingprice=100\&costprice=80\&grouping=food
curl http://localhost/backend/item/add?name=Dagashi\&sellingprice=100\&costprice=80\&grouping=food


