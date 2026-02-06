import { Colors, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = width / 3;

const MOCK_EXPLORE = Array.from({ length: 24 }).map((_, i) => ({
  id: String(i),
  image: `https://picsum.photos/id/${i + 50}/400/400`,
}));

export default function ExploreScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  const renderHeader = () => (
    <View style={[styles.searchContainer, { backgroundColor: colorScheme === 'dark' ? '#262626' : '#EFEFEF' }]}>
      <Ionicons name="search" size={18} color={theme.secondaryText} style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={theme.secondaryText}
        style={[styles.searchInput, { color: theme.text }]}
      />
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={MOCK_EXPLORE}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={{ uri: item.image }} style={styles.gridImage} />
          </TouchableOpacity>
        )}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: Spacing.md,
    paddingHorizontal: Spacing.sm,
    height: 36,
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: Spacing.xs,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  gridImage: {
    width: COLUMN_WIDTH,
    height: COLUMN_WIDTH,
    borderWidth: 0.5,
    borderColor: '#fff',
  },
});
