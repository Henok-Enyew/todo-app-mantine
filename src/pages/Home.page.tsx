import { Form } from '../components/Form/Form';
import { NavBar } from '../components/NavBar/NavBar';
import { Tasks } from '../components/Tasks/Tasks';
import classes from './Home.page.module.css';

export function HomePage() {
  return (
    <div className={classes.textFont}>
      {/* <Welcome /> */}

      <NavBar />
      <Form />
      <Tasks />
    </div>
  );
}
