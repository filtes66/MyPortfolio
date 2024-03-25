import React from 'react';

function Projects () {
    
    const projects= {
     projecs: [
        {
          title: 'Project 1',
          description: 'This is a brief description of Project 1.',
          imageUrl: 'url-to-project-1-image',
          projectUrl: 'url-to-project-1'
        },
        {
          title: 'Project 2',
          description: 'This is a brief description of Project 2.',
          imageUrl: 'url-to-project-2-image',
          projectUrl: 'url-to-project-2'
        },
        {
          title: 'Project 3',
          description: 'This is a brief description of Project 3.',
          imageUrl: 'url-to-project-3-image',
          projectUrl: 'url-to-project-3'
        },
      ],
      generalVideoUrl: 'url-to-project-1-general-video',
      technicalVideoUrl: 'url-to-project-1-general-video',
    };

    return (
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">My Projects</h2>
        <div className="mt-6 grid gap-6 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={project.projectUrl} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                    <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Projects;
