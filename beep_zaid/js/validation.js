console.log("Conencted..hey gs.")


var min, max;
function get_min(input){
    console.log(input.value)
    min = input.value
    if(min<0)
    alert("Min value cannot be negative")
  }


function get_max(input){
    console.log(input.value);
    max = input.value;

    if(max<0){    alert("Max value cannot be negative")}

    if(max <= min)
    alert("Enter max greater than min")
}

