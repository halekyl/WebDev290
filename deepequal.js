function deepEqual(thing1, thing2) {
    //if values are same
    if (thing1 === thing2) {
        return true; 
    }
    // Test if dealing with real object, if both arguments are objects, do a deep comparison
    else if ((typeof thing1 === "object" && thing1 !== null) && (typeof thing2 === "object" && thing2 !== null)) {
    // if both objects don't have the same number of properties
    if (Object.keys(thing1).length != Object.keys(thing2).length)
        return false;
    //iterate over properties and compare object's properties 
    // assign number of properties - num of times to iterate 
    let total_props = Object.keys(thing1)
    for (prop of total_props) {
        if (typeof thing1[prop] === "object" && typeof thing2[prop] === "object") {
            if (deepEqual(thing1[prop], thing2[prop]) === false) {
                return false;
            }
        } else if (thing1[prop] !== thing2[prop]) {
            return false;
        }
    }
    return true;
    } else {
        return false;
    }
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(null, obj));
// → false
console.log(deepEqual(obj, null));
// → false
console.log(deepEqual(null, null));
// → true