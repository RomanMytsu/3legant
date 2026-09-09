import z from "zod";

const emailSchema = z
  .string()
  .trim()
  .pipe(z.email("Please enter a valid email address"));

const passwordSchema = z
  .string()
  .min(6, "Password must contain at least 6 characters")
  .max(100, "Password is too long");

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SignInFormValues = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name is too long"),

  username: z
    .string()
    .trim()
    .min(3, "Username must contain at least 3 characters")
    .max(30, "Username is too long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can contain only letters, numbers and underscores",
    ),

  email: emailSchema,

  password: passwordSchema,

  agreeToPolicy: z.boolean().refine((val) => val === true, {
    message: "I agree with Privacy Policy and Terms of Use",
  }),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
