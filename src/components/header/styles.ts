import styled from "styled-components/native";

export const Container = styled.View``,
  HeaderView = styled.View`
    padding: 20px 20px;
    background-color: ${(props) => props.theme.accent};
  `,
  View = styled.View`
    align-items: center;
    margin-top: 70px;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 20px;
  `,
  Text = styled.Text`
    color: ${(props) => props.theme.text};
    font-weight: bold;
  `,
  Title = styled.Text`
    font-size: 24px;
    color: ${(props) => props.theme.titles};
    font-weight: bold;
  `;
