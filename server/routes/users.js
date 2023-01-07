import express from "express";
import { update, deleteUser, getUser, subscribe, unsubscribe, like, dislike,  } from "../controllers/user.js"

const router = express.Router();

router.put("/:id", update)

router.delete("/:id", deleteUser)

router.get("/find/:id", getUser)

router.put("/sub/:id", subscribe)

router.put("/ubsub/:id", unsubscribe)

router.put("/like/:videoId", like)

router.put("/unlike/:videoId", dislike)

export default router;