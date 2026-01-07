import type React from "react"

// rappel Typescript (React.FC<{}>) type générique

export const Answer : React.FC<{
    title : string
}> = ({ title }) => {
    return (
        <div>
            <input 
                value={title} 
                onChange={() => {}} 
                placeholder="Réponse possible"
            />
        </div>
    )
} 