export const contactsInitialState = [
  {
    id: 1,
    name: "Mohnish",
  },
  {
    id: 2,
    name: "Lokhande",
  },
  {
    id: 3,
    name: "John",
  },
  {
    id: 4,
    name: "John",
  },
];

export const chatInitialState = [
  {
    id: 1,
    name: "Mohnish",
    message: "Hello",
    time: "10:00",
    isSelf: true,
  },
];

export const conversationInitialState = [
  {
    id: 1,
    name: "Mohnish",
    participants: [1, 2], //length 1 if self, length 2 if dm, length > 2 if group
    messages: [
      {
        messageId: "msg1",
        sender: "user1",
        content: "Hello!",
        timestamp: "2023-10-01T10:00:00Z",
      },
    ],
  },
];
