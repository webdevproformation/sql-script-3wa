// permet de créer un scénario de test 
// stocker dedans PLUSIEURS tests
describe("mon premier test" , function(){
    // voici notre premier test
    it('should work if 1 = 1', function(){

        // assertion
        const valeurRecuperer = 1 ; 
        const valeurAttendue = 1 ;
        expect(valeurRecuperer).toBe(valeurAttendue);
    })

})