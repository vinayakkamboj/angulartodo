export class Todo{
    sno: number;
    title: string;
    desc: string;
    active: boolean;
    date: string;
    time: string;
    constructor(sno: number, title: string, desc: string, active: boolean, date: string, time: string){
        this.sno = sno;
        this.title = title;
        this.desc = desc;
        this.active = active;
        this.date = date;
        this.time = time;
    }
}