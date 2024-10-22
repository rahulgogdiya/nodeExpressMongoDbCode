//1 method single export===========
function add(a,b) {
    return a+b;
}
module.exports = add

//2 method multiple export===========
// function add(a,b) {
//     return a+b;
// }
// function sub(a,b) {
//     return a-b;
// }
// module.exports = {
//     add,sub
// }

//add anonymous function================
exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;