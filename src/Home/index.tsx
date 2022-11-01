import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Header } from "../components/header";
import { ThemeProvider } from "styled-components/native";
import { lightTheme, darkTheme } from "../theme";
import { Container } from "./styles";
import { Task, TaskList } from "../components/taskList";
import { ScrollView } from "react-native";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const onToggleSwitch = () => setIsDarkTheme(!isDarkTheme);

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
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Container>
          <StatusBar style="auto" />
          <Header
            onValueChange={onToggleSwitch}
            isDarkTheme={isDarkTheme}
            setTasks={(newTask) => setTasks([...tasks, newTask])}
            taskLength={tasks.length}
          />
          <ScrollView>
            <TaskList
              tasks={tasks}
              toggleTaskDone={handleToggleTaskDone}
              removeTask={handleRemoveTask}
            />
          </ScrollView>
        </Container>
      </ThemeProvider>
    </>
  );
}
