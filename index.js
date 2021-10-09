'use strict';

const val_1=document.querySelector('.btn1');
const operator=document.querySelector('.btn2');
const val_2=document.querySelector('.btn3');
const equal=document.querySelector('.btn4');
const total=document.querySelector('.total');

function values(val){
    val.innerHTML='';
    let numv="";
    val.addEventListener('keydown', function(e){
        let temp=Number(e.key);
        if(temp || temp===0 || e.key==='-' || e.key==='.'){
            numv+=e.key;
            val.innerHTML=numv;
        }
        console.log(Number(val_1.innerHTML));
    })
}
val_1.addEventListener('click', ()=>values(val_1));

operator.addEventListener('click',function(){
    operator.innerHTML='';
    operator.addEventListener('keydown',function(e){
        operator.innerHTML=e.key;
    })
})

val_2.addEventListener('click', ()=>values(val_2));

equal.addEventListener('click', function(){
    if(operator.innerHTML==='+'){
        total.innerHTML=Number(val_1.innerHTML)+Number(val_2.innerHTML);
    }
    else if(operator.innerHTML==='-'){
        total.innerHTML=Number(val_1.innerHTML)-Number(val_2.innerHTML);
    }
    else if(operator.innerHTML==='/'){
        total.innerHTML=Number(val_1.innerHTML)/Number(val_2.innerHTML);
    }
    else if(operator.innerHTML==='*'){
        total.innerHTML=Number(val_1.innerHTML)*Number(val_2.innerHTML);
    }
    else{
        total.innerHTML="Invalid Operator 😢"
    }
})
