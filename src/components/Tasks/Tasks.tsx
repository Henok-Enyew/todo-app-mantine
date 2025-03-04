import { Box, Button, Checkbox, Flex, Group, Text } from '@mantine/core';

// import { useForm } from '@mantine/form';

// import classes from './Form.module.css';

function Tasks() {
  const tasks = [
    { id: 1, title: 'Buy groceries', isDone: false },
    { id: 2, title: 'Clean the house', isDone: true },
    { id: 3, title: 'Finish homework', isDone: false },
    { id: 4, title: 'Walk the dog', isDone: true },
    { id: 5, title: 'Prepare lunch', isDone: false },
    { id: 6, title: 'Pay bills', isDone: true },
    { id: 7, title: 'Visit the gym', isDone: false },
    { id: 8, title: 'Call mom', isDone: true },
    { id: 9, title: 'Read a book', isDone: false },
    { id: 10, title: 'Do laundry', isDone: true },
  ];

  //   const form = useForm({});

  return (
    <Box maw={340} mx="auto" my={50}>
      {tasks.map((task) => (
        <Flex
          key={task.id}
          my={10}
          mx="auto"
          align="center"
          justify="space-between"
          gap="md"
          w="400"
        >
          <Group>
            <Checkbox checked={task.isDone} color="rgb(217, 131, 38)" radius="xl" size="md" />
            <Text size="lg">{task.title}</Text>
          </Group>
          <Button
            size="xs"
            radius="lg"
            bg="rgba(217, 130, 38, 0.61)"
            p={4}
            variant="filled"
            justify="flex-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              //   class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </Button>
        </Flex>
      ))}
    </Box>
  );
}

export { Tasks };
