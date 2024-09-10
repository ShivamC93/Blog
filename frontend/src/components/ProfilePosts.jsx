import { IF } from "../url"

/* eslint-disable react/prop-types */


const ProfilePosts = ({p}) => {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-centre items-centre">
        <img src={IF+p.photo} alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2x1">
            {p.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-grey-500 item-centre justify-between md:mb-4">
            <p>@{p.username}</p>
            <div className="flex space-x-2">
            <p>{new Date(p.updatedAt).toString().slice(0,15)}</p>
            <p>{new Date(p.updatedAt).toString().slice(16,24)}</p>
            </div>
        </div>
        <p className="text-sm md:text-lg">{p.desc}</p>
    </div>
</div>
  )
}

export default ProfilePosts
