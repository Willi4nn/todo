import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${(props) => props.theme.accent};
  `,
  HeaderView = styled.View`
    margin-top: 50px;
    padding: 20px 20px;
  `,
  View = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  `,
  Text = styled.Text`
    padding-top: 30px;
    color: ${(props) => props.theme.text};
    font-weight: bold;
  `,
  Title = styled.Text`
    font-size: 24px;
    color: ${(props) => props.theme.titles};
    font-weight: bold;
  `;
