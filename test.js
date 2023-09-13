let firstname = document.querySelector("#fname");
let lastname = document.querySelector("#lname");
let email = document.querySelector("#email");

let adduser = document.querySelector("#userbutton");

let alluser = document.querySelector("#allusertable")


adduser.addEventListener("click",()=>{
    let name = firstname.value;
    let last = lastname.value;
    let emailid = email.value;
    console.log(name)
    console.log(last)
    console.log(emailid)

    let row = document.createElement("tr");
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")

    td1.innerText=name
    td2.innerText=last
    td3.innerText=emailid

    alluser.appendChild(row);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    console.log(typeof row)

 
})



