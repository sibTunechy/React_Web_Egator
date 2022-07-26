import ME from './assets/me.png'
import MeAbout from "./assets/me-about.jpg";
import { IoLanguageSharp } from 'react-icons/io5'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FaAward, FaChalkboardTeacher } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { HiPencil } from 'react-icons/hi';
import { MdCodeOff } from 'react-icons/md'

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
        experience: "Experienced" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "CSS", 
        experience: "Experienced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "Bootstrap", 
        experience: "Advanced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "Tailwind", 
        experience: "Advanced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "JS", 
        experience: "Advanced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "ReactJS", 
        experience: "Advanced",
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

export const servicesListWrite = [
    {
        icon: <HiPencil />, 
        text: "Grammar Check " 
    },
    {
        icon: <HiPencil />, 
        text: "Accuracy with expression " 
    },
    {
        icon: <HiPencil />, 
        text: "Lorem, ipsum dolor sitr " 
    },
    {
        icon: <HiPencil />, 
        text: "Lorem, ipsum dolor sit  " 
    },
   
]
export const servicesListWeb = [
    {
        icon: <MdCodeOff />, 
        text: "Lorem, ipsum dolor sit " 
    },
    {
        icon: <MdCodeOff />, 
        text: "Lorem, ipsum dolor sit " 
    },
    {
        icon: <MdCodeOff />, 
        text: "Lorem, ipsum dolor sit " 
    },
    {
        icon: <MdCodeOff />, 
        text: "Lorem, ipsum dolor sit " 
    },
    {
        icon: <MdCodeOff />, 
        text: "Lorem, ipsum dolor sit  " 
    },
    
]
export const servicesListTeach = [
    {
        icon: <FaChalkboardTeacher />, 
        text: "German Language Teaching" 
    },
    {
        icon: <FaChalkboardTeacher />, 
        text: "French Language Teaching" 
    },
    {
        icon: <FaChalkboardTeacher />, 
        text: "English Language Teaching" 
    },
    {
        icon: <FaChalkboardTeacher />, 
        text: "Yoruba Basic Language Teaching" 
    },
    
    
]
