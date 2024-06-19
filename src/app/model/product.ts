export class Product {

    id: string;

    // constructing the template and adding an id
    constructor (
        public imageUrl: string,
        public name: string,
        public price: number,
        public description: string
    ) {
        this.id = crypto.randomUUID().substring(0, 8);
    }

}