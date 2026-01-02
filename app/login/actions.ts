"use server";
import { z } from "zod";

const passwordRegex = new RegExp("(?=.*\\d)");

const formSchema = z.object({
  username: z.string().min(5, "Username must be at least 5 characters long"),
  email: z
    .string()
    .email("Invalid email format")
    .refine((email) => email.endsWith("@zod.com"), {
      message: "zod.com emails only",
    }),
  password: z
    .string()
    .min(10, "Password must be at least 10 characters long")
    .regex(passwordRegex, {
      message: "at least one number required",
    }),
});

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(formData.get("email"));
  console.log(formData.get("username"));
  console.log(formData.get("password"));
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    return { fieldErrors: {}, success: true };
  }
}
