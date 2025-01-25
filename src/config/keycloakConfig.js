import dotenv from 'dotenv'

dotenv.config();

export const KEYCLOAK_URL = process.env.KEYCLOAK_URL ;
export const CLIENT_ID = process.env.CLIENT_ID ;
export const USERNAME = process.env.KEYCLOAK_USERNAME ;
export const PASSWORD = process.env.PASSWORD ;
export const REALM = process.env.REALM ;
