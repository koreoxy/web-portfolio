import React from 'react';
import Layout from '../../../components/Layout';
import Link from 'next/link';

const Project = () => {
  const data = [
    {
      title: 'Aplikasi sitem pakar',
      image: '/img/1.png',
      description: ' ini adalaha aplikasi sitem pakar',
      category: 'Python',
      link: 'https://github.com/koreoxy/aplikasi-sistem-pakar',
    },
    {
      title: 'Game text console',
      image: '/img/1.png',
      description: ' ini adalaha aplikasi sitem pakar',
      category: 'Python',
      link: '',
    },
    {
      title: 'Game text console',
      image: '/img/1.png',
      description: ' ini adalaha aplikasi sitem pakar',
      category: 'Python',
      link: '',
    },
    {
      title: 'Game text console',
      image: '/img/1.png',
      description: ' ini adalaha aplikasi sitem pakar',
      category: 'Python',
      link: '',
    },
  ];

  return (
    <Layout>
      <div className="w-[500px]">
        <h1 className="font-bold text-[20px]">All Project</h1>
        <hr class="w-auto h-1 mx-auto md:my-1"></hr>
        <div className="overflow-y-auto h-96 no-scrollbar">
          {data.map((projects) => (
            <div key={projects}>
              <Link href={projects.link}>
                <div className="grid grid-cols-1 gap-4 pt-3">
                  <div className="border border-white p-3 transform transition duration-500 hover:-translate-y-2 hover:bg-[#3a2d2d]">
                    <h1 className="font-bold text-lg">{projects.title}</h1>
                    <ul>
                      <li>{projects.description}</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="overflow-y-auto h-96 no-scrollbar">
        <div className="card w-[600px] bg-base-100 shadow-xl grid grid-row-2 gap-10"> */}
      {/* {data.map((projects) => ( */}
      {/* <div key={projects}>
              <Link href={projects.link}>
                <div className="card-body">
                  <h2 className="card-title">{projects.title}</h2>
                  <p>{projects.description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline text-cyan-400">
                      {projects.category}
                    </div>
                  </div>
                </div>
              </Link>
            </div> */}
      {/* ))} */}
      {/* </div>
      </div> */}

      {/* <div className="overflow-y-auto h-32">
        <ul>
          <li>PROJECT 1</li>
          <li>PROJECT 2</li>
          <li>PROJECT 3</li>
          <li>PROJECT 3</li>
          <li>PROJECT 3</li>
          <li>PROJECT 3</li>
          <li>PROJECT 3</li>
          <li>PROJECT 3</li>
          <li>PROJECT 3</li>
        </ul>
      </div> */}
    </Layout>
  );
};

export default Project;
