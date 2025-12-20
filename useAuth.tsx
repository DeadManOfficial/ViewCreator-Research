import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { authService } from '@/services/authService';
import { User, AuthResponse } from '@/types/index';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  connectSocial: (provider: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// MOCK MODE FLAG - Set to true to bypass backend for testing
const MOCK_MODE = true;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      if (MOCK_MODE) {
        // Simulate checking local storage or session
        const storedUser = localStorage.getItem('mock_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } else {
        const profile = await authService.getProfile();
        setUser(profile);
      }
    } catch (error) {
      console.error('Auth check failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      if (MOCK_MODE) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockUser: User = {
          id: '1',
          email,
          name: 'Test User',
          avatar: 'https://github.com/shadcn.png',
          createdAt: new Date().toISOString(),
          plan: 'pro',
          credits: 1000,
          updatedAt: new Date().toISOString(),
          emailVerified: true
        };
        
        localStorage.setItem('mock_user', JSON.stringify(mockUser));
        setUser(mockUser);
        toast.success('Logged in successfully (Mock Mode)');
      } else {
        const response = await authService.login(email, password);
        setUser(response.user);
        toast.success('Logged in successfully');
      }
    } catch (error) {
      toast.error('Login failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (MOCK_MODE) {
        localStorage.removeItem('mock_user');
        setUser(null);
      } else {
        await authService.logout();
        setUser(null);
      }
      toast.success('Logged out');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const connectSocial = async (provider: string) => {
    try {
      if (MOCK_MODE) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate successful connection for all providers except the known failing ones if we wanted to test failure
        // But for "Mock Mode" we generally want to unblock dev, so we simulate success
        
        toast.success(`Connected to ${provider} (Mock Mode)`);
        
        // Update user profile with new connection
        if (user) {
          const updatedUser = { ...user, [`${provider}Connected`]: true };
          setUser(updatedUser);
          localStorage.setItem('mock_user', JSON.stringify(updatedUser));
        }
      } else {
        // Real implementation
        const { url } = await authService.getOAuthUrl(provider);
        window.location.href = url;
      }
    } catch (error) {
      toast.error(`Failed to connect to ${provider}`);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      isAuthenticated: !!user, 
      login, 
      logout,
      connectSocial
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
