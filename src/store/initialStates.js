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
    time: "10:00:00",
  },
  {
    id: 2,
    name: "John",
    participants: [1, 3], //length 1 if self, length 2 if dm, length > 2 if group
    lastMsg: "Hello",
    time: "10:00:00",
  },
];

// here key is chat id
export const conversationInitialState = {
  1: {
    idx: 1,
    messages: [
      {
        id: 1,
        sender: 2,
        content: "Hello",
        timestamp: "10:00:00",
      },
    ],
  },
  2: {
    idx: 2,
    messages: [
      {
        id: 1,
        sender: 3,
        content: "Hello",
        timestamp: "10:00:00",
      },
      {
        id: 2,
        sender: 3,
        content: "Hello there",
        timestamp: "10:01:00",
      },
    ],
  },
};
