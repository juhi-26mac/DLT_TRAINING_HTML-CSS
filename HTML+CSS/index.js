function myFunction()
{
  var x = document.getElementById("name");
  x.value = x.value.toUpperCase();
}
function displayDate()
{
    document.getElementById('contact-info').innerHTML=Date();
}

function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
function mOut(obj) {
    obj.innerHTML = "SUBMIT"
  }
