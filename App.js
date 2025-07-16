import { rastgeleSayi, rastgeleKonum, mesafeHesapla } from './utils/helper.js';
import Cinsiyet from './enums/Cinsiyet.js';
import Kanatli from './classes/Kanatli.js';
import Koyun from './classes/Koyun.js';
import Inek from './classes/Inek.js';
import Kurt from './classes/Kurt.js';
import Aslan from './classes/Aslan.js';
import Avci from './classes/Avci.js';

const BAHCE_GENISLIK = 500;
const BAHCE_YUKSEKLIK = 500;
const hayvanlar = [];

// Popülasyon oluşturma
function populasyonOlustur() {
  // Koyunlar (15 erkek, 15 dişi)
  for (let i = 0; i < 30; i++) {
    const { x, y } = rastgeleKonum();
    hayvanlar.push(new Koyun(x, y, i < 15 ? Cinsiyet.ERKEK : Cinsiyet.DISI));
  }

  // İnekler (5 erkek, 5 dişi)
  for (let i = 0; i < 10; i++) {
    const { x, y } = rastgeleKonum();
    hayvanlar.push(new Inek(x, y, i < 5 ? Cinsiyet.ERKEK : Cinsiyet.DISI));
  }

  // Kanatlılar (10 erkek, 10 dişi)
  for (let i = 0; i < 20; i++) {
    const { x, y } = rastgeleKonum();
    hayvanlar.push(new Kanatli(x, y, i < 10 ? Cinsiyet.ERKEK : Cinsiyet.DISI));
  }

  // Kurtlar (5 erkek, 5 dişi)
  for (let i = 0; i < 10; i++) {
    const { x, y } = rastgeleKonum();
    hayvanlar.push(new Kurt(x, y, i < 5 ? Cinsiyet.ERKEK : Cinsiyet.DISI));
  }

  // Aslanlar (4 erkek, 4 dişi)
  for (let i = 0; i < 8; i++) {
    const { x, y } = rastgeleKonum();
    hayvanlar.push(new Aslan(x, y, i < 4 ? Cinsiyet.ERKEK : Cinsiyet.DISI));
  }

  // Avcı (1 adet)
  const { x, y } = rastgeleKonum();
  hayvanlar.push(new Avci(x, y));
}

function simulasyonuCalistir() {
  populasyonOlustur();

  for (let adim = 1; adim <= 1000; adim++) {
    // Hareket
    hayvanlar.forEach(h => {
      h.hareketEt();
      // Bahçe sınır kontrolü
      h.x = Math.max(0, Math.min(BAHCE_GENISLIK - 1, h.x));
      h.y = Math.max(0, Math.min(BAHCE_YUKSEKLIK - 1, h.y));
    });

    // Avlanma
    const hayattaKalanlar = hayvanlar.filter((avci, i, array) => {
      if (avci instanceof Avci) return true;

      return !array.some((hedef, j) => {
        if (i === j) return false;
        
        if (avci instanceof Kurt && (hedef instanceof Koyun || hedef instanceof Kanatli)) {
          return mesafeHesapla(avci, hedef) <= 4;
        }

        if (avci instanceof Aslan && (hedef instanceof Koyun || hedef instanceof Inek)) {
          return mesafeHesapla(avci, hedef) <= 5;
        }

        if (avci instanceof Avci && !(hedef instanceof Avci)) {
          return mesafeHesapla(avci, hedef) <= 8;
        }

        return false;
      });
    });

    // Çiftleşme
    const yeniHayvanlar = [];
    for (let i = 0; i < hayattaKalanlar.length; i++) {
      for (let j = i + 1; j < hayattaKalanlar.length; j++) {
        const h1 = hayattaKalanlar[i];
        const h2 = hayattaKalanlar[j];

        if (h1.constructor === h2.constructor && 
            h1.cinsiyet !== h2.cinsiyet && 
            mesafeHesapla(h1, h2) <= 3) {
          const { x, y } = rastgeleKonum();
          yeniHayvanlar.push(new h1.constructor(x, y, 
            rastgeleSayi(0, 1) ? Cinsiyet.ERKEK : Cinsiyet.DISI));
          break;
        }
      }
    }

    // Popülasyonu güncelle
    hayvanlar.length = 0;
    hayvanlar.push(...hayattaKalanlar, ...yeniHayvanlar);
  }

  // Sonuçları göster
  const sonuc = {};
  hayvanlar.forEach(h => {
    const tur = h.constructor.name;
    sonuc[tur] = (sonuc[tur] || 0) + 1;
  });
  console.log("Simülasyon Sonuçları:", sonuc);
}

simulasyonuCalistir();