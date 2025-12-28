import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Mock data for demo if backend not reachable, otherwise use axios
        // axios.get('http://localhost:8080/api/products').then(res => setProducts(res.data));
        setProducts([
            { id: 1, name: 'iPhone 13', description: 'Latest Apple iPhone', price: 999.00, imageUrl: 'https://placehold.co/400' },
            { id: 2, name: 'MacBook Pro', description: 'M2 Chip, 16GB RAM', price: 1999.00, imageUrl: 'https://placehold.co/400' },
            { id: 3, name: 'AirPods Pro', description: 'Noise Cancelling', price: 249.00, imageUrl: 'https://placehold.co/400' },
        ]);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h1>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
