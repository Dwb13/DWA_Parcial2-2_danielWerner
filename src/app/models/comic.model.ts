export class Comic{
    public id: number;
    public tittle: string;
    public variantDescription: string;
    public resourceURI: string;
    public url: string;
    public thumbnail: Thumbnail;
    public price: number;
    public format: number;
}

export class Thumbnail{
    public path: string;
    public extension: string;
}
