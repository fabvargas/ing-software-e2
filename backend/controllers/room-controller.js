
export class RoomController {

    constructor(roomModel) {
        this.roomModel = roomModel;
    }

    async getAllRooms(req, res) {
        const rooms = await this.roomModel.getAllRooms();
        res.json(rooms);
    }

    async getRoomById(req, res) {
        const id = parseInt(req.params.id);
        const room = await this.roomModel.getRoomById(id);
        if (room) {
            res.json(room);
        } else {
            res.status(404).json({ message: 'Room not found' });
        }
    }

    async addRoom(req, res) {
        const newRoom = req.body;
        const addedRoom = await this.roomModel.addRoom(newRoom);
        res.status(201).json(addedRoom);
    }

    async updateRoom(req, res) {
        const id = parseInt(req.params.id);
        const updatedInfo = req.body;
        const updatedRoom = await this.roomModel.updateRoom(id, updatedInfo);
        if (updatedRoom) {
            res.json(updatedRoom);
        } else {
            res.status(404).json({ message: 'Room not found' });
        }
    }

    async deleteRoom(req, res) {
        const id = parseInt(req.params.id);
        const deletedRoom = await this.roomModel.deleteRoom(id);
        if (deletedRoom) {
            res.json(deletedRoom);
        } else {
            res.status(404).json({ message: 'Room not found' });
        }
    }

    async getRoomsByType(req, res) {
        const type = req.params.type;
        const rooms = await this.roomModel.getRoomsByType(type);
        res.json(rooms);
    }
}