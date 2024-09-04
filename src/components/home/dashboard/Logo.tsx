import logo from './logo.svg';

const Logo = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <img src={logo} width={150} alt="Logo" />
      {/* <div style={{ color: 'black' }}>
        Phase <sup>3D</sup>
      </div> */}
    </div>
  );
};

export default Logo;
