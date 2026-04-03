import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

const url = process.env.EXPO_PUBLIC_API_URL || process.env.API_URL;
export async function login(email: string, password: string) {

    if (!url) {
        console.error('API URL is not defined in your .env file!');
        return;
    }

    const fullUrl = `${url.replace(/\/$/, '')}/api/auth/login`;

    try {
        const response = await fetch(fullUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok && data.token) {
            // Save Token and User info
            await SecureStore.setItemAsync('userToken', data.token);
            await SecureStore.setItemAsync('userData', JSON.stringify(data.user || {}));
            console.log('Login successful! Saved token.');
            return data;
        } else {
            console.error('Login failed:', data.message || 'Unknown error');
            return null;
        }
    } catch (error) {
        console.error('Network/Login error:', error);
        return null;
    }
}

export async function getToken() {
    return await SecureStore.getItemAsync('userToken');
}

export async function logout() {
    await SecureStore.deleteItemAsync('userToken');
    await SecureStore.deleteItemAsync('userData');
}





export async function register(name: string, email: string, password: string) {
    if (!url) {
        console.error('API URL is not defined in your .env file!');
        return;
    }

    const fullurl = `${url.replace(/\/$/, '')}/api/auth/register`;


    const response = await fetch(fullurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })


    const data = await response.json()

    if (response.ok) {
        console.log(data.message)
        router.replace('/login')
    } else {
        console.error('Login failed:', data.message || 'Unknown error');
        return null;
    }
}
