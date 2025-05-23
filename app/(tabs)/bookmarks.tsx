import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  useColorScheme 
} from 'react-native';
import { useAppContext } from '@/context/AppContext';
import FormulaCard from '@/components/FormulaCard';
import { getFormulasByIds } from '@/data/formulas';
import { router } from 'expo-router';
import { Bookmark } from 'lucide-react-native';

export default function BookmarksScreen() {
  const { language, bookmarks, isBookmarked, toggleBookmark } = useAppContext();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const bookmarkedFormulas = getFormulasByIds(bookmarks);

  const handleFormulaPress = (formula: any) => {
    router.push({
      pathname: `/formula-detail`,
      params: { formulaId: formula.id }
    });
  };

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <View style={styles.header}>
        <Text style={[styles.title, isDark && styles.titleDark]}>
          {language === 'en' ? 'Bookmarks' : 'बुकमार्क्स'}
        </Text>
      </View>

      {bookmarkedFormulas.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Bookmark 
            size={64} 
            color={isDark ? '#4B5563' : '#D1D5DB'} 
            style={styles.emptyIcon} 
          />
          <Text style={[styles.emptyText, isDark && styles.emptyTextDark]}>
            {language === 'en' 
              ? 'No bookmarked formulas yet' 
              : 'अभी तक कोई बुकमार्क किए गए फॉर्मूले नहीं हैं'}
          </Text>
          <Text style={[styles.emptySubtext, isDark && styles.emptySubtextDark]}>
            {language === 'en' 
              ? 'Tap the bookmark icon on any formula to save it here' 
              : 'किसी भी फॉर्मूले पर बुकमार्क आइकन पर टैप करके उसे यहां सहेजें'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={bookmarkedFormulas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FormulaCard
              formula={item}
              language={language}
              isBookmarked={isBookmarked(item.id)}
              onPress={handleFormulaPress}
              onToggleBookmark={toggleBookmark}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  containerDark: {
    backgroundColor: '#111827',
  },
  header: {
    marginTop: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
  },
  titleDark: {
    color: '#F9FAFB',
  },
  listContainer: {
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyTextDark: {
    color: '#F9FAFB',
  },
  emptySubtext: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  emptySubtextDark: {
    color: '#9CA3AF',
  },
});