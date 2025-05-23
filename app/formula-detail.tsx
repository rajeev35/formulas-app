import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  useColorScheme,
  Share
} from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { useAppContext } from '@/context/AppContext';
import { getFormula } from '@/data/formulas';
import { getSubject } from '@/data/subjects';
import { ChevronLeft, Bookmark, Share as ShareIcon } from 'lucide-react-native';

export default function FormulaDetailScreen() {
  const { formulaId } = useLocalSearchParams();
  const { language, isBookmarked, toggleBookmark } = useAppContext();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const formula = getFormula(formulaId as string);
  const subject = formula ? getSubject(formula.subjectId) : null;

  if (!formula) {
    return (
      <View style={[styles.container, isDark && styles.containerDark]}>
        <Text style={[styles.errorText, isDark && styles.errorTextDark]}>
          {language === 'en' ? 'Formula not found' : 'फॉर्मूला नहीं मिला'}
        </Text>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Text style={[styles.backButtonText, isDark && styles.backButtonTextDark]}>
            {language === 'en' ? 'Go back' : 'वापस जाएँ'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleShare = async () => {
    try {
      const message = language === 'en'
        ? `${formula.title}: ${formula.formula}\n\n${formula.description}`
        : `${formula.titleHindi}: ${formula.formula}\n\n${formula.descriptionHindi}`;
      
      await Share.share({
        message,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <Stack.Screen 
        options={{ 
          headerShown: false,
        }} 
      />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <ChevronLeft size={24} color={isDark ? '#F9FAFB' : '#1F2937'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, isDark && styles.headerTitleDark]}>
          {language === 'en' ? 'Formula Details' : 'फॉर्मूला विवरण'}
        </Text>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => toggleBookmark(formula.id)}
        >
          <Bookmark
            size={24}
            color={isBookmarked(formula.id) ? '#F59E0B' : isDark ? '#F9FAFB' : '#1F2937'}
            fill={isBookmarked(formula.id) ? '#F59E0B' : 'transparent'}
          />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.subjectTag, { backgroundColor: subject?.color }]}>
          <Text style={styles.subjectTagText}>
            {language === 'en' ? subject?.name : subject?.nameHindi}
          </Text>
        </View>
        
        <Text style={[styles.gradeText, isDark && styles.gradeTextDark]}>
          {language === 'en' ? `Class ${formula.grade}` : `कक्षा ${formula.grade}`}
        </Text>
        
        <Text style={[styles.title, isDark && styles.titleDark]}>
          {language === 'en' ? formula.title : formula.titleHindi}
        </Text>
        
        <View style={[styles.formulaContainer, isDark && styles.formulaContainerDark]}>
          <Text style={[styles.formula, isDark && styles.formulaDark]}>
            {formula.formula}
          </Text>
        </View>
        
        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
          {language === 'en' ? 'Description' : 'विवरण'}
        </Text>
        
        <Text style={[styles.description, isDark && styles.descriptionDark]}>
          {language === 'en' ? formula.description : formula.descriptionHindi}
        </Text>
        
        <TouchableOpacity 
          style={[styles.shareButton, isDark && styles.shareButtonDark]} 
          onPress={handleShare}
        >
          <ShareIcon size={20} color="#FFFFFF" style={styles.shareIcon} />
          <Text style={styles.shareButtonText}>
            {language === 'en' ? 'Share Formula' : 'फॉर्मूला शेयर करें'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  containerDark: {
    backgroundColor: '#111827',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  headerTitleDark: {
    color: '#F9FAFB',
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  subjectTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 8,
  },
  subjectTagText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  gradeText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 8,
  },
  gradeTextDark: {
    color: '#9CA3AF',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  titleDark: {
    color: '#F9FAFB',
  },
  formulaContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  formulaContainerDark: {
    backgroundColor: '#1F2937',
    borderColor: '#374151',
  },
  formula: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3B82F6',
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  formulaDark: {
    color: '#60A5FA',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  sectionTitleDark: {
    color: '#F9FAFB',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4B5563',
    marginBottom: 24,
  },
  descriptionDark: {
    color: '#D1D5DB',
  },
  shareButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginTop: 8,
  },
  shareButtonDark: {
    backgroundColor: '#2563EB',
  },
  shareIcon: {
    marginRight: 8,
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 18,
    color: '#EF4444',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 16,
  },
  errorTextDark: {
    color: '#F87171',
  },
  backButtonText: {
    fontSize: 16,
    color: '#3B82F6',
    textAlign: 'center',
  },
  backButtonTextDark: {
    color: '#60A5FA',
  },
});