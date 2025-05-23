import React from 'react';
import { View, Text, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import { useAppContext } from '@/context/AppContext';
import GradeSelector from '@/components/GradeSelector';
import SubjectCard from '@/components/SubjectCard';
import { subjects } from '@/data/subjects';
import { router } from 'expo-router';

export default function SubjectsScreen() {
  const { language, selectedGrade, setSelectedGrade } = useAppContext();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleSubjectPress = (subject: any) => {
    router.push({
      pathname: `/formulas`,
      params: { 
        subjectId: subject.id,
        grade: selectedGrade
      }
    });
  };

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, isDark && styles.titleDark]}>
            {language === 'en' ? 'Subjects' : 'विषय'}
          </Text>
          <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>
            {language === 'en' 
              ? 'Choose a subject to explore formulas' 
              : 'फॉर्मूले देखने के लिए विषय चुनें'}
          </Text>
        </View>

        <GradeSelector 
          selectedGrade={selectedGrade} 
          onSelectGrade={setSelectedGrade} 
        />

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
  subjectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});