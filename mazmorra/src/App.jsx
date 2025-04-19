import React, { useState } from 'react';
import './App.css';

const images = [
  {
    img: '/a_tartadeplantadevoradoradehombres.webp',
    title: 'Tarta de planta devoradora de hombres',
    ingredients: 'Caldo de escorpión, gelatina de baba, Baraselia, Meeroak, Betan, sal, pimienta',
    texture: 'Tarta horneada con superficie crujiente, decorada con rodajas de verduras, esponjosa por dentro',
    category: ['todos', 'postre', 'merienda', 'desayuno'],
    price: '$10000'
  },
  {
    img: '/b_almuerzodeverdurasfrescasdelcampoGolem.webp',
    title: 'Almuerzo de verduras frescas del campo Golem',
    ingredients: 'Repollo, zanahorias, patatas, cebollas, tocino de basilisco, sal, pimienta, agua, nabos, hojas de zanahoria, aceite de oliva',
    texture: 'Sopa caliente y sustanciosa, verduras suaves, caldo con sabor a tocino',
    category: ['todos', 'almuerzo'],
    price: '$3000'
  },
  {
    img: '/c_salteadoalestiloenanodearmaduravivienteysopadearmaduraviviente.webp',
    title: 'Salteado y sopa al estilo enano de armadura viviente',
    ingredients: 'Hierba antídoto, hierba medicinal, armadura viviente, salsa especial, sal, pimienta',
    texture: 'Salteado con textura de champiñones y hojas medicinales, sopa sabrosa',
    category: ['todos', 'almuerzo'],
    price: '$5000'
  },
  {
    img: '/d_kakiagedemandragoraytempurademurcielagogigante.webp',
    title: 'Kakiage de mandrágora y tempura de murciélago gigante',
    ingredients: 'Mandrágora, pechuga de murciélago, huevo de basilisco, harina, agua, salsa de soja, sake, sal, ajo, jengibre',
    texture: 'Crujiente, fritura hojaldrada, dorada y ligera',
    category: ['todos', 'cena'],
    price: '$3500'
  },
  {
    img: '/e_bocadillosdeinsectosdeltesoronaturalmentedeliciosos.webp',
    title: 'Bocadillos de insectos del tesoro naturalmente deliciosos',
    ingredients: 'Nido de insectos del tesoro, agua, azúcar, chinches moneda, aceite, sal, ciempiés perla',
    texture: 'Mermelada gelatinosa, galletas crocantes, ciempiés cremoso, bollos suaves',
    category: ['todos', 'postre', 'merienda'],
    price: '$4000'
  },
  {
    img: '/f_mimicahervida.webp',
    title: 'Mímica hervida',
    ingredients: 'Parte superior del cuerpo mímica, garras, patas, sal',
    texture: 'Jugosa, carne firme tipo cangrejo, pinzas grandes',
    category: ['todos', 'cena'],
    price: '$8000'
  },
  {
    img: '/g_parasitogigantedelKrakengigantealaparrillasimpleyestilokabayaki.webp',
    title: 'Parásito gigante del kraken gigante a la parrilla estilo kabayaki',
    ingredients: 'Parásito gigante, salsa (soja, mirin, azúcar, sake)',
    texture: 'Asado, superficie caramelizada, jugoso por dentro',
    category: ['todos', 'cena'],
    price: '$7000'
  },
  {
    img: '/h_carnealaparrillaKelpie.webp',
    title: 'Carne a la parrilla de Kelpie',
    ingredients: 'Ronda, lomo, chuleta, filete, hígado, plato, cola, crin (plantas acuáticas), repollo, cebolla',
    texture: 'Gran variedad de texturas cárnicas, desde magras hasta jugosas, con vegetales suaves',
    category: ['todos', 'almuerzo'],
    price: '$10000'
  },
  {
    img: '/i_gachasdeavenahechascongranosqueestabanporahi.webp',
    title: 'Gachas de avena con granos que estaban por ahí',
    ingredients: 'Cebada, agua, sal, carne de imitación, algas acuáticas',
    texture: 'Cremoso, con crujientes huevas, carne blanda, algas suaves',
    category: ['todos', 'desayuno', 'merienda'],
    price: '$9000'
  },
  {
    img: '/j_basiliscoasado.webp',
    title: 'Basilisco asado',
    ingredients: 'Basilisco, hierba de maná, sal, pimienta, hierba antídoto, hierba medicinal fuerte, ultra medicinal, antiparálisis, antipetrificación',
    texture: 'Como pollo rostizado, piel crujiente, carne jugosa',
    category: ['todos', 'almuerzo'],
    price: '$10000'
  },
  {
    img: '/k_tortillademandragoraybasilisco.webp',
    title: 'Tortilla de mandrágora y basilisco',
    ingredients: 'Mandrágora, tocino de basilisco, huevo de basilisco, sal, pimienta, ketchup',
    texture: 'Cremosa y esponjosa, centro derretido con relleno jugoso',
    category: ['todos', 'desayuno', 'merienda'],
    price: '$5000'
  },
  {
    img: '/l_cocinadelaCorteMenucompleto.webp',
    title: 'Cocina de la corte - menú completo',
    ingredients: 'Sopa de calabaza, salteado de soja verde y pescado blanco, fruta, pan dorado, asado de pato, queso de vaca dorado',
    texture: 'Elegante, variado, presentación refinada y ligera',
    category: ['todos', 'cena'],
    price: '$25000'
  },
  {
    img: '/m_verdurasrecienrobadasypolloguisadoconrepolloacompañadodepansaqueado.webp',
    title: 'Verduras robadas y pollo guisado con repollo y pan saqueado',
    ingredients: 'Pollo, repollo, zanahorias, cebollas, pimienta de cayena, sal, harina, aceite, masa madre, azúcar',
    texture: 'Guisado espeso con pan horneado y verduras tiernas',
    category: ['todos', 'almuerzo'],
    price: '$14000'
  },
  {
    img: '/n_sorbetedeexorcismo.webp',
    title: 'Sorbete de exorcismo',
    ingredients: 'Agua bendita, frasco, cuerda sagrada, fantasmas',
    texture: 'Sorbete suave y colorido, decorado con menta y caramelos, textura cremosa y fría',
    category: ['todos', 'postre', 'merienda'],
    price: '$9000'
  },
  {
    img: '/o_enormeestofadodeescorpionyhongoandante.webp',
    title: 'Enorme estofado de escorpión y hongo andante',
    ingredients: 'Escorpión, hongo andante, algas, invertebrados, baba seca, agua',
    texture: 'Estofado hirviendo, fideos de baba gelatinosos, trozos jugosos y vegetales variados',
    category: ['todos', 'cena'],
    price: '$22000'
  }
];


