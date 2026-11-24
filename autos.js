/* ============================================================
   CATÁLOGO ALFA CARS
   Para agregar un carro: copia un bloque { ... }, cámbiale los
   datos y crea su carpeta de fotos en img/carro-N/
   (01.jpg, 02.jpg, ... y portada.jpg para la tarjeta).
   ============================================================ */

const NEGOCIO = {
  nombre: "ALFA CARS",
  slogan: "Tu mejor opción.",
  descripcion: "Compra y venta de autos seminuevos de todas las marcas y modelos. Autos de calidad, trato seguro, financiamientos y las mejores opciones.",
  ubicacion: "Tlalnepantla, Estado de México",
  cp: "54150",
  horario: "Siempre abierto",
  whatsapp: "525549110665",          // con 52 (México) al inicio, sin espacios
  whatsappVisible: "55 4911 0665",
  facebook: "https://www.facebook.com/profile.php?id=61589065046393"
};

function fotos(carpeta, lista) {
  return lista.map(n => `img/${carpeta}/${n}.jpg`);
}
function rango(n) {
  return Array.from({ length: n }, (_, i) => String(i + 1).padStart(2, "0"));
}

const AUTOS = [
  {
    id: "carro-1",
    marca: "BMW",
    modelo: "X4 M40i",
    anio: 2017,
    precio: 440000,
    aTratar: true,
    km: 78000,
    millas: null,
    tipo: "SUV Coupé",
    destacados: ["Biturbo", "Quemacocos", "Piel"],
    documentacion: ["Factura original", "Todo pagado"],
    caracteristicas: [
      "Motor biturbo",
      "Quemacocos",
      "Asientos en piel",
      "Eléctrico",
      "Cambios al volante",
      "Llantas delanteras nuevas",
      "Llantas traseras con 3/4 de vida"
    ],
    estado: "Excelente estado",
    portada: "img/carro-1/portada.jpg",
    fotos: fotos("carro-1", rango(15))
  },
  {
    id: "carro-2",
    marca: "Volkswagen",
    modelo: "Golf 1.8 TSI",
    anio: 2018,
    precio: 255000,
    aTratar: true,
    km: 90123,
    millas: 56000,
    tipo: "Hatchback",
    destacados: ["1.8 Turbo", "Cámara de reversa", "Verificado"],
    documentacion: [
      "Título y pedimento",
      "Factura de importadora",
      "Todo pagado",
      "Verificado",
      "Placas del Estado de México"
    ],
    caracteristicas: [
      "Motor 1.8 turbo",
      "Aire acondicionado",
      "Eléctrico",
      "Cámara de reversa",
      "Llantas con 3/4 de vida"
    ],
    estado: "Excelente estado",
    portada: "img/carro-2/portada.jpg",
    fotos: fotos("carro-2", rango(14))
  },
  {
    id: "carro-3",
    marca: "Jeep",
    modelo: "Compass",
    anio: 2018,
    precio: 263000,
    aTratar: true,
    km: 98855,
    millas: 61426,
    tipo: "SUV",
    destacados: ["Automático", "Quemacocos panorámico", "Piel bitono"],
    documentacion: [
      "Título y pedimento",
      "Factura de importadora",
      "Todo pagado",
      "Placas del Estado de México"
    ],
    caracteristicas: [
      "Transmisión automática",
      "Eléctrico",
      "Asientos en piel bitono",
      "Quemacocos panorámico",
      "Estéreo de pantalla",
      "Cámara de reversa"
    ],
    estado: "Excelente estado",
    portada: "img/carro-3/portada.jpg",
    fotos: fotos("carro-3", rango(14))
  },
  {
    id: "carro-4",
    marca: "Jeep",
    modelo: "Grand Cherokee Laredo",
    anio: 2018,
    precio: 265000,
    aTratar: true,
    km: 93342,
    millas: 58000,
    tipo: "SUV",
    destacados: ["Automático", "PPF al frente", "Verificado"],
    documentacion: [
      "Título y pedimento",
      "Factura de importadora",
      "Todo pagado",
      "Verificado",
      "Placas del Estado de México"
    ],
    caracteristicas: [
      "Transmisión automática",
      "Eléctrico",
      "Estéreo de pantalla",
      "Cámara de reversa",
      "PPF (película protectora) al frente"
    ],
    estado: "Excelente estado",
    portada: "img/carro-4/portada.jpg",
    fotos: fotos("carro-4", ["03", "14", "10", "04", "05", "01", "08", "09", "02", "12", "06", "07", "13", "11"])
  }
];
