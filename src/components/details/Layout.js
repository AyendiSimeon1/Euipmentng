import Header from "../homepage/header"
import Footer from '@/components/homepage/footer';
export default function Layout ({ children }) {
    return (
        <>
        <div className='min-h-screen  bg-gray-100'>
            <Header />
            <main className="container mx-auto px-4 py-8 bg-gray-100">
                {children}
            </main>
        </div>
        <Footer />
        </>
    )
} 