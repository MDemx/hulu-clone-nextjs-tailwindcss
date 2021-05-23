import React from 'react';
import {Thumbnail} from "./Thumbnail";
import FlipMove from "react-flip-move";


export const Results: React.FC<{results: Array<any>}> = ({results}) => {
    return (
        <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex
        flex-wrap justify-center'>
            {results && results.map((item: any) => {
                return <Thumbnail key={item.id} item={item} />
            })}
        </FlipMove>
    );
};