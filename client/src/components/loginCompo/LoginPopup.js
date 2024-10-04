import React from 'react'

export default function LoginPopup() {
  return (
    <div>
      <div>
        <div className='flex justify-center border'>
          <form>
            <div>
              <input className='h-12 border-2 rounded-lg w-[400px] px-5' placeholder='Email or Mobile Number'></input>
            </div>
            <div className='pt-5'>
              <input className='h-12 border-2 rounded-lg w-[400px] px-5' type='password' placeholder='Password'></input>
            </div>
            <div className='pt-5'>
              <button className='w-[100px] bg-yellow-500 h-12 rounded-lg'>
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
