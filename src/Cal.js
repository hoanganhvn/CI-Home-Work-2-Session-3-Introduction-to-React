
function Cal() {
    let a = prompt("Nhập vào số A : ");
    let b = prompt("Nhập vào số B : ");
    let c = prompt("Nhập vào phép tính : ");
    // let d = alert("Kết quả là: " + e);

    switch (c) {
        case "+":
            alert("Kết quả là : " + (parseInt(a) + parseInt(b)));
            break;
        case "-":
            alert("Kết quả là : " + (parseInt(a) - parseInt(b)));
            break;
        case "*":
            alert("Kết quả là : " + (parseInt(a) * parseInt(b)));
            break;
        case "/":
            alert("Kết quả là : " + (parseInt(a) / parseInt(b)));
            break;
        default:
            break;
    }
}

export default Cal;
