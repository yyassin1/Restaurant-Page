import flavor from "./flavor.jpg";
import coal from "./coal.jpg";
import hookah from "./hookahcollection.jpg";
import accessories from "./accessories.jpg";

export default function Product() {
  return `
    <div id="hookahProduct">
      <div id="productList">
        <ul>
        <h4>Hookah Flavors</h4>
          <li>Al-fahkr</li>
          <li>Adalya</li>
          <li>Fumari</li>
          <li>Non-tobacco products</li>
        </ul>
        <img id="productImages" src="${flavor}" alt="Hookah Flavor">
      </div>
      <div id="productList">
          <ul>
          <h4>Hookah Charcoal</h4>
            <li>Three-Kings</li>
            <li>Mya</li>
            <li>Black king</li>
          </ul>
        <img id="productImages" src="${coal}" alt="Hookah coal">
      </div>
      <div id="productList">
          <ul>
          <h4>Hookah Brands</h4>
            <li>mya</li>
            <li>Khalil Mamoon</li>
            <li>B2 Hookah Stems</li>
          </ul>
        <img id="productImages" src="${hookah}" alt="Hookah collection">
      </div>
      <div id="productList">
          <ul>
          <h4>Other accessories</h4>
            <li>Thongs</li>
            <li>Coal Burner</li>
            <li>Wind protector</li>
          </ul>
        <img id="productImages" src="${accessories}" alt="Hookah Flavor">
      </div> 
    </div>
  `;
}
