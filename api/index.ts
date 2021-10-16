import base64 from 'react-native-base64';
import { CLIENT_ID, CLIENT_SECRET_ID, API_PREFIX } from '../Constants';

export const getToken = async () => {
    const credentials = base64.encode(`${CLIENT_ID}:${CLIENT_SECRET_ID}`);
    console.log('Getting Token User');

    const res = await fetch(`${API_PREFIX}/token`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials'
    });

    const response = await res.json();    
    return response.access_token;
}
