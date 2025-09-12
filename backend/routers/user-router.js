import { Router } from "express"
import {UserController} from "../controllers/user-controller.js";
import {JsonUserModel} from "../models/user-model.js";

const userRouter = Router()


// user routes
const userService = new JsonUserModel();        
const userController = new UserController(userService);  
userRouter.get('/', (req, res) => userController.getAllUsers(req, res));
userRouter.get('/:id', (req, res) => userController.getUserById(req, res));
userRouter.get('/email/:email', (req, res) => userController.getUserByEmail(req, res));
userRouter.post('/', (req, res) => userController.createUser(req, res));
userRouter.put('/:id', (req, res) => userController.updateUser(req, res));
userRouter.delete('/:id', (req, res) => userController.deleteUser(req, res));

export default userRouter