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

const existingUser = [{'email':'abc@gmail.com','password':'123'},{'email':'xyz@gmail.com','password':'abc'},{'email':'mohan@gmail.com','password':'mohan'}];

function signinCall()
{
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
        else
        {
            validation = newSignin(email,password);
            break;
        }
    }
    if(validation)
    {
        alert("Welcome user");
        window.location.href="./weatherAppWork/indexWork.html"
    }
    else
    {
        alert("Invalid User")
    }
    document.getElementById("formOne").reset();
    return false;
}
function newSignin(email,password)
{
    var object = localStorage.getItem('UserEntries');
    var finalObject = JSON.parse(object);
    const newEmail = finalObject.Email;
    const newPass = finalObject.Password;
    if(newEmail == email && newPass == password)
    {
        return true;
    }
    else
    {
        return false;
    }
}


function signupCall()
{
    let userDetails = {};
    var name = document.getElementById("nameTwo").value;
    var email = document.getElementById("emailTwo").value;
    var password = document.getElementById("passwordTwo").value;
    userDetails["Name"] = name;
    userDetails["Email"] = email;
    userDetails["Password"] = password;
    console.log(userDetails);
    document.getElementById('formTwo').reset();
    // console.log(newSignUp(email));

    if (newSignUp(email)) {
        alert("Email already exists. Please use a different email address.");
        return false; // Prevent further execution
    }
    document.getElementById('formTwo').reset();
    setLocal(name, email, password);
    alert("Hello User, you signed up successfully!");
    callSecond();
    return false;
}

function newSignUp(inpEmail)
{   
    for (let user of existingUser) {
        if (user.email === inpEmail) {
            return true; // Email exists
        }
    }
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
function setLocal(name,email,password)
{
    var userDetails = {}
    userDetails["Name"] = name;
    userDetails["Email"] = email;
    userDetails["Password"] = password;
    var userCollections = JSON.stringify(userDetails);
    localStorage.setItem('UserEntries',userCollections);
}

// document.addEventListener('DOMContentLoaded',clearStorage);
// function clearStorage()
// {
//     localStorage.removeItem("UserEntries");
// }