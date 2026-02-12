const express = require('express');
const app = express();
app.use(express.json());
const credentials = [
    { email: "aman@gmail.com", password: "234" },
    { email: "yash@gmail.com", password: "123" },
];

app.post("/auth/register", async (req, res) => {
const data = req.body;

//check if user already exists
const existingUser = credentials.find((cred) => cred.email == data.email);
const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const mail = `${"@"}, ${"."}`

if(!regex.test(data.password)){
    return res.send("password requirement not matching!");
}
if(!regex.test(data.password) && !mail.test(data.mail)){
    return res.send("password and email not validate");
}
 if(!mail.test(data.email)){
    return res.send("email validation not matching");
}
else if (existingUser) {
    return res.status(400).send("User Already Exist ");
}
credentials.push(data);

res.send("Registered Successful");
});

app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
    const user = credentials.find(
    (cred) => cred.email == email && cred.password == password,
);
console.log(user);
if (user) {
    res.send({ message: "Login Successful", user });
} else {
    res.send("Invalid Credential");
}
});
app.listen(8000, () => console.log("Server Started"));