function validateUnionType (value:any, allowedTypes:string []): boolean {
    for (const allowedType of allowedTypes) {
        if (typeof value === allowedType) {
            return true;
        }
    }
return false;
} 

console.log(validateUnionType(46, ["string","number"]))
console.log(validateUnionType("Hello", ["string","number"]))
console.log(validateUnionType(true, ["string","number"]))