export interface VinylInterface {
    id: string;
    img: string;
    title: string;
    artist: string;
    price: string;
    tags: Array<string>;
    discount: boolean;
    priceDiscount?: string;
}