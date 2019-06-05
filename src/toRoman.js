function toRoman(arabic){
    const romanMap = {M:1000,CM:900,D:500,
                    CD:400,C:100,XC:90,
                    L:50,XL:40,X:10,IX:9,
                    V:5,IV:4,I:1};
    if (arabic <= 0) {
        roman="none"
    } else {
    var roman = '', i;
    for ( i in romanMap ) {
      while ( arabic >= romanMap[i] ) {
        roman += i;
        arabic -= romanMap[i];
      }
    }
}
    return roman;

}
export default toRoman


