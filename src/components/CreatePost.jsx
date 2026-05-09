import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Blog.css';

const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: 'Dr. Altaf Samo',
    image_url: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('http://127.0.0.1:8000/api/posts', formData);
      setLoading(false);
      navigate('/blog'); // Redirect back to blog page
    } catch (err) {
      console.error('Error creating post:', err);
      setError('Failed to create post. Please check if the Python backend is running.');
      setLoading(false);
    }
  };

  return (
    <div className="section blog-page">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="blog-header">
          <h1 className="section-title">Create New Post</h1>
          <p className="blog-subtitle">Share your insights and knowledge with the world.</p>
        </div>

        <form className="contact-form glass" onSubmit={handleSubmit}>
          {error && <div className="error-state" style={{ padding: '1rem', margin: '0 0 1.5rem 0' }}>{error}</div>}

          <div className="form-group">
            <label htmlFor="title">Post Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter an engaging title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image_url">Image URL (Optional)</label>
            <input
              type="url"
              id="image_url"
              name="image_url"
              placeholder="https://example.com/image.jpg"
              value={formData.image_url}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              rows="10"
              placeholder="Write your blog post here..."
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary submit-btn"
            disabled={loading}
          >
            {loading ? 'Publishing...' : 'Publish Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
