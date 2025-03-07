import { Box, Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import useTaskStore from '../store/useTaskStore';

// import classes from './Form.module.css';

function Form() {
  const form = useForm({
    initialValues: {
      task: '', // Initialize the task field to an empty string
    },
    validate: {
      task: (value) => (value.trim().length === 0 ? 'Task is required' : null),
    },
  });
  const { addTaskLocal } = useTaskStore();

  return (
    <Box maw={740} mx="auto" my={50}>
      <form
        onSubmit={form.onSubmit((values) => {
          addTaskLocal(values.task);
          form.reset();
        })}
      >
        <Group justify="center" align="center" dir="row">
          <TextInput
            // className={classes.input}
            maxLength={30}
            radius="lg"
            withAsterisk
            placeholder="What do you need to do?"
            {...form.getInputProps('task')}
            w={360}
            size="md"
            color="#F1ECE6"
            {...form.getInputProps('task')}
            error={form.errors.task}
          />

          {/* <Group justify="flex-end" mt="md"> */}
          <Button type="submit" bg="#76B7CD" radius="lg" size="md">
            Add
          </Button>
          {/* </Group> */}
        </Group>
      </form>
    </Box>
  );
}

export { Form };
