import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { register } from '@/services/auth';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        router.replace('/(tabs)');
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={28} color={theme.text} />
                    </TouchableOpacity>

                    <View style={styles.logoContainer}>
                        <Text style={[styles.logo, { color: theme.text }]}>Instagram</Text>
                        <Text style={[styles.subtitle, { color: theme.secondaryText }]}>
                            Sign up to see photos and videos from your friends.
                        </Text>
                    </View>

                    <TouchableOpacity style={[styles.fbButton, { backgroundColor: theme.buttonBlue }]}>
                        <Ionicons name="logo-facebook" size={20} color="#FFF" />
                        <Text style={styles.fbButtonText}>Log in with Facebook</Text>
                    </TouchableOpacity>

                    <View style={styles.orContainer}>
                        <View style={[styles.line, { backgroundColor: theme.border }]} />
                        <Text style={[styles.orText, { color: theme.secondaryText }]}>OR</Text>
                        <View style={[styles.line, { backgroundColor: theme.border }]} />
                    </View>

                    <View style={styles.form}>
                        <TextInput
                            placeholder="Mobile Number or Email"
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
                            placeholder="Full Name"
                            placeholderTextColor={theme.secondaryText}
                            style={[styles.input, {
                                backgroundColor: colorScheme === 'dark' ? '#262626' : '#FAFAFA',
                                borderColor: theme.border,
                                color: theme.text
                            }]}
                            value={fullName}
                            onChangeText={setFullName}
                        />
                        {/* <TextInput
                            placeholder="Username"
                            placeholderTextColor={theme.secondaryText}
                            style={[styles.input, {
                                backgroundColor: colorScheme === 'dark' ? '#262626' : '#FAFAFA',
                                borderColor: theme.border,
                                color: theme.text
                            }]}
                            value={username}
                            onChangeText={setUsername}
                        /> */}
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

                        <TouchableOpacity
                            style={[styles.signUpButton, { backgroundColor: theme.buttonBlue }]}
                            onPress={()=> register(fullName , email , password)}
                        >
                            <Text style={styles.signUpButtonText}>Sign Up</Text>
                        </TouchableOpacity>

                        <Text style={[styles.termsText, { color: theme.secondaryText }]}>
                            By signing up, you agree to our Terms, Data Policy and Cookies Policy.
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <View style={[styles.footer, { borderTopColor: theme.border, backgroundColor: theme.background }]}>
                <Text style={[styles.footerText, { color: theme.secondaryText }]}>
                    Have an account?{' '}
                    <Text
                        style={[styles.loginLink, { color: theme.buttonBlue }]}
                        onPress={() => router.push('/login')}
                    >
                        Log In
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 80,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'serif',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    fbButton: {
        height: 44,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    fbButtonText: {
        color: '#FFF',
        fontWeight: '700',
        marginLeft: 8,
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
    signUpButton: {
        height: 48,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    signUpButtonText: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 14,
    },
    termsText: {
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 18,
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
    loginLink: {
        fontWeight: '700',
    },
});
