import  type React from "react"
import { PollModel } from "../model/poll-model"
import { Answer } from "./Answer"

export const Question: React.FC<{
    question : PollModel.Question,
    onChange : ( id : string , value : string ) => void // ajouter les props dans le type de retour
    addAnswer : ( id : string ) => void ,
    removeAnswer : ( id: string , answerId : string ) => void 
}> = ({question , onChange , addAnswer , removeAnswer }) => { 
    function ajouter_reponse(e: React.FormEvent<HTMLButtonElement>){
        e.preventDefault();
        addAnswer(question.id)
    }

    return (
        <div>
            <input 
                value={ question.title } 
                onChange={
                    ( e ) => onChange( question.id , e.target.value )
                }  
            />
            {
                question.answers.map(function(answer){
                    return <Answer 
                                key={answer.id} 
                                title={answer.title}  
                                onRemove={(e) =>  {
                                    e.preventDefault();
                                    removeAnswer(question.id , answer.id  )
                                } }
                            />
                })
            }

            {/** le champ input va récupérer la props  */}
            <button 
                onClick={ajouter_reponse}>
                    Ajouter une réponse
            </button>
        </div>
    )
} 
