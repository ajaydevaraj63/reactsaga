// import React, { Component } from 'react';
// import { ThemeProvider } from 'styled-components';
// import ChatBot from 'react-simple-chatbot';

// class Chatbot extends Component {
//   render() {
//     // Define the steps for the chatbot
//     const steps = [
//       {
//         id: '1',
//         message: 'Hello! How can I assist you?',
//         trigger: '2',
//       },
//       {
//         id: '2',
//         user: true,
//         trigger: '3',
//       },
//       {
//         id: '3',
//         message: 'You said: {previousValue}. How can I help you further?',
//         trigger: '2',
//       },
//     ];

//     // Define the theme for the chatbot
//     const theme = {
//       background: '#f5f8fb',
//       fontFamily: 'Arial, sans-serif',
//       headerBgColor: '#4e8cff',
//       headerFontColor: '#fff',
//       headerFontSize: '15px',
//       botBubbleColor: '#4e8cff',
//       botFontColor: '#fff',
//       userBubbleColor: '#fff',
//       userFontColor: '#4a4a4a',
//     };

//     return (
//       <ThemeProvider theme={theme}>
//         <ChatBot steps={steps} />
//       </ThemeProvider>
//     );
//   }
// }

// export default Chatbot;
import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';

class Chatbot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
    };
  }

  handleUserMessage = (message) => {
    axios
      .post('/question-answering-api', { question: message })
      .then((response) => {
        const answer = response.data.answer;
        this.setState({ answer });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    const theme = {
      background: '#f5f8fb',
      fontFamily: 'Arial, sans-serif',
      headerBgColor: '#4e8cff',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: '#4e8cff',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    };

    const steps = [
      {
        id: '1',
        message: 'Hello! How can I assist you?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'You said: {previousValue}',
        trigger: '4',
      },
      {
        id: '4',
        message: 'Let me find the answer for you...',
        trigger: '5',
        delay: 1000,
      },
      {
        id: '5',
        component: (
          <div>
            {({ previousStep }) => (
              <div>
                <p>{this.state.answer}</p>
                <button onClick={() => previousStep()}>&larr; Back</button>
              </div>
            )}
          </div>
        ),
        end: true,
      },
    ];

    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          handleUserMessage={this.handleUserMessage}
        />
      </ThemeProvider>
    );
  }
}

export default Chatbot;
