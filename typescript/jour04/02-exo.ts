type Article = {
    titre : string , 
    auteur : string 
    contenu : string , 
    date_creation : Date
    etat ?:boolean 
}

// Pick

type ArticleSynthese = Pick<Article, "titre" | "date_creation" >

// rendre facultatif contenu
// rendre obligatoire (readonly titre )
// rendre obligatoire (readonly etat )

type ArticleTraducteur = Partial<Pick<Article,"contenu">> & 
                         Readonly<Pick<Article, "titre" | "etat">> & 
                         Pick<Article , "auteur" | "date_creation">


type KeyArticleComplet = "article" | "categorie" | "etags";

type ValeurArticleComplet = Article | string | Array<string>

type ArticleComplet = Record<KeyArticleComplet , ValeurArticleComplet>

/* type ArticleComplet = {
    article : Article ,
    categorie : string ,
    etags : Array<string>
} */