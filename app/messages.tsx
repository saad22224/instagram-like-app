import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const MOCK_CHATS = [
    { id: '1', user: 'sarah_smith', lastMsg: 'Sent a photo', time: '2h', avatar: 'https://i.pravatar.cc/150?u=3', unread: true },
    { id: '2', user: 'john_doe', lastMsg: 'See you tomorrow!', time: '5h', avatar: 'https://i.pravatar.cc/150?u=2' },
    { id: '3', user: 'travel_lover', lastMsg: 'That post was fire 🔥', time: '1d', avatar: 'https://i.pravatar.cc/150?u=4' },
    { id: '4', user: 'foodie_gram', lastMsg: 'Liked a message', time: '2d', avatar: 'https://i.pravatar.cc/150?u=5' },
];

export default function MessagesScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    const renderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.chatItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.chatInfo}>
                <Text style={[styles.username, { color: theme.text, fontWeight: item.unread ? '700' : '400' }]}>{item.user}</Text>
                <Text style={[styles.lastMsg, { color: item.unread ? theme.text : theme.secondaryText, fontWeight: item.unread ? '600' : '400' }]} numberOfLines={1}>
                    {item.lastMsg} • {item.time}
                </Text>
            </View>
            <View style={styles.rightIcons}>
                <TouchableOpacity>
                    <Ionicons name="camera-outline" size={24} color={theme.text} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={28} color={theme.text} />
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={[styles.title, { color: theme.text }]}>mohamed_ahmed</Text>
                    <Ionicons name="chevron-down" size={14} color={theme.text} style={{ marginLeft: 4 }} />
                </View>
                <TouchableOpacity>
                    <Ionicons name="create-outline" size={26} color={theme.text} />
                </TouchableOpacity>
            </View>

            <View style={[styles.searchBar, { backgroundColor: colorScheme === 'dark' ? '#262626' : '#EFEFEF' }]}>
                <Ionicons name="search" size={18} color={theme.secondaryText} style={{ marginRight: 8 }} />
                <TextInput placeholder="Search" placeholderTextColor={theme.secondaryText} style={styles.searchInput} />
            </View>

            <View style={styles.messagesSection}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>Messages</Text>
                <FlatList
                    data={MOCK_CHATS}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
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
    },
    headerTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        paddingHorizontal: 12,
        height: 36,
        borderRadius: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
    },
    messagesSection: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        marginRight: 12,
    },
    chatInfo: {
        flex: 1,
    },
    username: {
        fontSize: 14,
    },
    lastMsg: {
        fontSize: 14,
        marginTop: 2,
    },
    rightIcons: {
        marginLeft: 10,
    },
});
