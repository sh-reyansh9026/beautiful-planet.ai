'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import toast from "react-hot-toast";


interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const validateForm = () => {
        if (!formData.name.trim()) {
            return toast.error('Name is required');
        }
        if(!formData.email.trim()) {
            return toast.error('Email is required');
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            return toast.error("Invalid email format");
        }
        if (!formData.subject.trim()) {
            return toast.error('Subject is required');
        }
        if (!formData.message.trim()) {
            return toast.error('Message is required');
        }
        return true;
    }
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        console.log(formData);
        toast.success('Form submitted successfully!');
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white w-full max-w-lg h-auto ml-auto mr-auto overflow-hidden p-3 rounded-lg">
            <div className='flex flex-col'>
                <label htmlFor='name' className='text-gray-800 font-bold mt-10 mb-1'>Full Name</label>
                <input
                    type='text'
                    id='name'
                    value={formData.name}
                    placeholder='Enter your full name'
                    onChange={(e) => setFormData({...formData, name:e.target.value})}
                    required
                    className='text-black rounded-md p-2 bg-white border border-rounded border-gray-900 mb-2'
                />         
            </div>

            <div className='flex flex-col'>
                <label htmlFor='email' className='text-gray-800 font-bold mt-3 mb-1'>Email</label>
                <input
                    type='email'
                    id='email'
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email:e.target.value})}
                    required
                    className='text-black rounded-md p-2 bg-white border border-rounded border-gray-900'
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor='subject' className='text-gray-800 font-bold mt-3 mb-1'>Subject</label>
                <input
                    type='text'
                    id='subject'
                    placeholder='Enter the subject'
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className='text-black rounded-md p-2 bg-white border border-rounded border-gray-900'
                    required
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor='message' className='text-gray-800 font-bold mt-3 mb-1'>Message</label>
                <textarea
                    id='message'
                    placeholder='Enter your message'
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message:e.target.value})}
                    required
                    className='text-black rounded-md p-2 bg-white border border-rounded border-gray-900'
                />
            </div>   

            <div className='flex justify-start'>
                <button type='submit'
                className='bg-blue-950 text-white px-4 py-2 mt-4 rounded hover:bg-[#8DC73F]'>
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default ContactForm
