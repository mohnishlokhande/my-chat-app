# My chat application

View the live application here: https://mohnishlokhande.github.io/my-chat-app/

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Instructions](#instructions)

## Features

- Create one or more chats
- Send and display messages for a chat
- Delete a chat
- Search a chat

#### Additional features

- Responsive
- Latest Chat comes on top at sidebar

#### Can Extend

- Group messages
- Draft message for a chat, which was not sent
- Add new contacts

## Architecture

The application has mainly 4 components:

#### Sidebar

- Navigate between the chats
- Delete chat
- Search chat
- Open a interface to create a new chat

#### Chat interface

- Display the conversation of selected chat
- Send message

#### Create new chat

- Create new chat via selecting a contact

#### Empty page

- Welcome page

### Data structures

Maintained two main structures for the chat

- `chatInitialState`: It is an array of all the chats in order(latest first)
- `conversationInitialState`: It is an object with the key as ID of chat. It contains the messages for each chat

## Technologies

- Built with React.js working in Vite
- For state managemengt: [zustand](https://zustand-demo.pmnd.rs/)
- For icons: [@ant-design/icons](https://ant.design/components/icon)

## Instructions

To run the application locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/mohnishlokhande/my-chat-app.git
   cd my-chat-app
   ```

2. Install server dependencies:

   ```sh
   yarn install
   ```

3. Start:
   ```sh
   yarn dev
   ```
4. Open your browser and navigate to `http://localhost:5173/my-chat-app/`.
