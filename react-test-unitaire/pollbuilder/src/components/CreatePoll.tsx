import type React from "react"
import { useCreatePoll } from "../hook/hooks"


export const CreatePoll : React.FC<{}> = () => {
    const hook = useCreatePoll(); 
    return (
        <div>
            <h1>Création de Questionnaire</h1>
            <input 
                type="text" 
                value={ hook.form.pollTitle } 
                placeholder="Entrer le titre du sondage" 
                onChange={() => {}} 
            />
            <button
                disabled={ !hook.isSubmittable }
                onClick={hook.submitPoll}
            >Ajouter une question</button>
        </div>
    )
}