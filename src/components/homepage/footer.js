import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/login">Home</Link></li>
            <li><Link href="/login">Browse Freelancers</Link></li>
            <li><Link href="/login">Post a Project</Link></li>
            <li><Link href="/login">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/login">Privacy Policy</Link></li>
            <li><Link href="/login">Terms of Service</Link></li>
            <li><Link href="/">Refund Policy</Link></li>
            <li><Link href="/login">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/login">Customer Support</Link></li>
            <li><Link href="/login">Payment & Billing</Link></li>
            <li><Link href="/login">Dispute Resolution</Link></li>
            <li><Link href="/login">Security Center</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Subscribe to our Newsletter</h3>
          <p className="mb-4">Get the latest updates, tips, and opportunities delivered straight to your inbox.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 bg-gray-700 border-none rounded-l-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-r-md px-4 py-2">
              Button
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2025 Equipment.ng. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;