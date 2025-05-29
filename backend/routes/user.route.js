import express from "express"
import protectRoute  from "../middleware/protectRoute.js";
import { getProfile , followUnfollowUser} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/profile/:username", protectRoute, getProfile)
router.post("/follow/:id", protectRoute, followUnfollowUser)

export default router;