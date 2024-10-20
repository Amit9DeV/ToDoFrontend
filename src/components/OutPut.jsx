import React from 'react'

export default function OutPut({item}) {
  return (
   <>      <div className="flex gap-3 mt-2">
   
                <div className=" input input-bordered input-secondary w-[200px] md:w-[400px] max-w-xs  flex items-center ">
                   {item.Text}
                        </div>
                        <div className=" input input-bordered input-accent md:w-[150px] max-w-xs flex items-center">
                   {item.Date}
                        </div>
                        <button className="btn btn-outline btn-error md:w-[100px]">Del</button>

                        </div>

   </>
  )
}
