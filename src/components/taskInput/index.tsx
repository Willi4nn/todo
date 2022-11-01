import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Icon, Input } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

interface TaskInputProps {
  addTask: (task: string) => void;
}

export function TaskInput({ addTask }: TaskInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    if (!task) {
      return;
    }

    addTask(task);
    setTask("");
  }

  return (
    <View>
      <Input
        as={TextInput}
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <Icon as={Ionicons} onPress={handleAddNewTask} name="add" size={32} />
    </View>
  );
}
