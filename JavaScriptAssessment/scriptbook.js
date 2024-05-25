function ValidateBookName() {
    var bookname = document.getElementById("bookid");
    if (bookname.value.trim() != "") {
        bookname.style.border = "5px solid green";
        document.getElementById("booknamespan").innerHTML = "Valid";
        document.getElementById("booknamespan").style.visibility = "visible";
        document.getElementById("booknamespan").style.color = "green";
        true;
    }
    else {
        bookname.style.border = "5px solid red";
        document.getElementById("booknamespan").innerHTML = "InValid";
        document.getElementById("booknamespan").style.visibility = "visible";
        document.getElementById("booknamespan").style.color = "red";
        return false;
    }
}

function ValidateRackNumber() {
    var racknumber = document.getElementById("rackid");
    var regex = /\d/;
    if (regex.test(racknumber.value)) {
        racknumber.style.border = "5px solid green";
        document.getElementById("racknospan").innerHTML = "Valid";
        document.getElementById("racknospan").style.visibility = "visible";
        document.getElementById("racknospan").style.color = "green";
        true;
    }
    else {
        racknumber.style.border = "5px solid red";
        document.getElementById("racknospan").innerHTML = "InValid";
        document.getElementById("racknospan").style.visibility = "visible";
        document.getElementById("racknospan").style.color = "red";
        return false;
    }
}

function ValidateAuthorName() {
    var authorname = document.getElementById("authornameid");
    if (authorname.value.trim() != "") {
        authorname.style.border = "5px solid green";
        document.getElementById("authornamespan").innerHTML = "Valid";
        document.getElementById("authornamespan").style.visibility = "visible";
        document.getElementById("authornamespan").style.color = "green";
        true;
    }
    else {
        authorname.style.border = "5px solid red";
        document.getElementById("authornamespan").innerHTML = "InValid";
        document.getElementById("authornamespan").style.visibility = "visible";
        document.getElementById("authornamespan").style.color = "red";
        return false;
    }
}

function ValidatePublisherYear() {
    var pubyear = document.getElementById("pubyearid");
    var regex = /\d{4}/;
    if (regex.test(pubyear.value)) {
        pubyear.style.border = "5px solid green";
        document.getElementById("pubyearspan").innerHTML = "Valid";
        document.getElementById("pubyearspan").style.visibility = "visible";
        document.getElementById("pubyearspan").style.color = "green";
        true;
    }
    else {
        pubyear.style.border = "5px solid red";
        document.getElementById("pubyearspan").innerHTML = "InValid";
        document.getElementById("pubyearspan").style.visibility = "visible";
        document.getElementById("pubyearspan").style.color = "red";
        return false;
    }
}

function ValidatePublisherName() {
    var pubname = document.getElementById("pubnameid");
    if (pubname.value.trim() != "") {
        pubname.style.border = "5px solid green";
        document.getElementById("pubnamespan").innerHTML = "Valid";
        document.getElementById("pubnamespan").style.visibility = "visible";
        document.getElementById("pubnamespan").style.color = "green";
        true;
    }
    else {
        pubname.style.border = "5px solid red";
        document.getElementById("pubnamespan").innerHTML = "InValid";
        document.getElementById("pubnamespan").style.visibility = "visible";
        document.getElementById("pubnamespan").style.color = "red";
        return false;
    }
}

function ValidateAuthorEmail() {
    var authmail = document.getElementById("authormailid");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(authmail.value)) {
        authmail.style.border = "5px solid green";
        document.getElementById("authormailspan").innerHTML = "Valid";
        document.getElementById("authormailspan").style.visibility = "visible";
        document.getElementById("authormailspan").style.color = "green";
        true;
    }
    else {
        authmail.style.border = "5px solid red";
        document.getElementById("authormailspan").innerHTML = "InValid";
        document.getElementById("authormailspan").style.visibility = "visible";
        document.getElementById("authormailspan").style.color = "red";
        return false;
    }
}

function ValidatePhoneNumber() {
    var phnumber = document.getElementById("phonenumid");
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

function ValidateISBN() {
    var isbnnum = document.getElementById("isbnnumid");
    var regex = /(ISBN-)(\d{5})/;
    if (regex.test(isbnnum.value)) {
        isbnnum.style.border = "5px solid green";
        document.getElementById("isbnnumspan").innerHTML = "Valid";
        document.getElementById("isbnnumspan").style.visibility = "visible";
        document.getElementById("isbnnumspan").style.color = "green";
        true;
    }
    else {
        isbnnum.style.border = "5px solid red";
        document.getElementById("isbnnumspan").innerHTML = "InValid";
        document.getElementById("isbnnumspan").style.visibility = "visible";
        document.getElementById("isbnnumspan").style.color = "red";
        return false;
    }
}

function ButtonClick(event) {
    event.preventDefault();

    document.getElementById("bookform").style.display = "none";
    document.getElementById("bookdatadisplay").style.display = "block";

    var bookname = document.getElementById("bookid").value;

    var deptname = document.getElementById("deptnameid").value;

    var racknum = document.getElementById("rackid").value;

    var authhname = document.getElementById("authornameid").value;

    var publiyear = document.getElementById("pubyearid").value;

    var publiname = document.getElementById("pubnameid").value;

    var authormail = document.getElementById("authormailid").value;

    var phonenum = document.getElementById("phonenumid").value;

    var addresss = document.getElementById("address11id").value;

    var pincodee = document.getElementById("pincodeid").value;

    var isbnnumberr = document.getElementById("isbnnumid").value;

    var bookphoto = document.getElementById("bookpicid");
    

    document.getElementById("booknameid1").innerHTML = bookname;
    document.getElementById("deptid").innerHTML = deptname;
    document.getElementById("rackid1").innerHTML = racknum;
    document.getElementById("authid1").innerHTML = authhname;
    document.getElementById("pubyearid1").innerHTML = publiyear;
    document.getElementById("pubnameidd1").innerHTML = publiname;
    document.getElementById("authmailid1").innerHTML = authormail;
    document.getElementById("phonenumidd1").innerHTML = phonenum;
    document.getElementById("addressid").innerHTML = addresss;
    document.getElementById("pincodid1").innerHTML = pincodee;
    document.getElementById("isbnid").innerHTML = isbnnumberr;
    
    document.getElementById("bookpicid").innerHTML=bookphoto;
    const imgFile=bookphoto.files?.[0];
    const reader=new FileReader();
    reader.onload=function (event){
        const base64string=event.target?.result;

        bookphoto:[base64string];
        if(imgFile)
        {
            reader.readAsDataURL(imgFile);
        }
        
    }
}