import { Colors, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface StoryItemProps {
    username: string;
    image: string;
    isSeen?: boolean;
}

import { LinearGradient } from 'expo-linear-gradient';

export function StoryItem({ username, image, isSeen }: StoryItemProps) {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.avatarContainer}>
                {!isSeen ? (
                    <LinearGradient
                        colors={['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradient}
                    >
                        <View style={[styles.innerBorder, { backgroundColor: theme.background }]}>
                            <Image source={{ uri: image }} style={styles.avatar} />
                        </View>
                    </LinearGradient>
                ) : (
                    <View style={[styles.seenBorder, { borderColor: theme.border }]}>
                        <Image source={{ uri: image }} style={styles.avatar} />
                    </View>
                )}
            </View>
            <Text style={[styles.username, { color: theme.text }]} numberOfLines={1}>
                {username}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 80,
        marginRight: Spacing.sm,
    },
    avatarContainer: {
        width: 68,
        height: 68,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Spacing.xs,
    },
    gradient: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerBorder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    seenBorder: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    username: {
        fontSize: 11,
        textAlign: 'center',
    },
});
