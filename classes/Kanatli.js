// classes/Kanatli.js

import Hayvan from "./Hayvan.js";
import Cinsiyet from "../enums/Cinsiyet.js";

class Kanatli extends Hayvan {
  constructor(x, y, cinsiyet) {
    super(x, y, cinsiyet);
    this.hareketMesafesi = 1;
  }

  getTurAdi() {
    return this.cinsiyet === Cinsiyet.ERKEK ? "Horoz" : "Tavuk";
  }
}

export default Kanatli;
