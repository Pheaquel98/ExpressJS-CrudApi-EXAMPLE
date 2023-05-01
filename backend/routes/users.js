import express from "express"

import {
  getSingleUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js"

const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getSingleUser)
router.post("/", createUser)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)

export default router
