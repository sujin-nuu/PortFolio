export interface careerItemT {
    key:number;
    startDate: string;
    endDate?: string;
    title: string;
    task?:string;
    stack?:string;
    detail?:string;
    useYn: boolean;
}