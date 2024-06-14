import React from 'react'
import "../Cars/Cars.css"
export const Cars = () => {
  return (
	<div className="container mx-auto px-4 sm:px-8">
	<div className="py-8">
	  <div className="flex justify-between">
		<h2 className="text-2xl font-semibold leading-tight">Cars</h2>
		<button className="bg-blue-500 text-white px-4 py-2 rounded">Add New Car</button>
	  </div>
	  <div className="overflow-x-auto">
		<div className="min-w-full shadow rounded-lg overflow-hidden">
		  <table className="min-w-full leading-normal">
			<thead>
			  <tr>
				<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
				  Car ID
				</th>
				<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
				  Brand
				</th>
				<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
				  Model
				</th>
				<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
				  Year
				</th>
				<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
				  Actions
				</th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
				<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				  <p className="text-gray-900 whitespace-no-wrap">1</p>
				</td>
				<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				  <p className="text-gray-900 whitespace-no-wrap">Toyota</p>
				</td>
				<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				  <p className="text-gray-900 whitespace-no-wrap">Corolla</p>
				</td>
				<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				  <p className="text-gray-900 whitespace-no-wrap">2020</p>
				</td>
				<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				  <button className="bg-green-500 text-white px-4 py-2 rounded">Edit</button>
				  <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
				</td>
			  </tr>
			  {/* Repeat for other rows */}
			</tbody>
		  </table>
		</div>
	  </div>
	</div>
  </div>
  )
}
