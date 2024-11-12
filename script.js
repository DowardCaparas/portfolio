// window.addEventListener("load", function () {
//   window.scrollTo({ top: 0 }); // Scroll to the top of the page
// });

// reusable function to create an element
const createElement = (tag, className, content = "") => {
  // el stands for element
  const el = document.createElement(tag);
  if (className) el.classList.add(className);
  if (content) el.textContent = content;
  return el;
};

// reusable function to create an image element
const createImageElement = (
  className,
  src,
  alt,
  width = "",
  height = "",
  cursor = ""
) => {
  // el stands for element
  const el = document.createElement("img");
  if (className) el.classList.add(className);
  el.src = src;
  el.alt = alt;
  if (width) el.style.width = width;
  if (height) el.style.height = height;
  if (cursor) el.style.cursor = cursor;
  return el;
};
// reusable button component for hero section
const createHeroButton = (text, bgColor, color, sectionId) => {
  // el stands for  element
  const heroButton = document.createElement("button");
  heroButton.classList.add("custom_button");
  heroButton.innerText = text;
  heroButton.style.backgroundColor = bgColor;
  heroButton.style.color = color;
  heroButton.addEventListener("click", () => {
    const sectionID = document.getElementById(sectionId);
    sectionID.scrollIntoView({ block: "start" });
  });
  return heroButton;
};

// Hero section --
// enable click to nav logo as home button
const navLogo = document.querySelector(".nav_logo");
navLogo.addEventListener("click", () => {
  window.scrollTo({ top: 0 }); // Scroll to the top of the page
});

// hero buttons
const heroButtons = document.querySelector(".hero_buttons");
const knowMore = createHeroButton("Know more", "#000", "#fff", "about");
const contact = createHeroButton("Contact", "#fff", "#000", "contact");

// append the hero buttons
heroButtons.append(knowMore, contact);

// add border bottom to the nav when the user scrolled
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  // Check if the page is scrolled down by at least 10px
  window.scrollY > 10
    ? nav.classList.add("scrolled")
    : nav.classList.remove("scrolled");
});

let navIsOpen = false;
let iconName = "hamburger";
const navToggleButton = document.querySelector(".nav_toggle_button");
const navPanel = document.querySelector(".nav_panel");
const navToggleIcon = createImageElement(
  "",
  `./assets/icons/${iconName}.svg`,
  "toggle icon",
  "35px",
  "35px",
  "pointer"
);

// Event listener to toggle navIsOpen and update the icon
navToggleIcon.addEventListener("click", () => {
  navIsOpen = !navIsOpen; // Toggle state

  // Enable nav panel when navIsOpen is true
  navIsOpen
    ? navPanel.classList.remove("hidden")
    : navPanel.classList.add("hidden");

  iconName = navIsOpen ? "close" : "hamburger"; // Update iconName
  navToggleIcon.src = `../assets/icons/${iconName}.svg`; // Change icon src based on the state
});

// Append the icon to the button
navToggleButton.appendChild(navToggleIcon);

// Tech stach
const techStacksArray = [
  "bootstrap",
  "cplusplus",
  "csharp",
  "css",
  "framer",
  "git",
  "html",
  "javascript",
  "vscode",
  "jquery",
  "mysql",
  "next",
  "nodejs",
  "photoshop",
  "php",
  "react",
  "sass",
  "tailwind",
  "typescript",
  "vercel",
];

// Ensure the div has the correct class name
const techStackDiv = document.getElementById("hero_tech_stacks");

techStacksArray.forEach((element, index) => {
  // Create an img element for each tech stack
  const techImage = createImageElement(
    "tech_stack_icon",
    `./assets/techstacks/${element}.svg`,
    element.name,
    "50px",
    "50px"
  );
  techImage.style.position = "relative";
  techImage.style.animation = `upAndDown 2s linear infinite ${index * -0.03}s`;

  // Append the image to the container
  techStackDiv.appendChild(techImage);
});

// About section --
// Education
const educationArray = [
  {
    level: "College",
    details: `I graduated in 2024 with a Bachelor’s degree in Information Technology from 
    Cavite State University - Naic, which is in Bucana Malaki, Naic, Cavite. For my capstone 
    project, I created Simian: A Mobile Educational Game for Primary Level in Learning Space 
    Science, where I worked as both the programmer and UI/UX designer using Unity3D with C#. 
    The project earned the Best Capstone award, and I was also recognized as an Academic Achiever 
    for the years 2021-2023.`,
  },
  {
    level: "Senior High School",
    details: `I finished my Senior High School at Granby Colleges of Science and Technology Inc. 
    in 2019, where I focused on Information and Communications Technology with a major in Programming. 
    For my final project, I built a Voting System using VB.NET and worked as the programmer. I graduated 
    with honors and was proud of the work I did. The school is in Ibayo Silangan, Naic, Cavite.`,
  },
  {
    level: "Junior High School",
    details: `I graduated from Cavite Community Academy in 2017, also located in Ibayo Silangan, 
    Naic, Cavite. During my time there, I won a few awards for my skills in computer studies, 
    including Best in Computer (Hands-On) in 2016 and 2015, and Best in Computer (Theory) in 2014.`,
  },
];

