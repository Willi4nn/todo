import React from "react";
import { View } from "react-native";
import { Checkbox, Button } from "react-native-paper";
import { CardView, Card, Text, Icon } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

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
    <View>
      {tasks.map((task) => (
        <View key={task.id}>
          <Card>
            <CardView>
              <Checkbox
                uncheckedColor="cyan"
                status={task.done ? "checked" : "unchecked"}
                onPress={() => {
                  toggleTaskDone(task.id);
                }}
              />
              <Text style={task.done ? styles.done : styles.notDone}>
                {task.title}
              </Text>
            </CardView>
            <Button
              style={{ borderRadius: 10 }}
              color="cyan"
              onPress={() => removeTask(task.id)}
            >
              <Icon as={Ionicons} name="trash-outline" size={24}></Icon>
            </Button>
          </Card>
        </View>
      ))}
    </View>
  );
}
