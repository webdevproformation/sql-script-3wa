import type { PollModel }  from "../model/poll-model" ;
import { useState } from "react" ;

export const useCreatePoll = function(){

    // par défaut le formulaire de création de Questionnaire est vide
    const [ form , setForm ] = useState<PollModel.Form>({
        pollTitle : "",
        questions : []
    })

    // 9 fonction qui vont générer l'ensemble des traitements de tous nos composants

    function updateTitle(value : string):void
    {
        setForm({ 
            ...form , pollTitle : value
        })
    }

    function addQuestion(){
        setForm({ ...form , questions : [
            ...form.questions, { 
                id : String(crypto.randomUUID()),
                title : '', 
                answers : []
            }
        ] })
    }

    function removeQuestion(questionId: string):void
    {
        setForm({ 
            ...form , 
            questions: form.questions.filter( (question) => question.id !==  questionId ) 
        })
    }

    function updateQuestion(questionId: string , value : string ):void
    {

    }


    function addAnswerToQuestion ( questionId : string ) : void 
    {
        setForm({
            ...form,
            questions: form.questions.map((question) => {
                if (question.id === questionId) {
                    return {
                        ...question,
                        answers: [...question.answers, {
                            id: crypto.randomUUID(),
                            title: ""
                        }]
                    }
                }
                return question;
            })
        })
    }

    function removeAnswerFromQuestion ( id: string , answerId : string ) : void 
    {
        setForm({
            ...form ,
            questions : form.questions.map((question) => {
                if(question.id === id){
                    return {
                        ...question,
                        answers : question.answers.filter((answer) => answer.id !== answerId)
                    }
                }
                return question
            })
        })
    }

    function updateAnswerFromQuestion ( id: string , answerId : string , value : string ):  void
    {

    }

    function submitPoll()
    {

    }

    function isSubmittable():boolean
    {
        return false ;
    }

    return {
        form ,
        updateTitle ,
        addQuestion ,
        removeQuestion , 
        updateQuestion ,
        addAnswerToQuestion ,
        removeAnswerFromQuestion ,
        updateAnswerFromQuestion ,
        submitPoll ,
        isSubmittable : isSubmittable()
    }

}
