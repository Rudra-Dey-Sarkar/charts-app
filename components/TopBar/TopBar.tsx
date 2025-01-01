import React from 'react'

function TopBar() {
    return (
        <div className="flex justify-between p-2 border-b-[1px] border-gray-300">
            <p className="text-[20px] font-bold">Logo</p>
            <div className="flex rounded-[5px] items-center gap-x-2 border-[1px] px-1 py-[2px] border-gray-300">
                <div className="p-[5px] rounded-full border-[1px] border-gray-300">
                    <svg
                        height="20px"
                        width="20px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 60.671 60.671"
                        xmlSpace="preserve"
                    >
                        <g>
                            <g>
                                <ellipse
                                    style={{ fill: "#010002" }}
                                    cx="30.336"
                                    cy="12.097"
                                    rx="11.997"
                                    ry="12.097"
                                />
                                <path
                                    style={{ fill: "#010002" }}
                                    d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
          C48.354,35.818,42.661,30.079,35.64,30.079z"
                                />
                            </g>
                        </g>
                    </svg>
                </div>
                <p className="font-semibold">User</p>
            </div>
        </div>
    )
}

export default TopBar