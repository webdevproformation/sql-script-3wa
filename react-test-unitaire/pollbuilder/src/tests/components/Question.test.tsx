import { Question } from "../../components/Question";
import { render , screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PollModel } from "../../model/poll-model";

// render qui vont simuler le Virtual DOM de React
// screen 

describe("test component Question", function(){
    const onChange = jest.fn() ; // fonction va simuler l'utilisation de la onChange du Virtual DOM

    // exécuter notre composant Question
    // vérifier qu'il contient bien le texte Questionnaire

    // il nous manque le state => demain matin !! bonne soirée
    

    const question : PollModel.Question = {
        id : "1",
        title : "quel est votre langage préféré ?"
    }

    const setup = () => {
        render(<Question 
        question={question}
        onChange={ onChange  } 
        />)
    }

    it("should display texte send by a props" , function(){
        setup();
        // getByDisplayValue vient chercher une valeur dans un formulaire dans un champ 
        // input textarea
        const returnValue = screen.getByDisplayValue("quel est votre langage préféré ?")

        // assertion
        expect(returnValue).toBeInTheDocument()
    })

    it("should display a button" , function(){
        setup();
        // permet de récupérer les élements de types bouton
        const returnValue = screen.getByRole("button", {
            name : "Ajouter une réponse"
        })
        expect(returnValue).toBeInTheDocument()
    })

    it("should call onChange when input is modified", async function(){

        setup();
        // récupérer l'input 
        const input = screen.getByDisplayValue("quel est votre langage préféré ?")
        // vider de son contenu
        await userEvent.clear(input)
        await userEvent.type(input, "Quel est ton framework préféré")

        // notre fonction jest.fn() 
        // a été exécutée avec le paramètre "1" et le paramètre "Quel est ton framework préféré"

        expect(onChange).toHaveBeenCalledWith("1", "Quel est ton framework préféré")

    })

})