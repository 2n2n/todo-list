import App from '@/components/App';
import CheckBoxItem from '@/components/CheckBoxItem';
import Profile from '@/components/Profile';
import TodoContext from '@/context/todo.context';
import { useContext, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import uuid from 'react-native-uuid';
export default function TodoList() {
  
  const { tasks, setTasks } = useContext(TodoContext);
  const [taskInput, setTaskInput] = useState<string>('');

  const onAddTaskHandler = () => {
    const newTasks = [...tasks, {
      id: uuid.v4(),
      value: taskInput,
      status: 'pending'
    }];
    setTasks(newTasks);
    setTaskInput("");
  }

  const onClear = () => {
    setTasks([])
  }

  const onCheck = (taskId) => {
    const filteredList = tasks.map((_data) => {
      if(_data.id === taskId) {
        _data.status = 'completed';
      }
      return _data;
    })
    setTasks(filteredList);
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 50 }}>
      <TextInput 
        value={taskInput}
        style={{ borderWidth: 1, borderColor: 'black' }} 
        onChangeText={(text) => {
          setTaskInput(text)
        }}
      />
      <Button title="Add task" onPress={onAddTaskHandler}/>
      <Button title="Clear" onPress={onClear}/>
      <ScrollView>
        { tasks
          .filter((_task) => _task.status === 'pending')
          .map((task) => {
          return <CheckBoxItem key={task.id} task={task} onCheck={() => onCheck(task.id)}/>
        })}
      </ScrollView>
      

    </View>
  );
}
