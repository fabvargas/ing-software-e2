

export class JsonRoomModel {

    rooms = [
        { id: 1, name: 'Room 1', type: "Single" },
        { id: 2, name: 'Room 2', type: "Premium" },
        { id: 3, name: 'Room 3', type: "Single" },
    ]

    async getAllRooms() {
        return this.rooms;
    }

    async getRoomById(id) {
        return this.rooms.find(room => room.id === id);
    }

    async addRoom(room) {
        room.id = this.rooms.length + 1;
        this.rooms.push(room);
        return room;
    }

    async updateRoom(id, updatedInfo) {
        const room = this.rooms.find(room => room.id === id);
        if (room) {
            room.name = updatedInfo.name || room.name;
            room.type = updatedInfo.type || room.type;
            return room;
        }
        return null;
    }

    async deleteRoom(id) {
        const index = this.rooms.findIndex(room => room.id === id);
        if (index !== -1) {
            const deletedRoom = this.rooms.splice(index, 1);
            return deletedRoom[0];
        }
        return null;
    }

    async getRoomsByType(type) {
        return this.rooms.filter(room => room.type === type);
    }

}