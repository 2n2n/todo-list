import CheckBoxItem from "@/components/CheckBoxItem";
import TodoContext from "@/context/todo.context";
import { addTodo, updateTodo } from "@/requests/todo.request";
import { useContext, useState } from "react";
import { View, TextInput, Button, ScrollView } from "react-native";
export default function TodoList() {
  const { tasks, refetchTaskLists } = useContext(TodoContext);
  const [taskInput, setTaskInput] = useState<string>("");

  const onAddTaskHandler = async () => {
    const payload = {
      task: taskInput,
    };

    await addTodo(payload);
    await refetchTaskLists();
    setTaskInput("");
  };

  const onClear = () => {
    setTasks([]);
  };

  const onCheck = async (taskId) => {
    await updateTodo(taskId, {
      status: 'completed'
    });
    await refetchTaskLists();
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 50 }}>
      <TextInput
        value={taskInput}
        style={{ borderWidth: 1, borderColor: "black" }}
        onChangeText={(text) => {
          setTaskInput(text);
        }}
      />
      <Button title="Add task" onPress={onAddTaskHandler} />
      <Button title="Clear" onPress={onClear} />
      <ScrollView>
        {tasks
          .filter((_task) => _task.status === "pending")
          .map((task) => {
            return (
              <CheckBoxItem
                key={task.id}
                task={task}
                onCheck={() => onCheck(task.id)}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}
