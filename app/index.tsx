import { Redirect } from 'expo-router';

export default function EntryPoint() {
    // For demo, we'll redirect to the Login screen first
    // In a real app, you'd check for a session/token here
    const isAuthenticated = false;

    if (!isAuthenticated) {
        return <Redirect href="/login" />;
    }

    return <Redirect href="/(tabs)" />;
}
