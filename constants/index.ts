import { info, service, caseIcon, fileIcon, phone, facebookIcon, twitterIcon, instagramIcon,
         linkedinIcon, javascripticon, typescripticon, nextjsIcon, tailwindIcon, reactIcon, 
         framerIcon, htmlIcon, cssIcon, bootstrapIcon, photoshopIcon, canvaIcon,
 } from "@/public";

import { ArtokuImage, IDSGadgetsImage } from "@/public/images";

export const navlinks = [
    {title: 'About', url: '#about', icon: info },
    {title: 'Services', url: '#services', icon: service },
    {title: 'Projects', url: '#projects', icon: caseIcon },
    {title: 'Contact', url: '#contact', icon: phone },
];

export const socials = [
    {icon: facebookIcon, url: 'https://www.facebook.com/doward.caparas?mibextid=ZbWKwL'},
    {icon: twitterIcon, url: '#'},
    {icon: instagramIcon, url: '#'},
    {icon: linkedinIcon, url: '#'},
];

export const personalInfo = [
    {title: 'Name', label: 'Dounhuward B. Caparas' },
    {title: 'Email', label: 'caparasdounhuward@gmail.com' },
    {title: 'Address', label: 'Naic, Cavite' },
    {title: 'Phone No.', label: '+63967*****57' },
];

export const skills = [
    {
        title: 'Frontend',
        lists: [
            {name: 'JavaScript', icon: javascripticon },
            {name: 'TypeScript', icon: typescripticon },
            {name: 'NEXT.js', icon: nextjsIcon },
            {name: 'Tailwind', icon: tailwindIcon },
            {name: 'React', icon: reactIcon },
            {name: 'Framer', icon: framerIcon },
            {name: 'HTML', icon: htmlIcon },
            {name: 'CSS', icon: cssIcon },
            {name: 'Bootstrap', icon: bootstrapIcon }
        ],
    },

    {
        title: 'Other',
        lists: [
            {name: 'Photoshop', icon: photoshopIcon },
            {name: 'Canva', icon: canvaIcon },
        ],
    },

];

export const projects = [
    {
        name: 'Artoku', 
        image: ArtokuImage.src, 
        category:'#Accounting',
        date: '2024',
        description: 'Artoku: is a comprehensive asset and money management platform designed to assist individuals and businesses in effectively managing their financial resources. With a team of experienced financial planners and cutting-edge technology, Artoku offers a range of services tailored to meet the diverse needs of investors, ensuring the growth and development of their assets.',
        url: 'https://dowardcaparas.github.io/Artoku_Landing_page/'
    },
    {
        name: 'iDSGadgets', 
        image: IDSGadgetsImage.src, 
        category:'#Devices',
        date: '2024',
        description: 'TechElevate: Where innovation meets quality, and creativity meets productivity. We are on a mission to bridge the gap between imagination and realization by offering top-tier gadgets that empower individuals and businesses to elevate their tech game. From cutting-edge devices to innovative accessories, TechElevate is your ultimate destination for unlocking new possibilities in technology.',
        url: 'https://dowardcaparas.github.io/iDSGadgets/'
    },
];