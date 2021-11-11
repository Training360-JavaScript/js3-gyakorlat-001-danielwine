
const removeDuplicatesFromArray = (array) => {
    return array
        .filter((item, pos, arr) => arr.indexOf(item) === pos);
}

export default removeDuplicatesFromArray
