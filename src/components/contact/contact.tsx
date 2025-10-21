import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Title from '../title/title'


export default function Contact() {
    const FormSchema = z.object({
        name: z.string().min(2).max(100),
        phone: z.number(),
        email: z.string().email("Invalid email. Email must be a valid email address"),
    });

    type IFormInput = z.infer<typeof FormSchema>;


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: zodResolver(FormSchema)
    });


    const onSubmit = (data: IFormInput) => {
        console.log(data)
    };

    return (
        <>
            <div className="shadow-lg mb-5 rounded-sm">
                <div className="p-5">
                    <Title style="text-2xl pb-3" title='Request a quote' />
                    <form onSubmit={handleSubmit(onSubmit)} className="py-5 flex justify-between">
                        <div>
                            <input {...register('name')} type="text" name="name" id="form-name" placeholder="Name" required />
                            {errors?.name?.message && (
                                <p className="text-red-700 mb-4">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <input {...register('phone', { valueAsNumber: true })} type="tel" name="phone" id="form-phone" placeholder="Phone" required />
                            {errors?.phone?.message && (
                                <p className="text-red-700 mb-4">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <input {...register('email')} type="email" name="email" id="form-email" placeholder="Email" required />
                            {errors?.email?.message && (
                                <p className="text-red-700 mb-4">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <button type="button" className="px-4 py-2 bg-emerald-500 hover:bg-emerald-800 text-white rounded-md cursor-pointer" onClick={handleSubmit(onSubmit)}>Contact Us</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}