export namespace PollModel{
    export type Question = {
        id : string
        title : string ;
        answers : Array<Answser>
    }

    export type Answser = {
        id : string ;
        title : string ; 
    }
}