import React, { useState,useEffect } from 'react'
import axios from 'axios';

export const TaskList=() => {
    const [taskData,setTaskData] = useState(null);

    const fetchTaskData = async ()=>{
        const resp = await axios.get("/getTask");
        console.log(resp);

        // if no task is there plz don't set the value
        if(resp.data.users.length>0){
            setTaskData(resp.data.users);
        }
    };

    useEffect(()=>{
        fetchTaskData();
      },[taskData]);


    // edit data
    const handleEdit = async (user)=>{
        const taskName = prompt("Please Update the Task");

        if(!taskName){
            alert('Please Enter your task');
        }
        else{
           const resp =await axios.put(`/editTask/${user._id}`,{
            task:taskName,
           });
           console.log(resp);
        }
    }


    // delete Task
    const handleDelete = async (taskId)=>{
        const resp = await axios.delete(`/deleteTask/${taskId}`);
        console.log(resp);
    }


  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-8">
        <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-white">
          All Tasks
        </h1>
      </div>
      <div className="lg:w-2/3 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-md bg-gray-100 rounded-tl rounded-bl">
                Name
              </th>
              
              <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-md bg-gray-100 text-center">
                Edit
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-md bg-gray-100 text-center">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
          {taskData && taskData.map((user) => (
            <tr>
              <td className="px-4 py-3 text-black font-md">{user.task}</td>
              <td className="px-4 py-3">
                <button className="flex mx-auto text-white bg-yellow-600 border-0  px-[28px] focus:outline-none hover:bg-pink-700 rounded text-lg" onClick={()=>handleEdit(user)}>Edit</button>
              </td>
              <td className="px-4 py-3 text-lg text-gray-900">
                <button className="flex mx-auto text-white bg-red-600 border-0 px-[16px] focus:outline-none hover:bg-pink-700 rounded text-lg" onClick={()=>handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
  )
}
