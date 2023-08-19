export type DetailBukuLists = {
    id: number;
    image: string;
    bookTitle: string;
    writer: string;
    year: string;
};  

export type DetailBukuType = {
    id: string;
    image: string;
    bookTitle: string;
    writer: string;
    year: string;
    authors: string;
    publishedDate: string,
    description: string,
    volumeInfo: '',
};

export type DetailBukuProps = {
    id: number;
}