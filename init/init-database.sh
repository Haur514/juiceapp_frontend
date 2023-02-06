# デモ用のユーザを追加' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=r-takaic&displayName=髙市&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=r-takagi&displayName=高木&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=h-watanb&displayName=渡辺&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=shu-hsmt&displayName=橋本&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=m-tanigt&displayName=谷口&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=k-kotou&displayName=古藤&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=m-iriyam&displayName=入山&attribute=m2' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=h-yosiok&displayName=吉岡&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=t-ishino&displayName=石野&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=tk-iwase&displayName=岩瀬&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=fumy-oda&displayName=小田&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=r-kaichi&displayName=開地&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=h-takesg&displayName=竹重&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=t-ou&displayName=王&attribute=m1' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=y-kaimor&displayName=皆森&attribute=b4' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=hkr-kubo&displayName=久保&attribute=b4' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=w-mabuti&displayName=馬渕&attribute=b4' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=k-mihara&displayName=三原&attribute=b4' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=ryg-wtnb&displayName=渡邊&attribute=b4' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=kusumoto&displayName=楠本&attribute=teature' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=shins&displayName=柗本&attribute=teature' -XPOST
curl -w '\n' 'http://localhost/backend/member/add' --data-urlencode 'name=higo&displayName=肥後&attribute=teature' -XPOST

## デモ用のアイテムを追加
curl -w '\n' 'http://localhost/backend/item/add' --data-urlencode 'name=CocaCola&sellingprice=80&costprice=70&grouping=juice' -XPOST
curl -w '\n' 'http://localhost/backend/item/add' --data-urlencode 'name=Fanta&sellingprice=80&costprice=70&grouping=juice' -XPOST
curl -w '\n' 'http://localhost/backend/item/add' --data-urlencode 'name=GogoTea&sellingprice=100&costprice=80&grouping=juice' -XPOST
curl -w '\n' 'http://localhost/backend/item/add' --data-urlencode 'name=Water&sellingprice=100&costprice=40&grouping=juice' -XPOST
curl -w '\n' 'http://localhost/backend/item/add' --data-urlencode 'name=PotatoChips&sellingprice=100&costprice=80&grouping=food' -XPOST
curl -w '\n' 'http://localhost/backend/item/add' --data-urlencode 'name=Dagashi&sellingprice=100&costprice=80&grouping=food' -XPOST


