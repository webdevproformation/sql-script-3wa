# le composant présentation Answer

Question
    input
    button  => clique sur le bouton 

Proposer des réponses possibles 
      Answer
        input
        button supprimer la réponse 
      Answer
        input
        button supprimer la réponse 
      Answer
        input
        button supprimer la réponse 


// Article
    
        titre
        contenu
        formulaire ajouter des commentaires
            input texte  
            button      

        Commentaires
        Commentaires
    
Qu'est ce que je dois tester ? 



```js



describe("test component Article", function(){

     const addCommentaireMock = jest.fn(); // exécuter la doublure 

    type PropArticle = {
        addCommentaire : () => void
        removeCommentaire : () => void,
        updateCommentaire : () => void 
        // CRUD 
    }


    const setup = (props ? : Partial<PropArticle>) => {

          render(<Article 
                addCommentaire = {  props?.addCommentaire ?? (() => {})  }
                removeCommentaire= {}
                updateCommentaire= {}
            />)
    }

    
    it("should contain title", function(){

        // exécuter le composant 
         setup()

        const title = screen.getByText("titre")

        // ASSERTION
        expect(title).toBeInDocument()

    })

    it("should contain input ", function(){
     // exécuter le composant 
         setup()

        const input = screen.getByDisplayValue("message")

        // ASSERTION
        expect(title).toBeInDocument()

    })


    it("should contain button", function(){
     // exécuter le composant 
         setup()

        const btn = screen.getByRole("button" , { name : "Ajouter commentaire" })

        // ASSERTION
        expect(btn).toBeInDocument()

    })

     it("should contain one comment", function(){
     // exécuter le composant 
         setup()

        const commentaire = screen.getByText(/premier commentaire/i)

        // ASSERTION
        expect(commentaire).toBeInDocument()

    })

     it("should add comment on form submit v1", async function(){
     // exécuter le composant 
         setup()
    
        const input = screen.getByDisplayValue("message")
        const btn = screen.getByRole("button" , { name : "Ajouter commentaire" })

        await userEvent.clear(input)
        await userEvent.type(input , "nouveau commentaire")

        await userEvent.click(btn)

        const commentaires = screen.getByPlaceholderText('commentaire')

        // ASSERTION
        expect(commentaires).toHaveLength(2)

    })

   

    it("should add comment on form submit v2", async function(){
     // exécuter le composant 
         setup({ addCommentaire : addCommentaireMock })
    
        const input = screen.getByDisplayValue("message")
        const btn = screen.getByRole("button" , { name : "Ajouter commentaire" })

        await userEvent.clear(input)
        await userEvent.type(input , "nouveau commentaire")

        await userEvent.click(btn)

        expect(addCommentaireMock).toHaveBeenCalledWith("nouveau commentaire")  
    })
})


```

scenario de test

    - est ce que il y a bien un titre dans Article ?
    - est ce que il y a bien un contenu dans Article ?
    - est ce que il y a bien un Formulaire qui contient input avec le champ input dans Article ?
    - est ce que il y a bien un Formulaire qui contient input avec le champ button dans Article ?
    - est ce que il y a bien un Formulaire qui contient un Commentaire dans Article ?
    - est ce que lorsque je remplis le formulaire et clique sur le button du formulaire Ajouter un nouveau Commentaire dans Article ? 
