import { ShoppingCart, LogIn, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-indigo-600">Marketplace</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/cart" className="p-2 text-gray-400 hover:text-gray-500">
                            <ShoppingCart className="h-6 w-6" />
                        </Link>
                        <Link to="/login" className="flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            <LogIn className="h-4 w-4 mr-2" />
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
