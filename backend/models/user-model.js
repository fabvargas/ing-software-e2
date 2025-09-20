
export class JsonUserModel {
    users =[
        {
         id:1,
         name:"Alice", 
         email:"alice@gmail.com", 
         password:"alice123",
         idioma: "ES"
        },
        {
          id:2,
         name:"Pepe", 
         email:"pepe@gmail.com", 
         password:"pepe123",
         idioma: "EN"
        },
       
    ]


    async getAllUsers(){
        return this.users;
    }
    
    async getUserById(id){
        return this.users.find(user => user.id === parseInt(id));
    }

    async getUserByEmail(email){
        return this.users.find(user => user.email === email);
    }

    async addUser(user){
        console.log(user)
        user.id = this.users.length + 1;
        this.users.push(user);
        return user;
    }

    async updateUser(id, updatedInfo){
        const user = this.users.find(user => user.id === id);
        if(user){
            user.name = updatedInfo.name || user.name;
            user.email = updatedInfo.email || user.email;
            user.password = updatedInfo.password || user.password;
            user.idioma = updatedInfo.idioma || user.idioma
            return user;
        }
        return null;
    }

    async deleteUser(id){
        const index = this.users.findIndex(user => user.id === id);
        if(index !== -1){
            const deletedUser = this.users.splice(index, 1);
            return deletedUser[0];
        }
        return null;
    }
}