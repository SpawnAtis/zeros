module.exports = function getZerosCount(number) {
    let count=0;
    while(number){
        number = ~~(number / 5);
        count += number;
    }
    return count;
}
