import { getToken, logout, me } from '@/services/auth';
import { Redirect } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function EntryPoint() {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            const token = await getToken();
            if (token) {
                await me(token);
                setIsAuthenticated(true);
            }
            setIsLoading(false);
        };
        checkToken();
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!isAuthenticated) {
        return <Redirect href="/login" />;
    }

    // Replace with your actual main route (home)
    return <Redirect href="/(tabs)" />;
}
