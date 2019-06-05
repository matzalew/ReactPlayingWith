import toArabic from "./toArabic";

describe ('toArabic()', () => {


    it.each([
        ["I",1],
        ["V",5],
        ["IX",9],
        ["X",10],
        ["XI",11],
        ["XXXIX",39],
        ["XL",40],
        ["XLI",41],
        ["XCIX",99],
        ["CCCXCIX",399],
        ["CDXCIX",499]
    ])
        ('converts %s to %d', (romanised, arabic) =>{
        expect(toArabic(romanised)).toEqual(arabic)
    });
});