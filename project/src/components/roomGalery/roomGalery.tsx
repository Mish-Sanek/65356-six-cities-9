interface GaleryProps {
  images: string[];
}

function RoomGalery({images}: GaleryProps) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          images.map((url) => (
            <div className="property__image-wrapper" key={url} >
              <img className="property__image" src={url} alt='Studio' />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default RoomGalery;
