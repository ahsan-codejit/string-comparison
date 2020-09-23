const isValidString = (string) => {
    if (!string) return false;
    if (typeof string !== 'string') return false;
    return true;
}

const hasSameLength = (s1, s2) => {
    if (s1.length === s2.length) return true;
    return false;
}

const areSameStrings = (s1, s2) => {
    if (s1 === s2) return true;
    return false;
}
/*
* Params: it takes two valid strings as params
* Return: 
*   it returns -1 if one or both of strings are invalid or
*   it returns 0 if both strings are same.
*   it returns count of repeatation of second string to make same as first string, 
*   otherwise it returns -1 if not possible.
*/

module.exports = (s1, s2) => {
    if (!isValidString(s1) || !isValidString(s2)) return -1;
    if (!hasSameLength(s1, s2)) return -1;
    if (areSameStrings(s1, s2)) return 0;

    let index = (s1 + s1).indexOf(s2);
    if (index < 0) return -1;
    return s2.length - index;
}
