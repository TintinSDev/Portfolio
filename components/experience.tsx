import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LampDesk,
  Laptop,
  Phone,
  School,
  Sun,
  University,
  Warehouse,
} from "lucide-react";
import { Separator } from "./ui/separator";
export default function Experience() {
  return (
    <Tabs defaultValue="experience" className="w-full">
      <TabsList className="flex justify-between lg:py-10 py-4">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="p-5">
            <ol className="relative border-s-4 border-primary-foreground">
              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                  <School className="w-4 h-4 text-white" />
                </span>
                <Card className={`card-glassmorphism p-2`}>
                  <CardHeader>
                    <CardDescription>
                      <p className="flex items-center lg:lg:text-lg font-bold text-primary">
                        K & Co. Limited
                      </p>
                      <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                        <span>Systems Developer</span>
                        <time className="block text-sm text-primary/90">
                          Mar 2025 - To Date
                        </time>
                      </p>
                      <Separator className="my-5 bg-primary" />
                      <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                        <li>
                          Implemented robust testing protocols including unit,
                          integration, and end-to-end tests to ensure code
                          quality and system reliability.
                        </li>
                        <li>
                          Collaborated with cross-functional teams including
                          product managers, UI/UX designers, and quality
                          assurance to translate business requirements into
                          technical solutions.
                        </li>
                        <li>
                          Spearheaded the development of the driver's mobile app
                          and architected a robust notification service for
                          riders, drivers, and customer care agents.
                        </li>
                        <li>
                          Integrated third-party APIs and services for features
                          such as payment processing, mapping, and real-time
                          location tracking.
                        </li>
                        <li>
                          Participated in code reviews to maintain coding
                          standards, improve security, and foster a
                          collaborative development environment.
                        </li>
                        <li>
                          Championed agile and DevOps methodologies within the
                          team to improve project delivery speed and efficiency.
                        </li>
                        <li>
                          Acted as a liaison between the development team and
                          key stakeholders to ensure project alignment and
                          communication.
                        </li>
                      </ol>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                  <LampDesk className="w-4 h-4 text-white" />
                </span>
                <Card className={`card-glassmorphism p-2`}>
                  <CardHeader>
                    <CardDescription>
                      <p className="flex items-center lg:lg:text-lg font-bold text-primary">
                        Oasis InfoByte
                      </p>
                      <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                        <span>Web Developer Intern</span>
                        <time className="block text-sm text-primary/90">
                          Feb 2024 - Mar 2024
                        </time>
                      </p>
                      <Separator className="my-5 bg-primary" />
                      <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm">
                        <li>
                          Using web frameworks such as next js to create and
                          deploy the web application.
                        </li>
                        <li>
                          Develop new features and infrastructure in order to
                          meet quickly changing business and project needs.
                        </li>
                        <li>
                          Maintain high standards of code quality and smart
                          application design to ensure application performance,
                          uptime, and scale.
                        </li>
                      </ol>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                  <Phone className="w-4 h-4 text-white" />
                </span>
                <Card className={`card-glassmorphism p-2`}>
                  <CardHeader>
                    <CardDescription>
                      <p className="flex items-center lg:text-lg font-bold text-primary">
                        Self - Employed
                      </p>
                      <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                        <span>Freelance Software Engineer</span>
                        <time className="block text-sm text-primary/90">
                          Jan 2022 - Jan 2025
                        </time>
                      </p>
                      <Separator className="my-5 bg-primary" />
                      <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                        <li>
                          Develop and maintain the mobile applications. Through
                          this, I was able to ensure that the application is
                          user-friendly, easy to use.
                        </li>
                        <li>
                          Work on API integration: Work on the integration of
                          APIs in order to ensure that the integration is
                          seamless.
                        </li>
                        <li>
                          Created E-commerce website with Django framework that
                          enabled e-commerce transactions. User-friendly and
                          easy to use.
                        </li>
                      </ol>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </li>
              {/* <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <School className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary"></p>
                                            <p className="flex items-center justify-between my-5 font-semibold text-xs">
                                                <span></span>
                                                <time className="block text-sm text-primary/90"></time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                   
                                                </li>
                                                <li>
                                                   
                                                </li>
                                                <li>
                                                    
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li> */}
            </ol>
          </div>
          {/* <div className="p-5">
                        <ol className="relative border-s-4 border-primary-foreground">
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <Laptop className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary"></p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span></span>
                                                <time className="block text-sm text-primary/90"></time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm">
                                                <li>
                                                    
                                                </li>
                                                <li>
                                                    
                                                </li>
                                                <li>
                                                    
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <Warehouse className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary"></p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span></span>
                                                <time className="block text-sm text-primary/90"></time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    
                                                </li>
                                                <li>
                                                   
                                                </li>
                                                <li>
                                                
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li> 
                            <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <Sun className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary"></p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span></span>
                                                <time className="block text-sm text-primary/90"></time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    
                                                </li>
                                                <li>
                                                    
                                                </li>
                                                <li>
                                                   
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li> 
            </ol>
          </div> */}
        </div>
      </TabsContent>
      <TabsContent value="education">
        <div className="p-5">
          <ol className="relative border-s-4 border-primary-foreground">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                <University className="w-4 h-4 text-white" />
              </span>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                <School className="w-4 h-4 text-white" />
              </span>
              <Card className={`card-glassmorphism p-2`}>
                <CardHeader>
                  <CardDescription>
                    <p className="flex items-center lg:text-lg font-bold text-primary">
                      Moringa School
                    </p>
                    <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                      <span>Full- Stack Software Development</span>
                      <time className="block text-sm text-primary/90">
                        Sep 2023 - Jun 2024
                      </time>
                    </p>
                    <Separator className="my-5 bg-primary" />
                    <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm">
                      <li>Advanced my skills in Full-Stack Development</li>
                      <li>Learning new technologies and frameworks</li>
                      <li>Working on real-world projects</li>
                    </ol>
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                <LampDesk className="w-4 h-4 text-white" />
              </span>
              <Card className={`card-glassmorphism p-2`}>
                <CardHeader>
                  <CardDescription>
                    <p className="flex items-center lg:text-lg font-bold text-primary">
                      KCA UNIVERSITY
                    </p>
                    <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                      <span>BSc. Information Technology</span>
                      <time className="block text-sm text-primary/90">
                        {/*Jan 2025 - Aug 2027*/}
                      </time>
                    </p>
                    <Separator className="my-5 bg-primary" />
                    <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm">
                      <li>
                        Development, maintenance, and management of computer and
                        network systems.
                      </li>
                      <li>
                        {" "}
                        Practical skills in managing operating systems,
                        designing software, analyzing systems, building network
                        applications, and programming.
                      </li>
                      <strong>Technical Skills:</strong>
                      <li>Programming (Python, Java, C++, JavaScript)</li>
                      <li>Database Management (SQL, NoSQL)</li>
                      <li>Networking (Protocols, Security, Administration)</li>
                      <li>
                        Web Development (HTML, CSS, JavaScript frameworks)
                      </li>
                      <li>
                        Cybersecurity (Principles, Threat Analysis, Security
                        Measures)
                      </li>
                      <li>
                        Software Development (Design, Development, Testing)
                      </li>
                      <li>
                        Data Analysis and Visualization (Python, R, Power BI)
                      </li>
                      <li>Cloud Computing (AWS, Azure, GCP)</li>
                    </ol>
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          </ol>
        </div>
      </TabsContent>
    </Tabs>
  );
}
