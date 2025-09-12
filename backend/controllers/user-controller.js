

export class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getUserById(req, res) {
        try {
            
            const userId = req.params.id;
            const user = await this.userService.getUserById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getUserByEmail(req, res) {
        try {
            const email = req.params.email;
            const user = await this.userService.getUserByEmail(email);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async createUser(req, res) {
        try {
            const userData = req.body;
            console.log(userData)
            const newUser = await this.userService.addUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const userData = req.body;
            const foundUser = await this.userService.getUserById(userId);
            if (!foundUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            const updatedUser = await this.userService.updateUser(foundUser.id, userData);
            if (!updatedUser) {
                return res.status(404).json({ message: 'Server error' });
            }
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async deleteUser(req, res) {
        try {
            const userId = req.params.id;
            const foundUser = await this.userService.getUserById(userId);
            if (!foundUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            const deletedUser = await this.userService.deleteUser(foundUser.id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'Server error' });
            }
            res.json(deletedUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}