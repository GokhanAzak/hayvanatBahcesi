// classes/Aslan.js

import Hayvan from "./Hayvan.js";
import Cinsiyet from "../enums/Cinsiyet.js";

class Aslan extends Hayvan {
  constructor(x, y, cinsiyet) {
    super(x, y, cinsiyet);
    this.hareketMesafesi = 4;
  }

  getTurAdi() {
    return this.cinsiyet === Cinsiyet.ERKEK ? "Erkek Aslan" : "Dişi Aslan";
  }
}

export default Aslan;
