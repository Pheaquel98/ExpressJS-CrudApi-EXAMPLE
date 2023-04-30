import express from "express"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())
const port = 4000

let users = [
  {
    id: 1,
    name: "Adem",
    email: "ozyetisadem@gmail.com",
    country: "Turkey",
    contact: "5555555555",
  },
  {
    id: 2,
    name: "Emin",
    email: "emin@gmail.com",
    country: "Turkey",
    contact: "5555555555",
  },
]

app.get("/users", (req, res) => {
  res.send(users)
})

app.get("/users/:id", (req, res) => {
  const id = req.params.id
  const user = users.find((u) => u.id === parseInt(id))
  if (!user) {
    res.status(400).send("User not found")
  }
  res.send(user)
})

app.post("/users", (req, res) => {
  const { name, email, country, contact } = req.body
  const user = {
    id: users.length + 1,
    name: name,
    email: email,
    country: country,
    contact: contact,
  }
  users.push(user)
  res.send("New user added")
})

app.delete("/users/:id", (req, res) => {
  const id = req.params.id
  const user = users.find((u) => u.id === parseInt(id))
  users = users.filter((u) => u.id !== parseInt(id))
  if (!user) {
    res.status(400).send("User not found")
  }

  res.send(users)
})

app.put("/users/:id", (req, res) => {
  const id = req.params.id
  const user = users.find((u) => u.id === parseInt(id))
  const { name, email, country, contact } = req.body
  if (!user) {
    res.status(400).send("User not found")
  }
  ;(user.name = name),
    (user.email = email),
    (user.country = country),
    (user.contact = contact)
  res.send(users)
})

app.listen(port, () => {
  console.log(`server running on ${port}`)
})
