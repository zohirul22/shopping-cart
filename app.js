function inputValue(isIncreasing) {
    const phoneInput = document.getElementById("phone_input");
    let phoneValue = phoneInput.value;

    if(isIncreasing){
        phoneValue = parseInt(phoneValue) + 1;
    }else if(phoneValue > 1){
        phoneValue = parseInt(phoneValue) - 1;
    }
    phoneInput.value = phoneValue;

    const phonePrice = document.getElementById("phone_price");
     phonePrice.innerText = phoneValue * 1200;
  
   
}

document.getElementById("phone_plus_btn").addEventListener("click" ,function(){
    // console.log("shahin")
    // const phoneInput = document.getElementById("phone_input");
    // const phoneValue = phoneInput.value;
    // phoneInput.value = parseInt(phoneValue) + 1;
    inputValue(true)
})

document.getElementById('phone_minus_btn').addEventListener("click" ,function(){
//   const phoneInput = document.getElementById("phone_input")
//   const phoneValue = phoneInput.value;
//   phoneInput.value = parseInt(phoneValue) - 1;
inputValue(false)
})