const menuIcon = document.querySelector("#menuIcon");
const menuLinks = document.querySelector("#menuLinks");
const menuList = document.querySelector("#menuList");
const closeMenu = document.querySelector("#closeMenu");

// Open Menu
menuIcon.addEventListener("click", openingMenu);
function openingMenu() {
  menuLinks.classList.add("active");
  menuList.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Menu
closeMenu.addEventListener("click", closingMenu);
function closingMenu() {
  menuLinks.classList.remove("active");
  menuList.classList.remove("active");
  document.body.style.overflow = "auto";
}

// =============================================== //
const heading = document.querySelector("#heading");
const home = document.querySelector("#home");
const contact = document.querySelector("#contact");
const setting = document.querySelector("#setting");
const projectsSection = document.querySelector("#projectsSection");
const contactSection = document.querySelector("#contactSection");
const projectDetailsSection = document.querySelector("#projectDetailsSection");
const loading = document.querySelector("#loading");

// Show Home Section
home.addEventListener("click", showHome);

function showHome() {
  closingMenu();

  if (heading.innerHTML !== "My Projects") {
    loading.style.display = "block";
    setTimeout(() => {
      heading.innerHTML = "My Projects";
      projectsSection.style.display = "block";
      contactSection.style.display = "none";
      projectDetailsSection.style.display = "none";

      loading.style.display = "none";
    }, 500);
  }
}

// Show Contact Section
contact.addEventListener("click", showContent);

function showContent() {
  closingMenu();

  if (heading.innerHTML !== "Contact Me") {
    loading.style.display = "block";
    setTimeout(() => {
      heading.innerHTML = "Contact Me";
      contactSection.style.display = "block";
      projectsSection.style.display = "none";
      projectDetailsSection.style.display = "none";

      loading.style.display = "none";
    }, 500);
  }
}

// =============================================== //

let projects = [
  {
    id: 1,
    image: "assets/images/projects/todo-1.jpg",

    type: "Web app",
    title: "ToDo App",
    icon: "bi bi-list-task",
    description:
      "Create todo App Using HTML, CSS, And JavaScript. you can add a new task and filtering the task [finished, not finished or deleted]",
    languages: ["HTML", "CSS", "Javascript"],
    links: {
      github: "https://github.com/KareemRoshdy2/todo-app",
      url: "https://kareemroshdy2.github.io/todo-app/",
      youtube: "https://youtu.be/CwUuylqQzeg",
    },
  },

  {
    id: 2,
    image: "assets/images/projects/e-commerce.png",
    type: "Web app",
    title: "E-Commerce App",
    icon: "bi bi-cart",
    description:
      "Create E-Commerce App Using HTML, CSS, And JavaScript. The Application Contains A Login Page And An Account Creation Page In Addition To The Home Page Will Find All Products And You Can Add Any Product In Your Shopping Cart And Delete Any Product You Added In Addition To The Profile Page That You Can Find All Your Own Information And Products You Add And You Can Change Your Name, Email Or Your Password",
    languages: ["HTML", "CSS", "Javascript"],
    links: {
      github: "https://github.com/KareemRoshdy2/e-commerce_js_pro",
      url: "https://kareemroshdy2.github.io/e-commerce_js_pro/",
      youtube: "",
    },
  },

  {
    id: 3,
    image: "assets/images/projects/weather.jpg",
    type: "Web app",
    title: "Weather App",
    icon: "bi bi-snow2",
    description:
      "The application display many details about the weather such as [current temperature, address, today's date, sunrise and sunset date, humidity, pressure level, visibility, feeling, and weather during the whole day] in addition to displaying the expected weather during the next three days",
    languages: ["React", "CSS", "Weather API", "React Icons"],
    links: {
      github: "https://github.com/KareemRoshdy/react_weather_app",
      url: "https://weather-app-kr.vercel.app/",
      youtube: "",
    },
  },

  {
    id: 4,
    image: "assets/images/projects/github.png",
    type: "Web Site",
    title: "GitHub Clone",
    icon: "bi bi-github",
    description:
      "Create a design for GitHub using NextJS. The first page of GitHub will be displayed and it has been professionally implemented.",
    languages: ["Next", "React", "Tailwind Css", "Framer Motion"],
    links: {
      github: "https://github.com/KareemRoshdy/github-clone",
      url: "https://kr-github.vercel.app/",
      youtube: "",
    },
  },

  {
    id: 5,
    image: "assets/images/projects/movies.png",
    type: "Web App",
    title: "Movies App",
    icon: "bi bi-camera-reels",
    description:
      "This application displays many movies, and you can view details for each movie, and you can search for any movie and it will be shown directly to you.",
    languages: ["React", "CSS", "Movies API", "Typescript"],
    links: {
      github: "https://github.com/KareemRoshdy/react-movies-app",
      url: "https://kr-movies-app.vercel.app/",
      youtube: "",
    },
  },

  {
    id: 6,
    image: "assets/images/projects/todo-2.png",
    type: "Web App",
    title: "Todo App",
    icon: "bi bi-list-task",
    description:
      "You can use this application to add your daily tasks in addition to additional tasks related to the main task, and you can delete or modify any task that you have added.",
    languages: ["HTML", "CSS", "Typescript"],
    links: {
      github: "https://github.com/KareemRoshdy/ts_todo_app",
      url: "https://kr-todo.vercel.app/",
      youtube: "",
    },
  },
];

projects.map((project) => {
  projectsSection.innerHTML += `
    <div class="project-card" id="${project.id}">
    <div class="project-name flex align-center justify-between">
      <p class="flex align-center gap-10">
        <i class="${project.icon}"></i>
        <span id="${project.id}">${project.title}</span>
      </p>

      <a href="${
        project.links.url
      }" target="_blank" class="flex align-center gap-5">
        <i class="bi bi-link-45deg"></i>
        <span>visit</span>
      </a>
    </div>

    <div class="project-info">
      <p>
        ${project.description}
      </p>
    </div>

    <div class="project-lang flex align-center gap-10">
    ${project.languages.map((el) => `<span>${el}</span>`).join("")}
      
    </div>
  </div>
    `;
});

document.addEventListener("click", ({ target }) => {
  const { id } = target; // String

  const getProjectById = projects.find((project) => project.id === +id);

  if (getProjectById) {
    showProjectDetails(getProjectById);
  }

  if (target.id === "back") {
    showHome();
  }
});

function showProjectDetails(project) {
  loading.style.display = "block";
  setTimeout(() => {
    heading.innerHTML = "Project Details";
    projectDetailsSection.style.display = "block";
    contactSection.style.display = "none";
    projectsSection.style.display = "none";
    loading.style.display = "none";
  }, 500);

  projectDetailsSection.innerHTML = `
        <div class="back" title="back">
          <i id="back" class="bi bi-arrow-left"></i>
        </div>

        <div class="project-container">
        <div class="project-image">
          <img
            src="${project.image}"
            alt="projectImage"
          />
        </div>

        <div class="project-details-info flex align-center justify-between">
          <p class="project-name">${project.title}</p>
          <p>${project.type}</p>
        </div>

        <div class="project-description">
          <p>
          ${project.description}
          </p>
        </div>

        <div class="project-links flex align-center gap-15">
          <a href="${
            project.links.url
          }" class="flex align-center gap-5" target="_blank">
            <i class="bi bi-link-45deg"></i>
            <p>visit</p>
          </a>

          <a href="${
            project.links.github
          }" class="flex align-center gap-5" target="_blank">
            <i class="bi bi-github"></i>
            <p>repo</p>
          </a>

          ${
            project.links.youtube &&
            `<a href="${project.links.youtube}" class="flex align-center gap-5" target="_blank">
                <i class="bi bi-youtube"></i>
                <p>youtube</p>
              </a>`
          }
        </div>
      </div>
  `;
}
