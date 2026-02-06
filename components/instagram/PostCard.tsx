import { Colors, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PostCardProps {
    username: string;
    userAvatar: string;
    image: string;
    caption: string;
    likes: number;
    timeAgo: string;
}

export function PostCard({ username, userAvatar, image, caption, likes, timeAgo }: PostCardProps) {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: userAvatar }} style={styles.avatar} />
                    <Text style={[styles.username, { color: theme.text }]}>{username}</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal" size={20} color={theme.text} />
                </TouchableOpacity>
            </View>

            {/* Post Image */}
            <Image source={{ uri: image }} style={styles.postImage} resizeMode="cover" />

            {/* Actions */}
            <View style={styles.actions}>
                <View style={styles.leftActions}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="heart-outline" size={26} color={theme.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="chatbubble-outline" size={24} color={theme.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="paper-plane-outline" size={24} color={theme.text} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Ionicons name="bookmark-outline" size={24} color={theme.text} />
                </TouchableOpacity>
            </View>

            {/* Details */}
            <View style={styles.details}>
                <Text style={[styles.likes, { color: theme.text }]}>{likes.toLocaleString()} likes</Text>
                <View style={styles.captionContainer}>
                    <Text style={[styles.username, { color: theme.text }]}>{username} </Text>
                    <Text style={[styles.caption, { color: theme.text }]}>{caption}</Text>
                </View>
                <Text style={[styles.timeAgo, { color: theme.secondaryText }]}>{timeAgo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing.md,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Spacing.md,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: Spacing.sm,
    },
    username: {
        fontWeight: '600',
        fontSize: 14,
    },
    postImage: {
        width: '100%',
        aspectRatio: 1,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.sm,
    },
    leftActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        marginRight: Spacing.md,
    },
    details: {
        paddingHorizontal: Spacing.md,
    },
    likes: {
        fontWeight: '700',
        fontSize: 14,
        marginBottom: Spacing.xs,
    },
    captionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: Spacing.xs,
    },
    caption: {
        fontSize: 14,
    },
    timeAgo: {
        fontSize: 10,
        textTransform: 'uppercase',
    },
});
