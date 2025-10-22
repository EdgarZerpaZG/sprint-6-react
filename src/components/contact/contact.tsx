import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Title from '../title/title'


export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const FormSchema = z.object({
        name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be at most 100 characters"),
        phone: z.number().min(1000000, "Phone number must be at least 7 digits").max(9999999999, "Phone number must be at most 10 digits"),
        email: z.string().email("Invalid email address"),
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
        setName('')
        setEmail('')
        setPhone('')
        console.log(data)
    };

    return (
        <>
            <div className="shadow-lg mb-5 rounded-sm">
                <div className="p-5">
                    <Title style="text-2xl pb-3 text-center lg:text-left" title='Request a quote' />
                    <form onSubmit={handleSubmit(onSubmit)} className="py-5 block lg:flex justify-between">
                        <div className="flex-1">
                            <input {...register('name')} type="text" name="name" id="form-name" placeholder="Name" className="p-3 border rounded-md w-full lg:w-auto mb-4 lg:mb-0" onChange={(e) => setName(e.target.value)} value={name} required />
                            {errors?.name?.message && (
                                <p className="text-red-700 mb-4">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div className="flex-1">
                            <input {...register('phone', { valueAsNumber: true })} type="tel" name="phone" id="form-phone" placeholder="Phone" className="p-3 border rounded-md w-full lg:w-auto mb-4 lg:mb-0" onChange={(e) => setPhone(e.target.value)} value={phone} required />
                            {errors?.phone?.message && (
                                <p className="text-red-700 mb-4">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>
                        <div className="flex-1">
                            <input {...register('email')} type="email" name="email" id="form-email" placeholder="Email" className="p-3 border rounded-md w-full lg:w-auto mb-4 lg:mb-0" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            {errors?.email?.message && (
                                <p className="text-red-700 mb-4">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="flex-1">
                            <button type="button" className="p-3 bg-emerald-500 hover:bg-emerald-800 text-white rounded-md cursor-pointer w-full" onClick={handleSubmit(onSubmit)}>Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}