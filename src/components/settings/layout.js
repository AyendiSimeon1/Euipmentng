import Header from "../homepage/header"

export default function Layout ({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex">
                {children}
            </div>
        </div>
    )
} 