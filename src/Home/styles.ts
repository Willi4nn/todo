import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-bottom: 24px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.background};
`;
