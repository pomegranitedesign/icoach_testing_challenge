import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const Modal = ({
  name,
  setName,
  phone,
  setPhone,
  handleSubmit,
  modalOpened,
  setModalOpened
}) => {
  // Spring
  // Библиотека для комплексных и простых анимаций в React.js

  const modalSpring = useSpring({
    opacity: modalOpened ? 1 : 0,
    visibility: modalOpened ? "visible" : "hidden"
  }); // Для модального окна

  const modalBackgroundSpring = useSpring({
    opacity: modalOpened ? 0.5 : 0,
    visibility: modalOpened ? "visible" : "hidden"
  }); // Для фона

  return (
    <Wrapper style={modalSpring}>
      <Content>
        <Form onSubmit={handleSubmit} method="POST">
          <Field>
            <label>Name / Имя</label>

            <input
              type="text"
              placeholder="Дмитрий"
              value={name}
              onChange={event => setName(event.target.value)}
              required
            />
          </Field>

          <Field>
            <label>Phone / Телефон</label>

            <input
              type="text"
              placeholder="Введите Номер Телефона"
              value={phone}
              onChange={event => setPhone(event.target.value)}
              required
            />
          </Field>

          <Button>Отправить</Button>
        </Form>
      </Content>

      <Background
        style={modalBackgroundSpring}
        onClick={_ => setModalOpened(false)}
      />
    </Wrapper>
  );
};

// Styled components
const Wrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled(animated.div)`
  background: white;
  padding: 20px;
  min-height: 300px;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0px 10px 20px -10px black;
`;

const Form = styled.form``;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 300px;

  label {
    font-size: 12px;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    border: 0px;
    border-bottom: 1px solid #4834d4;
    outline: 0;
  }
`;

const Background = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: black;
  z-index: -1;
`;

const Button = styled.button`
  padding: 10px;
  display: block;
  margin: 0 auto;
  width: 200px;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background: #f9ca24;
    width: 300px;
  }
`;

export default Modal;
