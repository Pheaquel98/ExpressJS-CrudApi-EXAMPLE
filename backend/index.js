import express from "express"
import bodyParser from "body-parser"
import router from "./routes/users.js"

const app = express()
app.use(bodyParser.json())
const port = 4000

app.use("/users", router)

app.use("*", (req, res) => {
  res.status(404).send("Page not found!")
})

app.listen(port, () => {
  console.log(`server running on ${port}`)
})
