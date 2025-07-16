export function rastgeleSayi(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function rastgeleKonum() {
  const BAHCE_GENISLIK = 500;
  const BAHCE_YUKSEKLIK = 500;
  return {
    x: rastgeleSayi(0, BAHCE_GENISLIK - 1),
    y: rastgeleSayi(0, BAHCE_YUKSEKLIK - 1)
  };
}

export function mesafeHesapla(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}