const categories = [
  "todos",
  "desayuno",
  "almuerzo",
  "merienda",
  "cena",
  "postre"
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const filteredImages = selectedCategory 
    ? images.filter(img => img.category.includes(selectedCategory))
    : images;

  return (
    <div className="app">
      <header className="app-header">
        <h1>¡SABORES MONSTRUOSOS!</h1>
        <h2>DE LA MAZMORRA A TU MESA</h2>
      </header>

      <main className="main-container">
        <aside className="filters">
          <h2>FILTROS</h2>
          <h3>Categorías</h3>
          <ul>
            {categories.map((category, index) => (
              <li 
                key={index}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category === selectedCategory ? "todos" : category)}
              >
                {category.toUpperCase()}
              </li>
            ))}
          </ul>
        </aside>

        <section className="menu-container">
          <h2>MENÚ</h2>
          <div className="food-gallery">
            {filteredImages.map((item, index) => (
              <div className="food-item" key={index}>
                <img src={item.img} alt={item.title} />
                <div className="food-info">
                  <h3>{item.title}</h3>
                  <p className="price">{item.price}</p>
                  <div className="details">
                    <p><strong>Ingredientes:</strong> {item.ingredients}</p>
                    <p><strong>Textura:</strong> {item.texture}</p>
                  </div>
                  <button className="order-btn">AÑADIR AL PEDIDO</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;