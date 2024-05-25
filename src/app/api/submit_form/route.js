import axios from 'axios';

const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_API}/sendMessage`;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;  

export async function POST(req) {
    const { name, phone } = await req.json();
    const text = `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}`;

    try {
        const response = await axios.post(TELEGRAM_API_URL, {
            chat_id: CHAT_ID,
            text
        });

        if (response.data.ok) {
            return new Response(JSON.stringify({ status: 'success' }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ status: 'error', message: response.data.description }), { status: 500 });
        }
    } catch (error) {
        return new Response(JSON.stringify({ status: 'error', message: error.message }), { status: 500 });
    }
}
