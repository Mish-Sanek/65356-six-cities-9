/* eslint-disable jsx-a11y/anchor-is-valid */
import { CITIES } from '../../consts/cities';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/tabsProcess/tabsProcess';
import { Point } from '../../types';

function Tabs() {

  const city = useAppSelector((state) => state.tabs.city);
  const dispatch = useAppDispatch();

  const onTabClick = (tab: Point) => {
    dispatch(changeCity(tab));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((tab) =>
              (
                <li className="locations__item" key={tab.title}>
                  <a
                    className={`locations__item-link tabs__item ${tab.title === city.title ? 'tabs__item--active' : ''}`}
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
