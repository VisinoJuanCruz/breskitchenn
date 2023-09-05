import Carousel from '../Carousel/Carousel.jsx'
import Carousel2 from '../Carousel/Carousel2.jsx'
import Carousel3 from '../Carousel/Carousel3.jsx'
import TortaGalesa from "../../images/tortagalesa.jpg"
import BombonSuizo from "../../images/bombonsuizo.jpg"
import TortaOreo from "../../images/tortaoreo.jpg"
import TortaRogel from "../../images/tortarogel.jpg"
import PanDulceOreo from "../../images/pandulceoreo.jpeg"
import VerticalCard from '../Cards/VerticalCard.jsx'
import HorizontalCard from '../Cards/HorizontalCard.jsx'
import CakeList from '../Carousel/CakeList.jsx'
import ReducedList from '../ListadoReducido/ReducedList.jsx'
import './publicity.css'


export default function Publicity(){



const TORTAS = [{
    nombre: "Torta Rogel",
    descripcion: "Torta sequita con muchas capaz con dulce de leche y merengue arriba",
    img: TortaRogel,
    precio:500,
    oferta:false,
    porcentajeDescuento:0
  },
  {
    nombre: "Bombon Suizo",
    descripcion: "Bombon con dulce de leche y merengue arriba",
    img: BombonSuizo,
    precio:500,
    oferta:false,
    porcentajeDescuento:0
  },
  {
    nombre: "Torta Oreo",
    descripcion: "Torta de oreo con dulce de leche",
    img: TortaOreo,
    precio:500,
    oferta:false,
    porcentajeDescuento:0
  },
  {
    nombre: "Torta Galesa",
    descripcion: "Torta de galesa con dulce de leche y merengue arriba",
    img: TortaGalesa,
    precio:500,
    oferta:true,
    porcentajeDescuento:20
  }
    ,
  {
    nombre: "Torta Merengue",
    descripcion: "Torta con merengue",
    img: TortaOreo,
    precio:500,
    oferta:true,
    porcentajeDescuento:20
  },
  {
    nombre: "Rosca de Pascua",
    descripcion: "Rosca con crema pastelera y frutos secos",
    img: BombonSuizo,
    precio:500,
    oferta:false,
    porcentajeDescuento:0
  },
  {
    nombre: "Pan Dulce Oreo",
    descripcion: "Pan dulce con dulce de leche y Oreo",
    img: PanDulceOreo,
    precio:500,
    oferta:true,
    porcentajeDescuento:0
  },
  {
    nombre: "Galletitas Glaseadas",
    descripcion: "Galletitas con glaseado",
    img: TortaGalesa,
    precio:500,
    oferta:false,
    porcentajeDescuento:0
  }
    ,
  {
    nombre: "Chococotorta",
    descripcion: "Torta de oreo con dulce de leche, crema y chocolinas",
    img: TortaOreo,
    precio:500,
    oferta:true,
    porcentajeDescuento:20
  },
  

]

//ALGUNOS PRODUCTOS QUE SON OFERTAS
const TORTAS_OFERTA = TORTAS.filter(torta => torta.oferta)


    return(
        <div className="publicity-container">
            
           
            <div className="carousel-container container-fluid">
              <Carousel2 />
            </div>
            <div className="ofertas-container container-fluid">
             <h2> Ofertas de la semana</h2>
             <ReducedList TORTAS_OFERTA={TORTAS_OFERTA} />
            </div>
            <div className="productos-container container-fluid">
             <h2> Productos</h2>
             <CakeList TORTAS={TORTAS} />
            </div>

            </div>
        
    )
}