import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/new" element={<CreatePost />} />
        <Route path="/blog/edit/:id" element={<EditPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
