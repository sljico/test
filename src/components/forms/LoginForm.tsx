import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginData = z.infer<typeof FormSchema>;

type FormProps = {
  onSubmit(data: LoginData): void;
  isSubmitting: boolean;
};

function FormComponent({ onSubmit, isSubmitting }: FormProps) {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} />
      <input {...register("password", { required: true })} />

      <button disabled={isSubmitting}>Submit</button>
    </form>
  );
}

export default FormComponent;
