'use client'

import About from "@/components/About";
import Application from "@/components/Application";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import VideoProjects from "@/components/VideoProjects";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Home() {
  return (
    <main className="flex flex-col">
      <About />
      <Application />
      <Projects />
      <VideoProjects />
      <Reviews />
      <FloatingWhatsApp 
        phoneNumber="+77089450349"
        accountName="Менеджер"
        avatar="/images/manager.jpg"
        statusMessage="Отвечает в течение 1 часа"
        chatMessage="Привет! Напиши мне по поводу сотрудничества !"
      />
    </main>
  );
}
