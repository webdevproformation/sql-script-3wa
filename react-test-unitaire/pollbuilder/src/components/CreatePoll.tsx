import type React from "react"
import { useCreatePoll } from "../hook/hooks"
import { Question } from "./Question";


export const CreatePoll : React.FC<{}> = () => {
    const hook = useCreatePoll(); 
    return (
        <div className="bg-gray-50">
            <h1 className="text-3xl font-bold underline mb-4">Création de Questionnaire</h1>
            <input 
                type="text" 
                value={ hook.form.pollTitle } 
                placeholder="Entrer le titre du sondage" 
                onChange={( e ) => hook.updateTitle(e.target.value)} 
                className="bg-gray-100 border border-gray-300 rounded py-2 px-4 focus:outilne-none focus:ring-2 focus:ring-indigo-400"
            />
            
            
            {
                hook.form.questions.map(function(question){
                    return (
                        <div className="flex flex-col justify-center" key={question.id}>
                            <Question 
                                question={question}
                                onChange={hook.updateQuestion}
                                addAnswer={hook.addAnswerToQuestion}
                                removeAnswer={hook.removeAnswerFromQuestion}
                                updateAnswer={hook.updateAnswerFromQuestion}
                                removeQuestion={hook.removeQuestion}
                            />
                            
                        </div>
                    )
                })
            }
            <div className="my-4">
                <button
                    onClick={hook.addQuestion}
                    className="
                        bg-green-500  text-white font-bold py-2 px-2 rounded 
                        hover:bg-green-700
                        "
                >Ajouter une question</button>
            </div>

            <div className="my-4">
                <button
                    disabled={ !hook.isSubmittable }
                    onClick={hook.submitPoll}
                    className="
                        bg-blue-500  text-white font-bold py-2 px-2 rounded 
                        hover:bg-blue-700
                        "
                >Créer</button>
            </div>
        </div>
    )
}