"use client";

import { CheckCircleIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import { KeyIcon } from "@heroicons/react/16/solid";
import { UserIcon } from "@heroicons/react/16/solid";
import FormInput from "./form-input";
import FormButton from "./form-button";
import { useActionState } from "react";
import { handleForm } from "../login/actions";

export default function Login() {
  const [state, formAction] = useActionState(handleForm, {
    fieldErrors: {},
    success: false,
  });

  return (
    <div>
      <div className="w-full text-center p-4 text-4xl">🔥</div>
      <form action={formAction} className="flex flex-col gap-3">
        <FormInput
          name="email"
          icon={
            <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          }
          placeholder="Email"
          type="text"
          required={true}
          errors={state.fieldErrors?.email}
        />
        <FormInput
          name="username"
          icon={
            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          }
          placeholder="Username"
          type="text"
          required={true}
          errors={state.fieldErrors?.username}
        />
        <FormInput
          name="password"
          icon={
            <KeyIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          }
          placeholder="Password"
          type="password"
          required={true}
          errors={state.fieldErrors?.password}
        />
        <FormButton text={"Log in"} />
        {state.success && (
          <div className="text-black text-left mt-2 font-bold  bg-emerald-500 rounded-md p-3">
            {" "}
            <CheckCircleIcon className="inline h-5 w-5 text-black mr-2" />
            welcome back!
          </div>
        )}
      </form>
    </div>
  );
}
