import  type React from "react"
import { PollModel } from "../model/poll-model"
import { Answer } from "./Answer"

export const Question: React.FC<{
    question : PollModel.Question,
    onChange : ( id : string , value : string ) => void // ajouter les props dans le type de retour
    addAnswer : ( id : string ) => void ,
    removeAnswer : ( id: string , answerId : string ) => void ,
    updateAnswer : ( id: string , answerId : string , value : string ) => void
    removeQuestion  : (id : string) => void
}> = ({question , onChange , addAnswer , removeAnswer , updateAnswer , removeQuestion }) => { 


    function ajouter_reponse(e: React.FormEvent<HTMLButtonElement>){
        e.preventDefault();
        addAnswer(question.id)
    }

    function supprimer_question(e: React.FormEvent<HTMLButtonElement>){
        e.preventDefault();
        removeQuestion(question.id)
    }

    return (
        <div className="my-2">
            <input
                className="bg-gray-100 border border-gray-300 rounded py-2 px-4 focus:outilne-none focus:ring-2 focus:ring-indigo-400 me-2" 
                value={ question.title }
                placeholder="Saisir la question" 
                onChange={
                    ( e ) => onChange( question.id , e.target.value )
                }  
            />
            {/** le champ input va récupérer la props  */}
            <button 
                className="bg-red-500  text-white font-bold py-2 px-2 rounded 
                        hover:bg-red-700 "
                onClick={ajouter_reponse}>
                    Ajouter une réponse
            </button>
            <button 
                onClick={supprimer_question}
                aria-label="Supprimer la question"
                className="ms-2"
            >
                ❌
            </button>
    
            {
                question.answers.map(function(answer){
                    return <Answer 
                                key={answer.id} 
                                title={answer.title}  
                                onRemove={(e) =>  {
                                    e.preventDefault();
                                    removeAnswer(question.id , answer.id  )
                                } }
                                onChange={ ( title ) => {
                                    updateAnswer(question.id , answer.id , title)
                                } }
                            />
                })
            }

            
        </div>
    )
} 
