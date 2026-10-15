function boloKobul(name,age,kobul){
    if(age>=20){
        console.log("Kobul");
    }
    else{
        console.log("not kobul");
    }
    return function(){
        console.log("shoshur na khush");
    }
}
let biye=boloKobul('sinthia',22,true);
biye();
function name(){
    return "Ajax"
}

