import { render , screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CreatePoll } from "../../components/CreatePoll"

// npm run test -- src/tests/components/CreatePoll.test.tsx

describe("test component CreatePoll", function(){

    function setup()
    {
        render(<CreatePoll />)
    }

    it("should contain title", function(){
        setup();
        const title = screen.getByText("Création de Questionnaire")
        expect(title).toBeInTheDocument();
    })

    it("should contain input to add title of Poll" , function(){
        setup();
        const input = screen.getByPlaceholderText("Entrer le titre du sondage")
        expect(input).toBeInTheDocument();
    })

    it("should contain button add a Question" , function(){
        setup();
        const btn = screen.getByRole("button" , { name : "Ajouter une question" })
        expect(btn).toBeInTheDocument();
    })

    it("should contain btn add a Question disabled", function(){
        setup();
        const btn = screen.getByRole("button" , { name : "Ajouter une question" })
        expect(btn).toBeDisabled()
    })


})