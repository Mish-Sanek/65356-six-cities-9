import { ICardProps } from '../../types/CardTypes';
import Main from '../main/Main';

interface CardProps {
  placeCardsData: Array<ICardProps>;
}

function App({placeCardsData}: CardProps): JSX.Element {

  return <Main placeCardsData={placeCardsData} />;
}

export default App;