const educationCardsDiv = document.getElementById("education_cards_div");

educationArray.forEach((element) => {
  const educationIcon = createImageElement(
    "education_icon",
    "./assets/icons/graduationCap.svg",
    "graduation cap",
    "50px",
    "50px"
  );

  const educationLevel = createElement(
    "span",
    "education_level",
    element.level
  );
  const educationDetails = createElement(
    "p",
    "education_details",
    element.details
  );

  const educationCard = createElement("div", "education_card");
  educationCard.append(educationIcon, educationLevel, educationDetails);
  educationCardsDiv.appendChild(educationCard);
});

// Certificate section
// Certificates
const certificatesArray = [
  {
    title: "Foundational C-Sharp with Microsoft",
    url: "https://www.freecodecamp.org/certification/Dounhuward_B_Caparas/foundational-c-sharp-with-microsoft",
  },
  {
    title: "Responsive Web Design",
    url: "https://www.freecodecamp.org/certification/Dounhuward_B_Caparas/responsive-web-design",
  },
];

const certificateAccordion = document.getElementById("certificate_accordion");

certificatesArray.forEach((element) => {
  const certificateTitle = createElement("h3", "certificate_title");
  const certificateLink = createElement("button", "certificate_link");
  const accordionContainer = createElement("div", "accordion_container");

  certificateTitle.textContent = element.title;

  certificateLink.innerText = "View";
  certificateLink.addEventListener("click", () => 
    window.open(element.url, "_blank")
  );

  accordionContainer.append(certificateTitle, certificateLink);
  certificateAccordion.appendChild(accordionContainer);
});

