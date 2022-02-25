interface GaleryProps {
  images: string[];
}

function RoomGalery({images}: GaleryProps) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          images.map((item) => (
            <div className="property__image-wrapper" key={item} >
              <img className="property__image" src={item} alt='Studio' />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default RoomGalery;
