import Link from 'next/link';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { STRAINS_DATABASE } from '@/lib/strains';
import Image from 'next/image';

export default async function StrainsListPage() {
  const strains = STRAINS_DATABASE;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Strains</h1>
          <p className="text-gray-600 mt-1">Manage your cannabis strain library</p>
        </div>
        <Link
          href="/admin/dashboard/strains/new"
          className="inline-flex items-center px-4 py-2 bg-cannabis-600 hover:bg-cannabis-700 text-white rounded-lg font-medium transition"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Strain
        </Link>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Strain
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                THC
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Effects
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Best For
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {strains.map((strain) => (
              <tr key={strain.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 relative">
                      <Image
                        src={strain.imageUrl}
                        alt={strain.name}
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {strain.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {strain.flavors.slice(0, 2).join(', ')}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      strain.type === 'sativa'
                        ? 'bg-orange-100 text-orange-800'
                        : strain.type === 'indica'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {strain.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {strain.thcContent}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {strain.effects.slice(0, 2).join(', ')}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {strain.bestFor.slice(0, 3).map((mood) => (
                      <span
                        key={mood}
                        className="px-2 py-1 text-xs rounded bg-cannabis-100 text-cannabis-700"
                      >
                        {mood}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={`/admin/dashboard/strains/${strain.id}`}
                    className="text-cannabis-600 hover:text-cannabis-900 mr-4"
                  >
                    <Edit className="w-4 h-4 inline" />
                  </Link>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-gray-500">
        Total: {strains.length} strains ({strains.filter(s => s.type === 'sativa').length} sativa,{' '}
        {strains.filter(s => s.type === 'indica').length} indica,{' '}
        {strains.filter(s => s.type === 'hybrid').length} hybrid)
      </div>
    </div>
  );
}
