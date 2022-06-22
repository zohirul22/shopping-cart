function inputValue(product,price,isIncreasing) {
    const phoneInput = document.getElementById(product + "_input");
    let phoneValue = phoneInput.value;

    if(isIncreasing){
        phoneValue = parseInt(phoneValue) + 1;
    }else if(phoneValue > 1){
        phoneValue = parseInt(phoneValue) - 1;
    }
    phoneInput.value = phoneValue;

    const phonePrice = document.getElementById(product + "_price");
     phonePrice.innerText = phoneValue * price;
  
}

document.getElementById("phone_plus_btn").addEventListener("click" ,function(){
  
    inputValue("phone",1200 ,true)
})

document.getElementById('phone_minus_btn').addEventListener("click" ,function(){

inputValue("phone",1200 ,false)
})

document.getElementById("case_plus_btn").addEventListener("click" ,function(){
    inputValue("case",59 ,true)
})

document.getElementById("case_minus_btn").addEventListener("click" ,function(){
    inputValue("case", 59,false)
})



