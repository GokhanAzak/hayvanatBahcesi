// classes/Inek.js

import Hayvan from "./Hayvan.js";
import Cinsiyet from "../enums/Cinsiyet.js";

class Inek extends Hayvan {
  constructor(x, y, cinsiyet) {
    super(x, y, cinsiyet);
    this.hareketMesafesi = 2;
  }

  getTurAdi() {
    return this.cinsiyet === Cinsiyet.ERKEK ? "Boğa" : "İnek";
  }
}

export default Inek;
