import CheckBoxItem from '@/components/CheckBoxItem';
import TodoContext from '@/context/todo.context';
import { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { updateTodo } from "@/requests/todo.request";


export default function CompletedList() {
  const { tasks, refetchTaskLists } = useContext(TodoContext);


  const onUnCheck = async (taskId) => {
    await updateTodo(taskId, {
      status: 'pending'
    });
    await refetchTaskLists();
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 50 }}>
        <ScrollView>
        { tasks
          .filter((_task) => _task.status === 'completed')
          .map((task) => {
          return <CheckBoxItem key={task.id} task={task} onCheck={() => onUnCheck(task.id)}/>
        })}
      </ScrollView>
    </View>
  )  
  
}
