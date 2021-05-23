import React, {forwardRef, LegacyRef} from 'react'
import Image from "next/image"
import {ThumbUpIcon} from "@heroicons/react/outline"

type ThumbnailProps = {
    item: {
        adult: boolean
        backdrop_path: string
        genre_ids: number[]
        id: number
        media_type: string
        original_language: string
        original_title: string
        overview: string
        popularity: number
        poster_path: string
        release_date: string
        title: string
        video: false
        vote_average: number
        vote_count: number
        first_air_date: string
    }
}

export const Thumbnail: React.FC<ThumbnailProps> = forwardRef(({item}, ref: LegacyRef<HTMLDivElement>) => {

    const BASE_URL = 'https://image.tmdb.org/t/p/original/'

    return (
        <div ref={ref} className='group cursor-pointer p-2 transition duration-200 ease-in
        transform sm:hover:scale-105 hover:z-50'>
            <Image
                layout='responsive'
                height={1080}
                width={1920}
                src={`${BASE_URL}${item.backdrop_path || item.poster_path}`}
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{item.overview}</p>
                <h2 className='mt-1 text-2xl text-white
                transition-all duration-100 ease-in-out group-hover:font-bold'>
                    {item.title || item.original_title}
                </h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {item.media_type && `${item.media_type} •`}{" "}
                    {item.release_date || item.first_air_date}{" • "}
                    <ThumbUpIcon className='h-5 mx-2'/> {item.vote_count}
                </p>
            </div>
        </div>
    )
}
)