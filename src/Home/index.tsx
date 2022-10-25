import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Header } from "../components/header";
import { ThemeProvider } from "styled-components/native";
import { lightTheme, darkTheme } from "../theme";
import { Container } from "./styles";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const onToggleSwitch = () => setIsDarkTheme(!isDarkTheme);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Container>
          <Header onValueChange={onToggleSwitch} isDarkTheme={isDarkTheme} />
          <StatusBar style="auto" />
        </Container>
      </ThemeProvider>
    </>
  );
}
