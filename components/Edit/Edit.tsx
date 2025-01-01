"use client"
import React from 'react'
import { useForm } from 'react-hook-form'

type EditTypes = {
    rank: number,
    percentile: number,
    score: number,
}


function Edit({ setEditTask, rank, percentile, score, setRank, setPercentile, setScore }:
    {
        setEditTask: React.Dispatch<React.SetStateAction<boolean>>,
        rank: number,
        percentile: number,
        score: number
        setRank: React.Dispatch<React.SetStateAction<number>>,
        setPercentile: React.Dispatch<React.SetStateAction<number>>,
        setScore: React.Dispatch<React.SetStateAction<number>>
    }) {
    const form = useForm<EditTypes>({
        defaultValues: {
            rank: rank,
            percentile: percentile,
            score: score,
        }
    })

    const { register, handleSubmit, formState: { errors } } = form;

    function EditValues(data: EditTypes) {
            setRank(data?.rank);
            setPercentile(data?.percentile);
            setScore(data?.score);

            setEditTask(false);
    }
    return (
        <div className='bg-white p-5 rounded-[5px]'>
            <div className='flex justify-between mb-7'>
                <p className='text-[25px] font-bold'>Update Scores</p>
                <svg
                    width="30px"
                    height="30px"
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
            </div>
            <form
                onSubmit={handleSubmit((data) => EditValues(data))}
                className='grid gap-y-7'>
                <div className='flex justify-between'>
                    <label htmlFor="Rank"
                        className='mr-5'
                    ><strong className='py-[5px] px-[10px] mr-2 rounded-full bg-blue-950 text-white'>1</strong>Update your <strong>Rank</strong></label>
                    <div>
                        <input type="number" {...register("rank", { required: true })}
                            className='border-2 border-gray-600 rounded-[5px]' />
                        {errors.rank && <p className='text-[12px] text-red-600 font-semibold'>Rank is required and should be a number</p>}
                    </div>
                </div>

                <div className='flex justify-between'>
                    <label htmlFor="Percentile"
                        className='mr-5'><strong className='py-[5px] px-[10px] mr-2 rounded-full bg-blue-950 text-white'>2</strong>Update your <strong>Percentile</strong></label>
                    <div>
                        <input type="number" {...register("percentile", { required: true })}
                            className='border-2 border-gray-600 rounded-[5px]' />
                        {errors.percentile && <p className='text-[12px] text-red-600 font-semibold'>Percentile is required and should be a number</p>}
                    </div>
                </div>

                <div className='flex justify-between'>
                    <label htmlFor="Score"
                        className='mr-5'><strong className='py-[5px] px-[10px] mr-2 rounded-full bg-blue-950 text-white'>3</strong>Update your <strong>Current Score (our of 15)</strong></label>
                    <div>
                        <input type="number" {...register("score", { required: true })}
                            className='border-2 border-gray-600 rounded-[5px]' />
                        {errors.score && <p className='text-[12px] text-red-600 font-semibold'>Score is required and should be a number</p>}
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='flex w-fit gap-x-2'>
                        <button type='submit'
                            className='border-2 border-gray-500 rounded-[5px] px-6 py-1 font-semibold'
                            onClick={() => setEditTask(false)}>Cancel</button>
                        <button type='submit'
                            className='bg-blue-950 text-white rounded-[5px] px-6 py-1 font-semibold'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Edit