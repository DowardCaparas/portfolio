import { facebookIcon, telegramIcon, linkedinIcon,  userInterface, 
         monitor, fast, mobile, code, jsIcon, tsIcon, reactIcon, nextjsIcon, gitIcon,
         framer, tailwindIcon, htmlIcon, cssIcon, photoshopIcon, canva, fileIcon, 
 } from "@/public";

import { ArtokuImage, IDSGadgetsImage } from "@/public/images";

export const navlinks = [
    {title: 'Home', url: '/', icon: 'homeIcon'},
    {title: 'About', url: '/about' , icon: 'aboutIcon'},
    {title: 'Services', url: '/myservices' , icon: 'serviceIcon'},
    {title: 'Projects', url: '/myprojects' , icon: 'folderIcon'},
];

export const socials = [
    {icon: facebookIcon, url: 'https://www.facebook.com/doward.caparas?mibextid=ZbWKwL'},
    {icon: telegramIcon, url: 'https://t.me/dowardcaparas'},
    {icon: linkedinIcon, url: '#'},
];


export const aboutData = [
    {
        title: 'Skills',
        info: [
            {
                title: 'Web Development:',
                lists: [
                    {data: jsIcon },
                    {data: tsIcon },
                    {data: nextjsIcon },
                    {data: tailwindIcon },
                    {data: reactIcon },
                    {data: framer },
                    {data: htmlIcon },
                    {data: cssIcon },
                ],
            },
        
            {
                title: 'Graphic Design:',
                lists: [
                    {data: photoshopIcon },
                    {data: canva },
                ],
            },

            {
                title: 'Other:',
                lists: [
                    {data: gitIcon}
                ],
            },
        ]
    },
    {
        title: 'Awards',
        info: [
            {
                title: 'Best Capstone:',
                lists: [
                   
                    {data: 'Simian a mobile educational game for primary level in learning Space Science (2023)' },
                ],
            },
            {
                title: 'Best in Computer:',
                lists: [
                   
                    {data: 'Cavite Community Academy Inc. (2014) (Theory)' },
                ],
            },
            {
                title: 'Best in Computer:',
                lists: [
                   
                    {data: 'Cavite Community Academy Inc. (2015) (Hands-On)' },
                ],
            },
        
        ]
    },
    {
        title: 'Experience',
        info: [
            {
                title: 'Internship:',
                lists: [
                    {data: 'Philipphine Integrated Manufacturing and Engineering Solutions Corporation (2023-2024)'},
                ],
            },
        
        ]
    },
    {
        title: 'Credentials',
        info: [
            {
                title: 'Information Technology Diploma:',
                lists: [
                    {data: 'Cavite State University (2019-2024)'},
                ],
            },
        
        ]
    },

];

export const projects = [
    {
        name: 'Artoku', 
        image: ArtokuImage.src, 
        category:'#Accounting',
        date: '2024',
        description: 'Artoku is an asset and money management platform that helps individuals and businesses manage their finances. Leveraging experienced financial planners and advanced technology, Artoku provides tailored services to support the growth and development of investors assets.',
        url: 'https://dowardcaparas.github.io/Artoku_Landing_page/'
    },
    {
        name: 'iDSGadgets', 
        image: IDSGadgetsImage.src, 
        category:'#Devices',
        date: '2024',
        description: 'iDSGadgets: Where innovation meets quality. Our mission is to bridge imagination and reality with top-tier gadgets that empower individuals and businesses. From cutting-edge devices to innovative accessories, iDSGadgets is your ultimate destination for unlocking new tech possibilities.',
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
        icon: fileIcon
    },

];