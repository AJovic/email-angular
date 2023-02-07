export interface IEmail {
    id?:number;
    from?: string;
    to?: string;
    cc?: string;
    subject?: string;
    importance?: number;
    content?: string;
}
