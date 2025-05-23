import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { Bookmark } from 'lucide-react-native';

export type Formula = {
  id: string;
  title: string;
  titleHindi: string;
  formula: string;
  description: string;
  descriptionHindi: string;
  subjectId: string;
  grade: number;
};

type FormulaCardProps = {
  formula: Formula;
  language: 'en' | 'hi';
  isBookmarked: boolean;
  onPress: (formula: Formula) => void;
  onToggleBookmark: (formulaId: string) => void;
};

const FormulaCard: React.FC<FormulaCardProps> = ({
  formula,
  language,
  isBookmarked,
  onPress,
  onToggleBookmark,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <TouchableOpacity
      style={[styles.card, isDark && styles.cardDark]}
      onPress={() => onPress(formula)}
    >
      <View style={styles.header}>
        <Text style={[styles.title, isDark && styles.titleDark]}>
          {language === 'en' ? formula.title : formula.titleHindi}
        </Text>
        <TouchableOpacity
          style={styles.bookmarkButton}
          onPress={() => onToggleBookmark(formula.id)}
        >
          <Bookmark
            size={24}
            color={isBookmarked ? '#F59E0B' : isDark ? '#6B7280' : '#9CA3AF'}
            fill={isBookmarked ? '#F59E0B' : 'transparent'}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.formula, isDark && styles.formulaDark]}>
        {formula.formula}
      </Text>
      <Text style={[styles.description, isDark && styles.descriptionDark]} numberOfLines={2}>
        {language === 'en' ? formula.description : formula.descriptionHindi}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardDark: {
    backgroundColor: '#2D3748',
    shadowColor: '#fff',
    shadowOpacity: 0.05,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
  },
  titleDark: {
    color: '#F3F4F6',
  },
  bookmarkButton: {
    padding: 4,
  },
  formula: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3B82F6',
    marginBottom: 8,
    fontFamily: 'monospace',
  },
  formulaDark: {
    color: '#60A5FA',
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
  },
  descriptionDark: {
    color: '#9CA3AF',
  },
});

export default FormulaCard;