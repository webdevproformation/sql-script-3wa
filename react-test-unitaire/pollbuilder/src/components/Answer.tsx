import type React from "react"

// rappel Typescript (React.FC<{}>) type générique

export const Answer : React.FC<{
    title : string,
    onRemove : (e : React.FormEvent<HTMLButtonElement>) => void
}> = ({ title , onRemove }) => {
    return (
        <div>
            <input 
                value={title} 
                onChange={() => {}} 
                placeholder="Réponse possible"
            />
            {/** https://emojipedia.org/cross-mark */}
            <button onClick= {onRemove} aria-label="Supprimer la réponse">❌</button>
        </div>
    )
} 