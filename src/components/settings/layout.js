import Header from "../homepage/header"
import Footer from '@/components/homepage/footer'
export default function Layout ({ children }) {
    return (
        <div>
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex">
                {children}
            </div>
        </div>
        <Footer />
        </div>
    )
} 