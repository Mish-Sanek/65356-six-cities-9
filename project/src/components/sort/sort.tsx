import { useState } from 'react';

type SortProps = {
  activeFilter: string,
  changeSort: (tab: string) => void;
}

function Sort({activeFilter, changeSort}: SortProps) {

  const [isOpened, setIsOpened] = useState(false);

  const sortList: string[] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}>
        {
          sortList.map((item) =>
            (
              <li
                className={`places__option ${activeFilter === item ? 'places__option--active' : ''}`}
                key={item}
                tabIndex={0}
                onClick={() => changeSort(item)}
              >
                {item}
              </li>
            ),
          )
        }
      </ul>
    </form>
  );
}

export default Sort;
