import  type React from "react"
import { PollModel } from "../model/poll-model"

export const Question: React.FC<{
    question : PollModel.Question // ajouter les props dans le type de retour
}> = ({question}) => { 
    return (
        <div>
            <input value={ question.title } onChange={() => {}}  />
            {/** le champ input va récupérer la props  */}
            <button>Ajouter une réponse</button>
        </div>
    )
} 
