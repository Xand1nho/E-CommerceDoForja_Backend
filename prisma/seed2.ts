import { prisma } from "../config/prisma";

const pecas = [
  // =========================
  // PEÇAS PARA CELULARES
  // =========================

  {
    nome: "Tela iPhone 11",
    categoria: "peças para celulares",
    preco: 79.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_790905-MLA99985696901_112025-F.webp",
    descricao:
      "Tela iPhone 11 6.1 Top + Película Display Frontal LCD Compatível.",
  },

  {
    nome: "Pantalla Amoled Para Samsung",
    categoria: "peças para celulares",
    preco: 959.21,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_967581-CBT112249641520_062026-F.webp",
    descricao:
      "Pantalla Amoled Para Samsung S23 Ultra com marco e tampa traseira.",
  },

  {
    nome: "Tela Display Moto G7",
    categoria: "peças para celulares",
    preco: 69.7,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_829108-MLA112458340199_052026-F.webp",
    descricao:
      "Tela Display Moto G7 Power XT1955 Touch + Kit Ferramenta Preto.",
  },

  {
    nome: "Tela para Infinix Hot 50i",
    categoria: "peças para celulares",
    preco: 78.47,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_628346-MLB105310020844_012026-F.webp",
    descricao:
      "Tela Frontal Display Touch Compatível Infinix Hot 50i.",
  },

  {
    nome: "Bateria Para LG K9 / K7",
    categoria: "peças para celulares",
    preco: 68.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_952207-MLB74607595964_022024-F.webp",
    descricao: "Bateria Para BL-45F1F LG K9 / K7 2017 / K8 2017.",
  },

  {
    nome: "Bateria Para A10 A105 M10 M105 A750",
    categoria: "peças para celulares",
    preco: 68.9,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_780807-MLB76989987118_062024-F.webp",
    descricao:
      "Bateria Para A10 A105 M10 M105 A750 EB-BA750ABU.",
  },

  {
    nome: "Bateria para Moto G8 Play One Macro E7 Kg40",
    categoria: "peças para celulares",
    preco: 66.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_611319-MLB74688526493_022024-F.webp",
    descricao:
      "Bateria Compatível Moto G8 Play One Macro E7 Kg40.",
  },

  {
    nome: "Bateria Para Moto E22",
    categoria: "peças para celulares",
    preco: 79.88,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_832946-MLB78059620995_072024-F.webp",
    descricao: "Bateria Para Moto E22 NH40 XT2239.",
  },

  {
    nome: "Placa Conector Carga S24 Ultra",
    categoria: "peças para celulares",
    preco: 294.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_902415-MLB108323062232_032026-F.webp",
    descricao:
      "Placa Conector Carga S24 Ultra Original Samsung GH96-16497A.",
  },

  {
    nome: "Placa Conector Carga A55",
    categoria: "peças para celulares",
    preco: 189.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_695566-MLB107801464256_032026-F.webp",
    descricao:
      "Placa Conector Carga A55 5G Original Samsung GH96-16718A.",
  },

  {
    nome: "Placa Conector Carga Moto G56",
    categoria: "peças para celulares",
    preco: 135.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_844330-MLB104994731877_012026-F.webp",
    descricao:
      "Placa Conector Carga Moto G56 Original Motorola.",
  },

  {
    nome: "Placa Conector Carga Mic Moto Edge 70",
    categoria: "peças para celulares",
    preco: 189.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_976298-MLB110157799384_042026-F.webp",
    descricao:
      "Placa Conector Carga Mic Moto Edge 70 Original Motorola.",
  },

  // =========================
  // PEÇAS PARA COMPUTADORES
  // =========================

  {
    nome: "Processador AMD Ryzen 9 9900X",
    categoria: "peças para Computadores",
    preco: 3512.26,
    imagemUrl:
      "https://images2.kabum.com.br/produtos/fotos/609952/amd-ryzen-9-9900x-12-core_1723551236_gg.jpg",
    descricao:
      "Processador AMD Ryzen 9 9900X, 4.4 GHz até 5.6 GHz, Cache 64 MB, 12 Núcleos, 24 Threads, AM5.",
  },

  {
    nome: "Processador Intel Core Ultra 5-245K",
    categoria: "peças para Computadores",
    preco: 3176.46,
    imagemUrl:
      "https://images0.kabum.com.br/produtos/fotos/645180/processador-intel-core-ultra-5-245k-5-2ghz-ate-14-nucleos-com-suporte-a-pcie-5-0-e-4-0-e-suporte-a-ddr5-bx80768245k_1728593868_gg.jpg",
    descricao:
      "Processador Intel Core Ultra 5-245K, 5.2GHz, até 14 núcleos, PCIe 5.0 e DDR5.",
  },

  {
    nome: "Processador AMD Ryzen Threadripper Pro 5995WX",
    categoria: "peças para Computadores",
    preco: 52941.16,
    imagemUrl:
      "https://images7.kabum.com.br/produtos/fotos/368277/processador-amd-ryzen-threadripper-pro-5995wx-4mb-octa-core-sp3-wof-100-100000444wof_1659724710_gg.jpg",
    descricao:
      "Processador AMD Ryzen Threadripper Pro 5995WX, Cache 256 MB, 64 Núcleos.",
  },

  {
    nome: "Processador AMD Ryzen 9 9950X3D2",
    categoria: "peças para Computadores",
    preco: 11111.1,
    imagemUrl:
      "https://images4.kabum.com.br/produtos/fotos/1028554/processador-amd-ryzen-9-9950x3d2-4-3ghz-5-7ghz-turbo-am5-16-cores-32-threads-144mb-cache-radeon-graphics-100-100001978wof_1780519781_gg.jpg",
    descricao:
      "Processador AMD Ryzen 9 9950X3D2, 16 cores, 32 threads e cache de 144 MB.",
  },

  {
    nome: "ASUS ROG Swift Monitor OLED 4K 32",
    categoria: "peças para Computadores",
    preco: 12956.56,
    imagemUrl:
      "https://m.media-amazon.com/images/I/91t16+g29KL._AC_SX679_.jpg",
    descricao:
      "Monitor ASUS ROG Swift OLED 4K de 32 polegadas, QD-OLED, 240Hz e 0,03ms.",
  },

  {
    nome: "ROG Swift OLED PG27UCDM",
    categoria: "peças para Computadores",
    preco: 15379.99,
    imagemUrl:
      "https://dlcdnwebimgs.asus.com/gain/D0707D10-F44F-4796-957D-EE2B79C011AE/w1000/h732",
    descricao:
      "Monitor gamer ROG Swift OLED de 27 polegadas, 4K QD-OLED e 240Hz.",
  },

  {
    nome: "Monitor Samsung Odyssey ARK",
    categoria: "peças para Computadores",
    preco: 21999.9,
    imagemUrl:
      "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/l/s/ls55bg970nlxzd20.jpg",
    descricao:
      "Monitor Samsung Odyssey ARK 55 Pol. VA Curvo, UHD 4K, 1ms e 165Hz.",
  },

  {
    nome: "Monitor Gamer Samsung Odyssey OLED G9",
    categoria: "peças para Computadores",
    preco: 15999.9,
    imagemUrl:
      "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/l/s/ls49cg930slxzd.jpg",
    descricao:
      "Monitor Gamer Samsung Odyssey OLED G9, 49 Pol, Curvo, Dual QHD e 240Hz.",
  },

  {
    nome: "ASUS Placa Mãe ROG Zenith",
    categoria: "peças para Computadores",
    preco: 13515.61,
    imagemUrl:
      "https://m.media-amazon.com/images/I/71+cv1MHnRL._AC_SX679_.jpg",
    descricao:
      "ASUS ROG Zenith II Extreme Alpha TRX40 Gaming, PCIe 4.0 e Wi-Fi 6.",
  },

  {
    nome: "GIGABYTE B650 AORUS Elite AX ICE",
    categoria: "peças para Computadores",
    preco: 2224.26,
    imagemUrl:
      "https://m.media-amazon.com/images/I/717D3oBpMBL._AC_SX679_.jpg",
    descricao:
      "Placa-mãe GIGABYTE B650 AORUS Elite AX ICE, AM5, DDR5, Triple M.2 e Wi-Fi 6E.",
  },

  {
    nome: "Placa Mãe ASUS ROG STRIX X670E-F",
    categoria: "peças para Computadores",
    preco: 4634.97,
    imagemUrl:
      "https://m.media-amazon.com/images/I/810OJR9FqSL._AC_SX679_.jpg",
    descricao:
      "Placa Mãe ASUS ROG STRIX X670E-F GAMING WIFI, AM5, DDR5 e M.2.",
  },

  {
    nome: "TUF Gaming Z890-PRO WiFi",
    categoria: "peças para Computadores",
    preco: 2856.47,
    imagemUrl:
      "https://m.media-amazon.com/images/I/81TPwG1sDnL._AC_SX679_.jpg",
    descricao: "Placa-mãe TUF Gaming Z890-PRO WiFi.",
  },

  // =========================
  // PEÇAS PARA NOTEBOOKS
  // =========================

  {
    nome: "Tela Completa Original Asus",
    categoria: "peças para Notebooks",
    preco: 3595.9,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_814382-MLB106710199696_022026-F.webp",
    descricao:
      "Tela Completa Original Asus Notebook Zenbook S14 UX5406 Nova.",
  },

  {
    nome: "Tela Para Notebook Positivo",
    categoria: "peças para Notebooks",
    preco: 269.89,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_835844-MLB90025269747_082025-F.webp",
    descricao:
      "Tela Para Notebook Positivo Motion Gray Q232A.",
  },

  {
    nome: "Tela 14 LED Slim Para Notebook",
    categoria: "peças para Notebooks",
    preco: 279.76,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_743338-MLA95967709665_102025-F.webp",
    descricao:
      "Tela 14 LED Slim Para Notebook Dell Inspiron 14-3442 HD.",
  },

  {
    nome: "Tela 15.6 LED Slim Para Notebook",
    categoria: "peças para Notebooks",
    preco: 328.48,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_979876-MLA108928753508_032026-F.webp",
    descricao:
      "Tela 15.6 LED Slim Para Notebook Dell Inspiron 15-3511 HD.",
  },

  {
    nome: "Bateria Para Dell",
    categoria: "peças para Notebooks",
    preco: 150.26,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_722314-MLA106708534198_022026-F.webp",
    descricao:
      "Bateria Para Dell Inspiron 15 5000 I15-5566-A10P M5Y1K 30Wh.",
  },

  {
    nome: "Bateria Para Notebook Samsung",
    categoria: "peças para Notebooks",
    preco: 298.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_850955-MLA108914795640_032026-F.webp",
    descricao:
      "Bateria Para Notebook Samsung 800G5M 3900mAh.",
  },

  {
    nome: "Bateria Para Notebook Vaio",
    categoria: "peças para Notebooks",
    preco: 299.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_930843-MLA100061043091_122025-F.webp",
    descricao:
      "Bateria para Notebook Vaio FE15 V525290 3650mAh Li-ion 11.4V.",
  },

  {
    nome: "Bateria Para Notebook Lenovo",
    categoria: "peças para Notebooks",
    preco: 194.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_634203-MLB110940358520_052026-F.webp",
    descricao:
      "Bateria Para Notebook Lenovo ThinkPad T470 T480 T570 T580.",
  },

  {
    nome: "Placa Mãe Lenovo Legion 5 Pro",
    categoria: "peças para Notebooks",
    preco: 3512.26,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_603234-MLB98111813071_112025-F.webp",
    descricao:
      "Placa Mãe Lenovo Legion 5 Pro 16IAH7H i7-12.",
  },

  {
    nome: "Placa Mãe Lenovo Yoga S740",
    categoria: "peças para Notebooks",
    preco: 1099.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_870930-MLA99974679455_112025-F.webp",
    descricao:
      "Placa Mãe Lenovo Yoga S740 DDR4 i7-1065G7.",
  },

  {
    nome: "Placa-mãe Para Notebook Acer",
    categoria: "peças para Notebooks",
    preco: 470.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_608634-MLB49521041191_032022-F.webp",
    descricao:
      "Placa-mãe Para Notebook Acer / Gateway LA-9535P Celeron.",
  },

  {
    nome: "Placa-mãe Para HP EliteBook",
    categoria: "peças para Notebooks",
    preco: 1125.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_759836-MLB76175835590_052024-F.webp",
    descricao:
      "Placa-mãe Para HP EliteBook 840 / 850 G5 6050A2945601.",
  },

  // =========================
  // PEÇAS PARA TVs
  // =========================

  {
    nome: "Tela de TV Philco",
    categoria: "peças para TV",
    preco: 320.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_890006-MLA85862470412_062025-F.webp",
    descricao:
      "Tela TV Solução Philco GM280TFT04R PH28N91DSGWA.",
  },

  {
    nome: "Troca de Tela Display LCD TV LG",
    categoria: "peças para TV",
    preco: 1570.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_709861-MLB73176327947_112023-F.webp",
    descricao:
      "Tela Display LCD TV LG EAJ62432301 55LA9650.",
  },

  {
    nome: "Display Tela TV LG 55 Polegadas",
    categoria: "peças para TV",
    preco: 2000.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_932084-MLB113404143155_062026-F.webp",
    descricao:
      "Display Tela TV LG 55 Polegadas 55UT8050PSA.",
  },

  {
    nome: "Display Tela TV LG OLED",
    categoria: "peças para TV",
    preco: 4023.03,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_772116-MLB113625797967_062026-F.webp",
    descricao:
      "Display Tela TV LG OLED 65 Pol OLED65B9PSB.",
  },

  {
    nome: "Pedestal Completo TV LG",
    categoria: "peças para TV",
    preco: 455.05,
    imagemUrl:
      "https://www.lg.com/content/dam/channel/wcms/br/images/pecas-e-acessorios-para-tv-e-audio/aan30005507_acc_essp_br_c/gallery/large01.jpg?w=800",
    descricao:
      "Pedestal completo TV LG OLED65GXPSA - AAN30005507.",
  },

  {
    nome: "Base Pedestal TV LG 43LK5750",
    categoria: "peças para TV",
    preco: 130.0,
    imagemUrl:
      "https://www.lg.com/content/dam/channel/wcms/br/images/pecas-e-acessorios-para-tv-e-audio/aan76009337_acc_essp_br_c/gallery/DZ-1.jpg?w=800",
    descricao:
      "Base Pedestal TV LG 43LK5750PSA - AAN76009337.",
  },

  {
    nome: "Base Pedestal TV LG OLED42C2",
    categoria: "peças para TV",
    preco: 198.55,
    imagemUrl:
      "https://www.lg.com/content/dam/channel/wcms/br/images/pecas-e-acessorios-para-tv-e-audio/aan30041902_acc_essp_br_c/DZ-01.jpg?w=800",
    descricao:
      "Base Pedestal TV LG OLED42C2PSA - AAN30041902.",
  },

  {
    nome: "Base Pedestal TV LG 50UK6520",
    categoria: "peças para TV",
    preco: 103.55,
    imagemUrl:
      "https://www.lg.com/content/dam/channel/wcms/br/images/pecas-e-acessorios-para-tv-e-audio/aan76411702_acc_essp_br_c/gallery/DZ-1.jpg?w=800",
    descricao:
      "Base Pedestal TV LG 50UK6520PSA - AAN76411702.",
  },

  {
    nome: "Placa Principal Philco",
    categoria: "peças para TV",
    preco: 499.99,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_849600-MLB112258825392_062026-F.webp",
    descricao:
      "Placa Principal Philco PH40U21DSGW VB JUC7.820.00165831.",
  },

  {
    nome: "Placa Principal TV Toshiba",
    categoria: "peças para TV",
    preco: 299.99,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_823097-MLB105548375849_012026-F.webp",
    descricao:
      "Placa Principal TV Toshiba 43S5300 40-RT41K1-MPB2HG.",
  },

  {
    nome: "Placa Principal Aiwa",
    categoria: "peças para TV",
    preco: 159.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_928851-MLB107961931827_032026-F.webp",
    descricao:
      "Placa Principal Aiwa TV 32-BL-01 9216M7C2 Original.",
  },

  {
    nome: "Placa Principal Para TV",
    categoria: "peças para TV",
    preco: 189.0,
    imagemUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_730441-MLB113204897229_062026-F.webp",
    descricao:
      "Placa Principal Para TV PTV42G52RCF JUC7.820.00276749.",
  },
];

async function main() {
  console.log("🌱 Iniciando seed2 das peças...");

  let cadastrados = 0;

  for (const peca of pecas) {
    await prisma.produto.create({
      data: {
        nome: peca.nome,
        categoria: peca.categoria,
        preco: peca.preco,
        imagemUrl: peca.imagemUrl,
        descricao: peca.descricao,
      },
    });

    cadastrados++;
    console.log(`✅ ${cadastrados}/${pecas.length} - ${peca.nome}`);
  }

  console.log(
    `\n🎉 Seed2 finalizado! ${cadastrados} peças foram cadastradas.`
  );
}

main()
  .catch((error) => {
    console.error("❌ Erro ao executar o seed2:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });