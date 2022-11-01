import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  done: {
    textDecorationLine: "line-through",
    color: "cyan",
  },
  notDone: {
    textDecorationLine: "none",
  },
});

export const Card = styled.View`
    align-items: center;
    flex-direction: row;
    padding: 15px;
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
    color: ${(props) => props.theme.accent};
  `,
  Text = styled.Text`
    font-size: 18px;
    padding-left: 20px;
    color: ${(props) => props.theme.text};
  `;
