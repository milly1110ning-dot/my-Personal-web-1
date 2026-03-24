import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Placeholder Pages (will be implemented shortly)
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Home />
            </React.Suspense>
          } />
          <Route path="about" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <About />
            </React.Suspense>
          } />
          <Route path="portfolio" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Portfolio />
            </React.Suspense>
          } />
          <Route path="contact" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </React.Suspense>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
