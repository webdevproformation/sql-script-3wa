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
        setForm({
            ...form , 
            questions : form.questions.map((question) => {
                if(question.id === questionId){
                    return { 
                        ...question , title : value
                    }
                }
                return question
            })
        })
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
        setForm({
        ...form,
        questions: form.questions.map((question) => {
            if (question.id === id) {
                return {
                    ...question,
                    answers: question.answers.map((answer) => {
                        if (answer.id === answerId) {
                            return {
                                ...answer,
                                title: value
                            }
                        }
                        return answer;
                    })
                }
            }
            return question;
        })
    })
    }

    function submitPoll()
    {

    }

    function isSubmittable():boolean
    {
        // le formule est valide UNIQUEMENT si
        // il y a un titre
        // au moins 2 questions
        // et pour chaque question 
        // un titre
        // au moins 2 réponses et chaque réponse doit avoir un contenu

        return form.pollTitle !== "" &&
               form.questions.length >= 2 &&
               form.questions.every((question) => question.title !== "") &&
               form.questions.every((question) => question.answers.length >= 2) &&
               form.questions.every((question) => question.answers.every((answer) => answer.title !== "")) 
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
