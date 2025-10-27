import {useState} from 'react';

export default function Navbar() {
    const[showBar, setShowBar]=useState(false);
    const MENU_DATA = [
        {name:'Collections', link:'/collections'},
        {name:'Luxry Series', link:'/luxry series'},
        {name:'About', link:'/about'},
        {name:'Contact', link:'/contact'}
    ];
    const AUTH = [
        {name:'Sign up', link:'/sign_up'},
        {name:'Sign in', link:'/sign_in'},
    ];

  return (
    <div  className='bg-yellow-200 text-black'>
        <div className='flex items-center space-x-3 select-none'>
        <h1 className='text=3xl font-serif tracking-widest uppercase'>Royal Watch</h1>
    </div>

    </ul>
  )
}
