import Link from 'next/link';
import Layout from '../components/Layout';

const index = () => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
      <Link href="/">Go home</Link>
  </Layout>
);

// export const getStaticProps: GetStaticProps = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   // const items: User[] = sampleUserData
//   // return { props: { items } }
// }

export default index;
