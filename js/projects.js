// projects.js - Single source of truth for all projects
const projects = [
  {
    id: 1,
    title: "Job Sansar",
    tech: "HTML + CSS + Flask + PostgreSQL",
    image: "./images/jobsansar.jpg",
    github: "https://github.com/Jyoti-Adhikari/Job_Sansar"
  },
  {
    id: 2,
    title: "WanderHub",
    tech: "MERN Stack",
    image: "./images/wanderhub.jpg",
    github: "https://github.com/Jyoti-Adhikari/WanderHub"
  },
  {
    id: 3,
    title: "E-Commerce System",
    tech: "PHP/MySQL",
    image: "./images/e-commerce.jpg",
    github: "https://github.com/Jyoti-Adhikari/simple-e-commerce-project"
  },
  {
    id: 4,
    title: "Tic-Tac-Toe Game",
    tech: "JavaScript",
    image: "./images/tic-tac-toe.png",
    github: "https://github.com/Jyoti-Adhikari/tic-tac-toe"
  }
  // Add more projects here - just update this array!
];

// Function to generate project HTML (keeping your existing structure)
function generateProjectHTML(projectsToShow) {
  return projectsToShow.map(project => `
    <div class="card">
      <a href="${project.github}" target="_blank">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
        <p>${project.title} (${project.tech})</p>
      </a>
    </div>
  `).join('');
}

// Function to render projects
function renderProjects(containerId, projectsToShow = projects) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = generateProjectHTML(projectsToShow);
  }
}

// Export for use in both pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projects, generateProjectHTML, renderProjects };
}