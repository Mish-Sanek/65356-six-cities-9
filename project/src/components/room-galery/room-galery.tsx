interface GaleryProps {
  images: string[];
}

function RoomGalery({images}: GaleryProps) {

  const shuffle = (arr: string[]) => {
    let currentIndex = arr.length, randomIndex;
    while (currentIndex !== 6) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }

    images.length = 6;

    return images;
  };

  const shuffled = shuffle(images);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          shuffled.map((url) => (
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
