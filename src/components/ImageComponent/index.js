import './index.css';

const ImageComponent = ({ src, alt }) => (
  <div className="image-wrapper">
    <img className="image" src={src} alt={alt} />
    <div className="info-popup">{alt}</div>
  </div>
);

export default ImageComponent;
