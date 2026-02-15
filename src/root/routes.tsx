import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/intro';
import { Friends } from '../pages/friends';
import Layout from './layout';

export default function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friends" element={<Friends />} />
        </Routes>
    </Layout>
  );
}