import toRoman from "./toRoman";


describe ('toRoman()', () => {


    it.each([
        [1,"I"],
        [5,"V"],
        [9,"IX"],
        [10,"X"],
        [11,"XI"],
        [39,"XXXIX"],
        [40,"XL"],
        [41,"XLI"],
        [99,"XCIX"],
        [399,"CCCXCIX"],
        [499,"CDXCIX"]
    ])
        ('converts %d to %s', (arabic, romanised) =>{
        expect(toRoman(arabic)).toEqual(romanised)
    });

    it('does not convert 0 to anything', () => {
        expect(toRoman(0)).toEqual("none")
    });

    it('does not support negative numbers', () => {
        expect(toRoman(-1)).toEqual("none")
    });

});