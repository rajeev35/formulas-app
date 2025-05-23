import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import { useAppContext } from '@/context/AppContext';
import GradeSelector from '@/components/GradeSelector';
import LanguageToggle from '@/components/LanguageToggle';
import SubjectCard from '@/components/SubjectCard';
import FormulaCard from '@/components/FormulaCard';
import { subjects } from '@/data/subjects';
import { getFormulasByGrade } from '@/data/formulas';
import { router } from 'expo-router';

export default function HomeScreen() {
  const { 
    language, 
    toggleLanguage, 
    selectedGrade, 
    setSelectedGrade, 
    isBookmarked, 
    toggleBookmark 
  } = useAppContext();
  
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  const popularFormulas = getFormulasByGrade(selectedGrade).slice(0, 3);

  const handleSubjectPress = (subject: any) => {
    router.push({
      pathname: `/formulas`,
      params: { 
        subjectId: subject.id,
        grade: selectedGrade
      }
    });
  };

  const handleFormulaPress = (formula: any) => {
    router.push({
      pathname: `/formula-detail`,
      params: { formulaId: formula.id }
    });
  };

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, isDark && styles.titleDark]}>
            {language === 'en' ? 'Formula Finder' : 'फॉर्मूला फाइंडर'}
          </Text>
          <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>
            {language === 'en' 
              ? 'All formulas in one place' 
              : 'सभी फॉर्मूले एक ही जगह पर'}
          </Text>
        </View>

        <LanguageToggle language={language} onToggle={toggleLanguage} />
        
        <GradeSelector 
          selectedGrade={selectedGrade} 
          onSelectGrade={setSelectedGrade} 
        />

        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
          {language === 'en' ? 'Subjects' : 'विषय'}
        </Text>
        <View style={styles.subjectsGrid}>
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              language={language}
              onPress={handleSubjectPress}
            />
          ))}
        </View>

        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
          {language === 'en' ? 'Popular Formulas' : 'लोकप्रिय फॉर्मूले'}
        </Text>
        {popularFormulas.map((formula) => (
          <FormulaCard
            key={formula.id}
            formula={formula}
            language={language}
            isBookmarked={isBookmarked(formula.id)}
            onPress={handleFormulaPress}
            onToggleBookmark={toggleBookmark}
          />
        ))}
      </ScrollView>
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
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
  },
  subtitleDark: {
    color: '#9CA3AF',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitleDark: {
    color: '#F9FAFB',
  },
  subjectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});