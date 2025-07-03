import { Form, useActionData } from "react-router";
import type { Route } from "./+types/login";

export async function action({ request }: Route.ActionArgs) {
  return {
    errors: {
      username: "Username is required",
      password: "Password is required",
    },
  };
}

export default function LoginForm() {
  const actionData = useActionData<typeof action>();
  const errors = actionData?.errors;
  return (
    <Form method="post">
      <label>
        <input type="text" name="username" />
        {errors?.username && <div>{errors.username}</div>}
      </label>

      <label>
        <input type="password" name="password" />
        {errors?.password && <div>{errors.password}</div>}
      </label>

      <button type="submit">Login</button>
    </Form>
  );
}