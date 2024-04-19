// var topKFrequent = function(nums, k) {

//     const frequencyMap = new Map();
//     for (const num of nums) {
//         frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
//     }
    
//     const maxFrequency = Math.max(...frequencyMap.values());
//     const buckets = Array(maxFrequency + 1).fill().map(() => []);

//     for (const [num, frequency] of frequencyMap.entries()) {
//         buckets[frequency].push(num);
//     }
    
//     const result = [];
//     for (let i = maxFrequency; i >= 0 && result.length < k; i--) {
//         for (const num of buckets[i]) {
//             result.push(num);
//             if (result.length === k) break;
//         }
//     }
    
//     return result;
// };


// let arr = [4, 1, -1, 2, -1, 2, 3], k = 2;
// console.log(topKFrequentElements(arr, k));