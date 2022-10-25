import React, { useState } from "react";
import { Image } from "react-native";
import { Container, View, Text, Title, HeaderView } from "./styles";
import { Switch } from "react-native-paper";
import { Task, TaskList } from "../taskList";
import { TaskInput } from "../taskInput";

interface SwitchProps {
  onValueChange: () => void;
  isDarkTheme: boolean;
}

export function Header({ onValueChange, isDarkTheme }: SwitchProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTasks = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks([...tasks, newTasks]);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) => ({ ...task }));

    const foundItem = updatedTasks.find((item) => item.id === id);

    if (!foundItem) return;

    foundItem.done = !foundItem.done;
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    const removeTasks = tasks.filter((task) => task.id != id);

    setTasks(removeTasks);
  }

  return (
    <Container>
      <HeaderView>
        <View>
          <Image
            source={require("../../../assets/logo.png")}
            style={{ width: 89, height: 30 }}
          />
          <Switch value={isDarkTheme} onValueChange={onValueChange} />
        </View>
        <Text>Adicionar novo to do</Text>
        <TaskInput addTask={handleAddTask} />
        <Title>Minhas tasks</Title>
      </HeaderView>
      <TaskList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </Container>
  );
}
