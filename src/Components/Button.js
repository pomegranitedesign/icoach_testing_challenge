/**
 *
 * @Button
 * Данный компонент ответственный за открытие модального
 * окна
 *
 */

import React from "react";
import styled from "styled-components";

const Button = ({ setModalOpened }) => {
  return <Main onClick={_ => setModalOpened(true)}>Open</Main>;
};

// Styled components
// Нельзя называть компоненты одинаково
const Main = styled.button`
  padding: 15px;
  display: block;
  width: 200px;
  border: 0px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  font-size: 16px;
  font-weight: 400;
  outline: 0;
  background: #f9ca24;

  &:hover {
    background: #130f40;
    color: white;
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px -10px #130f40;
  }

  &:active {
    transform: translateY(3px);
    box-shadow: 0px 5px 20px -10px #130f40;
  }
`;

export default Button;
