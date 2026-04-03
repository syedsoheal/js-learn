/*function say_my_name(){
    console.log("s")
    console.log("o")
    console.log("h")
    console.log("e")
    console.log("a")
    console.log("l")
}
say_my_name()*/

/*function add_two_numbers(num1,num2){
    console.log(num1+num2);
}
add_two_numbers(3,a)*/
/*
function addTwoNum(num1,num2){
    return num1+num2
}
const result = addTwoNum(8,2)

console.log("result" , result);*/

function loginUserMessage(username){
    if(!username){
        console.log("please enter username")  
        return;    
  }
 {
        return username + "loged in"
    }

}
console.log(loginUserMessage(""))