

export class JsonRoomModel {

    rooms = [
        { id: 1,
         numero: 10, 
         categoria: "Single",
         piso:1,
         precioDiario: 20.000,
         idEstadoHabitacion:2
        },
        {
         id: 2,
         numero: 22, 
         categoria: "Premium",
         piso:2,
         precioDiario: 25.000,
         idEstadoHabitacion:1
        },
        {
         id: 3,
         numero: 28, 
         categoria: "Premium",
         piso:2,
         precioDiario: 25.000,
         idEstadoHabitacion:2  
        }
  
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
        room.numero = updatedInfo.numero ?? room.numero;
        room.categoria = updatedInfo.categoria ?? room.categoria;
        room.piso = updatedInfo.piso ?? room.piso;
        room.precioDiario = updatedInfo.precioDiario ?? room.precioDiario;
        room.idEstadoHabitacion = updatedInfo.idEstadoHabitacion ?? room.idEstadoHabitacion;
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