"use client";
import { useState } from 'react';
import Sidebar from '@/components/settings/sidbar';
import Profile from '@/components/settings/profile';
import InputField from '@/components/settings/InputField'
import Layout from '@/components/settings/layout';
import CompanyDetails from '@/components/settings/CompanyDetails';


export default function SettingsPage () {
    const [currentRoute, setCurrentRoute] = useState('profile');

    const renderComponent = () => {
        switch (currentRoute) {
            case 'profile':
                return <Profile />;
            case 'company-details':
                return <CompanyDetails />
            default:
                return <Profile />;
        }
    };
    return (
        <Layout>
            <Sidebar
                activeRoute={currentRoute}
                onRouteChange={setCurrentRoute}
            />
            {renderComponent()}
        </Layout>
    )
}