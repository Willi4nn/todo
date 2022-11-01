import React, { useState } from "react";
import { Image } from "react-native";
import { Container, View, Text, Title, HeaderView } from "./styles";
import { Switch } from "react-native-paper";
import { Task } from "../taskList";
import { TaskInput } from "../taskInput";

interface HeaderProps {
  onValueChange: () => void;
  isDarkTheme: boolean;
  taskLength: number;
  setTasks: (tasks: Task) => void;
}

export function Header({
  taskLength,
  setTasks,
  onValueChange,
  isDarkTheme,
}: HeaderProps) {
  function handleAddTask(newTaskTitle: string) {
    const newTasks = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks(newTasks);
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
        <View>
          <Text>Adicionar novo to do</Text>
          <Text>Número de tasks: {taskLength}</Text>
        </View>
        <TaskInput addTask={handleAddTask} />
        <Title>Minhas tasks</Title>
      </HeaderView>
    </Container>
  );
}
