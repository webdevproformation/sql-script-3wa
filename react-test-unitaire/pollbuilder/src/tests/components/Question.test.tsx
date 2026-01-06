import { Question } from "../../components/Question";
import { render , screen } from "@testing-library/react"

// render qui vont simuler le Virtual DOM de React
// screen 

describe("test component Question", function(){
    // exécuter notre composant Question
    // vérifier qu'il contient bien le texte Questionnaire

    const setup = () => {
        render(<Question />)
    }

    it("should display texte Questionnaire" , function(){

        setup();
        const returnValue = screen.getByDisplayValue("Questionnaire")

        // assertion
        expect(returnValue).toBeInTheDocument()

    })

})