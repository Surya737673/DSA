// brute force
function bestTimeToBuyStocks(arr) {
    let diff = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            diff = Math.max(diff, (arr[j] - arr[i]))
        }
    }
    return diff;
}

let arr = [7, 1, 5, 3, 6, 4];
// console.log(bestTimeToBuyStocks(arr));

// sliding window
console.log(maxProfit(arr));

function maxProfit(arr) {
    let l = 0;
    let r = 0;
    let profit = 0;

    while (r < arr.length) {
        if (arr[l] > arr[r]) {
            l = r;
        } else {
            profit = Math.max(profit, arr[r] - arr[l])
        };
        r++;
    }
    return profit;
};

