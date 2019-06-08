import sumator from "./sumator";


describe ('sumator()', () => {


    it.each([
        ["I","I","II"],
        ["II","V","VII"],
        ["VIII", "XXXI","XXXIX"],
        ["X","X","XX"]
    ])
        ('sum %d and %d to %d', (a, b, c) =>{
        expect(sumator(a,b)).toEqual(c)
    });

});