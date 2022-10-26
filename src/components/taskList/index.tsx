import React from "react";
import { ScrollView, View } from "react-native";
import { Checkbox, Button } from "react-native-paper";
import { Container, CardView, Card, Text, Icon } from "./styles";
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
    <Container>
      <ScrollView>
        {tasks.map((task) => (
          <View key={task.id}>
            <View>
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
                <Button onPress={() => removeTask(task.id)}>
                  <Icon as={Ionicons} name="trash-outline" size={30}></Icon>
                </Button>
              </Card>
            </View>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
}