// Project section --
// Projects
const projectsArray = [
  {
    name: "CalcHub",
    type: "Web App",
    technologies: ["ReactJS", "Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://dowardcaparas.github.io/all-in-one-calculator/",
    github: "https://github.com/DowardCaparas/all-in-one-calculator",
    description: `All-in-one calculator, It's a web application that allow users compute math problems`,
  },
  {
    name: "Weather App",
    type: "Web App",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://dowardcaparas.github.io/weather_app/",
    github: "https://github.com/DowardCaparas/weather_app",
    description: `A web application that allow users to get the latest weather status of location
    by typing city or country name`,
  },
  {
    name: "ToDo App",
    type: "Web App",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://dowardcaparas.github.io/todoApp/",
    github: "https://github.com/DowardCaparas/todoApp",
    description: `A web application that allow users to manage their tasks. It has
    filter feature to make easily to find what task are done or not.`,
  },
  {
    name: "CarePulse",
    type: "Web App",
    technologies: [
      "Shadcn",
      "Sentry",
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
      "Appwrite",
      "Vercel",
    ],
    url: "https://healthcare-management-eta.vercel.app",
    github: "https://github.com/DowardCaparas/healthcare_management",
    description: `A web based application that allow users to create an account and set date for appointment
    to the available doctors.`,
  },
  {
    name: "Anime Vault",
    type: "Website",
    technologies: [
      "Tailwind CSS",
      "ReactJS",
      "Next.js",
      "TypeScript",
      "Vercel",
    ],
    url: "https://anime-vault-eta-mauve.vercel.app",
    github: "https://github.com/DowardCaparas/anime_list",
    description: `A web application that has infinite scroll feature for looking anime movies or series.`,
  },
  {
    name: "Hex olo",
    type: "Website",
    technologies: ["Tailwind CSS", "ReactJS", "Next.js", "TypeScript"],
    url: "https://dowardcaparas.github.io/color_picker/",
    github: "https://github.com/DowardCaparas/color_picker",
    description: `A website that can provide the different set of colors and themes including their names.
    Users allow to copy the hex code.`,
  },
  {
    name: "Artoku",
    type: "Landing Page",
    technologies: [
      "Tailwind CSS",
      "ReactJS",
      "Next.js",
      "Framer",
      "TypeScript",
    ],
    url: "https://dowardcaparas.github.io/Artoku_Landing_page/",
    github: "https://github.com/DowardCaparas/Artoku_Landing_page",
    description: `A landing page for Artoku allow users to view what's the benefits and get more detailed
    information about Artoku.`,
  },
  {
    name: "iDSGadgets",
    type: "Landing Page",
    technologies: ["Tailwind CSS", "ReactJS", "Next.js", "TypeScript"],
    url: "https://dowardcaparas.github.io/iDSGadgets/",
    github: "https://github.com/DowardCaparas/iDSGadgets",
    description: `A landing page showcasing the featured and available products or unit. User allow to view
    what's the latest news and update.`,
  },
  {
    name: "Day Counter",
    type: "Web App",
    technologies: ["Tailwind CSS", "ReactJS", "Next.js", "JavaScript"],
    url: "https://dowardcaparas.github.io/RemainingDayCounter/",
    github: "https://github.com/DowardCaparas/RemainingDayCounter",
    description: `A web based application that allow user to calculate the remaining days 
    in their subscription by setting two different dates in calendar.`,
  },
  {
    name: "Simian",
    type: "Mobile App",
    technologies: ["Unity 3D", "C#", "Photoshop", "Audacity"],
    url: "https://www.youtube.com/embed/Cfm3aRz-M1A/",
    github: "",
    description: `A mobile application designed for primary level in learning space science. It has
    gamification feature to make easily to understand and boost their mind.`,
  },
];

const projectsDiv = document.getElementById("project_cards");
const projectCollapseButton = document.getElementById(
  "project_collapse_button"
);

const renderProjects = (projects) => {
  projectsDiv.innerHTML = ""; // Clear all first

  projects.forEach((element) => {
    // Create Project Card
    const projectCard = createElement("div", "project_card");

    // Image
    const projectImage = createElement("img", "project_image");
    projectImage.src = `assets/images/${element.name}.webp`;
    projectImage.alt = element.name;
    projectImage.style.width = "100%";
    projectImage.style.height = "280px";

    // Project Details Div
    const projectDetails = createElement("div", "project_details");

    // Text and Buttons Wrapper
    const cardTextAndButtonsParent = createElement(
      "div",
      "card_text_and_button_parent"
    );

    // Name and Type
    const cardNameAndType = createElement("div", "card_name_type");
    cardNameAndType.appendChild(
      createElement("h3", "project_name", element.name)
    );
    cardNameAndType.appendChild(
      createElement("span", "project_type", element.type)
    );

    // Buttons (GitHub and Live Demo)
    const cardButtons = createElement("div", "card_buttons");

    const projectGitHub = createImageElement(
      "project_github",
      "./assets/icons/github.svg",
      "GitHub"
    );
    projectGitHub.addEventListener("click", () =>
      window.open(element.github, "_blank")
    );

    const projectLiveDemo = createImageElement(
      "project_live_demo",
      "./assets/icons/arrowup.svg",
      "Live Demo"
    );
    projectLiveDemo.addEventListener("click", () =>
      window.open(element.url, "_blank")
    );

    cardButtons.append(projectGitHub, projectLiveDemo);
    cardTextAndButtonsParent.append(cardNameAndType, cardButtons);

    // Description
    const projectDescription = createElement(
      "p",
      "project_description",
      element.description
    );

    // Techs
    const projectTechDiv = createElement("div", "project_tech_div");
    element.technologies.forEach((tech) => {
      const projectTechnology = createElement(
        "span",
        "project_technology",
        tech
      );
      projectTechDiv.appendChild(projectTechnology);
    });

    // Append elements to project card
    projectDetails.append(
      cardTextAndButtonsParent,
      projectDescription,
      projectTechDiv
    );
    projectCard.append(projectImage, projectDetails);
    projectsDiv.appendChild(projectCard);
  });
};

const startIndex = 0;
let endIndex = 6;
let isAllProjectShown = false;
let slicedProjectsArray = projectsArray.slice(startIndex, endIndex); // load first 6 projects
projectCollapseButton.innerText = "View all";

const loadProjects = () => {
  if (!isAllProjectShown) {
    endIndex = projectsArray.length;
    slicedProjectsArray = projectsArray.slice(startIndex, endIndex);
    // Re-render the updated project list
    renderProjects(slicedProjectsArray);
    projectCollapseButton.innerText = "See less";
    isAllProjectShown = true;
  } else {
    endIndex = 6;
    slicedProjectsArray = projectsArray.slice(startIndex, endIndex);
    // Re-render the updated project list
    renderProjects(slicedProjectsArray);
    projectCollapseButton.innerText = "View all";
    isAllProjectShown = false;
  }
};

projectCollapseButton.addEventListener("click", loadProjects);

// initial render of project
renderProjects(slicedProjectsArray);

// Footer section --
// Socials
const socialsArray = [
  {
    name: "facebook",
    url: "https://www.facebook.com/doward.caparas?mibextid=ZbWKwL",
  },
  {
    name: "gmail",
    url: "mailto:dounhuward.c@gmail.com",
  },
  {
    name: "tiktok",
    url: "https://t.me/dowardcaparas",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/dounhuwardcaparas/",
  },
];

const footerSocialsDiv = document.querySelector(".footer_socials");
socialsArray.forEach((element) => {
  const anchorTag = createElement("a", "footer_social_link");
  anchorTag.href = element.url;

  // add image inside the anchor tag
  const anchorTagImg = createImageElement(
    "anchor_tag_image",
    `./assets/icons/${element.name}.svg`,
    `${element.name} icon`,
    "30px",
    "30px",
    "pointer"
  );

  anchorTag.appendChild(anchorTagImg);

  footerSocialsDiv.appendChild(anchorTag);
});
