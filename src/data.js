import ME from './assets/me.png'
import MeAbout from "./assets/me-about.jpg";
import { IoLanguageSharp } from 'react-icons/io5'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FaAward, FaChalkboardTeacher } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'

export const data = {
    imag: ME,
    imag2: MeAbout,
}

export const cardData = [
    { icon: <IoLanguageSharp />, title: "Langauge Skill", year: "Over 4 + Years" },
    { icon: <FaAward />, title: "React Development", year: "2 + Years" },
    { icon: <GiTeacher />, title: "Teaching Skill", year: "4 + Years" },
  ];

export const expFrontEndData = [
    {
        icon: <BsPatchCheckFill />, 
        progLang: "HTML", 
        experience: "Well-Experienced" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "CSS", 
        experience: "Well-Experienced",
        framewrk: "Bootstrap & Tailwind"
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "JS", 
        experience: "Advanced",
        framewrk: "ReactJS"
    },

]

export const expBackEndData = [
    {
        icon: <BsPatchCheckFill />, 
        progLang: "Python", 
        experience: "Basics" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "MYSQL", 
        experience: " Intermediate " 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "NodeJs", 
        experience: "Experienced" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "MongoDB", 
        experience: "Experienced" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "PHP", 
        experience: "Basics" 
    },
]