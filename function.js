function getter(id)
{
    return document.getElementById(id);
}

function callFirst()
{
    let secOne = getter("sectionOne");
    let secTwo = getter("sectionTwo");
    secOne.style.display='none';
    secTwo.style.display='flex';
}
function callSecond()
{
    let secOne = getter("sectionOne");
    let secTwo = getter("sectionTwo");
    secOne.style.display='flex';
    secTwo.style.display='none';
}

function signinCall()
{
    const existingUser = [{'email':'abc@gmail.com','password':'123'},{'email':'xyz@gmail.com','password':'abc'},{'email':'mohan@gmail.com','password':'mohan'}];
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let validation = false;
    for(let x of existingUser)
    {
        if(x.email === email && x.password === password)
        {
            validation = true;
            break;
        }
    }
    if(validation)
    {
        alert("Welcome user");
        window.location.href="./weatherAppWork/indexWork.html"
        setLocal(email,password);
    }
    else
    {
        alert("Invalid User")
    }
    document.getElementById("formOne").reset();
    return false;
}

function signupCall()
{
    // event.preventDefault();
    let userDetails = {};
    var name = document.getElementById("nameTwo").value;
    var email = document.getElementById("emailTwo").value;
    var password = document.getElementById("passwordTwo").value;
    userDetails["Name"] = name;
    userDetails["Email"] = email;
    userDetails["Password"] = password;
    console.log(userDetails);
    document.getElementById('formTwo').reset();
    alert("Hello User you signed up sucessfully!");
    window.location.href="./weatherAppWork/indexWork.html";
    return false;
}

function setLocal(email,password)
{
    var userDetails = {}
    userDetails["Email"] = email;
    userDetails["Password"] = password;
    var userCollections = JSON.stringify(userDetails);
    localStorage.setItem('UserEntries',userCollections);
}