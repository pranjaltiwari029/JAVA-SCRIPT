class Product{
    constructor(itemName,price,discount,productCode){
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.productCode=productCode;

    }
    getitemName(){
        return this.itemName + " is a Product";
    }
}

class Furniture extends Product{
    constructor(itemname){
        super(itemName);
    }

    getitemName(){
        return this.itemName + "is a Furniture"
    }
}
let pencil = new Product('pencil',20,2,'P19')
let chair = new Furniture('chair',400,30,'C10')

// const Product1=class {
//     constructor(itemName,price,discount,productCode){
//         this.itemName=itemName;
//         this.price=price;
//         this.discount=discount;
//         this.productCode=productCode;

//     }
//     get getdiscount(){
//         return this.discount;
//     }
//     set setDiscountValue(value){
//         this.discount=value;


//     }
// };

// let chair = new Product1('chair',400,30,'C10')