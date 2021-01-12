import Head from 'next/head'
import Link from 'next/link'

import Container from '../components/Container'

import sanity from '../lib/sanity'

const query = `*[_type == "page"] {
  about,
  "projects": projects[]->
}
`;

const Landing = ({ docs }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Discipline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='mt-40 mb-24 flex-grow'>
        <Container>
          <img src='discipline-logo.svg' className='w-32 md:w-48 lg:w-64' />
        </Container>
      </header>

      <main>
        <section className='mb-24'>
          <Container>
            <ul className='flex flex-wrap -mx-8'>
              {docs[0].projects.map(project => {
                return (
                  <li className='px-8 mb-12' key={`project_${project._id}`}>
                    <Link href={project.link}>
                      <a>
                        {project.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Container>
        </section>
      </main>

      <footer className='mb-24'>
        <Container>
          <div className='flex flex-wrap lg:flex-nowrap -mx-8'>
            <div className='px-8'>
              {docs[0].about}
            </div>
            <div className='px-8'>
              <Link href='mailto:contact@discipline.contact'>
                <a>contact@discipline.contact</a>
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const docs = await sanity.fetch(query);
  return {
    props: { docs } // will be passed to the page component as props
  };
};

export default Landing
