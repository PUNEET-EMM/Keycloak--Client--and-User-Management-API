import { createClientInKeycloak, updateClientInKeycloak, deleteClientInKeycloak ,getAllClientsInKeycloak,getClientByIdFromKeycloak} from '../services/clientServices.js';
import {authenticateWithKeycloak} from '../services/keycloakService.js'


export const createClient = async (req, res) => {
  try {
    const accessToken = await authenticateWithKeycloak();
    const clientData = req.body;

    const newClient = await createClientInKeycloak(accessToken, clientData);

    res.status(201).json({
      message: 'Client created successfully',
      client: newClient,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating client',
      error: error.message,
    });
  }
};

export const getAllClients = async (req, res) => {
    try {
      const accessToken = await authenticateWithKeycloak();
  
      const clients = await getAllClientsInKeycloak(accessToken);
  
      res.status(200).json(clients);
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching clients',
        error: error.message,
      });
    }
  };

  export const getClientById = async (req, res) => {
    try {

      const accessToken = await authenticateWithKeycloak();
      const clientId = req.params.id;
  
      const client = await getClientByIdFromKeycloak(accessToken, clientId);
  
      res.status(200).json({
        message: 'Client fetched successfully',
        client,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching client by ID',
        error: error.message,
      });
    }
  }; 

export const updateClient = async (req, res) => {
  try {
    const accessToken = await authenticateWithKeycloak();
    const clientId = req.params.id;
    const updatedData = req.body;

    const updatedClient = await updateClientInKeycloak(accessToken, clientId, updatedData);

    res.status(200).json({
      message: 'Client updated successfully',
      client: updatedClient,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating client',
      error: error.message,
    });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const accessToken = await authenticateWithKeycloak();
    const clientId = req.params.id;

    await deleteClientInKeycloak(accessToken, clientId);

    res.status(200).json({
      message: 'Client deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting client',
      error: error.message,
    });
  }
};