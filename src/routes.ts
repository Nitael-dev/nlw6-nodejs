import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController} from "./controllers/CreateTagController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();


router.post("/users", ensureAdmin, createUserController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/session", authenticateUserController.handle)
router.post("/compliments", createComplimentController.handle)

export { router }