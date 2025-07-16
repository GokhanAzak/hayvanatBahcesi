// classes/Hayvan.js

import Cinsiyet from "../enums/Cinsiyet.js";

class Hayvan {
  constructor(x, y, cinsiyet) {
    this.x = x;
    this.y = y;
    this.cinsiyet = cinsiyet;
    this.hareketMesafesi = 1; // default, subclass'lar override eder
  }

  hareketEt() {
    const dx = Math.floor(Math.random() * (this.hareketMesafesi * 2 + 1)) - this.hareketMesafesi;
    const dy = Math.floor(Math.random() * (this.hareketMesafesi * 2 + 1)) - this.hareketMesafesi;

    this.x = Math.max(0, Math.min(499, this.x + dx));
    this.y = Math.max(0, Math.min(499, this.y + dy));
  }

  mesafe(digerHayvan) {
    const dx = this.x - digerHayvan.x;
    const dy = this.y - digerHayvan.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  getTurAdi() {
    return "Hayvan";
  }
}

export default Hayvan;
