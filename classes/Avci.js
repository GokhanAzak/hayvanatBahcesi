// classes/Avci.js

import Hayvan from "./Hayvan.js";

class Avci extends Hayvan {
  constructor(x, y) {
    super(x, y, null); // Avcının cinsiyeti yok
    this.hareketMesafesi = 1;
  }

  getTurAdi() {
    return "Avcı";
  }
}

export default Avci;
