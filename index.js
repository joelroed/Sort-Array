const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = [-10, 2000, 10, 25]

function arrOrder(a, b) {
    return b - a;
}

function arrOrder2(a, b) {
    return a - b;
}

arr1.join();
arr1.sort(arrOrder);
console.log(arr1);

arr2.join()
arr2.sort(arrOrder2);
console.log(arr2);