export class SavedItem{
    date: Date;
    constructor(public description:string, public price: number){
        this.date= new Date();
    }
}