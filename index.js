function receivesAFunction(call){
    return call()
}

function returnsANamedFunction(){
const arg = function (){

}
  return arg
}

function returnsAnAnonymousFunction(){
    return function (){}
}