function Tabs() {

  const tabs = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            tabs.map((tab) =>
              (
                <li className="locations__item" key={tab}>
                  <a className="locations__item-link">
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
