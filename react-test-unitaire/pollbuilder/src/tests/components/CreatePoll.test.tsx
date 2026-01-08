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


})