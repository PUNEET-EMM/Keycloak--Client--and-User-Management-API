import axios from 'axios';
import qs from 'qs';
import { KEYCLOAK_URL, CLIENT_ID, USERNAME, PASSWORD, REALM } from '../config/keycloakConfig.js';



export const authenticateWithKeycloak = async () => {
  try {

    const response = await axios.post(
      `${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/token`,
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error('Error authenticating with Keycloak:', error.response?.data || error.message);
    throw error;
  }
};








