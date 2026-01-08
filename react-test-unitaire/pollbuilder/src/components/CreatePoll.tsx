import type React from "react"
import { useCreatePoll } from "../hook/hooks"


export const CreatePoll :React.FC<{}> = () => {
    const hook = useCreatePoll(); 
    return <></>
}