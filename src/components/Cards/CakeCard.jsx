import './cakecard.css'
export default function CakeCard ({item}) {

  const className = `card-text ${item.oferta ? 'en-oferta' : ''}`

  console.log(item)
  return (
    <div className="card">
      <img src={item.img} className="card-img-top" alt={item.nombre} />
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p>{item.descripcion}</p>
        {item.oferta ? <>
        <p className={className}> <del>Precio: <span className="precio"><del>${ item.precio }</del></span></del></p>
        <p className={className}>Precio:  <span className="precio">${ (item.precio * (100-item.porcentajeDescuento))/ 100  }</span></p> </> : 
        <p className={className}> Precio: <span className="precio">${ item.precio }</span></p>}
        
      </div>
    </div>
  );
};

