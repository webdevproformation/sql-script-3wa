import { Question } from "../../components/Question";
import { render , screen } from "@testing-library/react"

// render qui vont simuler le Virtual DOM de React
// screen 

describe("test component Question", function(){
    // exécuter notre composant Question
    // vérifier qu'il contient bien le texte Questionnaire

    const setup = () => {
        render(<Question 
        question={{ 
            title : "quel est votre langage préféré ?"
        }}/>)
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

})