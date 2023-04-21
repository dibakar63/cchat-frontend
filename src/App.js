import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import './App.css'
import Chatfeed from './components/Chatfeed.js';
import Modal from './components/LoginForm';
const projectID="20c0a8ae-3226-4c40-9d5a-2ec48e62ea5a"
const App = () => {
    if (!localStorage.getItem('username')) return <Modal />;
  return (
    <ChatEngine
      height='100vh'
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=>
      <Chatfeed {...chatAppProps}/>}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  )
}

export default App
