"use client";

import { FC, useTransition } from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

import { SignInModel } from "../_types/auth.types";
import { SignInSchema } from "../_types/auth.schema";

import { TextBox } from "@/app/_components/textbox";
import { Button } from "@/app/_components/button";
import Phone from "@/app/_assets/phone";
import Eye from "@/app/_assets/eye";
import { signinActions } from "@/app/_actions/auth-actions";

export const SignInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInModel>({
    resolver: valibotResolver(SignInSchema),
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = async (data: SignInModel) => {
    startTransition(async () => {
      const response = await signinActions(data);
      console.log(response);
    });
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] w-full items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <TextBox
            name="username"
            register={register}
            errors={errors}
            type="number"
            placeholder="شماره موبایل"
            label="شماره موبایلت رو وارد کن"
            icon={<Phone />}
          />

          <TextBox
            name="password"
            register={register}
            errors={errors}
            type="password"
            placeholder="رمز عبور"
            label="رمز عبورت رو وارد کن"
            icon={<Eye />}
          />

          <Button type="submit" loading={isPending} className="w-full">
            ورود به پلتفرم
          </Button>
        </form>
      </div>
    </div>
  );
};
