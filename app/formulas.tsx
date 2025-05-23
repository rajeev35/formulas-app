import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  useColorScheme,
  TouchableOpacity
} from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { useAppContext } from '@/context/AppContext';
import FormulaCard from '@/components/FormulaCard';
import { getFormulasBySubjectAndGrade } from '@/data/formulas';
import { getSubject } from '@/data/subjects';
import { ChevronLeft } from 'lucide-react-native';

export default function FormulasScreen() {
  const { subjectId, grade } = useLocalSearchParams();
  const { language, isBookmarked, toggleBookmark } = useAppContext();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const subject = getSubject(subjectId as string);
  const formulas = getFormulasBySubjectAndGrade(
    subjectId as string, 
    parseInt(grade as string, 10)
  );

  const handleFormulaPress = (formula: any) => {
    router.push({
      pathname: `/formula-detail`,
      params: { formulaId: formula.id }
    });
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
        <View>
          <Text style={[styles.title, isDark && styles.titleDark]}>
            {language === 'en' ? subject?.name : subject?.nameHindi}
          </Text>
          <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>
            {language === 'en' 
              ? `Class ${grade} Formulas` 
              : `कक्षा ${grade} के फॉर्मूले`}
          </Text>
        </View>
      </View>

      {formulas.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, isDark && styles.emptyTextDark]}>
            {language === 'en' 
              ? 'No formulas available for this subject and grade' 
              : 'इस विषय और कक्षा के लिए कोई फॉर्मूला उपलब्ध नहीं है'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={formulas}
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
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
  },
  titleDark: {
    color: '#F9FAFB',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  subtitleDark: {
    color: '#9CA3AF',
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
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  emptyTextDark: {
    color: '#9CA3AF',
  },
});