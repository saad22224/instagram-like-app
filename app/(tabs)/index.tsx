import { InstagramHeader } from '@/components/instagram/InstagramHeader';
import { PostCard } from '@/components/instagram/PostCard';
import { StoryItem } from '@/components/instagram/StoryItem';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

const MOCK_STORIES = [
  { id: '1', username: 'Your Story', image: 'https://i.pravatar.cc/150?u=me', isSeen: true },
  { id: '2', username: 'john_doe', image: 'https://i.pravatar.cc/150?u=2' },
  { id: '3', username: 'sarah_smith', image: 'https://i.pravatar.cc/150?u=3' },
  { id: '4', username: 'travel_lover', image: 'https://i.pravatar.cc/150?u=4' },
  { id: '5', username: 'foodie_gram', image: 'https://i.pravatar.cc/150?u=5' },
  { id: '6', username: 'nature_pics', image: 'https://i.pravatar.cc/150?u=6' },
];

const MOCK_POSTS = [
  {
    id: '1',
    username: 'travel_lover',
    userAvatar: 'https://i.pravatar.cc/150?u=4',
    image: 'https://picsum.photos/id/10/800/800',
    caption: 'Beautiful sunset in the mountains! #travel #nature',
    likes: 1240,
    timeAgo: '2 hours ago',
  },
  {
    id: '2',
    username: 'foodie_gram',
    userAvatar: 'https://i.pravatar.cc/150?u=5',
    image: 'https://picsum.photos/id/102/800/800',
    caption: 'Best pizza in town 🍕 #foodie #pizza',
    likes: 850,
    timeAgo: '5 hours ago',
  },
  {
    id: '3',
    username: 'sarah_smith',
    userAvatar: 'https://i.pravatar.cc/150?u=3',
    image: 'https://picsum.photos/id/103/800/800',
    caption: 'Morning vibes ✨',
    likes: 2100,
    timeAgo: '1 day ago',
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  const renderStories = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.storiesContainer, { borderBottomColor: theme.border }]}
      contentContainerStyle={styles.storiesContent}
    >
      {MOCK_STORIES.map((story) => (
        <StoryItem key={story.id} {...story} />
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <InstagramHeader />
      <FlatList
        data={MOCK_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard {...item} />}
        ListHeaderComponent={renderStories}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storiesContainer: {
    borderBottomWidth: 0.5,
    paddingVertical: 10,
  },
  storiesContent: {
    paddingHorizontal: 10,
  },
});
