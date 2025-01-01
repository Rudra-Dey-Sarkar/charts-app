"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { usePathname } from 'next/navigation'


function SideBar() {
    const pathName = usePathname();
    const [open, setOpen] = useState<boolean>(false);

    function OpenSideBar(){
     if(open===false){
        setOpen(true);
     }else{
        setOpen(false);
     }
    }

    return (
        <div className="w-fit h-[200vh] sm:h-full py-5 pr-2 border-r-[1px] border-b-[1px] border-gray-300 absolute sm:static bg-white z-10">
            
            <div className='flex justify-end'>
            <div 
            className='ml-2 grid gap-y-1 w-fit'
            onClick={()=>OpenSideBar()}>
                <div className='w-[24px] h-[3px] bg-black'></div>
                <div className='w-[24px] h-[3px] bg-black'></div>
                <div className='w-[24px] h-[3px] bg-black'></div>
            </div>
            </div>
            
            <div className={`w-fit ${open===true ? "grid" : "hidden"} h-fit`}>

                <Link href="/dashboard" className={`flex mb-2 gap-x-2 py-3 px-4 rounded-r-full hover:bg-blue-100 hover:text-blue-600 ${pathName === "/dashboard" ? "bg-blue-100 text-blue-600" : "bg-white text-black"} `}>
                    <svg
                        fill="currentColor"
                        height="20px"
                        width="20px"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 360 360"
                        xmlSpace="preserve"
                    >
                        <path d="M355.606,94.394l-60-60c-5.857-5.858-15.355-5.858-21.213,0l-60,60c-4.29,4.29-5.573,10.742-3.252,16.347 c2.322,5.605,7.791,9.26,13.858,9.26h15v180h-30V180c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15v120H90v-55 c0-8.284-6.716-15-15-15H15c-8.284,0-15,6.716-15,15v70c0,8.284,6.716,15,15,15h60h60h60h60h60c8.284,0,15-6.716,15-15V120h15 c6.067,0,11.536-3.655,13.858-9.26C361.18,105.136,359.897,98.684,355.606,94.394z M30,300v-40h30v40H30z M150,300V195h30v105H150z  M270,300V105c0-6.432-4.049-11.919-9.736-14.05L285,66.214l24.736,24.736C304.049,93.081,300,98.568,300,105v195H270z" />
                    </svg>
                    <p className="font-semibold">Dashboard</p>
                </Link>

                <Link href="/" className={`flex mb-2 gap-x-2 py-3 px-4 rounded-r-full hover:bg-blue-100 hover:text-blue-600 ${pathName === "/" ? "bg-blue-100 text-blue-600" : "bg-white text-black"}`}>
                    <svg
                        fill="currentColor"
                        width="20px"
                        height="20px"
                        viewBox="-6.99 0 44.009 44.009"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="_42.Badge"
                            data-name="42.Badge"
                            d="M36.992,20.483V24.5l-3.485,2.011L31.5,30h-.511V45s0,.007,0,.011A.967.967,0,0,1,30,46l-.01,0a.978.978,0,0,1-.775-.4L23.987,40.38,18.762,45.6a.976.976,0,0,1-.775.4l-.01,0a.967.967,0,0,1-.988-.987s0-.007,0-.011V30h-.507l-2.012-3.482L10.985,24.5v-4.02L8.974,17l2.011-3.483V9.495l3.484-2.013L16.481,4h4.025l3.48-2.012L27.47,4h4.025L33.5,7.482,36.99,9.495v4.022L39,17ZM18.987,30V42.619l4.19-4.19a.942.942,0,0,1,.095-.144,1.05,1.05,0,0,1,1.43,0,1.023,1.023,0,0,1,.095.144l4.19,4.19V30H27.471l-3.484,2.013L20.507,30H18.986S18.987,30,18.987,30Zm16-15.948v-3.4l-2.948-1.7L30.34,6H26.934L23.989,4.3,21.046,6H17.64l-1.7,2.942-2.949,1.7v3.4L11.289,17l1.7,2.947v3.4l2.949,1.7,1.7,2.945h3.405l2.943,1.7,2.945-1.7h3.405l1.7-2.945,2.949-1.7v-3.4L36.686,17Z"
                            transform="translate(-8.974 -1.991)"
                            fillRule="evenodd"
                        />
                    </svg>
                    <p className="font-semibold">Skill Test</p>
                </Link>

                <Link href="/internship" className={`flex mb-2 gap-x-2 py-3 px-4 rounded-r-full hover:bg-blue-100 hover:text-blue-600 ${pathName === "/internship" ? "bg-blue-100 text-blue-600" : "bg-white text-black"}`}>
                    <svg
                        fill="currentColor"
                        width="20px"
                        height="20px"
                        viewBox="-4 0 34 34"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="none" fillRule="evenodd">
                            <g>
                                <path
                                    d="M1 1.993c0-.55.45-.993.995-.993h17.01c.55 0 1.34.275 1.776.625l3.44 2.75c.43.345.78 1.065.78 1.622v26.006c0 .55-.447.997-1 .997H2c-.552 0-1-.452-1-.993V1.993z"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                />
                                <path fill="currentColor" d="M18 2h1v6h-1z" />
                                <path fill="currentColor" d="M18 7h6v1h-6z" />
                                <g fill="currentColor">
                                    <path d="M9 12h1v10H9z" />
                                    <path d="M7 18h1v4H7z" />
                                    <path d="M13 17h1v5h-1z" />
                                    <path d="M17 20h1v2h-1z" />
                                    <path d="M15 14h1v8h-1z" />
                                    <path d="M11 15h1v7h-1z" />
                                </g>
                            </g>
                        </g>
                    </svg>

                    <p className="font-semibold">Internship</p>
                </Link>
            </div>

        </div>
    )
}

export default SideBar