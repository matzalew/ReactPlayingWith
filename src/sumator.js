import toArabic from "./toArabic"
import toRoman from "./toRoman"

function sumator (a,b){
    var sum = toArabic(a)+toArabic(b)
    return toRoman(sum);
}

export default sumator;