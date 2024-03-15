import styles from "./DemoForm.module.css"
import { type DemoSignUpSchema, demoSignUpSchema } from "@/lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export default function FormWithReactHookFormAndZod() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DemoSignUpSchema>({
    resolver: zodResolver(demoSignUpSchema),
    mode: "onBlur",
  })

  const onSubmit = async (data: DemoSignUpSchema) => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log(data)

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className={styles["input"]}
      />
      {errors.email && (
        <p className={styles["error"]}>{`${errors.email.message}`}</p>
      )}

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className={styles["input"]}
      />
      {errors.password && (
        <p className={styles["error"]}>{`${errors.password.message}`}</p>
      )}

      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm password"
        className={styles["input"]}
      />
      {errors.confirmPassword && (
        <p className={styles["error"]}>{`${errors.confirmPassword.message}`}</p>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className={styles["submit"]}
      >
        Submit
      </button>
    </form>
  )
}
