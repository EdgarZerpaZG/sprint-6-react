import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useContact } from "./contactContext";
import { useBudget } from "../budget/budgetContext";
import Title from "../title/title";

const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{7,15}$/, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
});

type IFormInput = z.infer<typeof FormSchema>;

export default function Contact() {
  const { addContact } = useContact();
  const { total, services, resetBudget } = useBudget();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: IFormInput) => {
  if (services.length === 0) {
    alert("Please select at least one campaign before submitting.");
    return;
  }

  addContact({
  id: crypto.randomUUID(),
  name: data.name,
  phone: Number(data.phone),
  email: data.email,
  total,
  services: [...services],
});

  reset();
  setTimeout(() => {
    resetBudget();
  }, 100); 
};

  return (
    <div className="shadow-lg mb-5 rounded-sm p-5">
      <Title style="text-2xl pb-3 text-center lg:text-left" title="Request a quote" />

      <form onSubmit={handleSubmit(onSubmit)} className="py-5 flex flex-wrap gap-4">
        <input {...register("name")} placeholder="Name" className="p-3 border rounded-md flex-1" />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}

        <input {...register("phone")} placeholder="Phone" className="p-3 border rounded-md flex-1" />
        {errors.phone && <p className="text-red-700">{errors.phone.message}</p>}

        <input {...register("email")} placeholder="Email" className="p-3 border rounded-md flex-1" />
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}

        <button type="submit" className="p-3 bg-emerald-500 hover:bg-emerald-800 text-white rounded-md flex-1 cursor-pointer">Request</button>
      </form>
    </div>
  );
}