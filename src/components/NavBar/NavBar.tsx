import { Box, Center, Image } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

// import classes from './Welcome.module.css';

export function NavBar() {
  return (
    <>
      <Box>
        <ColorSchemeToggle />
        <Center>
          <Image
            src="./src/assets/logo.png"
            alt="App Logo"
            //   width={50}
            height={30}
            mx="auto"
            my="lg"
          />
        </Center>
      </Box>
    </>
  );
}

//   <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
//     This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
//     Vite integration follow{' '}
//     <Anchor href="https://mantine.dev/guides/vite/" size="lg">
//       this guide
//     </Anchor>
//     . To get started edit pages/Home.page.tsx file.
//   </Text>
