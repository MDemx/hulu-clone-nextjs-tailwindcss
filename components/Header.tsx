import React, {Component} from "react"
import Image from "next/image"
import {HeaderItem} from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";


const HeaderElements = [
    {id: 1, title: 'HOME', Icon: HomeIcon},
    {id: 2, title: 'TRENDING', Icon: LightningBoltIcon},
    {id: 3, title: 'VERIFIED', Icon: BadgeCheckIcon},
    {id: 4, title: 'COLLECTIONS', Icon: CollectionIcon},
    {id: 5, title: 'SEARCH', Icon: SearchIcon},
    {id: 6, title: 'ACCOUNT', Icon: UserIcon},
]

export const Header: React.FC = () => {
    return <header className='flex flex-col sm:flex-row m-5 justify-between
    items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            {HeaderElements.map((el: any) => {
                return <HeaderItem title={el.title} Icon={el.Icon}/>
            })}
        </div>
        <Image className="object-contain"
               src='https://links.papareact.com/ua6'
               width={200}
               height={100}
        />
    </header>
}