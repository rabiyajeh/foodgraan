import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <h1 className="text-3xl font-semibold text-center mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Manage Dishes</h2>
          <Link to="/admin/manage-dishes">
            <button className="mt-4 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">
              Manage Dishes
            </button>
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Manage Orders</h2>
          <Link to="/admin/manage-orders">
            <button className="mt-4 py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
              Manage Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
