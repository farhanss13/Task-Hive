import React from 'react'

const CreateTask = () => {
  return (
    <div className="mt-10 bg-[#2a2a2a] p-8 rounded-xl">
        <form className="flex gap-10">
          
          <div className="w-1/2 flex flex-col gap-5">
            
            <div>
              <h3 className="mb-2 text-sm text-gray-300">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-green-400"
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm text-gray-300">Date</h3>
              <input
                type="date"
                className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-green-400"
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm text-gray-300">Assign to</h3>
              <input
                type="text"
                placeholder="employee name"
                className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-green-400"
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm text-gray-300">Category</h3>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-green-400"
              />
            </div>

          </div>

          <div className="w-1/2 flex flex-col gap-5">
            
            <div>
              <h3 className="mb-2 text-sm text-gray-300">Description</h3>
              <textarea
                rows="10"
                className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-green-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 bg-green-400 text-black font-semibold py-3 rounded-md hover:bg-green-500 transition"
            >
              Create Task
            </button>

          </div>

        </form>
      </div>
  )
}

export default CreateTask