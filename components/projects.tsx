"use client";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
export default function Projects() {
  const projects = [
    {
      title: "Patient Tracker",
      type: "Web App",
      description:
        "A Hospital and clinic patient registration, drug collection and tracking system to enable simple, effective, innovative and efficient management of patient data.",
      image: "/img/projects/pc.png",
      link: "https://westlandshealthcenter.onrender.com/",
      imagePosition: "right",
    },
    {
      title: "E-Doctor App",
      type: "Web App",
      description:
        "An online clinic booking app where patients can easily login/register and book for clinics as per their preferred specialist.",
      image: "/img/projects/doc.png",
      link: "https://e-doctor-pi.vercel.app/",
      imagePosition: "left",
    },
    {
      title: "Gig-Ahooy Delivery App",
      type: "Website",
      description:
        "A delivery app/website that allows users to register/login and order for and send  deliveries  to their desired destinations with real-time up-to-date location of delivery person. .",
      image: "/img/projects/gig.png",
      link: "https://gig-cyan.vercel.app/",
      imagePosition: "right",
    },
    {
      title: "Rideasy",
      type: "Mobile App",
      description:
        "A ride-hailing app that allows users to book rides and drivers to accept ride requests with real-time tracking and payment integration. (Demo on YouTube)",
      image: "/img/projects/ride.png",
      link: "https://youtu.be/O2jR3eFwarI",
      label: "Watch Demo",
      imagePosition: "left",
    },
    {
      title: "TinnFlixx",
      type: "Web App",
      description:
        "A movie streaming app that allows users to watch movies and TV shows online with a user-friendly interface and search functionality.",
      image: "/img/projects/tin.png",
      link: "https://tinnflixx.vercel.app/",
      imagePosition: "right",
    },
    {
      title: "Digi-Bus-Pay",
      type: "Web App ",
      description:
        "An online payment system that provides a comprehensive solution for managing fare collection and reporting of bus services by admins and bus operators. .",
      image: "/img/projects/trip.png",
      link: "https://digibus-pay.onrender.com",
      imagePosition: "left",
    },
    {
      title: "Martin Maina Portfolio",
      type: "Vercel Website",
      description:
        "A portfolio website - link to my resume to showcase my work and skills.",
      image: "/img/projects/port.png",
      link: "https://drive.google.com/drive/folders/1-iMtGc6tIjNjuyF_evsQ06WK5s_tKAwV",
      imagePosition: "right",
    },
    {
      title: "Harmony-Hub Music App",
      type: "Web & Mobile Application",
      description:
        "A music app from a four person collaboration where users engage with and satiate their music needs with endless playlists with integration using Spotify API.",
      image: "/img/projects/4.png",
      link: "https://harmony-hub.onrender.com/",
      imagePosition: "left",
    },
  ];
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center my-20"
        >
          <Card
            className={`bg-transparent border-2 border-primary-foreground ${
              project.imagePosition === "left"
                ? "lg:order-1"
                : "lg:order-2 order-1"
            }`}
          >
            <CardHeader>
              <CardDescription>
                <Image
                  src={project.image}
                  alt="Javascript"
                  width={50}
                  height={50}
                  className={`w-full object-contain ${
                    project.title === "Paya Finance" ? "h-96" : "h-full"
                  }`}
                />
              </CardDescription>
            </CardHeader>
          </Card>
          <div
            className={`${
              project.imagePosition === "left" ? "order-2" : "order-1"
            }`}
          >
            <p className="text-primary uppercase">{project.type}</p>
            <h4 className="lg:text-4xl text-2xl my-5 font-bold hover:text-primary transition duration-500">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h4>
            <p className="leading-10">{project.description}</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight className="text-primary h-14 w-14 border-2 border-primary rounded-full p-2 my-5 hover:bg-primary hover:text-white transition duration-500" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>View Project</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      ))}
    </>
  );
}
