'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Application = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+7');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!name.trim() || !phone.trim()) return;

        const response = await fetch('/api/submit_form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone })
        });

        const result = await response.json();
        if (result.status === 'success') {
            setName('');
            setPhone('+7');
            router.push('/success')
        }
    };

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        if (input.startsWith('+7')) {
            setPhone(input);
        }
    };

    return (
        <section className="flex justify-between max-md:flex-col container mx-auto p-5 mt-20 gap-10">
            <div className="flex justify-center items-center">
                <img src="/images/application-img.png" alt="application image" />
            </div>
            <div id="contacts" className="flex flex-col">
                <h1 className="text-title text-center text-white font-poppins font-semibold mb-[31px]">
                    Оставить заявку
                </h1>
                <p className="text-primary font-semibold text-[24px] max-sm:text-sm text-center mb-[88px]">
                    Если у вас возникли какие-либо вопросы, <br /> то можно обратиться ко
                    мне
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col ">
                    <label className="text-white font-poppins mb-2 text-[21px]" htmlFor="name">Введите имя</label>
                    <input onChange={(e) => setName(e.target.value)} id="name" className="rounded-[20px] bg-transparent border-solid border-2 border-white pl-6 py-4 font-poppins text-white outline-none mb-5" type="text" placeholder="Данияр" value={name} required />
                    <label className="text-white font-poppins text-[21px] mb-2 " htmlFor="number">Введите телефон</label>
                    <input onChange={handlePhoneChange} id="phone" className="rounded-[20px] bg-transparent border-solid border-2 border-white pl-6 py-4 font-poppins text-white outline-none" type="tel" pattern="\+7[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="+7-___-___-____" value={phone} required />
                    <button className="bg-primary font-poppins text-white text-[21px] font-bold rounded-[5px] p-5 mt-10  active:scale-95" type="submit">Оставить заявку</button>
                </form>
            </div>
        </section>
    );
};

export default Application
