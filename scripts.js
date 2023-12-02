document.addEventListener('DOMContentLoaded', function() {
  // Sample project data (replace this with your actual projects)
  const projects = [
    { name: 'Project 1', technology: 'C#' },
    { name: 'Project 2', technology: 'Java' },
    { name: 'Project 3', technology: 'Node.js' },
    // Add more projects here
  ];

  // Function to display projects
  function displayProjects(projects) {
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = '';

    projects.forEach(project => {
      const li = document.createElement('li');
      li.textContent = project.name + ' - ' + project.technology;
      projectList.appendChild(li);
    });
  }

  // Filter projects based on input
  document.getElementById('filterInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredProjects = projects.filter(project =>
      project.technology.toLowerCase().includes(searchTerm)
    );

    displayProjects(filteredProjects);
  });

  // Initially display all projects
  displayProjects(projects);
});
