import Link from 'next/link';
import Layout from '@components/layout/BlipLayout';

const Blip = () => (
  <Layout>
    <h1>Blip</h1>
    <p>hej.</p>
    <Link href="/">Go home</Link>
  </Layout>
);

export default Blip;
