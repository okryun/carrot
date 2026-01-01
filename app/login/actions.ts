"use server";

interface FormState {
  errors: string[];
  success?: boolean;
}

export async function handleForm(prevState: FormState, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(formData.get("email"));
  console.log(formData.get("username"));
  console.log(formData.get("password"));

  const password = formData.get("password") as string;

  if (password !== "12345") {
    return {
      errors: ["wrong password"],
      success: false,
    };
  }

  return {
    errors: [],
    success: true,
  };
}
