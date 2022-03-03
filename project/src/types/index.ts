export type ICardProps = {
  city: {
    name: string,
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    }
  }
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: {
    id: number,
    name: string,
    isPro: boolean,
    avatarUrl: string,
  },
  description: string,
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  id: number
}

export interface PointType {
  title: string,
  lat: number,
  lng: number,
}
