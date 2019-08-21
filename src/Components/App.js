import React, { useState } from "react";
import styled from "styled-components";

import Container from "./Container";
import Button from "./Button";
import Modal from "./Modal";

const TOKEN = "978100841:AAFpCF9228--1gYwCDPHwVrUteUaEi64Hgs";
const CHAT_ID = "364878536";

const App = _ => {
  // State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [modalOpened, setModalOpened] = useState(false);

  // Helpers
  const handleSubmit = event => {
    event.preventDefault();
    alert("Данные Отправлены Успешно"); // Уведомляем пользователя об успешной отправке данных

    // Очищаем поля
    setName("");
    setPhone("");

    // Sending a message to Telegram bot
    // Отправка сообщения в Телеграм
    fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=-${CHAT_ID}&text=${name} ${phone}`
    )
      .then(response => response.json())
      .then(response => console.log(response));

    // Закрываем модальное окно
    setModalOpened(false);
  };

  return (
    <Container>
      <Wrapper>
        <Button setModalOpened={setModalOpened} />
        <Modal
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
      </Wrapper>
    </Container>
  );
};

// Styled Components
// Библиотека которая разрешает создавать стилизованные компоненты
// без использования CSS файлов
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default App;
