import React, { createContext, useContext, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { Formula } from '@/components/FormulaCard';
import { Subject } from '@/components/SubjectCard';

// Storage interface to abstract platform-specific implementations
interface Storage {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
}

// Web storage implementation using localStorage
const webStorage: Storage = {
  getItem: async (key: string) => {
    return localStorage.getItem(key);
  },
  setItem: async (key: string, value: string) => {
    localStorage.setItem(key, value);
  },
};

// Platform-specific storage implementation
let storage: Storage;

if (Platform.OS === 'web') {
  storage = webStorage;
} else {
  // For native platforms, use AsyncStorage
  const AsyncStorage = require('@react-native-async-storage/async-storage').default;
  storage = {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  };
}

type AppContextType = {
  language: 'en' | 'hi';
  toggleLanguage: () => void;
  bookmarks: string[];
  toggleBookmark: (formulaId: string) => void;
  isBookmarked: (formulaId: string) => boolean;
  selectedGrade: number;
  setSelectedGrade: (grade: number) => void;
};

const AppContext = createContext<AppContextType>({
  language: 'en',
  toggleLanguage: () => {},
  bookmarks: [],
  toggleBookmark: () => {},
  isBookmarked: () => false,
  selectedGrade: 1,
  setSelectedGrade: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<number>(5);

  // Load saved preferences
  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const savedLanguage = await storage.getItem('language');
        const savedBookmarks = await storage.getItem('bookmarks');
        const savedGrade = await storage.getItem('selectedGrade');

        if (savedLanguage) {
          setLanguage(savedLanguage as 'en' | 'hi');
        }
        
        if (savedBookmarks) {
          setBookmarks(JSON.parse(savedBookmarks));
        }
        
        if (savedGrade) {
          setSelectedGrade(parseInt(savedGrade, 10));
        }
      } catch (error) {
        console.error('Failed to load preferences:', error);
      }
    };

    loadPreferences();
  }, []);

  // Save preferences when they change
  useEffect(() => {
    const savePreferences = async () => {
      try {
        await storage.setItem('language', language);
        await storage.setItem('bookmarks', JSON.stringify(bookmarks));
        await storage.setItem('selectedGrade', selectedGrade.toString());
      } catch (error) {
        console.error('Failed to save preferences:', error);
      }
    };

    savePreferences();
  }, [language, bookmarks, selectedGrade]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const toggleBookmark = (formulaId: string) => {
    setBookmarks(prev => {
      if (prev.includes(formulaId)) {
        return prev.filter(id => id !== formulaId);
      } else {
        return [...prev, formulaId];
      }
    });
  };

  const isBookmarked = (formulaId: string) => {
    return bookmarks.includes(formulaId);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        toggleLanguage,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        selectedGrade,
        setSelectedGrade,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};