import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Navigate to tabs on login
        router.replace('/(tabs)');
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
            >
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={28} color={theme.text} />
                </TouchableOpacity>

                <View style={styles.logoContainer}>
                    <Text style={[styles.logo, { color: theme.text }]}>Instagram</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        placeholder="Phone number, username or email"
                        placeholderTextColor={theme.secondaryText}
                        style={[styles.input, {
                            backgroundColor: colorScheme === 'dark' ? '#262626' : '#FAFAFA',
                            borderColor: theme.border,
                            color: theme.text
                        }]}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={theme.secondaryText}
                        secureTextEntry
                        style={[styles.input, {
                            backgroundColor: colorScheme === 'dark' ? '#262626' : '#FAFAFA',
                            borderColor: theme.border,
                            color: theme.text
                        }]}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={[styles.forgotPasswordText, { color: theme.buttonBlue }]}>Forgot password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.loginButton, { backgroundColor: theme.buttonBlue }]}
                        onPress={handleLogin}
                    >
                        <Text style={styles.loginButtonText}>Log In</Text>
                    </TouchableOpacity>

                    <View style={styles.orContainer}>
                        <View style={[styles.line, { backgroundColor: theme.border }]} />
                        <Text style={[styles.orText, { color: theme.secondaryText }]}>OR</Text>
                        <View style={[styles.line, { backgroundColor: theme.border }]} />
                    </View>

                    <TouchableOpacity style={styles.fbLogin}>
                        <Ionicons name="logo-facebook" size={20} color="#0095F6" />
                        <Text style={styles.fbLoginText}>Log in with Facebook</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.footer, { borderTopColor: theme.border }]}>
                    <Text style={[styles.footerText, { color: theme.secondaryText }]}>
                        Don't have an account?{' '}
                        <Text
                            style={[styles.signUpLink, { color: theme.buttonBlue }]}
                            onPress={() => router.push('/register')}
                        >
                            Sign Up
                        </Text>
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    form: {
        width: '100%',
    },
    input: {
        height: 48,
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 12,
        fontSize: 14,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    forgotPasswordText: {
        fontSize: 12,
        fontWeight: '600',
    },
    loginButton: {
        height: 48,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 14,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    line: {
        flex: 1,
        height: 0.5,
    },
    orText: {
        marginHorizontal: 15,
        fontWeight: '600',
        fontSize: 13,
    },
    fbLogin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fbLoginText: {
        color: '#0095F6',
        fontWeight: '700',
        marginLeft: 8,
        fontSize: 14,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        borderTopWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 13,
    },
    signUpLink: {
        fontWeight: '700',
    },
});
