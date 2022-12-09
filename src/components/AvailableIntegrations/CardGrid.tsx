import React, { useState } from 'react';

interface CardData {
  id: number;
  name: string;
  logoUrl: string;
  features: string[];
  paymentMethods: string[];
}

interface CardGridProps {
  data: CardData[];
}

const CardGrid = ({ data }: CardGridProps) => {
  const [activeCard, setActiveCard] = useState<{
    features: number | null;
    paymentMethods: number | null;
  }>({
    features: null,
    paymentMethods: null,
  });

  return (
    
    <div className="int-card-container">

    <div className="int-card-grid">
      {data.map(card => (
        <div className="int-card" key={card.id}>
          <img src={card.logoUrl} alt={card.name} />
          <h3>{card.name}</h3>
          <div className="int-card-tabs">
          <button
              onClick={() => setActiveCard({
                ...activeCard,
                features: card.id,
              })}
              className={`int-card-tab ${activeCard.features === card.id ? 'active' : ''}`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveCard({
                ...activeCard,
                paymentMethods: card.id,
              })}
              className={`int-card-tab ${activeCard.paymentMethods === card.id ? 'active' : ''}`}
            >
              Payment Methods
            </button>
          </div>
          {activeCard.features === card.id && (
            <ul className="card-list">
              {card.features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
              {/* @TODO: complete this */}
            </ul>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default CardGrid;