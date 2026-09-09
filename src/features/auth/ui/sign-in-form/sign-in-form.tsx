"use client";

import { createClient } from "@/shared/api/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signInSchema, type SignInFormValues } from "../../model/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import s from "./sign-in-form.module.scss";

interface SignInFormProps {
  onSuccess?: () => void;
}

export const SignInForm = ({ onSuccess }: SignInFormProps) => {
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInFormValues) => {
    setServerError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setServerError(error.message);
      return;
    }

    router.refresh();
    onSuccess?.();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      {serverError && <div className={s.form__serverError}>{serverError}</div>}
      <div className={s.form__field}>
        <label className={s.form__label}>Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Your email address"
          className={s.form__input}
        />
        {errors.email && (
          <span className={s.form__error}>{errors.email.message}</span>
        )}
      </div>
      <div className={s.form__field}>
        <label className={s.form__label}>Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className={s.form__input}
        />
        {errors.password && (
          <span className={s.form__error}>{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={s.form__submitBtn}
      >
        {isSubmitting ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
};
