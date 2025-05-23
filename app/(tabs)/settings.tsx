import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Switch, 
  TouchableOpacity, 
  useColorScheme, 
  Linking
} from 'react-native';
import { useAppContext } from '@/context/AppContext';
import LanguageToggle from '@/components/LanguageToggle';
import { ChevronRight, Sun, Moon, Info, Book, Share } from 'lucide-react-native';

export default function SettingsScreen() {
  const { language, toggleLanguage } = useAppContext();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleShare = async () => {
    try {
      await Linking.share({
        message: language === 'en' 
          ? 'Check out this amazing Formula Finder app for students!' 
          : 'इस अद्भुत फॉर्मूला फाइंडर ऐप को देखें जो छात्रों के लिए है!',
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <View style={styles.header}>
        <Text style={[styles.title, isDark && styles.titleDark]}>
          {language === 'en' ? 'Settings' : 'सेटिंग्स'}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
          {language === 'en' ? 'Preferences' : 'प्राथमिकताएँ'}
        </Text>
        
        <View style={[styles.card, isDark && styles.cardDark]}>
          <Text style={[styles.settingLabel, isDark && styles.settingLabelDark]}>
            {language === 'en' ? 'Language' : 'भाषा'}
          </Text>
          <LanguageToggle language={language} onToggle={toggleLanguage} />
          
          <View style={styles.settingRow}>
            <View style={styles.settingLabelContainer}>
              <Sun size={20} color={isDark ? '#F3F4F6' : '#1F2937'} style={styles.settingIcon} />
              <Text style={[styles.settingLabel, isDark && styles.settingLabelDark]}>
                {language === 'en' ? 'Dark Mode' : 'डार्क मोड'}
              </Text>
            </View>
            <Text style={[styles.settingValue, isDark && styles.settingValueDark]}>
              {language === 'en' 
                ? 'System default' 
                : 'सिस्टम डिफॉल्ट'}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
          {language === 'en' ? 'About' : 'ऐप के बारे में'}
        </Text>
        
        <View style={[styles.card, isDark && styles.cardDark]}>
          <TouchableOpacity style={styles.settingRow}>
            <View style={styles.settingLabelContainer}>
              <Info size={20} color={isDark ? '#F3F4F6' : '#1F2937'} style={styles.settingIcon} />
              <Text style={[styles.settingLabel, isDark && styles.settingLabelDark]}>
                {language === 'en' ? 'About App' : 'ऐप के बारे में'}
              </Text>
            </View>
            <ChevronRight size={20} color={isDark ? '#9CA3AF' : '#6B7280'} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingRow}>
            <View style={styles.settingLabelContainer}>
              <Book size={20} color={isDark ? '#F3F4F6' : '#1F2937'} style={styles.settingIcon} />
              <Text style={[styles.settingLabel, isDark && styles.settingLabelDark]}>
                {language === 'en' ? 'How to Use' : 'उपयोग कैसे करें'}
              </Text>
            </View>
            <ChevronRight size={20} color={isDark ? '#9CA3AF' : '#6B7280'} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingRow} onPress={handleShare}>
            <View style={styles.settingLabelContainer}>
              <Share size={20} color={isDark ? '#F3F4F6' : '#1F2937'} style={styles.settingIcon} />
              <Text style={[styles.settingLabel, isDark && styles.settingLabelDark]}>
                {language === 'en' ? 'Share App' : 'ऐप शेयर करें'}
              </Text>
            </View>
            <ChevronRight size={20} color={isDark ? '#9CA3AF' : '#6B7280'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.footerText, isDark && styles.footerTextDark]}>
          {language === 'en' ? 'Version 1.0.0' : 'वर्शन 1.0.0'}
        </Text>
      </View>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4B5563',
    marginBottom: 12,
    marginLeft: 4,
  },
  sectionTitleDark: {
    color: '#9CA3AF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardDark: {
    backgroundColor: '#1F2937',
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: 12,
  },
  settingLabel: {
    fontSize: 16,
    color: '#1F2937',
  },
  settingLabelDark: {
    color: '#F3F4F6',
  },
  settingValue: {
    fontSize: 16,
    color: '#6B7280',
  },
  settingValueDark: {
    color: '#9CA3AF',
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
    padding: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  footerTextDark: {
    color: '#6B7280',
  },
});