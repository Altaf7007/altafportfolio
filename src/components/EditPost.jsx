import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Blog.css';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    image_url: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts/${id}`);
        setFormData({
          title: response.data.title,
          content: response.data.content,
          author: response.data.author,
          image_url: response.data.image_url || ''
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load post data.');
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      await axios.put(`http://127.0.0.1:8000/api/posts/${id}`, formData);
      setSaving(false);
      navigate('/blog');
    } catch (err) {
      console.error('Error updating post:', err);
      setError('Failed to update post.');
      setSaving(false);
    }
  };

  if (loading) return <div className="section container loading-state glass">Loading post...</div>;

  return (
    <div className="section blog-page">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="blog-header">
          <h1 className="section-title">Edit Post</h1>
          <p className="blog-subtitle">Update your insights and knowledge.</p>
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

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="submit"
              className="btn btn-primary submit-btn"
              style={{ flex: 1 }}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              type="button"
              className="btn btn-outline submit-btn"
              style={{ flex: 1 }}
              onClick={() => navigate('/blog')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
