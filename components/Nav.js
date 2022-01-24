import {useRouter} from 'next/router'
import requests from '../utils/requests'

const Nav = ()=>{
  const router = useRouter()

  return(
    <nav className="relative">
      <div className="flex space-x-10 sm:space-x-30 whitespace-nowrap px-10 sm:px-20 overflow-x-scroll no-scrollbar">
        {
          Object.entries(requests).map(([key, {title, url}]) =>(
            <h2 key={key}
              onClick={()=> router.push(`/?genre=${key}`)}
            className="last:pr-20 text-2xl hover:text-white transition transition-durafion-100 tranform hover:scale-125 active:text-red-500 cursor-pointer">{title}</h2>
          ))
        }
      </div>
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A]"/>
      <div className="absolute top-0 left-0 h-10 w-1/12 bg-gradient-to-r from-[#06202A]"/>
    </nav>
)}

export default Nav
