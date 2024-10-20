import React from "react";
import OutPut from "./OutPut";
import axios from "axios";
import { useState ,useEffect} from "react";
import { useForm } from "react-hook-form";

export default function Home() {


  const { register, handleSubmit, watch, formState: { errors } } = useForm();

const [Fetchdata,setdata]=useState([])


async function fetchData (){
  try {
    let Fetch = await axios.get("https://todobackend-be0f.onrender.com")
    setdata(Fetch.data)
    console.log(Fetch.data)
  } catch (error) {
    console.log("errrrrr =>  ",error)
  }
} 

useEffect(()=>{
  fetchData()
},[])


const onSubmit = async(data) =>{
  const NewData = {
    Text:data.Text,
    Date:data.Date,
  }
    try {
               
      await axios.post("https://todobackend-be0f.onrender.com/",NewData).then(()=>console.log("Done")).catch(()=>console.log("Error in Post"))
    } catch (error) {
      console.log(error)
    }
    fetchData();
  }


  return (
    <>
    <div className="flex items-center justify-center h-auto flex-col">
      <div className="flex gap-3 stiky backdrop-blur-3xl top-[30vh] border border-purple-700 rounded-lg p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text"
          {...register("Text")}
          placeholder="Type here"
          className="input input-bordered input-secondary w-[200px] md:w-[400px] max-w-xs"
        />
        <input
          type="date"
          {...register("Date", { required: true })}
          className="input input-bordered input-accent w-[120px] md:w-[150px] max-w-xs"
        />
        <button type="submit" className="btn btn-outline btn-accent md:w-[100px]">Add</button>
        </form>

      </div>

     <div className="mt-10">
        {Fetchdata.map((item)=>(<OutPut key={item.id} item = {item} ></OutPut>))}
      </div>
      </div>
    </>
  );
}
