import { Component } from "solid-js";
import { render } from "solid-js/web";

import { createForm, Field, Form, required } from "@modular-forms/solid";

type LoginForm = {
  username: string;
  password: string;
};

const App: Component = () => {
  const loginForm = createForm<LoginForm>();

  return (
    <div>
      <Form of={loginForm} onSubmit={console.log}>
        <Field
          of={loginForm}
          name="username"
          validate={[required("Please enter your username")]}
        >
          {(field) => (
            <>
              <input {...field.props} placeholder="Username" />
              {field.error && <div>{field.error}</div>}
            </>
          )}
        </Field>
        <Field
          of={loginForm}
          name="password"
          validate={[required("Please enter your password")]}
        >
          {(field) => (
            <>
              <input {...field.props} type="password" />
              {field.error && <div>{field.error}</div>}
            </>
          )}
        </Field>

        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

render(() => <App />, document.body);
