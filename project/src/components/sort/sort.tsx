import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFilter } from '../../store/dataProcess/dataProcess';

function Sort() {

  const [isOpened, setIsOpened] = useState(false);
  const { activeFilter } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  const sortList: {
    name: string,
    type: string,
  }[] = [
    {
      name: 'Popular',
      type: 'Popular',
    },
    {
      name: 'Price: low to high',
      type: 'Price: low to high',
    },
    {
      name: 'Price: high to low',
      type: 'Price: high to low',
    },
    {
      name: 'Top rated first',
      type: 'Top rated first',
    }];

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      > {activeFilter}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}>
        {
          sortList.map((item) =>
            (
              <li
                className={`places__option ${activeFilter === item.type ? 'places__option--active' : ''}`}
                key={item.type}
                tabIndex={0}
                onClick={() => {
                  dispatch(changeFilter(item.type));
                  setIsOpened(!isOpened);
                }}
              >
                {item.name}
              </li>
            ),
          )
        }
      </ul>
    </form>
  );
}

export default Sort;
