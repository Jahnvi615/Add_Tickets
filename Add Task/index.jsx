import React, { Component } from 'react';
import './App.css'; // Make sure to import your CSS file here

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      selectedProject: '',
      newProject: '',
      task: '',
    };
  }

  componentDidMount() {
    // Load projects from local storage on component mount
    this.loadAllProjects();
  }

  // Load all projects from local storage
  loadAllProjects() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    this.setState({ projects });
  }

  // Add a new project
  addProject() {
    const { newProject } = this.state;
    if (newProject.trim() === '') {
      alert('Please enter a project name');
      return;
    }

    const project = {
      id: Date.now(),
      name: newProject,
      tasks: [],
    };

    this.setState(
      (prevState) => ({
        projects: [...prevState.projects, project],
        newProject: '',
      }),
      () => this.saveProjectsToLocalStorage()
    );
  }

  // Save projects to local storage
  saveProjectsToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(this.state.projects));
  }

  // Handle input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Add a new task to a project
  addTask() {
    const { selectedProject, task } = this.state;
    if (task.trim() === '') {
      alert('Please enter a task description');
      return;
    }

    this.setState(
      (prevState) => {
        const updatedProjects = prevState.projects.map((project) => {
          if (project.id === selectedProject) {
            const taskObj = {
              id: Date.now(),
              name: task,
              status: 'Progress', // Progress, Completed
              isStarted: false,
              logs: [],
              started: this.getCurrentTimeInTaskStartEndFormat(),
              ended: '',
            };
            project.tasks.push(taskObj);
          }
          return project;
        });

        return {
          projects: updatedProjects,
          task: '',
        };
      },
      () => this.saveProjectsToLocalStorage()
    );
  }

  // Helper function to get current datetime in proper format
  getCurrentTimeInTaskStartEndFormat() {
    const current_datetime = new Date();
    const formatted_date = `${current_datetime.getFullYear()}-${(
      '0' +
      (current_datetime.getMonth() + 1)
    ).slice(-2)}-${('0' + current_datetime.getDate()).slice(
      -2
    )} ${current_datetime.getHours()}:${current_datetime.getMinutes()}:${current_datetime.getSeconds()}`;
    return formatted_date;
  }

  render() {
    const { projects, selectedProject, newProject, task } = this.state;

    return (
      <div className="container">
        {/* Your HTML content here */}
      </div>
    );
  }
}

export default App;
