"use client"
import { useState } from "react";
import Percentage from "../Percentage/Percentage";
import Circular from "../Circular/Circular";
import Edit from "../Edit/Edit";
import dynamic from 'next/dynamic';


const ProgressChart = dynamic(() => import("../ProgressChart/ProgressChart"), {
  ssr: false
});

function Main() {
    const [editTask, setEditTask] = useState<boolean>(false);
    const [rank, setRank] = useState<number>(5);
    const [percentile, setPercentile] = useState<number>(30);
    const [score, setScore] = useState<number>(5);
    return ( 
      <div className="px-2 pl-12 sm:pl-0 sm:px-7 w-full h-[100vh]">
        <p className="pl-5 py-2 font-semibold text-gray-500">Skill Test</p>
        <div className="flex flex-col sm:flex-row w-fit h-fit gap-y-2 sm:gap-y-0">
          <div className=" w-full h-full sm:mx-5 ">
            <div className="grid sm:flex justify-between p-2 mb-2 border-[1px] border-gray-300">
              <svg
                width="65px"
                height="65px"
                viewBox="-52.5 0 361 361"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L255.554813,70.7657143 Z"
                    fill="#E44D26"
                  />
                  <path
                    d="M128,337.950242 L212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L128,337.950242 Z"
                    fill="#F16529"
                  />
                  <path
                    d="M82.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L48.6814945,132.562989 L56.530989,220.572835 L128,220.572835 L128,188.636132 L85.7389011,188.636132 L82.8202198,155.932132 L82.8202198,155.932132 Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L90.0177582,236.54189 Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M24.1807473,0 L40.4107253,0 L40.4107253,16.0351648 L55.2573187,16.0351648 L55.2573187,0 L71.488,0 L71.488,48.5584176 L55.258022,48.5584176 L55.258022,32.2981978 L40.4114286,32.2981978 L40.4114286,48.5584176 L24.1814505,48.5584176 L24.1814505,0 L24.1807473,0 L24.1807473,0 Z"
                    fill="#000000"
                  />
                  <path
                    d="M92.8309451,16.1026813 L78.5427692,16.1026813 L78.5427692,0 L123.356835,0 L123.356835,16.1026813 L109.06233,16.1026813 L109.06233,48.5584176 L92.8316484,48.5584176 L92.8316484,16.1026813 L92.8309451,16.1026813 L92.8309451,16.1026813 Z"
                    fill="#000000"
                  />
                  <path
                    d="M130.469275,0 L147.392703,0 L157.802901,17.061978 L168.202549,0 L185.132308,0 L185.132308,48.5584176 L168.969143,48.5584176 L168.969143,24.4901978 L157.802901,41.7554286 L157.523692,41.7554286 L146.349714,24.4901978 L146.349714,48.5584176 L130.469275,48.5584176 L130.469275,0 L130.469275,0 Z"
                    fill="#000000"
                  />
                  <path
                    d="M193.20967,0 L209.444571,0 L209.444571,32.5077802 L232.268659,32.5077802 L232.268659,48.5584176 L193.20967,48.5584176 L193.20967,0 L193.20967,0 Z"
                    fill="#000000"
                  />
                  <path
                    d="M127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L127.889582,188.636132 L127.889582,220.572835 L127.889582,220.572835 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M127.889582,155.854066 L127.889582,155.932132 L205.032791,155.932132 L205.673495,148.753582 L207.128615,132.562989 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.854066 L127.889582,155.854066 Z"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
              <div>
                <p className="font-semibold">Hyper Text Markup Language</p>
                <p >Questions :- 09 | Duration :- 15 mins | Submitted on 05 June 2025</p>
              </div>
              <button
                className="bg-blue-900 text-white px-5 py-2 rounded-[5px] w-fit h-fit"
                onClick={() => setEditTask(true)}>Update</button>
            </div>
  
            <div className="flex-row justify-between p-2 mb-2 border-[1px] border-gray-300">
              <p className="font-semibold mb-2">Quick Statistics</p>
              <div className="grid sm:flex gap-y-2 justify-between ">
                <div className="flex gap-x-2 border-r-[1px] border-gray-300 pr-2">
                  <div className="p-2 bg-gray-200 w-fit h-fit rounded-full ">
                    <svg
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="45px"
                      height="45px"
                      viewBox="0 0 64 64"
                      enableBackground="new 0 0 64 64"
                      xmlSpace="preserve">
                      <g>
                        <g>
                          <path
                            fill="#F9EBB2"
                            d="M49,2H15c-1.104,0-2,0.895-2,2v23c0,10.492,8.507,19,19,19s19-8.508,19-19V4C51,2.895,50.104,2,49,2z"
                          />
                        </g>
                        <g>
                          <path
                            fill="#394240"
                            d="M60,6h-7V4c0-2.213-1.789-4-4-4H15c-2.211,0-4,1.787-4,4v2H4c-2.211,0-4,1.787-4,4v8 c0,6.074,4.925,11,11,11h0.101C12.015,38.66,19.477,46.395,29,47.76V56h-7c-2.211,0-4,1.787-4,4v3c0,0.551,0.447,1,1,1h26 c0.553,0,1-0.449,1-1v-3c0-2.213-1.789-4-4-4h-7v-8.24c9.523-1.365,16.985-9.1,17.899-18.76H53c6.075,0,11-4.926,11-11v-8 C64,7.787,62.211,6,60,6z M11,23c-2.762,0-5-2.24-5-5v-6h5V23z M11,10H5c-0.553,0-1,0.445-1,1v7c0,3.865,3.134,7,7,7v2 c-4.971,0-9-4.031-9-9v-8c0-1.105,0.896-2,2-2h7V10z M42,58c1.104,0,2,0.895,2,2v2H20v-2c0-1.105,0.896-2,2-2H42z M31,56v-8.053 C31.334,47.963,31.662,48,32,48s0.666-0.037,1-0.053V56H31z M51,23v2v2c0,10.492-8.507,19-19,19s-19-8.508-19-19v-2v-2V4 c0-1.105,0.896-2,2-2h34c1.104,0,2,0.895,2,2V23z M53,12h5v6c0,2.76-2.238,5-5,5V12z M62,18c0,4.969-4.029,9-9,9v-2 c3.866,0,7-3.135,7-7v-7c0-0.555-0.447-1-1-1h-6V8h7c1.104,0,2,0.895,2,2V18z"
                          />
                          <path
                            fill="#394240"
                            d="M39.147,19.359l-4.309-0.658l-1.936-4.123c-0.165-0.352-0.518-0.574-0.905-0.574s-0.74,0.223-0.905,0.574 l-1.936,4.123l-4.309,0.658c-0.37,0.059-0.678,0.316-0.797,0.672s-0.029,0.746,0.232,1.016l3.146,3.227l-0.745,4.564 c-0.062,0.377,0.099,0.758,0.411,0.979s0.725,0.242,1.061,0.059l3.841-2.123l3.841,2.123C35.99,29.959,36.157,30,36.323,30 c0.202,0,0.404-0.062,0.576-0.184c0.312-0.221,0.473-0.602,0.411-0.979l-0.745-4.564l3.146-3.227 c0.262-0.27,0.352-0.66,0.232-1.016S39.518,19.418,39.147,19.359z M34.781,23.238c-0.222,0.227-0.322,0.545-0.271,0.859 l0.495,3.029l-2.522-1.395c-0.151-0.084-0.317-0.125-0.484-0.125s-0.333,0.041-0.484,0.125l-2.522,1.395l0.495-3.029 c0.051-0.314-0.05-0.633-0.271-0.859l-2.141-2.193l2.913-0.447c0.329-0.049,0.612-0.26,0.754-0.562l1.257-2.678l1.257,2.678 c0.142,0.303,0.425,0.514,0.754,0.562l2.913,0.447L34.781,23.238z"
                          />
                        </g>
                        <path
                          fill="#F76D57"
                          d="M34.781,23.238c-0.222,0.227-0.322,0.545-0.271,0.859l0.495,3.029l-2.522-1.395 c-0.151-0.084-0.317-0.125-0.484-0.125s-0.333,0.041-0.484,0.125l-2.522,1.395l0.495-3.029c0.051-0.314-0.05-0.633-0.271-0.859 l-2.141-2.193l2.913-0.447c0.329-0.049,0.612-0.26,0.754-0.562l1.257-2.678l1.257,2.678c0.142,0.303,0.425,0.514,0.754,0.562 l2.913,0.447L34.781,23.238z"
                        />
                        <g>
                          <path
                            fill="#B4CCB9"
                            d="M2,10v8c0,4.969,4.029,9,9,9v-2c-3.866,0-7-3.135-7-7v-7c0-0.555,0.447-1,1-1h6V8H4C2.896,8,2,8.895,2,10z "
                          />
                          <path
                            fill="#B4CCB9"
                            d="M60,8h-7v2h6c0.553,0,1,0.445,1,1v7c0,3.865-3.134,7-7,7v2c4.971,0,9-4.031,9-9v-8C62,8.895,61.104,8,60,8 z"
                          />
                          <path
                            fill="#B4CCB9"
                            d="M42,58H22c-1.104,0-2,0.895-2,2v2h24v-2C44,58.895,43.104,58,42,58z"
                          />
                          <path
                            fill="#B4CCB9"
                            d="M33,47.947C32.666,47.963,32.338,48,32,48s-0.666-0.037-1-0.053V56h2V47.947z"
                          />
                        </g>
                        <path
                          opacity={0.15}
                          fill="#231F20"
                          d="M33,47.947C32.666,47.963,32.338,48,32,48s-0.666-0.037-1-0.053V56h2V47.947z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[25px]">{rank}</p>
                    <p className="text-[15px] font-semibold text-gray-500">YOUR RANK</p>
                  </div>
                </div>
  
                <div className="flex gap-x-2 border-r-[1px] border-gray-300 pr-2">
                  <div className="p-2 bg-gray-200 w-fit h-fit rounded-full ">
                    <svg
                      width="45px"
                      height="45px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={24} height={24} fill="white" />
                      <path
                        d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                        stroke="#000000"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                        stroke="#000000"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[25px]">{percentile}%</p>
                    <p className="text-[15px] font-semibold text-gray-500">PERCENTILE</p>
                  </div>
                </div>
  
                <div className="flex gap-x-2 border-r-[1px] border-gray-300 pr-2">
                  <div className="p-2 bg-gray-200 w-fit h-fit rounded-full ">
                    <svg
                      width="45px"
                      height="45px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                          fill="#0fff57"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[25px]">{score}/15</p>
                    <p className="text-[15px] font-semibold text-gray-500">CORRECT ANSWERS</p>
                  </div>
                </div>
              </div>
            </div>
  
            {editTask === true &&
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                onClick={() => setEditTask(false)} >
  
                <div className="rounded-md shadow-lg"
                  onClick={(e) => e.stopPropagation()}>
                  <Edit setEditTask={setEditTask} rank={rank} setRank={setRank} percentile={percentile} setPercentile={setPercentile} score={score} setScore={setScore} />
                </div>
              </div>}
  
  
            <div className="p-2 pb-5 sm:pb-20 w-full h-fit sm:h-[60vh] border-[1px] border-gray-300">
              <Percentage percentile={percentile} />
            </div>
          </div>
  
          <div className="w-full h-full sm:w-[45vw] ">
            <div className="w-full p-2 pb-10 h-[30vh] sm:h-[45vh] mb-2 border-[1px] border-gray-300">
              <ProgressChart />
            </div>
            <div className="w-full h-fit p-2 pb-10 sm:h-fit border-[1px] border-gray-300">
              <Circular score={score} />
            </div>
          </div>
        </div>
      </div>
  
    );
}

export default Main