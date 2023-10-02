function loginf(){
    location.href="SUNWAY_THEME_PARK.html";
    alert("Welcome to Sunway Water Park Introduction and Ticket Booking! ");
}

function loginadmin(){
    location.href="Admin-homepage.html";
}

function signf()
{
    var yphonenum,ypassword,yemail;
    
    yphonenum=document.getElementById("ytel1").value;
    ypassword=document.getElementById("ypassword1").value;
    yemail=document.getElementById("yemail1").value;
    
    if(document.getElementById("cpassword1").value != ypassword)
    {
        alert("Confirm Password Incorrect");
    }
    if(document.getElementById("cpassword1").value == ypassword)
    {
        location.href="SignIn.html";
    }
     
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function Signout() {
    
    var result = confirm("Do yo need to sign out?");
		if(result == true)
		{
			 alert("You are logged out.");
            location.href="Landing_page.html";
		}
    
		else if(result == false)
		{
			 alert("You cancle to sign out.");
		}
    
}