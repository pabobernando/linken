import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {

    const navigate = useNavigate()

  return (
    <div>   
<footer className="bg-black w-full ">
    <div className="max-w-screen mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
            <li className="my-2">
                <a onClick={()=> navigate()} className="text-gray-400 hover:text-blue-400  transition-colors duration-200" href="#">
                    Facebook
                </a>
            </li>
            <li className="my-2">
                <a className="text-gray-400 hover:text-pink-400 transition-colors duration-200" href="#">
                    Instagram
                </a>
            </li>
            <li className="my-2">
                <a className="text-gray-400 hover:text-red-500  transition-colors duration-200" href="#">
                    Youtube
                </a>    
            </li>
            <li className="my-2">
                <a className="text-gray-400 hover:text-blue-600  transition-colors duration-200" href="#">
                    Twitter
                </a>
            </li>
        </ul>
    </div>
</footer>

    </div>
  )
}

export default Footer