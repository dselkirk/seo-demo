import { Conversation } from 'chat-template';
import ReactDOM from 'react-dom';
import React from 'react';

const showChatTemplate = (messages, element, delay = 1, height = 300) => {
  ReactDOM.render(<Conversation delay={delay} height={height} messages={messages} />,
    element);
};

module.exports = showChatTemplate;
