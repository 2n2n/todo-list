import CheckBoxItem from '@/components/CheckBoxItem';
import TodoContext from '@/context/todo.context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function CompletedList() {
  const { tasks, setTasks } = useContext(TodoContext)

  const onUnCheck = (taskId) => {
    const filteredList = tasks.map((_data) => {
      if(_data.id === taskId) {
        _data.status = 'pending';
      }
      return _data;
    })
    setTasks(filteredList);
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 50 }}>
        <ScrollView>
        { tasks
          .filter((_task) => _task.status === 'completed')
          .map((task) => {
          return <CheckBoxItem key={task.id} task={task} onUnCheck={() => onUnCheck(task.id)}/>
        })}
      </ScrollView>
    </View>
  )  
  
}
