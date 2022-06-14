const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = [-10, 2000, 10, 25]

function arrOrder(a, b) {
    return b - a;
}

arr1.join();
arr1.sort(arrOrder);
console.log(arr1);