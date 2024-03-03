function filterProjects() {
  const categoryFilter = document.getElementById("categoryFilter").value;
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    const isProfessional = project.classList.contains("professional");
    const isEducation = project.classList.contains("education");

    if (categoryFilter === "all") {
      project.classList.remove("hidden");
    } else if (categoryFilter === "professional" && isProfessional) {
      project.classList.remove("hidden");
    } else if (categoryFilter === "education" && isEducation) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });
}

// Appelle la fonction de filtre au chargement de la page
window.onload = filterProjects;
