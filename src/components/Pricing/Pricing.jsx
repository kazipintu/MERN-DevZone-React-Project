import React from 'react';
import PricingBanner from './PricingBanner';
import PricingPlan from './PricingPlan';
import FAQ from './FAQ';
import WorkTogether from '../About-us/WorkTogether/WorkTogether';

const Pricing = () => {
  return (
    <div>
      <PricingBanner />
      <PricingPlan />
      <FAQ />
      <WorkTogether />
    </div>
  );
};

export default Pricing;