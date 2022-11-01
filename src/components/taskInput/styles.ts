import styled from "styled-components/native";

export const Input = styled.TextInput`
    height: 50px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    padding: 10px;
    margin-bottom: 50px;
    border-radius: 5px;
    font-weight: bold;
  `,
  Icon = styled.Button`
    color: ${(props) => props.theme.text};
    position: absolute;
    margin-top: 8px;
    margin-left: 320px;
  `;
