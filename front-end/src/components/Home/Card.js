const Card = ({ title, description, price, image }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <p className="text-gray-900 font-bold">{price}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  