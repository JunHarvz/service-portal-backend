import * as usersModel from '../models/usersModel.js'


export const getUsers = async (req, res) => {
    try {
        const users = await usersModel.getUsersList();
        res.status(200).json(users)
    } catch (error) {
        console.error('Error fetching data:',err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
} 

export const countUsers = async (req, res) => {
    try {
        const userCount = await usersModel.countUsers();
        res.status(200).json(userCount);
    } catch (error) {
        console.error('Error fetching data:',err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
}

export const updateUser = async (req, res) => {
    try {
        const {first_name, last_name, role_id, location_id} = req.body;
        const userId = req.params.id
        const updateUser = await usersModel.updateUser(first_name, last_name, role_id, location_id, userId);

        if (!updateUser) {
            return res.status(404).json({ message : "Data not found."})
        }else{
            res.status(200).json(updateUser)
        }
        
    } catch (err) {
        console.error('Error updating data:',err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
};

export const deleteUser = async (req, res) => {
    try {
        
        const id = req.params.id;
        const response = await usersModel.deleteUser(id);
        
        res.status(200).json(response);
    }catch (err){
        console.error('Error deleting data:',err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
}