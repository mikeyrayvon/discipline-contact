import Head from 'next/head'
import Link from 'next/link'

import sanity from '../lib/sanity'

const query = `*[_type == "page"] {
  _id,
  title
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

      <main>
        <h1>
          Discipline
        </h1>
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
