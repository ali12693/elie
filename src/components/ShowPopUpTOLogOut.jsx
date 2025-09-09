import React, { useContext } from 'react'
import { ShopContext } from '../DataContext';

const ShowPopUpOfLogOut = () => {
  const{ closeLogoutPopup, deleteTokenFromLocalStorage}=useContext(ShopContext)
  return (<div className="fixed inset-0 h-40 w-100 top-50 mx-auto flex justify-center items-center bg-[#1a1818] py-4 px-5 rounded-2xl">
  <div className="flex flex-col items-center gap-5">
    <p className="text-white font-bold text-2xl">Do you want to log out?</p>
    <div className="flex justify-between items-center gap-5">
      <button
        className="text-center h-10 px-6 font-bold underline underline-offset-3 text-white cursor-pointer text-2xl"
        onClick={() => {
   
          closeLogoutPopup()
        }}
      >
        Cancel
      </button>
      <button
        className="text-center h-10 px-10 font-bold text-red-500 underline underline-offset-3 cursor-pointer text-2xl"
        onClick={() => {
                  deleteTokenFromLocalStorage()
          closeLogoutPopup()
        }}
      >
        Ok
      </button>
    </div>
  </div>
</div>

  )
}

export default ShowPopUpOfLogOut