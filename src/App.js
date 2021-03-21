import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './component/ChatFeed';
import LoginForm from './component/LoginForm';
import './App.css';

const projectID = "047b6267-3cf4-4076-8244-6482a6fcb992";

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;
 

