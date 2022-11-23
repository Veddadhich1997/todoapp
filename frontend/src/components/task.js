import React, { useState } from 'react'
import axios from "axios";

export default function Task() {
    // to store the value from frontend
    const [taskName,setTaskName] = useState();
    console.log(taskName);

    // function to send the data
    const submitData = async ()=> {
        const data = {
            task : taskName,
        };
        const res =await axios.post("/createTask",data);
        console.log(res);
    };

    // to handle the default
    const handleSubmit =(event)=>{
        event.preventDefault();
        // to submit data
        submitData();

        // but empty the previous details
        setTaskName("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Create A new Task
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Task Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={taskName}
                      onChange={(event)=>{setTaskName(event.target.value)}}
                    />
                  </div>
                </div>
                
                <div className="mt-[35px] w-[100px]">
                  <div className="relative">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-lime-600 border-0 py-2 px-8 focus:outline-none hover:bg-pink-700 rounded text-lg"
                  >
                    Submit
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}