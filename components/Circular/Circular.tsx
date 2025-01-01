"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Circular = ({score}:{score:number}) => {
    const correctAnswers = score;
    const totalQuestions = 15;
    const percentage = (correctAnswers / totalQuestions) * 100;

    return (
        <div className=" w-full h-full">
            <div className="flex justify-between items-center mb-2">
                <p className="w-fit h-fit font-bold">Question Analysis</p>
                <p className="w-fit h-fit font-bold text-[#0d47a1]">
                    {correctAnswers}/{totalQuestions}
                </p>
            </div>
            <p className="text-center mb-2">
                You scored <b>{correctAnswers} question correct out of {totalQuestions}</b>. However it
                still needs some improvements.
            </p>
            <div className="w-[150px] h-[150px] relative m-auto">
                <CircularProgressbar
                    value={percentage}
                    text={""}
                    styles={buildStyles({
                        pathColor: "#4285f4",
                        trailColor: "#e8f0fe",
                        textColor: "#333",
                        textSize: "16px",
                    })}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <svg
                        height="55px"
                        width="55px"
                        viewBox="0 0 511.974 511.974"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <path
                            style={{ fill: "#ED5564" }}
                            d="M450.867,185.987c-11.828-27.952-28.732-53.044-50.295-74.59
        c-21.545-21.546-46.638-38.467-74.574-50.279c-28.936-12.249-59.676-18.452-91.346-18.452
        c-31.678,0-62.403,6.203-91.339,18.452c-27.944,11.812-53.044,28.733-74.59,50.279
        c-21.546,21.546-38.459,46.639-50.278,74.59C6.203,214.924,0,245.656,0,277.326
        c0,31.671,6.203,62.403,18.444,91.34c11.82,27.936,28.733,53.044,50.279,74.59
        c21.545,21.545,46.646,38.451,74.59,50.278c28.936,12.233,59.661,18.437,91.339,18.437
        c31.67,0,62.41-6.203,91.346-18.437c27.937-11.827,53.029-28.733,74.574-50.278
        c21.562-21.546,38.467-46.654,50.295-74.59c12.233-28.937,18.437-59.669,18.437-91.34
        C469.303,245.656,463.1,214.924,450.867,185.987z"
                        />
                        <path
                            style={{ fill: "#E6E9ED" }}
                            d="M347.779,164.192c-30.218-30.217-70.388-46.857-113.127-46.857
        c-42.74,0-82.917,16.64-113.135,46.857S74.66,234.595,74.66,277.326
        c0,42.732,16.64,82.902,46.857,113.135c30.217,30.218,70.395,46.857,113.135,46.857
        c42.739,0,82.909-16.64,113.127-46.857c30.232-30.232,46.872-70.402,46.872-113.135
        C394.651,234.594,378.011,194.409,347.779,164.192z"
                        />
                        <path
                            style={{ fill: "#ED5564" }}
                            d="M234.652,191.987c-47.052,0-85.332,38.279-85.332,85.339
        c0,47.045,38.279,85.324,85.332,85.324c47.052,0,85.331-38.279,85.331-85.324
        C319.983,230.266,281.704,191.987,234.652,191.987z"
                        />
                        <path
                            style={{ fill: "#F6BB42" }}
                            d="M511.379,82.555c-1.359-3.859-4.812-6.609-8.89-7.062l-59.403-6.608l-6.594-59.388
        c-0.453-4.078-3.203-7.531-7.077-8.891c-3.859-1.359-8.171-0.375-11.077,2.516L342.92,78.556
        c-1.734,1.734-2.828,4.031-3.062,6.484l-5.453,54.888c-0.406,4.156,1.641,8.171,5.25,10.28
        c1.672,0.969,3.516,1.438,5.375,1.438c2.156,0,4.312-0.641,6.155-1.953l37.779-26.686l-26.687,37.795
        c-2.406,3.406-2.609,7.905-0.5,11.515c1.922,3.312,5.438,5.297,9.203,5.297c0.359,0,0.703-0.016,1.062-0.047
        l54.903-5.438c2.453-0.25,4.734-1.328,6.483-3.078l75.418-75.417C511.754,90.742,512.722,86.43,511.379,82.555z"
                        />

                    </svg>

                </div>
            </div>
        </div>
    );
};

export default Circular;
