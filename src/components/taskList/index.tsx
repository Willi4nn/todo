import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Container, Card, Text } from "./styles";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function TaskList({
  tasks,
  toggleTaskDone,
  removeTask,
}: TasksListProps) {
  return (
    <Container>
      <ScrollView>
        {tasks.map((task) => (
          <View key={task.id}>
            <Card>
              <Text>{task.title}</Text>
            </Card>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
}
