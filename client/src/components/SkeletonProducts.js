import { Skeleton } from '@mui/material';
import React from 'react';

const SkeletonProducts = () => {
    return (
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 grid-cols-4  z-0 mt-2">
            {[...Array(8)].map(() => (
                <div className="flex flex-col w-full h-full  px-3 pb-6 ">
                    <div className="flex w-[90%] h-[200px] mx-auto rounded-md overflow-hidden">
                        <Skeleton variant="rectangular" width={'100%'} height={'100%'} sx={{ backgroundColor: "#CEE1E6" }} />
                    </div>
                    <Skeleton variant="text" width={'100%'} height={'50px'} sx={{ backgroundColor: "#CEE1E6" }} />
                </div>
            ))}
        </div>
    );
};

export default SkeletonProducts;
