export class ListBlogs {
    constructor(
        public title : string,
        public category : string,
        public username : string,
        public thumbnail : string,
        public content : string,
        public rating : number,
        public commentNum : number,
        public views: number,
    ) {
        
    }
}