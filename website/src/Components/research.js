import React from 'react';

const Research = () => {
  const researchProjects = [
    {
      title: 'ISSS ChatBot',
      category: 'NLP & TensorFlow & DialogFlow',
      image: 'isss-chatbot-thumb.jpg',
      url: 'https://github.com/drexelai/isss-chatbot',
      year: 2022,
    },
    {
      title: 'Food Image Classifier for Efficient Refund Process',
      category: 'TensorFlow, Neural Network',
      image: 'picnic-thumb.jpg',
      url: 'https://github.com/drexelai/Picnic-Hackathon',
      year: 2022,
    },
    {
      title: 'Stock Market Predictor',
      category: 'Python',
      image: 'stock.jpg',
      url: 'https://github.com/drexelai/Stock-Market',
      year: 2021,
    },
    {
      title: 'Othello Game AI',
      category: 'Othello',
      image: 'othello.jpg',
      url: 'https://github.com/drexelai/othello-ai',
      year: 2021,
    },
  ];

  // Extract unique years from researchProjects
  const years = [...new Set(researchProjects.map((project) => project.year))];

  return (
    <div>
      <h1 className="text-blue-900 pt-12 text-2xl font-bold pb-4 pl-8">Research Page</h1>
      
      {/* Year List */}
      <div className="flex justify-center">
        <ul className="flex space-x-4 my-4">
          {years.map((year) => (
            <li key={year}>
              <a href={`#${year}`} className="text-blue-500 hover:underline">
                {year}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Research List */}
      {years.map((year) => (
        <div key={year}>
          <h2 id={year} className="text-lg font-bold text-blue-900 py-2 pl-8">
            {year}
          </h2>
          <ul className="pl-8">
            {researchProjects
              .filter((project) => project.year === year)
              .map((project, index) => (
                <li key={index} className="mb-2">
                  <span className="font-bold">{project.title}</span> - {project.category}
                  <br />
                  <a href={project.url} className="text-blue-500 hover:underline">
                    Project Link
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Research;
