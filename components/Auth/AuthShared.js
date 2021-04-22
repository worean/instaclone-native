import styled from "styled-components";

export const TextInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.15);
  width: 100%;
  padding: 10px 5px;
  margin-bottom: ${(props) => (props.lastOne ? 20 : 9)}px;
  border-radius: 4px;
  color: white;
`;
