import { Question } from "../../components/Question";
import { render , screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PollModel } from "../../model/poll-model";
import { useState } from "react"

// render qui vont simuler le Virtual DOM de React
// screen 

describe("test component Question", function(){

    type PropsQuestion = {
        questions : PollModel.Question ,
        onChange : (id : string , title : string) => void ,
        addAnswer : (id : string) => void 
    }


    const onChangeMock = jest.fn() ; // fonction va simuler l'utilisation de la onChange du Virtual DOM
    const addAnswerMock = jest.fn() ; 

    // exécuter notre composant Question
    // vérifier qu'il contient bien le texte Questionnaire
    
    const question : PollModel.Question = {
        id : "1",
        title : "quel est votre langage préféré ?",
        answers : [
            { id : "1" , title : "Typescript" },
            { id : "2" , title : "Javascript" }
        ]
    }
    
    // il nous manque le state => demain matin !! bonne soirée
    // Partial<T> type utilitaire de typescript 
    // https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
    const Wrapper = (props ?: Partial<PropsQuestion>) => {
        // garder un état entre chaque input de notre composant
        const [title, setTitle] = useState(question.title);
        const localQuestion = { ...question , title };
        return <Question 
            question= { localQuestion }
            onChange={( id, value ) => { 
                setTitle(value)
                onChangeMock(id, value)
            }}
            addAnswer={props?.addAnswer ?? (() => {})}
        />
    }
    const setup = (props ?: Partial<PropsQuestion>) => {
        render(<Wrapper {...props}/>)
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

        // onChange mocké doit avoir été exécutée avec 2 paramètres "1" et le texte "Quel est ton framework préféré"
        expect(onChangeMock).toHaveBeenCalledWith("1", "Quel est ton framework préféré")

    })

    it("should display all answers", function(){
        setup();
        // il y a un input qui contient la propriété value="Typescript"
        expect(screen.getByDisplayValue("Typescript")).toBeInTheDocument();
        expect(screen.getByDisplayValue("Javascript")).toBeInTheDocument();
        // il y a deux inputs qui ont l'attribut placeholder="Réponse possible"
        expect(screen.getAllByPlaceholderText("Réponse possible")).toHaveLength(2);
    });

    it("should add Anwser on click", async function(){

        setup({ addAnswer : addAnswerMock });
        // récupérer le bouton
        const btnAddAnswser = screen.getByRole("button" , { name : "Ajouter une réponse"})

        // cliquer dessus
        await userEvent.click(btnAddAnswser);
        expect(addAnswerMock).toHaveBeenCalledWith("1")

    });


})