import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ShieldCheck, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login, user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed. Please verify your official credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh', 
      background: 'var(--bg-main)'
    }}>
      {/* Fixed Top Header Navbar */}
      <header className="login-top-header">
        <div className="login-header-content">
          <ShieldCheck className="login-header-icon" size={28} color="#ffffff" />
          <div className="login-header-text">
            <div className="login-main-title">
              Secure Digital Document Management System
            </div>
            <div className="login-sub-title">
              Official Case & Digital Evidence Authorization Portal
            </div>
          </div>
        </div>
      </header>

      {/* Main Login Form Box Container with Top Offset */}
      <div className="login-page-container">
        <div className="gov-card login-card">
          <div className="gov-card-header login-card-header">
            <div className="login-icon-wrapper">
              <Lock size={28} className="login-lock-icon" />
            </div>
            <h1 className="login-card-title">Official User Login</h1>
            <p className="login-card-subtitle">
              Enter your authorized department credentials to access the system.
            </p>
          </div>

          <div className="gov-card-body login-card-body">
            {error && (
              <div style={{ 
                background: 'var(--danger-bg)', 
                border: '1px solid var(--danger-border)',
                color: 'var(--danger-text)',
                padding: '12px 14px',
                borderRadius: '4px',
                marginBottom: '20px',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label className="input-label" htmlFor="email">Official Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  className="input-field" 
                  placeholder="officer@agency.gov.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="input-group" style={{ marginBottom: '24px' }}>
                <label className="input-label" htmlFor="password">Password</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    id="password"
                    type={showPassword ? 'text' : 'password'} 
                    className="input-field" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isSubmitting}
                    style={{ paddingRight: '40px' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    title={showPassword ? "Hide Password" : "Show Password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '11px', fontSize: '0.95rem', fontWeight: 600 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Authenticating Credentials...' : 'Authenticate & Sign In'}
              </button>
            </form>
          </div>

          <div className="login-card-footer">
            Restricted System • Unauthorized access is strictly prohibited and monitored.
          </div>
        </div>
      </div>
    </div>
  );
};
