import { multiply , applyDiscount } from "../../utils/lib";

describe("test function multiply", function(){

    // je vais utiliser la fonction multiply
    // multiply(1,2) => 2

    it("shoud return 2 if 1 x 2", function(){
        const returnValue = multiply(1,2);
        const expectedValue = 2  ; 
        expect(returnValue).toBe(expectedValue); 
    })

    it("should throw if 'a' x 2", function(){
    
        expect(() => {  multiply("a",2)   }).toThrow(); 
    })

});

describe("test function applyDiscount" , function(){

    it("should return 0.8 if discount 20%", function(){

        const returnValue = applyDiscount(1 , 0.2);
        const expectedValue = 0.8 ;

        expect(returnValue).toBe(expectedValue); // assertion comparer une valeur à une autre 
                                                 // affirmer que applyDiscount(1 , 0.2) retourne 0.8
    })

    it('should throw error if discount < 0', function(){

        /**
         * ne pas faire ça pour une fonction qui déclenche une erreur b
         * ;
         * expect( applyDiscount(1 , -1 )).toBe(expectedValue); 
         */
        expect( () => { applyDiscount(1 , -1 )  }).toThrow(); 
    })

    it('should throw error if discount > 1', function(){
        expect( () => { applyDiscount(1 , 2 )  }).toThrow(); 
    })

})