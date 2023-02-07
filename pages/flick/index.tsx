import Link from 'next/link';
import Layout from '@components/layout/FlickLayout';

const Flick = () => (
  <Layout>
    <h1>Flick</h1>
    <p>hej.</p>
    <Link href="/">Go home</Link>
  </Layout>
);

export default Flick;
