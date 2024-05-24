import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import TodoContext from '@/context/todo.context';
import { getAll } from '@/requests/todo.request';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    getAll()
    .then((results) => {
      const mappedData = results.map((_result) => {
        return {
          id: _result.id,
          status: _result.status,
          value: _result.task
        }
      })
      setTasks(mappedData)
    })
  }, [])

  return (
    <TodoContext.Provider value={{
      tasks,
      setTasks,
    }}>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Todo',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="completed"
        options={{
          title: 'Completed',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
    </TodoContext.Provider>
  );
}
