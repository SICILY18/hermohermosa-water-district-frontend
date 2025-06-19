import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Create axios instance with default config
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true, // Important for Laravel sessions
});

// Auth API calls
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/admin-login', { email, password });
    return response.data;
  },
  
  logout: async () => {
    const response = await api.post('/admin-logout');
    return response.data;
  },
  
  checkAuth: async () => {
    const response = await api.get('/check-auth');
    return response.data;
  },
  
  getUser: async () => {
    const response = await api.get('/user');
    return response.data;
  },
};

// Dashboard API calls
export const dashboardAPI = {
  getStats: async () => {
    const response = await api.get('/dashboard/stats');
    return response.data;
  },
};

// Accounts API calls
export const accountsAPI = {
  listAccounts: async () => {
    const response = await api.get('/accounts');
    return response.data;
  },
  
  createStaff: async (staffData: any) => {
    const response = await api.post('/accounts/staff', staffData);
    return response.data;
  },
  
  updateStaff: async (id: string, staffData: any) => {
    const response = await api.put(`/accounts/staff/${id}`, staffData);
    return response.data;
  },
  
  deleteStaff: async (id: string) => {
    const response = await api.delete(`/accounts/staff/${id}`);
    return response.data;
  },
  
  createCustomer: async (customerData: any) => {
    const response = await api.post('/accounts/customer', customerData);
    return response.data;
  },
  
  updateCustomer: async (id: string, customerData: any) => {
    const response = await api.put(`/accounts/customer/${id}`, customerData);
    return response.data;
  },
  
  deleteCustomer: async (id: string) => {
    const response = await api.delete(`/accounts/customer/${id}`);
    return response.data;
  },
};

// Rates API calls
export const ratesAPI = {
  getRates: async () => {
    const response = await api.get('/rates');
    return response.data;
  },
  
  createRate: async (rateData: any) => {
    const response = await api.post('/rates', rateData);
    return response.data;
  },
  
  updateRate: async (id: string, rateData: any) => {
    const response = await api.put(`/rates/${id}`, rateData);
    return response.data;
  },
  
  deleteRate: async (id: string) => {
    const response = await api.delete(`/rates/${id}`);
    return response.data;
  },
};

// Announcements API calls
export const announcementsAPI = {
  getAnnouncements: async () => {
    const response = await api.get('/announcements');
    return response.data;
  },
  
  createAnnouncement: async (announcementData: any) => {
    const response = await api.post('/announcements', announcementData);
    return response.data;
  },
  
  updateAnnouncement: async (id: string, announcementData: any) => {
    const response = await api.put(`/announcements/${id}`, announcementData);
    return response.data;
  },
  
  deleteAnnouncement: async (id: string) => {
    const response = await api.delete(`/announcements/${id}`);
    return response.data;
  },
};

// Tickets API calls
export const ticketsAPI = {
  getTickets: async () => {
    const response = await api.get('/tickets');
    return response.data;
  },
  
  createTicket: async (ticketData: any) => {
    const response = await api.post('/tickets', ticketData);
    return response.data;
  },
  
  getTicket: async (id: string) => {
    const response = await api.get(`/tickets/${id}`);
    return response.data;
  },
  
  updateTicket: async (id: string, ticketData: any) => {
    const response = await api.put(`/tickets/${id}`, ticketData);
    return response.data;
  },
  
  deleteTicket: async (id: string) => {
    const response = await api.delete(`/tickets/${id}`);
    return response.data;
  },
};

// Payments API calls
export const paymentsAPI = {
  getPayments: async () => {
    const response = await api.get('/payments');
    return response.data;
  },
  
  createPayment: async (paymentData: any) => {
    const response = await api.post('/payments', paymentData);
    return response.data;
  },
  
  approvePayment: async (id: string) => {
    const response = await api.post(`/payments/${id}/approve`);
    return response.data;
  },
};

export default api; 