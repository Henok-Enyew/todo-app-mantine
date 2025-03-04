import { Box, Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

// import classes from './Form.module.css';

function Form() {
  const form = useForm({});

  return (
    <Box maw={740} mx="auto" my={50}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Group justify="center" align="center" dir="row">
          <TextInput
            // className={classes.input}
            radius="lg"
            withAsterisk
            placeholder="What do you need to do?"
            {...form.getInputProps('task')}
            w={360}
            size="md"
            color="#F1ECE6"
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
