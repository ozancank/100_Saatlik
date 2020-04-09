var users = [
    { username: "a", password: "1" },
    { username: "b", password: "2" }
]

var twits = [
    { username: "a", twit: "t1" },
    { username: "b", twit: "t2" },
    { username: "a", twit: "t3" }
]

var uname = prompt("username");
var pass = prompt("password");

function kullaniciVarmi(username, password) {
    console.log(uname);
    console.log(pass);
    for (i = 0; i < users.length; i++) {
        if (users[i].username == uname && users[i].password == pass) {
            return true;
        }
    }
    return false;
}

function giris() {
    if (kullaniciVarmi(uname, pass)) {
        console.log(twits)
    } else {
        console.log("Username or password is wrong.");
    }
}

giris();