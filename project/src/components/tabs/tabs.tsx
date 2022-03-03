import { PointType } from '../../types';

interface TabsProps {
  activeTab: PointType,
  tabs: PointType[],
  onTabClick: (tab: PointType) => void,
}

function Tabs({activeTab, tabs, onTabClick}: TabsProps) {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            tabs.map((tab: PointType) =>
              (
                <li className="locations__item" key={tab.title}>
                  <a
                    className={`locations__item-link tabs__item ${tab.title === activeTab.title ? 'tabs__item--active' : ''}`}
                    onClick={() => onTabClick(tab)}
                  >
                    <span>{tab.title} </span>
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
