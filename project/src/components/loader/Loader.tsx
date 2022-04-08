function Loader(): JSX.Element {

  const style = {
    margin: '50px auto 0',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '15px solid white',
    borderTop: '15px solid #4481c3',
    animation: 'spin 2s linear infinite',
  };

  return (
    <div
      className="loader"
      style={style}
    >
    </div>
  );
}

export default Loader;
