import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PriciFeature = ({ feature }) => {


    return (
        <p className='flex mt-2'> <CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</p>
    );
};

export default PriciFeature;