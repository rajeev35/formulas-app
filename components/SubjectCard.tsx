import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { Book, Calculator, FlaskRound as Flask, Globe, Pi } from 'lucide-react-native';

export type Subject = {
  id: string;
  name: string;
  nameHindi: string;
  color: string;
  icon: string;
};

type SubjectCardProps = {
  subject: Subject;
  language: 'en' | 'hi';
  onPress: (subject: Subject) => void;
};

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, language, onPress }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const renderIcon = () => {
    const iconSize = 28;
    const iconColor = '#fff';

    switch (subject.icon) {
      case 'math':
        return <Calculator size={iconSize} color={iconColor} />;
      case 'science':
        return <Flask size={iconSize} color={iconColor} />;
      case 'physics':
        return <Pi size={iconSize} color={iconColor} />;
      case 'geography':
        return <Globe size={iconSize} color={iconColor} />;
      default:
        return <Book size={iconSize} color={iconColor} />;
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.card, 
        { backgroundColor: subject.color },
        isDark && styles.cardDark
      ]}
      onPress={() => onPress(subject)}
    >
      <View style={styles.iconContainer}>
        {renderIcon()}
      </View>
      <Text style={styles.title}>
        {language === 'en' ? subject.name : subject.nameHindi}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
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
    shadowColor: '#fff',
    shadowOpacity: 0.05,
  },
  iconContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

export default SubjectCard;