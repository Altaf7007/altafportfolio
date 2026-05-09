import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Edit, Trash2 } from 'lucide-react';
import axios from 'axios';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/posts');
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load blog posts. Is the backend running?');
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`);
        // Refresh posts after deletion
        fetchPosts();
      } catch (err) {
        console.error('Error deleting post:', err);
        alert('Failed to delete post.');
      }
    }
  };

  return (
    <div className="section blog-page">
      <div className="container">
        <div className="blog-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>Insights & Articles</h1>
            <p className="blog-subtitle">Latest thoughts on research, industry trends, and more.</p>
          </div>
          <Link to="/blog/new" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Write a Post
          </Link>
        </div>

        {loading && <div className="loading-state glass">Loading posts...</div>}
        {error && <div className="error-state">{error}</div>}

        {!loading && !error && posts.length === 0 && (
          <div className="empty-state glass">
            <h3>No posts found</h3>
            <p>Check back later or add a post via your Supabase database!</p>
          </div>
        )}

        <div className="blog-grid">
          {posts.map(post => (
            <div key={post.id} className="blog-card glass">
              <div className="blog-card-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="blog-date">
                    {new Date(post.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <div className="card-actions" style={{ display: 'flex', gap: '0.8rem' }}>
                    <button 
                      onClick={() => navigate(`/blog/edit/${post.id}`)}
                      style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', padding: '5px' }}
                      title="Edit Post"
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(post.id)}
                      style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '5px' }}
                      title="Delete Post"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-author">By {post.author}</p>
                <p className="blog-card-excerpt">
                  {post.content.substring(0, 150)}...
                </p>
                <button className="btn btn-outline read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
