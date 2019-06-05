function toArabic(roman){
    const romanMap = {M:1000,CM:900,D:500,
                    CD:400,C:100,XC:90,
                    L:50,XL:40,X:10,IX:9,
                    V:5,IV:4,I:1};
    var arabic = 0, i;
    for ( i in romanMap ) {
        while (roman.indexOf(i) === 0){
            arabic += romanMap[i];
            roman = roman.replace(i,"");
        }
    }
    return arabic;    
}

export default toArabic


