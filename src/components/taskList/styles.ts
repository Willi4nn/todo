import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  done: {
    textDecorationLine: "line-through",
    opacity: 0.6,
  },
  notDone: {
    textDecorationLine: "none",
  },
});

export const Container = styled.View`
    background-color: ${(props) => props.theme.background};
  `,
  Card = styled.View`
    align-items: center;
    flex-direction: row;
    padding: 20px;
    margin: 20px 20px 0px 20px;
    justify-content: space-between;
    border-radius: 10px;
    background-color: ${(props) => props.theme.card};
  `,
  CardView = styled.View`
  align-items: center;
  flex-direction: row;
`,
  Icon = styled.Button`
    color: ${(props) => props.theme.text};
  `,
  Text = styled.Text`
    font-size: 16px;
    padding-left: 20px;
    color: ${(props) => props.theme.text};
  `;
