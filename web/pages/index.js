import Head from 'next/head'
import Link from 'next/link'

import Container from '../components/Container'

import sanity from '../lib/sanity'

const query = `*[_type == "page"] {
  "projects": projects[]->
}
`;

const Landing = ({ docs }) => {
  console.log(docs)
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Discipline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mt-40 mb-24'>
        <header className='mb-24'>
          <Container>
            <img src='discipline-logo.svg' className='w-32 md:w-48 lg:w-64' />
          </Container>
        </header>
        <section>
          <Container>
            <ul className='flex flex-wrap -mx-12'>
              {docs[0].projects.map(project => {
                return (
                  <li className='px-12 mb-12' key={`project_${project._id}`}>
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
