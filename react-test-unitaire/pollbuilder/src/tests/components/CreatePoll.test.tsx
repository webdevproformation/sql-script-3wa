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

    it("should contain btn Créer Poll disabled", function(){
        setup();
        const btn = screen.getByRole("button" , { name : "Créer" })
        expect(btn).toBeDisabled()
    })


    it("should add a question when click on button addQuestion" ,async function(){
        setup();

        const addButton = screen.getByRole("button" , {name : "Ajouter une question" })

        await userEvent.click(addButton)
        await userEvent.click(addButton)

        const questionInputs = screen.getAllByPlaceholderText("Saisir la question")

        expect(questionInputs).toHaveLength(2);

    });


    it("should add answer when click on add answer button" , async function(){
        setup();

        // ajouter une question
        const btnAddQuestion = screen.getByRole("button", { name : "Ajouter une question"  })
        await userEvent.click(btnAddQuestion);

        // ajouter 2 réponses 
        const btnAddAnswser = screen.getByRole("button", {name : "Ajouter une réponse" })
        await userEvent.click(btnAddAnswser);
        await userEvent.click(btnAddAnswser);

        const answerInputs = screen.getAllByPlaceholderText("Réponse possible");

        expect(answerInputs).toHaveLength(2);

    });


})