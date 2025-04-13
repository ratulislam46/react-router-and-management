import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyCard from '../DaisyCard/DaisyCard';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);

    return (
        <div className='mt-6 mx-4'>
            <h1 className='text-5xl text-center'>Get Our Membership</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* {
                    pricingData.map(Pricing => <PricingCard key={Pricing.id} Pricing={Pricing} ></PricingCard>)
                } */}

                {
                    pricingData.map(pricing => <DaisyCard key={pricing.id} pricing={pricing}></DaisyCard>)
                }
            </div>

        </div>
    );
};

export default PricingOptions;