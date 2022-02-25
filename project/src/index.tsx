import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { ICardProps } from './types';

const placeCardsData: ICardProps[] = offers;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App placeCardsData={placeCardsData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
