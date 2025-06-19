'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authAPI, dashboardAPI } from '@/utils/api';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
          router.push('/login');
          return;
        }

        const userData = localStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }

        // Fetch dashboard stats
        const statsResponse = await dashboardAPI.getStats();
        setStats(statsResponse);
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // Force logout on client side
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
      router.push('/login');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Hermosa Water District
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Welcome, {user?.name || user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="btn-secondary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Admin Dashboard
              </h2>
              <p className="text-gray-600 mb-6">
                Welcome to the Hermosa Water District Admin Portal
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="card">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Customers
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {stats?.total_customers || 0}
                    </dd>
                  </div>
                </div>
                
                <div className="card">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Active Staff
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {stats?.total_staff || 0}
                    </dd>
                  </div>
                </div>
                
                <div className="card">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Pending Payments
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {stats?.pending_payments || 0}
                    </dd>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <a href="/accounts" className="btn-primary">
                  Manage Accounts
                </a>
                <a href="/payments" className="btn-primary">
                  Payments
                </a>
                <a href="/announcements" className="btn-primary">
                  Announcements
                </a>
                <a href="/reports" className="btn-primary">
                  Reports
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 