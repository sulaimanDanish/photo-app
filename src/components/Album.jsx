import React from 'react'
import { useValue } from '../photoContext'

const Album = ({ item }) => {
    const {handleDelete,toggleAlbum}= useValue();

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-1">
            <div className="bg-[#32474d] rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col hover:cursor-pointer">
                <div className="bg-cover h-32" style={{backgroundImage:"url(https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900)"}} onClick={()=>toggleAlbum(item.id)}></div>
                <div className="p-4 flex-1 flex flex-col">
                    <h3 className="mb-3 text-2xl text-[#78A083]" onClick={()=>toggleAlbum(item.id)}>{item.name}</h3>
                    <a  onClick={()=>handleDelete(item.id)} className="border-t  text-[#78A083] border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide">Delete</a>
                </div>
            </div>
        </div>
    )
}

export default Album