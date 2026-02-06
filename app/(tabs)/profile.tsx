import { Colors, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = width / 3;

const MOCK_POSTS = Array.from({ length: 18 }).map((_, i) => ({
    id: String(i),
    image: `https://picsum.photos/id/${i + 20}/400/400`,
}));

export default function ProfileScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    const renderHeader = () => (
        <View style={styles.header}>
            {/* Profile Info */}
            <View style={styles.profileRow}>
                <Image source={{ uri: 'https://i.pravatar.cc/150?u=me' }} style={styles.profileImage} />
                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <Text style={[styles.statNumber, { color: theme.text }]}>18</Text>
                        <Text style={[styles.statLabel, { color: theme.text }]}>Posts</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={[styles.statNumber, { color: theme.text }]}>1,240</Text>
                        <Text style={[styles.statLabel, { color: theme.text }]}>Followers</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={[styles.statNumber, { color: theme.text }]}>450</Text>
                        <Text style={[styles.statLabel, { color: theme.text }]}>Following</Text>
                    </View>
                </View>
            </View>

            {/* Bio */}
            <View style={styles.bioContainer}>
                <Text style={[styles.name, { color: theme.text }]}>Mohamed Ahmed</Text>
                <Text style={[styles.bio, { color: theme.text }]}>React Native Developer | UI/UX Enthusiast 🚀</Text>
                <Text style={[styles.link, { color: theme.buttonBlue }]}>github.com/mohamed</Text>
            </View>

            {/* Edit Profile Button */}
            <TouchableOpacity style={[styles.editButton, { backgroundColor: colorScheme === 'dark' ? '#262626' : '#EFEFEF' }]}>
                <Text style={[styles.editButtonText, { color: theme.text }]}>Edit Profile</Text>
            </TouchableOpacity>

            {/* Tab Switcher */}
            <View style={[styles.tabSwitcher, { borderBottomColor: theme.border }]}>
                <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
                    <Ionicons name="grid-outline" size={24} color={theme.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Ionicons name="person-outline" size={24} color={theme.secondaryText} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.topNav}>
                <Text style={[styles.navUsername, { color: theme.text }]}>mohamed_ahmed</Text>
                <View style={styles.topNavRight}>
                    <TouchableOpacity style={styles.navIcon}>
                        <Ionicons name="add-circle-outline" size={28} color={theme.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navIcon}>
                        <Ionicons name="menu-outline" size={28} color={theme.text} />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={MOCK_POSTS}
                numColumns={3}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Image source={{ uri: item.image }} style={styles.gridImage} />
                    </TouchableOpacity>
                )}
                ListHeaderComponent={renderHeader}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topNav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.md,
        height: 50,
    },
    navUsername: {
        fontSize: 22,
        fontWeight: '700',
    },
    topNavRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navIcon: {
        marginLeft: Spacing.md,
    },
    header: {
        paddingHorizontal: Spacing.md,
        paddingTop: Spacing.md,
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    profileImage: {
        width: 86,
        height: 86,
        borderRadius: 43,
        marginRight: Spacing.xl,
    },
    statsRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: '700',
    },
    statLabel: {
        fontSize: 13,
    },
    bioContainer: {
        marginBottom: Spacing.md,
    },
    name: {
        fontWeight: '700',
        fontSize: 14,
        marginBottom: 2,
    },
    bio: {
        fontSize: 14,
    },
    link: {
        fontWeight: '600',
    },
    editButton: {
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Spacing.xl,
    },
    editButtonText: {
        fontWeight: '600',
        fontSize: 14,
    },
    tabSwitcher: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    activeTab: {
        borderBottomWidth: 1.5,
    },
    gridImage: {
        width: COLUMN_WIDTH,
        height: COLUMN_WIDTH,
        borderWidth: 0.5,
        borderColor: '#fff',
    },
});
