import type React from "react"

// rappel Typescript (React.FC<{}>) type générique

export const Answer : React.FC<{
    title : string,
    onRemove : (e : React.FormEvent<HTMLButtonElement>) => void,
    onChange : (title : string) => void
}> = ({ title , onRemove , onChange }) => {
    return (
        <div className="my-1">
            <input 
                className="bg-gray-100 border border-gray-300 rounded py-2 px-4 focus:outilne-none focus:ring-2 focus:ring-indigo-400 me-2" 
                value={title} 
                onChange={(e) => onChange( e.target.value ) } 
                placeholder="Réponse possible"
            />
            {/** https://emojipedia.org/cross-mark */}
            <button onClick= {onRemove} aria-label="Supprimer la réponse">❌</button>
        </div>
    )
} 

// <Anwser title="reponse 1" onChange={() => { addCommentaireMock("1") }} onRemove={() => {} }  />