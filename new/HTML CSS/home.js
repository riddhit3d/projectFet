$(document).ready(function() {
    if(sessionStorage.length>1)
    {
     $('#loginButton').hide();
     $('#signupButton').hide();
     $('#logoutButton').show();
     $('#questionLink').show();
    }
    if(sessionStorage.length==1)
    {
     $('#loginButton').show();
     $('#signupButton').show();
     $('#logoutButton').hide();
     $('#questionLink').hide();
    }
 });