// 乘法表
function multipleList() {
    for(let i = 3; i < 16; i++) {
        for(let j = 1; j < 16; j++){
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}
multipleList()

// BMI
function getBMI(height,weight) {
    let meterHeight = height / 100;
    let bmi = (weight / (meterHeight * meterHeight)).toFixed(1);
    console.log(bmi)
}
getBMI(184, 95)