import ME from './assets/me.png'
import MeAbout from "./assets/me-about.jpg";
import { IoLanguageSharp } from 'react-icons/io5'
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