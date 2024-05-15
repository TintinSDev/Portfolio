import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Figma, Github, Linkedin, Mail, Twitter } from "lucide-react";
export default function SocialLinks() {
    return (
        <ul className="flex flex-wrap space-x-4">
            <li>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <a href="https://github.com/TintinSDev"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Github Profile"
                            >
                                <Github
                                    size={24}
                                    className="bg-icon rounded-md h-10 w-10 p-2 text-primary hover:bg-primary hover:text-white transition duration-500 hover:-translate-y-2"
                                />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            Github
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </li>
            <li>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <a href="https://www.linkedin.com/in/mainamartin/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin
                                    size={24}
                                    className="bg-icon rounded-md h-10 w-10 p-2 text-primary hover:bg-primary hover:text-white transition duration-500 hover:-translate-y-2"
                                />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            Linkedin
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </li>
            <li>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <a href="https://twitter.com/Sir_Mrtn?s=09"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter
                                    size={24}
                                    className="bg-icon rounded-md h-10 w-10 p-2 text-primary hover:bg-primary hover:text-white transition duration-500 hover:-translate-y-2"
                                />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            Twitter
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </li>
            <li>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <a href="https://www.figma.com/files/user/1298326112455451309?fuid=1298326112455451309"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Figma
                                    size={24}
                                    className="bg-icon rounded-md h-10 w-10 p-2 text-primary hover:bg-primary hover:text-white transition duration-500 hover:-translate-y-2"
                                />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            Figma
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </li>
            <li>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <a href="mailto:mmaina290@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Mail
                                    size={24}
                                    className="bg-icon rounded-md h-10 w-10 p-2 text-primary hover:bg-primary hover:text-white transition duration-500 hover:-translate-y-2"
                                />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            Email
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </li>
        </ul>
    )
}