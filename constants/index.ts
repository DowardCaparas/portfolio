import { facebookIcon, twitterIcon, instagramIcon,
         linkedinIcon, javascripticon, typescripticon, nextjsIcon, tailwindIcon, reactIcon, 
         framerIcon, htmlIcon, cssIcon, photoshopIcon, canvaIcon, 
         userInterface, monitor, fast, mobile, code, filecode,
 } from "@/public";

import { ArtokuImage, IDSGadgetsImage } from "@/public/images";

export const navlinks = [
    {title: 'Home', url: '/' },
    {title: 'About', url: '/about' },
    {title: 'Services', url: '/myservices' },
    {title: 'Projects', url: '/myprojects' },
    {title: 'Contact', url: '/contact' },
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
        description: 'iDSGadgets: Where innovation meets quality, and creativity meets productivity. We are on a mission to bridge the gap between imagination and realization by offering top-tier gadgets that empower individuals and businesses to elevate their tech game. From cutting-edge devices to innovative accessories, iDSGadgets is your ultimate destination for unlocking new possibilities in technology.',
        url: 'https://dowardcaparas.github.io/iDSGadgets/'
    },
];

export const myServices = [

    { 
        title: 'Responsive UI Design',
        paragraph: 'Ensure websites and apps are fully responsive, visually appealing, and mobile-friendly.',
        icon: mobile
    },

    { 
        title: 'User Experience Optimization',
        paragraph: 'Conduct user testing and optimize the application for a better user experience.',
        icon: userInterface
    },

    { 
        title: 'Code Optimization',
        paragraph: 'Refactor and optimize code to enhance performance and maintainability.',
        icon: code
    },

    { 
        title: 'Load Time Improvement',
        paragraph: 'Implement best practices to reduce load times and improve application speed.',
        icon: fast
    },

    { 
        title: 'Single Page Apps (SPAs)',
        paragraph: 'Build fast and responsive SPAs that provide a seamless user experience.',
        icon: monitor
    },

    { 
        title: 'Custom Web App Development',
        paragraph: `Build bespoke web applications tailored to the company's specific needs.`,
        icon: filecode
    },

];