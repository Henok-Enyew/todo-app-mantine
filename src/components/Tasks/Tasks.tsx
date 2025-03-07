import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Box, Button, Center, Checkbox, Flex, Group, Text } from '@mantine/core';
import { fetchTasks } from '@/api';
// import { useForm } from '@mantine/form';

// import classes from './Form.module.css';
import useTaskStore from '../store/useTaskStore';

type TaskType = {
  id: number;
  title: string;
  is_done: boolean;
};

const styleDone = {
  textDecoration: 'line-through',
  opacity: '50%',
};
function Tasks() {
  const { tasks, toggleTaskLocal, deleteTaskLocal, setTasks } = useTaskStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      setLoading(true);
      const tasksData = await fetchTasks();
      setTasks(tasksData);
    };
    getTasks();
    setLoading(false);
  }, []);

  return (
    <Box maw={340} mx="auto" my={50}>
      {loading ? (
        <Center>
          <BeatLoader color="rgb(217, 131, 38)" size={50} />
        </Center>
      ) : tasks.length === 0 ? (
        <Center>
          <Text>No Task Addded Yet 😒</Text>
        </Center>
      ) : (
        tasks.map((task: TaskType) => (
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
              <Checkbox
                checked={task.is_done}
                color="rgb(217, 131, 38)"
                radius="xl"
                size="md"
                onChange={() => {
                  toggleTaskLocal(task.id);
                }}
              />
              <Text
                size="lg"
                onClick={() => {
                  toggleTaskLocal(task.id);
                }}
                style={task.is_done ? styleDone : {}}
              >
                {task.title}
              </Text>
            </Group>
            <Button
              size="xs"
              radius="lg"
              bg="rgba(217, 130, 38, 0.91)"
              p={4}
              variant="filled"
              justify="flex-end"
              onClick={() => {
                deleteTaskLocal(task.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
        ))
      )}
    </Box>
  );
}

export { Tasks };
