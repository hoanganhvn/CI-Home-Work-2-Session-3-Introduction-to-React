
function Arr() {
    const arr = [1, 2, 3, 5, 8, 13, 21];

    const checkOddInArray = number => number % 2 === 0;
    const checkOdd = arr.filter(checkOddInArray);
    console.log(checkOdd);

    const check5InArray = number => number % 5 === 0;
    const check5 = arr.filter(check5InArray);
    console.log(check5);

    const checkBigger4InArray = number => number > 4;
    const checkBigger4 = arr.filter(checkBigger4InArray);
    console.log(checkBigger4);

    const totalCount = (total, num) => total + num;
    const totalArray = arr.reduce(totalCount);
    console.log(totalArray);
}

export default Arr;
