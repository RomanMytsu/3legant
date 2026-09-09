"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { createClient } from "@/shared/api/client";
import { signUpSchema, type SignUpFormValues } from "../../model/validation";
import s from "./sign-up-form.module.scss";

interface SignUpFormProps {
  onSuccess?: () => void;
}

export const SignUpForm = ({ onSuccess }: SignUpFormProps) => {
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      agreeToPolicy: false,
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setServerError(null);

    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.name,
          username: data.username,
        },
      },
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
        <label className={s.form__label}>Your name</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
          className={s.form__input}
        />
        {errors.name && (
          <span className={s.form__error}>{errors.name.message}</span>
        )}
      </div>
      <div className={s.form__field}>
        <label className={s.form__label}>Username</label>
        <input
          {...register("username")}
          type="text"
          placeholder="Username"
          className={s.form__input}
        />
        {errors.username && (
          <span className={s.form__error}>{errors.username.message}</span>
        )}
      </div>
      <div className={s.form__field}>
        <label className={s.form__label}>Email address</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Email address"
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
      <div className={s.form__checkboxField}>
        <label className={s.form__checkboxLabel}>
          <input
            {...register("agreeToPolicy")}
            type="checkbox"
            className={s.form__checkbox}
          />
          <span>I agree with Privacy Policy and Terms of Use</span>
        </label>
        {errors.agreeToPolicy && (
          <span className={s.form__error}>{errors.agreeToPolicy.message}</span>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={s.form__submitBtn}
      >
        {isSubmitting ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
};
