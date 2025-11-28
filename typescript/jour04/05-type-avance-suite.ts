// Type literaux 

// créer des types en utilisant la syntaxe suivante

// template string ``
// Template Literal Type 

const a = 10 ;
const b = "euros"

const template_string = `j'ai payé ${a} ${b}`; // template string (forme de concaténation)

// exemple 

type Salutation = `Bonjour ${string}` // créer un type qui est un literal qui commence OBLIGATOIREMENT par le mot Bonjour 

const verificationEmail : Salutation = 'Bonjour .....' // le texte doit OBLIGATOIREMENT commencer par Bonjour 

const verificationSMS : Salutation = 'Hello .....' // le texte doit OBLIGATOIREMENT commencer par Bonjour 

type Taille = "sm" | "lg" | "bg" ;
type Balise = "btn" | "alert" ;

type BootstrapClass = `${Balise}-${Taille}`

// btn-sm
// btn-lg
// btn-bg
// alert-sm
// alert-lg
// alert-bg