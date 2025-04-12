import React from 'react';
import PriciFeature from './PriciFeature';

const PricingCard = ({ Pricing }) => {

    
    const { name, price, best_for, features } = Pricing;
    

    return (
        <div className=' flex  flex-col bg-amber-200 rounded-xl p-4 mt-4 w-[70%]'>

            {/* card header  */}
            <div>
                <h1 className='text-3xl'> {name} </h1>
                <p>{price}</p>
            </div>

            {/* card body  */}
            <div className='bg-red-300 p-4 rounded-xl mt-4 flex-1'>
                <p>{best_for}</p>

                {
                    features.map((feature, index) => <PriciFeature key={index} feature={feature}></PriciFeature>)
                }
            </div>
            <button className="btn w-full mt-2 bg-blue-600 text-white">Subscribe</button>
        </div>
    
    );
};

export default PricingCard;