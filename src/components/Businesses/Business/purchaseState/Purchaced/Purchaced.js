import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { BuyAdditionalQuantity } from './components/BuyAdditinalQuantity/BuyAdditionalQuantity';
import { Timer } from './components/Timer/Timer';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { StartBusiness } from './components/StartBusiness';
import { useStartBusiness } from './hooks/useStartBusiness';

export const Purchased = ({ businessID }) => {
  const business = useSelector((state) => state.businesses[businessID]);
  const { startBusiness } = useStartBusiness({ businessID });

  return (
    <BusinessStyled>
      <StartBusiness
        name={business?.name}
        quantity={business?.quantity}
        onClick={startBusiness}
        isDisabled={business?.progressCycle?.isStarted}
      />
      <div>
        <ProgressBar businessID={business?.id} onClick={startBusiness} />
        <BuyAdditionalQuantityTimerStyled>
          <BuyAdditionalQuantity businessID={business?.id} />
          <Timer businessID={business?.id} />
        </BuyAdditionalQuantityTimerStyled>
      </div>
    </BusinessStyled>
  );
};

const BusinessStyled = styled('div')`
  width: min-content;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content min-content;
`;

const BuyAdditionalQuantityTimerStyled = styled('div')`
    display: grid;
    grid-auto-flow: column;
`;
