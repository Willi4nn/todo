import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.background};
`;
