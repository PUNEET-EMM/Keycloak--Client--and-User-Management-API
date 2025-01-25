import axios from 'axios';
import { KEYCLOAK_URL,REALM } from '../config/keycloakConfig.js';


export const createUserInKeycloak = async (accessToken, userData) => {
    try {
      const response = await axios.post(
        `${KEYCLOAK_URL}/admin/realms/${REALM}/users`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error('Error creating user in Keycloak:', error.response?.data || error.message);
      throw error;
    }
  };
  
  export const updateUserInKeycloak = async (accessToken, userId, updatedData) => {
    try {
      const response = await axios.put(
        `${KEYCLOAK_URL}/admin/realms/${REALM}/users/${userId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error('Error updating user in Keycloak:', error.response?.data || error.message);
      throw error;
    }
  };


  export const getAllUsersInKeycloak = async (accessToken) => {
    try {
      const response = await axios.get(`${KEYCLOAK_URL}/admin/realms/${REALM}/users`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching users from Keycloak:', error.response?.data || error.message);
      throw error;
    }
  };
  
  export const deleteUserInKeycloak = async (accessToken, userId) => {
    try {
      await axios.delete(`${KEYCLOAK_URL}/admin/realms/${REALM}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.error('Error deleting user from Keycloak:', error.response?.data || error.message);
      throw error;
    }
  };

  export const getUserByIdFromKeycloak = async (accessToken, userId) => {
    try {
      const response = await axios.get(`${KEYCLOAK_URL}/admin/realms/${REALM}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user by ID from Keycloak:', error.response?.data || error.message);
      throw error;
    }
  };
  
  