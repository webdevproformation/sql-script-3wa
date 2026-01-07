import type React from "react"

// rappel Typescript (React.FC<{}>) type générique

export const Answer : React.FC<{
    title : string,
    onRemove : (e : React.FormEvent<HTMLButtonElement>) => void,
    onChange : (title : string) => void
}> = ({ title , onRemove , onChange }) => {
    return (
        <div>
            <input 
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