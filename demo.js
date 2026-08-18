function sum (a=0, b=0){
    return a + b;
}
// export default sum;

const add = (...num) => {
    // const sum = num.reduce((acc, curr) => acc + curr, 0 );

    let sum = 0;
    for (let i of num) 
        {
            sum += i;
        }
    return sum;
}
export {sum, add};
// export default add;