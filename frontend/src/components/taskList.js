import React from 'react'

export default function TaskList() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-8">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
          All Tasks
        </h1>
      </div>
      <div className="lg:w-2/3 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Name
              </th>
              
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center">
                Edit
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">One</td>
              <td className="px-4 py-3">
                <button className="flex mx-auto text-white bg-yellow-600 border-0  px-[28px] focus:outline-none hover:bg-pink-700 rounded text-lg">Edit</button>
              </td>
              <td className="px-4 py-3 text-lg text-gray-900">
                <button className="flex mx-auto text-white bg-red-600 border-0 px-[16px] focus:outline-none hover:bg-pink-700 rounded text-lg">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  )
}
