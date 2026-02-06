import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function ReelsScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#000' }]}>
            <View style={styles.content}>
                <Ionicons name="play-circle" size={100} color="rgba(255,255,255,0.3)" />
                <Text style={styles.text}>Reels Feed</Text>
                <Text style={styles.subtext}>Swipe up for next reel</Text>
            </View>

            <View style={styles.overlayIcons}>
                <Ionicons name="heart-outline" size={32} color="#fff" style={styles.icon} />
                <Ionicons name="chatbubble-outline" size={28} color="#fff" style={styles.icon} />
                <Ionicons name="paper-plane-outline" size={28} color="#fff" style={styles.icon} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtext: {
        color: '#ccc',
        fontSize: 14,
        marginTop: 10,
    },
    overlayIcons: {
        position: 'absolute',
        bottom: 40,
        right: 15,
        alignItems: 'center',
    },
    icon: {
        marginBottom: 20,
    },
});
