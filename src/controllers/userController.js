import {  createUserInKeycloak, updateUserInKeycloak,getAllUsersInKeycloak ,deleteUserInKeycloak,getUserByIdFromKeycloak} from '../services/userServices.js';
import {authenticateWithKeycloak} from '../services/keycloakService.js'




export const createUser = async (req, res) => {
  try {
    const accessToken = await authenticateWithKeycloak();
    const userData = req.body;

    const newUser = await createUserInKeycloak(accessToken, userData);

    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating user',
      error: error.message,
    });
  }
};

export const getUserById = async (req, res) => {
    try {
      const accessToken = await authenticateWithKeycloak();
      const userId = req.params.id;
  
      const user = await getUserByIdFromKeycloak(accessToken, userId);
  
      res.status(200).json({
        message: 'User fetched successfully',
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching user by ID',
        error: error.message,
      });
    }
  };


export const getAllUsers = async (req, res) => {
  try {
    const accessToken = await authenticateWithKeycloak();

    const users = await getAllUsersInKeycloak(accessToken);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching users',
      error: error.message,
    });
  }
};


export const deleteUser = async (req, res) => {
    try {
      const accessToken = await authenticateWithKeycloak();
      const userId = req.params.id;
  
      await deleteUserInKeycloak(accessToken, userId);
  
      res.status(200).json({
        message: 'User deleted successfully',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error deleting user',
        error: error.message,
      });
    }
  };

export const updateUser = async (req, res) => {
  try {
    const accessToken = await authenticateWithKeycloak();
    const userId = req.params.id;
    const updatedData = req.body;

    const updatedUser = await updateUserInKeycloak(accessToken, userId, updatedData);

    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating user',
      error: error.message,
    });
  }
};