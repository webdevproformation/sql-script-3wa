import  type React from "react"
import { PollModel } from "../model/poll-model"

export const Question: React.FC<{
    question : PollModel.Question,
    onChange : ( id : string , value : string ) => void // ajouter les props dans le type de retour
}> = ({question , onChange}) => { 
    return (
        <div>
            <input value={ question.title } onChange={
                ( e ) => onChange( question.id , e.target.value )
            }  />
            {/** le champ input va récupérer la props  */}
            <button>Ajouter une réponse</button>
        </div>
    )
} 
