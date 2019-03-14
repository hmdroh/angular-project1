export class Stock {
 fav: boolean = false;
 constructor(public name: string,
             public code: string,
             public price: number,
             public prevPrice: number){}

isPositiveChange(): boolean {
    return this.price >= this.prevPrice;
}

}
