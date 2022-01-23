import Image from "next/image"
import HeaderItem from "./HeadrItem"
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'


const Header = ()=>{
  return(
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto m-5">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div> 
      <Image src={'/hulu-icon.svg'}
        alt="hulu"
        className="object-contain"
        width={200}
        height={100} />
    </header>
)}

export default Header
