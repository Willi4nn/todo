import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 30px;
    background-color: ${(props) => props.theme.background};
  `,
  Card = styled.View`
    padding: 20px;
    margin: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.card};
  `,
  Text = styled.Text`
    color: ${(props) => props.theme.text};
  `;
