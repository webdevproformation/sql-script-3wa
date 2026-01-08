import type React from "react"
import { useCreatePoll } from "../hook/hooks"


export const CreatePoll : React.FC<{}> = () => {
    const hook = useCreatePoll(); 
    return (
        <div>
            <h1 className="text-3xl font-bold underline mb-4">Création de Questionnaire</h1>
            <input 
                type="text" 
                value={ hook.form.pollTitle } 
                placeholder="Entrer le titre du sondage" 
                onChange={() => {}} 
                className="bg-gray-100 border border-gray-300 rounded py-2 px-4 focus:outilne-none focus:ring-2 focus:ring-indigo-400"
            />
            <div className="my-4">
                <button
                    disabled={ !hook.isSubmittable }
                    onClick={hook.submitPoll}
                    className="
                        bg-green-500  text-white font-bold py-2 px-2 rounded 
                        hover:bg-green-700
                        "
                >Ajouter une question</button>
            </div>
            
        </div>
    )
}