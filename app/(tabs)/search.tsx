import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  FlatList, 
  TouchableOpacity,
  useColorScheme
} from 'react-native';
import { useAppContext } from '@/context/AppContext';
import FormulaCard from '@/components/FormulaCard';
import { searchFormulas } from '@/data/formulas';
import { X, Search as SearchIcon } from 'lucide-react-native';
import { router } from 'expo-router';

export default function SearchScreen() {
  const { language, isBookmarked, toggleBookmark } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = searchFormulas(searchQuery, language);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, language]);

  const handleFormulaPress = (formula: any) => {
    router.push({
      pathname: `/formula-detail`,
      params: { formulaId: formula.id }
    });
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <View style={styles.header}>
        <Text style={[styles.title, isDark && styles.titleDark]}>
          {language === 'en' ? 'Search' : 'खोज'}
        </Text>
      </View>

      <View style={[styles.searchContainer, isDark && styles.searchContainerDark]}>
        <SearchIcon 
          size={20} 
          color={isDark ? '#9CA3AF' : '#6B7280'} 
          style={styles.searchIcon} 
        />
        <TextInput
          style={[styles.searchInput, isDark && styles.searchInputDark]}
          placeholder={language === 'en' ? 'Search formulas...' : 'फॉर्मूले खोजें...'}
          placeholderTextColor={isDark ? '#9CA3AF' : '#9CA3AF'}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <X size={20} color={isDark ? '#9CA3AF' : '#6B7280'} />
          </TouchableOpacity>
        )}
      </View>

      {searchResults.length === 0 && searchQuery.length > 0 && (
        <View style={styles.noResultsContainer}>
          <Text style={[styles.noResultsText, isDark && styles.noResultsTextDark]}>
            {language === 'en' 
              ? 'No formulas found. Try a different search.' 
              : 'कोई फॉर्मूला नहीं मिला। कृपया अलग खोज करें।'}
          </Text>
        </View>
      )}

      <FlatList
        data={searchResults}
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
        contentContainerStyle={styles.resultsContainer}
      />
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchContainerDark: {
    backgroundColor: '#1F2937',
    borderColor: '#374151',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#1F2937',
  },
  searchInputDark: {
    color: '#F9FAFB',
  },
  clearButton: {
    padding: 8,
  },
  resultsContainer: {
    paddingBottom: 16,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  noResultsTextDark: {
    color: '#9CA3AF',
  },
});