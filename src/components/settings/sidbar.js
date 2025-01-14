
export default function Sidebar ({ activeRoute, onRouteChange }) {
    const routes = [
        { path: 'profile', label: 'Profile' },
        { path: 'company-details', label: 'Company Details' },
        { path: 'settings', label: 'Settings' },
        { path: 'change-password', label: 'Change Password' },
        { path: 'change-email', label: 'Change Email' },
        { path: 'notifications', label: 'Notification settings' },
        { path: 'manage-account', label: 'Manage Account' },
        { path: 'logout', label: 'Log out' }
    ];

    return (
        <aside className="w-64 min-h-screen text-left bg-white border-r p-4">
            <nav className="space-y-1">
              
                {routes.map(route => (
                    <button
                        key={route.path}
                        onClick={() => onRouteChange(route.path)}
                        className={`w-full  px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg ${
                            activeRoute === route.path ? 'bg-gray-100 font-meduim': ''
                        }`}>
                            {route.label}
                        </button>
                ))}
            </nav>
        </aside>
    )
}