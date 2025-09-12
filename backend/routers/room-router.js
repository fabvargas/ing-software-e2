import { Router } from "express"
import { RoomController } from "../controllers/room-controller.js"
import { JsonRoomModel } from "../models/room-model.js"

const roomRouter = Router()

// room routes
const roomService = new JsonRoomModel();        
const roomController = new RoomController(roomService);  
roomRouter.get('/', (req, res) => roomController.getAllRooms(req, res));
roomRouter.get('/:id', (req, res) => roomController.getRoomById(req, res));
roomRouter.post('/', (req, res) => roomController.addRoom(req, res));
roomRouter.put('/:id', (req, res) => roomController.updateRoom(req, res));
roomRouter.delete('/:id', (req, res) => roomController.deleteRoom(req, res));
roomRouter.get('/type/:type', (req, res) => roomController.getRoomsByType(req, res));

export default roomRouter