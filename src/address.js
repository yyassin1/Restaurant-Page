import addressImage from "./address.png";

function Address() {
  return `
    <div id="addressPage">
      <div>
        <p><strong>1731 7th St NW,
        20001, Washington, DC</strong></p>
        <img id="addressImg" src="${addressImage}" alt="Map of address location">
      </div>
      <a href="https://www.instagram.com/flavorus_dc/">
        <i class="fab fa-instagram"></i>
      </a>
      <a class="storeAddress" href="https://goo.gl/maps/g5Ev6MBWa3KSBFS36">Click Here to View the Address</a>
    </div>
  `;
}

export default Address;
