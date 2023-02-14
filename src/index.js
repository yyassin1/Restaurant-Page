import "./styles.css";
import hookah from "./hookah.jpg";
import Home from "./home.js";
import Contact from "./contact.js";
import Product from "./product.js";
import Address from "./address.js";

function component() {
  const content = document.getElementById("content");

  // Header
  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";
  headerContainer.innerHTML = `
    <h1>Flavor Us Market</h1>
    <h5>Discover indulgence in every puff</h5>
  `;
  content.appendChild(headerContainer);

  // Buttons
  const buttonsContainer = document.createElement("div");
  headerContainer.className = "buttons-container";
  buttonsContainer.innerHTML = `<div id="buttons">
    <button id="home-button">Home</button>
    <button id="product-button">Product</button>
    <button id="contact-button">Contact</button>
    <button id="address-button">Address</button>
    </div>
  `;
  content.appendChild(buttonsContainer);

  // Dynamic content
  const dynamicContentContainer = document.createElement("div");
  content.appendChild(dynamicContentContainer);

  const homeButton = document.getElementById("home-button");
  const productButton = document.getElementById("product-button");
  const contactButton = document.getElementById("contact-button");
  const addressButton = document.getElementById("address-button");

  homeButton.addEventListener("click", () => {
    dynamicContentContainer.innerHTML = Home();
  });

  productButton.addEventListener("click", () => {
    dynamicContentContainer.innerHTML = Product();
  });

  contactButton.addEventListener("click", () => {
    dynamicContentContainer.innerHTML = Contact();
  });

  addressButton.addEventListener("click", () => {
    dynamicContentContainer.innerHTML = Address();
  });
}

component();
