import axios from 'axios';
import { KEYCLOAK_URL,REALM } from '../config/keycloakConfig.js';


export const createClientInKeycloak = async (accessToken, clientData) => {
    try {
      const response = await axios.post(
        `${KEYCLOAK_URL}/admin/realms/${REALM}/clients`,
        clientData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error('Error creating client in Keycloak:', error.response?.data || error.message);
      throw error;
    }
  };
  
  export const updateClientInKeycloak = async (accessToken, clientId, updatedData) => {
    try {
      const response = await axios.put(
        `${KEYCLOAK_URL}/admin/realms/${REALM}/clients/${clientId}`,
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
      console.error('Error updating client in Keycloak:', error.response?.data || error.message);
      throw error;
    }
  };



  
  export const getAllClientsInKeycloak   = async (accessToken)=>{
  
    try{
  
      const response=  await axios.get(`${KEYCLOAK_URL}/admin/realms/${REALM}/clients`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
  
  
    }catch(error){
      console.error('Error fetching clients from Keycloak:', error.response?.data || error.message);
      throw error;
  
    }
  
  
  }

  export const getClientByIdFromKeycloak = async (accessToken, clientId) => {
    try {
      const response = await axios.get(`${KEYCLOAK_URL}/admin/realms/${REALM}/clients/${clientId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching client by ID from Keycloak:', error.response?.data || error.message);
      throw error;
    }
  };
    
  
  
  export const deleteClientInKeycloak = async (accessToken, clientId) => {
    try {
      await axios.delete(
        `${KEYCLOAK_URL}/admin/realms/${REALM}/clients/${clientId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.error('Error deleting client in Keycloak:', error.response?.data || error.message);
      throw error;
    }
  };