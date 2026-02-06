import { Colors, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

export function InstagramHeader() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    return (
        <View style={[styles.container, { backgroundColor: theme.background, borderBottomColor: theme.border }]}>
            <View style={styles.leftContainer}>
                <Text style={[styles.logo, { color: theme.text }]}>Instagram</Text>
                <Ionicons name="chevron-down" size={18} color={theme.text} style={styles.logoChevron} />
            </View>
            <View style={styles.rightIcons}>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/camera')}>
                    <Ionicons name="add-circle-outline" size={26} color={theme.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/notifications')}>
                    <Ionicons name="heart-outline" size={26} color={theme.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/messages')}>
                    <Ionicons name="chatbubble-ellipses-outline" size={26} color={theme.text} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.md,
        height: 54,
        borderBottomWidth: 0.3,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        fontSize: 28,
        fontWeight: '700',
        fontFamily: Platform.OS === 'ios' ? 'Snell Roundhand' : 'serif',
    },
    logoChevron: {
        marginLeft: 4,
        marginTop: 6,
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: Spacing.lg,
    },
});
