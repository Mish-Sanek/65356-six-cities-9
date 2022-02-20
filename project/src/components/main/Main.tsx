import { ICardProps } from '../../types/CardTypes';
import MainEmpty from '../mainEmpty/mainEmpty';
import PlaceCard from '../placeCard/PlaceCard';
import Sort from '../sort/sort';
import Tabs from '../tabs/tabs';

interface CardProps {
  placeCardsData: ICardProps[];
}

function Main({placeCardsData}: CardProps): JSX.Element {

  return (
    <main className={`page__main page__main--index ${!placeCardsData.length && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className={`cities__places-container ${!placeCardsData.length && 'cities__places-container--empty'} container`}>
          {
            placeCardsData.length ?
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placeCardsData.length} places to stay in Amsterdam</b>
                  <Sort />
                  <div className="cities__places-list places__list tabs__content">
                    {
                      placeCardsData.map((card: ICardProps) => <PlaceCard key={card.id} card={card} />)
                    }
                  </div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map" />
                </div>
              </>
              :
              <MainEmpty />
          }
        </div>
      </div>
    </main>
  );
}

export default Main;
