import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

export default function Header() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdown on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // close on outside click or Esc
  useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    }
    function onEsc(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  function handleLogout() {
    logout();
    setOpen(false);
    navigate('/');
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="Home">
          <svg className="logo-icon" width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="7" width="18" height="13" rx="2" fill="#5e66e7"/>
            <path d="M3 7l9-4 9 4" stroke="#fff" strokeWidth="0.8" />
          </svg>
          <span className="brand">Shopify</span>
        </Link>

        <nav className="right-nav" ref={containerRef}>
          <div className="account">
            <button
              className="account-button"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <circle cx="12" cy="8" r="3.2" fill="#374151" />
                <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" fill="#374151" />
              </svg>

              <span className="account-name">
                {user ? `${user.username}` : 'Account'}
              </span>

              <svg className={`chev ${open ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" aria-hidden>
                <path d="M6 9l6 6 6-6" stroke="#374151" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={`dropdown ${open ? 'show' : ''}`}>
              {user ? (
                <>
                  <Link className="drop-link" to={`/profile/${user.username}`} onClick={() => setOpen(false)}>Profile</Link>
                  <Link className="drop-link" to="/" onClick={() => setOpen(false)}>Home</Link>
                  <button className="drop-link logout" onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <Link className="drop-link" to="/login" onClick={() => setOpen(false)}>Login</Link>
                  <Link className="drop-link" to="/register" onClick={() => setOpen(false)}>Register</Link>
                  <Link className="drop-link contact" to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
