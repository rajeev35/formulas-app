import { Tabs } from 'expo-router';
import { useColorScheme, View, Text, Image } from 'react-native';
import { Book, Home, Search, Settings, Bookmark } from 'lucide-react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const primaryColor = '#3B82F6';

  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1F2937' : '#FFFFFF',
        },
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1F2937' : '#FFFFFF',
        },
        headerTintColor: colorScheme === 'dark' ? '#FFFFFF' : '#000000',

        headerTitle: 'Aryan Coaching Center',

        headerLeft: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12 }}>
            <Image
              source={require('../../assets/images/logo1.png')}  
              style={{ width: 40, height: 40, resizeMode: 'contain' }}
            />
            
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
          title: '',
        }}
      />
      <Tabs.Screen
        name="subjects"
        options={{
          tabBarIcon: ({ color, size }) => <Book size={size} color={color} />,
          title: '',
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, size }) => <Search size={size} color={color} />,
          title: '',
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ color, size }) => <Bookmark size={size} color={color} />,
          title: '',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
          title: '',
        }}
      />
    </Tabs>
  );
}
