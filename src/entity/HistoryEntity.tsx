class HistoryEntity{
    
    id_: Number;
    name_: string;
    item_: string;
    price_: Number;
    date_: string;


    constructor(
        id:string,
        name:string,
        item:string,
        price:string,
        date:string){
        this.id_ = parseInt(id);
        this.name_ = name;
        this.item_ = item;
        this.price_ = parseInt(price);
        this.date_ = date;
    }


    toString(){
        return this.name_;
    }
}

export default HistoryEntity;