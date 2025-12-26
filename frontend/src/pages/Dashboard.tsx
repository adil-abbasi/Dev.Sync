// src/pages/Dashboard.jsx
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  UserCircleIcon, 
  BriefcaseIcon, 
  ChatBubbleLeftRightIcon, 
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon 
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  const menuItems = [
    { icon: HomeIcon, label: 'Overview', active: true },
    { icon: UserCircleIcon, label: 'My Profile', href: '/profile' },
    { icon: BriefcaseIcon, label: 'My Projects', href: '/projects' },
    { icon: ChatBubbleLeftRightIcon, label: 'Messages', href: '/messages' },
    { icon: Cog6ToothIcon, label: 'Settings', href: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl fixed h-full">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-blue-600">DevSync</h1>
        </div>
        <nav className="mt-8">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.href || '#'}
              className={`flex items-center px-8 py-4 text-lg font-medium transition ${
                item.active 
                  ? 'bg-blue-600 text-white border-r-4 border-yellow-400' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-6 w-6 mr-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="absolute bottom-8 left-8 right-8 flex items-center justify-center gap-3 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition"
        >
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-10">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome back, Developer!
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              You have <span className="text-blue-600 font-bold">3 new project invites</span> and <span className="text-green-600 font-bold">2 messages</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-5xl font-bold">12</h3>
                <p className="text-xl mt-2">Active Projects</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-2xl text-white">
                <h3 className="text-5xl font-bold">$8,450</h3>
                <p className="text-xl mt-2">Earned This Month</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-2xl text-white">
                <h3 className="text-5xl font-bold">4.9 ★</h3>
                <p className="text-xl mt-2">Client Rating</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {["Client accepted your bid on React Dashboard", "You completed Milestone #2", "New message from Sarah (UI/UX Project)"].map((act, i) => (
                  <div key={i} className="flex items-center p-5 bg-gray-50 rounded-xl">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    <p className="text-lg">{act}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;