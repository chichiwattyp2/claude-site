import Link from 'next/link';
import { Package, Leaf, TrendingUp, DollarSign } from 'lucide-react';
import { getAllProducts } from '@/lib/products';
import { STRAINS_DATABASE } from '@/lib/strains';

export default async function AdminDashboardPage() {
  const products = getAllProducts();
  const strains = STRAINS_DATABASE;

  const totalProducts = products.length;
  const totalStrains = strains.length;
  const inStockProducts = products.filter(p => p.inStock).length;
  const averagePrice = products.reduce((sum, p) => sum + p.price, 0) / products.length;

  const stats = [
    {
      name: 'Total Products',
      value: totalProducts,
      icon: Package,
      color: 'bg-blue-500',
      link: '/admin/dashboard/products',
    },
    {
      name: 'Total Strains',
      value: totalStrains,
      icon: Leaf,
      color: 'bg-cannabis-500',
      link: '/admin/dashboard/strains',
    },
    {
      name: 'In Stock',
      value: inStockProducts,
      icon: TrendingUp,
      color: 'bg-green-500',
      link: '/admin/dashboard/products',
    },
    {
      name: 'Avg Price',
      value: `$${averagePrice.toFixed(2)}`,
      icon: DollarSign,
      color: 'bg-purple-500',
      link: '/admin/dashboard/products',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your store admin panel</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.name}
              href={stat.link}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${stat.color} rounded-md p-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="space-y-3">
            <Link
              href="/admin/dashboard/products/new"
              className="block w-full bg-cannabis-600 hover:bg-cannabis-700 text-white text-center py-3 rounded-lg font-medium transition"
            >
              Add New Product
            </Link>
            <Link
              href="/admin/dashboard/strains/new"
              className="block w-full bg-cannabis-100 hover:bg-cannabis-200 text-cannabis-700 text-center py-3 rounded-lg font-medium transition"
            >
              Add New Strain
            </Link>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="text-sm text-gray-600 space-y-2">
            <p>✓ {totalProducts} products in database</p>
            <p>✓ {totalStrains} strains configured</p>
            <p>✓ {inStockProducts} products in stock</p>
            <p>✓ Mood detection AI ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}
