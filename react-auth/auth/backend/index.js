const cookieSession = require("cookie-session")
const express = require("express")
const passport = require("passport")
const app = express()
const cors = require("cors")
const passportSetup = require("./passport")
const authRoute = require("./routes/auth")


app.use(cookieSession({
    name:"session",
    keys:["matos"],
    maxAge: 24 * 60 * 60 * 1000,
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

app.use("/auth", authRoute)


app.listen("5000", ()=>{
    console.log("Server is running!")
})