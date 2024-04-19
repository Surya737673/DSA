function groupAnagrams(strs) {
    let obj = {};
    let res = [];
    for (let str of strs) {
        let sortedStr = str.split('').sort().join("");
        if (obj[sortedStr] == undefined) {
            obj[sortedStr] = [];
        }
        obj[sortedStr].push(str);
    }

    for (let key in obj) {
        res.push(obj[key]);
    }

    return res;
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));