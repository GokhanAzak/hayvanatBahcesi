

import Hayvan from "./Hayvan.js";
import Cinsiyet from "../enums/Cinsiyet.js";

class Kurt extends Hayvan {
  constructor(x, y, cinsiyet) {
    super(x, y, cinsiyet);
    this.hareketMesafesi = 3;
  }

  getTurAdi() {
    return this.cinsiyet === Cinsiyet.ERKEK ? "Erkek Kurt" : "Dişi Kurt";
  }
}

export default Kurt;
