// tableau qui contiennent des objets

type TCoordonnee = {
    x : number ,
    y : number
}

const tableau : Array<TCoordonnee> = [ // syntaxe 1
    { x : 1 , y : 2 },
    { x : 2 , y : 3  }
]

const tableau2 : TCoordonnee[] = [ // syntaxe 2
    { x : 1 , y : 2 },
    { x : 2 , y : 3  }
]

// créer des types en utilisant une combinaire de type 
type ITblCoordonnees = Array<TCoordonnee> ;  // type spécial tableau de coordonnées 


const tableau3 : ITblCoordonnees = [
    { x : 1 , y : 2 },
    { x : 2 , y : 3  }
]