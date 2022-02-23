import { useState } from 'react';

function Tabs() {

  const tabs = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const [activeTab, setActiveTab] = useState('Paris');

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            tabs.map((tab) =>
              (
                <li className="locations__item" key={tab}>
                  <a
                    className={`locations__item-link tabs__item ${tab === activeTab ? 'tabs__item--active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span>{tab}</span>
                  </a>
                </li>
              ),
            )
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
