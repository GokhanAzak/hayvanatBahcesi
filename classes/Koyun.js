// classes/Koyun.js

import Hayvan from "./Hayvan.js";
import Cinsiyet from "../enums/Cinsiyet.js";

class Koyun extends Hayvan {
  constructor(x, y, cinsiyet) {
    super(x, y, cinsiyet);
    this.hareketMesafesi = 2;
  }

  getTurAdi() {
    return this.cinsiyet === Cinsiyet.ERKEK ? "Koç" : "Koyun";
  }
}

export default Koyun;

