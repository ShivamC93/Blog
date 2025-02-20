/* eslint-disable react/prop-types */
//https://transmitter.ieee.org/wp-content/uploads/2022/12/IEEE-Artificial-Intelligence-1800x650-1-620x290.jpg
import {IF} from '../url'

const HomePost = ({post}) => {
  return (
    <div className="w-full flex mt-8 space-x-4">
        {/* left */}
        <div className="w-[35%] h-[200px] flex justify-centre items-centre">
            <img src={IF+post.photo} alt="" className="h-full w-full object-cover"/>
        </div>
        {/* right */}
        <div className="flex flex-col w-[65%]">
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2x1">
                {post.title}
            </h1>
            <div className="flex mb-2 text-sm font-semibold text-grey-500 item-centre justify-between md:mb-4">
                <p>@{post.username}</p>
                <div className="flex space-x-2">
                    <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
                    <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
                </div>
            </div>
            <p className="text-sm md:text-lg">{post.desc.slice(0,200)+"...Read more"}</p>
        </div>
    </div>
  )
}

export default HomePost
