import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MOCK_NOTIFICATIONS = [
    { id: '1', user: 'sarah_smith', action: 'liked your photo', time: '2h', avatar: 'https://i.pravatar.cc/150?u=3', targetImage: 'https://picsum.photos/id/10/100/100' },
    { id: '2', user: 'john_doe', action: 'started following you', time: '5h', avatar: 'https://i.pravatar.cc/150?u=2', isFollowing: true },
    { id: '3', user: 'travel_lover', action: 'commented: "Amazing view! 😍"', time: '1d', avatar: 'https://i.pravatar.cc/150?u=4', targetImage: 'https://picsum.photos/id/11/100/100' },
    { id: '4', user: 'foodie_gram', action: 'liked your photo', time: '2d', avatar: 'https://i.pravatar.cc/150?u=5', targetImage: 'https://picsum.photos/id/12/100/100' },
];

export default function NotificationsScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    const renderItem = ({ item }: any) => (
        <View style={styles.notificationItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.notificationTextContainer}>
                <Text style={[styles.notificationText, { color: theme.text }]}>
                    <Text style={styles.username}>{item.user}</Text> {item.action}{' '}
                    <Text style={[styles.time, { color: theme.secondaryText }]}>{item.time}</Text>
                </Text>
            </View>
            {item.targetImage ? (
                <Image source={{ uri: item.targetImage }} style={styles.targetImage} />
            ) : (
                <TouchableOpacity style={[styles.followButton, { backgroundColor: item.isFollowing ? theme.border : theme.buttonBlue }]}>
                    <Text style={[styles.followButtonText, { color: item.isFollowing ? theme.text : '#FFF' }]}>
                        {item.isFollowing ? 'Following' : 'Follow'}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { borderBottomColor: theme.border }]}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={28} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.title, { color: theme.text }]}>Notifications</Text>
                <View style={{ width: 28 }} />
            </View>
            <FlatList
                data={MOCK_NOTIFICATIONS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        height: 50,
        borderBottomWidth: 0.5,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    listContent: {
        paddingVertical: 10,
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 12,
    },
    notificationTextContainer: {
        flex: 1,
    },
    notificationText: {
        fontSize: 14,
        lineHeight: 18,
    },
    username: {
        fontWeight: '700',
    },
    time: {
        fontSize: 12,
    },
    targetImage: {
        width: 44,
        height: 44,
        marginLeft: 12,
    },
    followButton: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 8,
        marginLeft: 12,
    },
    followButtonText: {
        fontSize: 14,
        fontWeight: '600',
    },
});
