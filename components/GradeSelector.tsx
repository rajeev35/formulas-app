import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useColorScheme } from 'react-native';

type GradeSelectorProps = {
  selectedGrade: number;
  onSelectGrade: (grade: number) => void;
};

const GradeSelector: React.FC<GradeSelectorProps> = ({ selectedGrade, onSelectGrade }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const grades = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, isDark && styles.labelDark]}>Select Class</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {grades.map((grade) => (
          <TouchableOpacity
            key={grade}
            style={[
              styles.gradeButton,
              grade === selectedGrade && styles.selectedGrade,
              isDark && styles.gradeButtonDark,
              grade === selectedGrade && isDark && styles.selectedGradeDark,
            ]}
            onPress={() => onSelectGrade(grade)}
          >
            <Text
              style={[
                styles.gradeText,
                grade === selectedGrade && styles.selectedGradeText,
                isDark && styles.gradeTextDark,
                grade === selectedGrade && isDark && styles.selectedGradeTextDark,
              ]}
            >
              {grade}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginLeft: 16,
    color: '#333',
  },
  labelDark: {
    color: '#f0f0f0',
  },
  scrollContainer: {
    paddingHorizontal: 8,
  },
  gradeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  gradeButtonDark: {
    backgroundColor: '#2D3748',
    borderColor: '#4A5568',
  },
  selectedGrade: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  selectedGradeDark: {
    backgroundColor: '#3B82F6',
    borderColor: '#2563EB',
  },
  gradeText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  gradeTextDark: {
    color: '#f0f0f0',
  },
  selectedGradeText: {
    color: '#fff',
  },
  selectedGradeTextDark: {
    color: '#fff',
  },
});

export default GradeSelector;