import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';

type LanguageToggleProps = {
  language: 'en' | 'hi';
  onToggle: () => void;
};

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.button, 
          styles.leftButton, 
          language === 'en' && styles.activeButton,
          isDark && styles.buttonDark,
          language === 'en' && isDark && styles.activeButtonDark
        ]} 
        onPress={() => language === 'hi' && onToggle()}
      >
        <Text 
          style={[
            styles.buttonText, 
            language === 'en' && styles.activeButtonText,
            isDark && styles.buttonTextDark,
            language === 'en' && isDark && styles.activeButtonTextDark
          ]}
        >
          English
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.button, 
          styles.rightButton, 
          language === 'hi' && styles.activeButton,
          isDark && styles.buttonDark,
          language === 'hi' && isDark && styles.activeButtonDark
        ]} 
        onPress={() => language === 'en' && onToggle()}
      >
        <Text 
          style={[
            styles.buttonText, 
            language === 'hi' && styles.activeButtonText,
            isDark && styles.buttonTextDark,
            language === 'hi' && isDark && styles.activeButtonTextDark
          ]}
        >
          हिंदी
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignSelf: 'center',
    marginVertical: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
  },
  buttonDark: {
    backgroundColor: '#374151',
    borderColor: '#4B5563',
  },
  leftButton: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightButton: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  activeButton: {
    backgroundColor: '#3B82F6',
  },
  activeButtonDark: {
    backgroundColor: '#2563EB',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  buttonTextDark: {
    color: '#D1D5DB',
  },
  activeButtonText: {
    color: '#FFFFFF',
  },
  activeButtonTextDark: {
    color: '#FFFFFF',
  },
});

export default LanguageToggle;