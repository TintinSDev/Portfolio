"use client";
import AOS from "aos";
import SocialLinks from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { ChevronRight, CircleCheck, Loader } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useTransition } from "react";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Contact from "@/components/forms/contact";
import Experience from "@/components/experience";
import Link from "next/link";
import { sendResumeViewedEmail } from '@/lib/actions';
import Hero from "./Hero";


var ReactRotatingText = require("react-rotating-text");

export default function Home() {
  const [transition, startTransition] = useTransition();
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
   
    <React.Fragment>
      {/* intro */}
      <section className="grid lg:grid-cols-2 grid-cols-1 items-center lg:text-left text-center">
        <div className="lg:order-1 order-2 lg:my-0 my-10">
          <p className="text-sm uppercase font-semibold tracking-wide">
            HELLO, I&apos;M
          </p>
          <h1 className="lg:text-5xl text-2xl font-black tracking-[0.1rem] lg:my-5 my-2">
            <span className="text-primary">Martin</span> Maina
          </h1>
          <p className="lg:text-4xl text-xl text-primary font-semibold tracking-wide">
            <ReactRotatingText
              items={[
                "DevSecOps Engineer..",
                "Full-Stack Software Engineer",
                "Web & Apps Developer",
                "Database Management",
                "CyberSecurity",
                "Tech enthusiast",
              ]}
            />
          
          </p>
          <p className="lg:my-10 my-5 leading-10">
            A DevSecOps Engineer from Nairobi, Kenya with {" "}
            <span className="text-primary">+ 3 years</span> experience in the SDLC partaining to the
            evolutionary cycle for dynamic & robust web applications, app development, API
            integration and  CI/CD using Jenkins and cointanerization and orchestration using Docker and Kubernetes.
          </p>
          <div className="lg:flex lg:gap-5 my-10 lg:space-y-0 space-y-3">
            <Button
              variant={"default"}
              className="lg:w-auto w-full"
              onClick={() => {
                startTransition(async () => {
                  await sendResumeViewedEmail();
                window.open(
                  "https://drive.google.com/file/d/1kOzu4KVeAtcgGmeTnotwaiA2LJGQHiWL/view?usp=sharing",
                  "_blank"
                );
                });
              }}
              disabled={transition}
            >
              Download Resume
              {transition && <Loader className="ml-3 animate-spin" />}
            </Button>
            <Button variant={"outline"} className="lg:w-auto w-full" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <SocialLinks />
        </div>
        <Image
          src="/img/me.png"
          alt="Martin Maina"
          width={500}
          height={500}
          className="w-full lg:h-[45rem] h-96 object-contain lg:order-2 order-1"
          data-aos="fade-down"
          unoptimized={true}
        />
      </section>
      <Hero />
      {/* about me */}
      <section
        className="grid lg:grid-cols-2 grid-cols-1 items-center gap-20 lg:my-20 my-5"
        id="about"
      >
        <div className="rounded-lg h-full border-t-4 border-b-4 border-primary-foreground transition duration-500 hover:border-primary">
          <Image
            src="/img/left3.png"
            alt="About Martin Maina"
            width={500}
            height={500}
            className="w-full h-full object-cover grayscale"
            data-aos="fade-up"
            unoptimized={true}
          />
        </div>
        <div data-aos="fade-up">
          <p className="text-sm uppercase font-semibold tracking-wide">
            About Me
          </p>
          <h2 className="lg:text-4xl text-2xl my-5">
            <span className="text-primary">Enthusiatic</span> Innovative
            <br className="lg:block hidden" /> Software{" "}
            <span className="text-primary">Engineer</span>
          </h2>
          <p className="leading-10 my-5">
            Extremely deeply committed to continuous learning and staying ahead of technology trends. 
            This commitment fuels my passion for innovation and my ability to bring cutting-edge solutions to any organization. 
            My goal is to leverage my skills to create value, improve performance, and deliver exceptional results. 
            Proven leader with the ability to
            streamline development processes to drive the achievement of
            organisational objectives.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Develop highly
              interactive Front end / User Interfaces for the web
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Proven track record
              of creating robust and scalable web applications
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Integration of third
              party services
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Integration of
              payment services such as E-Payment and M-Pesa
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Develop highly
              interactive Mobile Applications
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Develop highly
              interactive Backend / API services
            </li>
          </ul>
          <SocialLinks />
          <Hero />
        </div>
      </section>
      {/* services */}
      <section className="my-20" id="services" data-aos="fade-up">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">
          Passionate on industry trends
        </p>
        <h4 className="text-center lg:text-4xl text-2xl my-5">
          My <span className="text-primary">Software Services</span> for
          deployment <br className="lg:block hidden" />
          and <span className="text-primary">Development</span>
        </h4>
        <Services />
      </section>
      {/* experiences/education */}
      <section className="my-20" id="resume" data-aos="fade-up">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">
          {" "}
          <span className="text-primary">Resume</span>
        </p>
        <h4 className="text-center capitalize lg:text-4xl text-2xl my-5">
          Complex <span className="text-primary">Problem Solutions</span>{" "}
          Encounters
        </h4>
        <div className="my-10">
          <Experience />
        </div>
      </section>
      {/* professional skills */}
      <section className="my-20" id="skills">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">
          My <span className="text-primary">Talent</span>
        </p>
        <h4 className="text-center capitalize lg:text-4xl text-2xl my-5">
          professional skills
        </h4>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 my-10">
          <Skills />
        </div>
      </section>
      {/* Latest Works */}
      <section className="my-20" data-aos="fade-up" id="projects">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">
          Latest Works
        </p>
        <h4 className="text-center capitalize lg:text-4xl text-2xl my-5">
          Explore My Popular <span className="text-primary">Projects</span>
        </h4>
        <Projects />
        <a
          href="https://github.com/TintinSDev"
          className="flex justify-center my-10"
          target="_blank"
          rel="noopener"
        >
          <Button variant={"default"} className="lg:w-auto w-full">
            View All Projects <ChevronRight className="ml-3" />
          </Button>
        </a>
      </section>
      {/* contact form */}
      <section id="contact">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 my-20">
          <div>
            <p className="text-sm uppercase font-semibold tracking-wide">
              Get In Touch
            </p>
            <h4 className="lg:text-4xl text-2xl my-5">
              Let&apos;s Discuss about your {" "}
              <span className="text-primary">Next Big Project(s)</span>
            </h4>
            <p className="leading-10 my-5">
              Discuss a project or just want to say hi? Connect with me via
              email or through a phone call.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex">
                <CircleCheck className="text-primary mr-3" /> 4+ Years of
                Experience
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" /> Web Designer
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" /> Mobile Apps
                Development
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" /> Cloud Deployment
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" /> Fullstack
                Developer
              </li>
            </ul>
            <SocialLinks />
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
