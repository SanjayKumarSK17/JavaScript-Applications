function ValidateUserFName() {
    var fname = document.getElementById("firstnameid");
    if (fname.value.trim() != "") {
        fname.style.border = "5px solid green";
        document.getElementById("namespan").innerHTML = "Valid";
        document.getElementById("namespan").style.visibility = "visible";
        document.getElementById("namespan").style.color = "green";
        true;
    }
    else {
        fname.style.border = "5px solid red";
        document.getElementById("namespan").innerHTML = "InValid";
        document.getElementById("namespan").style.visibility = "visible";
        document.getElementById("namespan").style.color = "red";
        return false;
    }
}

function ValidateUserLName() {
    var fname = document.getElementById("lastnameid");
    if (fname.value.trim() != "") {
        fname.style.border = "5px solid green";
        document.getElementById("namespan").innerHTML = "Valid";
        document.getElementById("namespan").style.visibility = "visible";
        document.getElementById("namespan").style.color = "green";
        true;
    }
    else {
        fname.style.border = "5px solid red";
        document.getElementById("namespan").innerHTML = "InValid";
        document.getElementById("namespan").style.visibility = "visible";
        document.getElementById("namespan").style.color = "red";
        return false;
    }
}

function ValidateUserEmail() {
    var usermail = document.getElementById("emailid");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(usermail.value)) {
        usermail.style.border = "5px solid green";
        document.getElementById("emailspan").innerHTML = "Valid";
        document.getElementById("emailspan").style.visibility = "visible";
        document.getElementById("emailspan").style.color = "green";
        true;
    }
    else {
        usermail.style.border = "5px solid red";
        document.getElementById("emailspan").innerHTML = "InValid";
        document.getElementById("emailspan").style.visibility = "visible";
        document.getElementById("emailspan").style.color = "red";
        return false;
    }
}

function ValidatePhoneNumber() {
    var phnumber = document.getElementById("phonenumberid");
    var regex = /[7-9]\d{9}/;
    if (regex.test(phnumber.value)) {
        phnumber.style.border = "5px solid green";
        document.getElementById("phonenumspan").innerHTML = "Valid";
        document.getElementById("phonenumspan").style.visibility = "visible";
        document.getElementById("phonenumspan").style.color = "green";
        true;
    }
    else {
        phnumber.style.border = "5px solid red";
        document.getElementById("phonenumspan").innerHTML = "InValid";
        document.getElementById("phonenumspan").style.visibility = "visible";
        document.getElementById("phonenumspan").style.color = "red";
        return false;
    }
}

function ValidatePincode() {
    var pinco = document.getElementById("pincodeid");
    var regex = /[6]\d{5}/;
    if (regex.test(pinco.value)) {
        pinco.style.border = "5px solid green";
        document.getElementById("pincodespan").innerHTML = "Valid";
        document.getElementById("pincodespan").style.visibility = "visible";
        document.getElementById("pincodespan").style.color = "green";
        true;
    }
    else {
        pinco.style.border = "5px solid red";
        document.getElementById("pincodespan").innerHTML = "InValid";
        document.getElementById("pincodespan").style.visibility = "visible";
        document.getElementById("pincodespan").style.color = "red";
        return false;
    }
}

function CopyAddress()
{
    var presentadd = document.getElementById("presentaddressid").value;
    if(document.getElementById("copyaboveadd").checked==true)
        {
            document.getElementById("permanentaddressid").innerHTML = presentadd;
        }
}

function ButtonCli(event) {
    event.preventDefault();

    document.getElementById("userform").style.display = "none";
    document.getElementById("userdatadisplay").style.display = "block";

    var username=document.getElementById("firstnameid").value;

    var email = document.getElementById("emailid").value;

    var phonenumm = document.getElementById("phonenumberid").value;

    var presentadd = document.getElementById("presentaddressid").value;

    var permenadd = document.getElementById("permanentaddressid").value;

    var pincodde = document.getElementById("pincodeid").value;

    var genderr = document.getElementById("genderid").value;

    var deptnammee = document.getElementById("deptnameid").value;

   

    document.getElementById("username1").innerHTML = username;
    document.getElementById("emailid1").innerHTML = email;
    document.getElementById("phoneid1").innerHTML = phonenumm;
    document.getElementById("presentaddress111").innerHTML = presentadd;
    document.getElementById("permaddress111").innerHTML = permenadd;
    document.getElementById("pincodee1").innerHTML = pincodde;
    document.getElementById("genid11").innerHTML = genderr;
    document.getElementById("deptid11").innerHTML = deptnammee;
    
}