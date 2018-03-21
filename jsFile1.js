function exam()
{
  var a = document.getElementById("txt1").value;
  var b = document.getElementById("txt2").value;
  var c = document.getElementById("txt3").value;
  var d = document.getElementById("txt4").value;

  if((a == "")||(b == "")||(c == "")||(d == ""))
     {
       alert("Please input all details.");
     }
    else {

        var ak = confirm("Confirm your details below\n" + "FirstName is " + a + "\n" + "LastName is " + b + "\nEmail Id is " + c  + "\n"  + "Contact Number is " + d);
        if(ak == true)
        {
          alert("WELCOME "+ a  +" "+ b  +", you are our member now.")
        }
        else {
             location.reload();
        }
    }
}


function call()
{
  alert("Sorry, but the particular link is temporary out ot service.")
}
