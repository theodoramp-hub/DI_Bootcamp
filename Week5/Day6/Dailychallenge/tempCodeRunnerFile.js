"use strict";
function validateUnionType(value, allowedTypes) {
    for (const allowedType of allowedTypes) {
        if (typeof value === allowedType) {
            return true;
        }
    }
    return false;
}
console.log(validateUnionType(46, ["string", "number"]));
