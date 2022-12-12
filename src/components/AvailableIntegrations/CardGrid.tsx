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

  const handleTabClick = (cardId: number, tab: "features" | "paymentMethods") => {
    if (activeCard[tab] === cardId) {
      // If the tab is already open, close it by setting it to null
      setActiveCard({
        ...activeCard,
        [tab]: null,
      });
    } else {
      // Otherwise, open the tab by setting it to the cardId
      setActiveCard({
        ...activeCard,
        [tab]: cardId,
      });
    }
  };

  return (
    <div className="int-card-container">
      <header>
        <h1>Available Integrations</h1>
        <p>This is an overview of alle currently available Plugins and integrations for the PAYONE platform. Work in progress!</p>
        </header>
      <div className="int-card-grid">
        {data.map(card => (
          <div className="int-card" key={card.id}>
            <img src={card.logoUrl} alt={card.name} />
            <h3>{card.name}</h3>
            <div className="int-card-tabs">
            <button
                onClick={() => handleTabClick(card.id, "features")}
                className={`int-card-tab ${
                  activeCard.features === card.id ? "active" : ""
                }`}
              >
                Features
              </button>
              <button
                onClick={() => handleTabClick(card.id, "paymentMethods")}
                className={`int-card-tab ${
                  activeCard.paymentMethods === card.id ? "active" : ""
                }`}
              >
                Payment Methods
              </button>
            </div>
            {activeCard.features === card.id && (
              <ul className="card-list">
                {card.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            )}
            {activeCard.paymentMethods === card.id && (
              <ul className="card-list">
                {card.paymentMethods.map(method => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;