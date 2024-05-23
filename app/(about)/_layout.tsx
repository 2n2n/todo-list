import { Tabs, router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Button } from 'react-native';

const AboutLayout = () => {
    return (
        <>
            <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'About Us',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    }}
                />
                <Tabs.Screen 
                    name="mission"
                    options={{ 
                        title: 'Mission',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    }}
                />
                <Tabs.Screen 
                    name="vision"
                    options={{ 
                        title: 'Vision',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    }}
                />
            </Tabs>
        </>
        
    )
};

export default AboutLayout;