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

    it("should remove a question when click on button remove question" , async function(){
        setup();

        // ajouter une question
        const btnAddQuestion = screen.getByRole("button", { name : "Ajouter une question"  })
        await userEvent.click(btnAddQuestion);
        await userEvent.click(btnAddQuestion);

        const removeButtons = screen.getAllByRole("button", { name : /Supprimer la question/i })
        await userEvent.click(removeButtons[0]);

        const questionInputs = screen.getAllByPlaceholderText("Saisir la question")

        expect(questionInputs).toHaveLength(1)
    })


    it("should remove an answer when click on button remove answer", async function(){
        setup();

        const btnAddQuestion = screen.getByRole("button", { name : "Ajouter une question"  })
        await userEvent.click(btnAddQuestion);

        // ajouter 2 réponses 
        const btnAddAnswser = screen.getByRole("button", {name : "Ajouter une réponse" })
        await userEvent.click(btnAddAnswser);
        await userEvent.click(btnAddAnswser);

        // supprimer la première réponse

        const removeButtons = screen.getAllByRole("button" , {name : /Supprimer la réponse/i })
        await userEvent.click(removeButtons[0]);

        // verifier que l'on a qu'un seul input pour répondre
        const answerInputs = screen.getAllByPlaceholderText("Réponse possible")
        expect(answerInputs).toHaveLength(1)

    });

    it("should update title of poll", async function(){
        setup();

        const input = screen.getByPlaceholderText("Entrer le titre du sondage");

        await userEvent.clear(input);

        await userEvent.type(input , "Nouveau Sondage")

        expect(input).toHaveValue("Nouveau Sondage")
    })


    it("should input an answser", async function(){
        setup();

        const btnAddQuestion = screen.getByRole("button", { name : "Ajouter une question"  })
        await userEvent.click(btnAddQuestion);

        // on ajoute ensuite une réponse à la question
        const addAnswerButton = screen.getByRole('button', { name: 'Ajouter une réponse' });
        await userEvent.click(addAnswerButton);

        const input = screen.getByPlaceholderText('Réponse possible');
        await userEvent.clear(input);
        await userEvent.type(input, "New Answer");

        expect(input).toHaveValue("New Answer")
    })

    it("should enable submit button when all requirements are met", async () => {
    setup();

        // Titre du sondage
        const pollTitleInput = screen.getByPlaceholderText('Entrer le titre du sondage');
        await userEvent.clear(pollTitleInput);
        await userEvent.type(pollTitleInput, "Titre sondage");

        // Ajouter la première question
        const addQuestionButton = screen.getByRole('button', { name: 'Ajouter une question' });
        await userEvent.click(addQuestionButton);
        // Ajouter la deuxième question
        await userEvent.click(addQuestionButton);

        // Récupérer les inputs de questions
        const questionInputs = screen.getAllByPlaceholderText('Saisir la question');

        // Remplir les deux titres de question
        await userEvent.clear(questionInputs[0]);
        await userEvent.type(questionInputs[0], "Question 1");

        await userEvent.clear(questionInputs[1]);
        await userEvent.type(questionInputs[1], "Question 2");

        // Pour chaque question, on ajoute deux réponses et on les remplit
        const addAnswerButtons = screen.getAllByRole('button', { name: 'Ajouter une réponse' });

        for (let i = 0; i < 2; i++) {
            await userEvent.click(addAnswerButtons[i]); // réponse 1
            await userEvent.click(addAnswerButtons[i]); // réponse 2

            const answerInputs = screen.getAllByPlaceholderText('Réponse possible')
                .slice(i * 2, i * 2 + 2); // 2 réponses par question

            await userEvent.clear(answerInputs[0]);
            await userEvent.type(answerInputs[0], `Réponse 1 pour Q${i + 1}`);

            await userEvent.clear(answerInputs[1]);
            await userEvent.type(answerInputs[1], `Réponse 2 pour Q${i + 1}`);
        }

        // On vérifie que le bouton Créer est activé
        expect(screen.getByRole('button', { name: 'Créer' })).toBeEnabled();
});


})