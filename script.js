// Function to toggle a dark mode theme
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// Attach the function to a button click event
const darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener("click", toggleDarkMode);

// Function to display a project modal
function openProjectModal(projectId) {
  const modal = document.getElementById("project-modal");
  const projectTitle = document.getElementById("project-title");
  const projectDescription = document.getElementById("project-description");

  // Customize the content based on the project
  if (projectId === "project-1") {
    projectTitle.textContent = "Customer Segmentation Project";
    projectDescription.textContent = "Conducted customer segmentation based on purchasing behavior, demographics, and geographic location...";
  } else if (projectId === "project-2") {
    projectTitle.textContent = "Social Media Campaign Analysis";
    projectDescription.textContent = "Evaluated the effectiveness of social media marketing efforts by analyzing engagement...";
  }

  // Display the modal
  modal.style.display = "block";
}

// Attach the function to project buttons
const project1Button = document.getElementById("project-1-button");
project1Button.addEventListener("click", () => openProjectModal("project-1"));

const project2Button = document.getElementById("project-2-button");
project2Button.addEventListener("click", () => openProjectModal("project-2"));

// Function to close the project modal
function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.style.display = "none";
}

// Attach the function to the close button
const closeModalButton = document.getElementById("close-modal-button");
closeModalButton.addEventListener("click", closeProjectModal);
