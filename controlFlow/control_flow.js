let userRole = "admin";
let accessLevel;

if(userRole === "admin"){
    accessLevel ="Full access granted";
}else if(userRole === "manager"){
    accessLevel = "Limited access granted"
}else{
    accessLevel = "No access granted";
}

console.log("Access Level: ",accessLevel)

let isLoggedIn = true;
let usermessage;

if(isLoggedIn){
    if(userRole === "admin"){
        usermessage = "Welcome, Admin!"
    }else{
        usermessage ="Welcome, User!"
    }
}else{
    usermessage = "You need to login first"
}
console.log("User message: ", usermessage);

let userType= "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Adiministrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
    userCategory = "Unknown"
}

console.log("User Category: ", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated? "Authenticated": "Not authenticated";

console.log("Authentication status:", authenticationStatus);