export const contactsInitialState = [
  {
    id: 1,
    label: "Mohnish",
    value: "1",
  },
  {
    id: 2,
    label: "Lokhande",
    value: "2",
  },
  {
    id: 3,
    label: "John",
    value: "3",
  },
  {
    id: 4,
    label: "Doe",
    value: "4",
  },
];

export const chatInitialState = [
  {
    id: 1,
    name: "Mohnish",
    participants: [1], //length 1 if self, length 2 if dm, length > 2 if group
    lastMsg: "Hello",
    time: "10:00",
  },
];

export const conversationInitialState = {
  1: {
    idx: 1,
    messages: [
      {
        id: 1,
        sender: 2,
        content: "Hello",
        timestamp: "2023-10-01T10:00:00Z",
      },
    ],
  },
};
