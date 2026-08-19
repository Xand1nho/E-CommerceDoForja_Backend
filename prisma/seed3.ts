import { prisma } from "../config/prisma";

const CELULARES = [
  {
    nome: "REDMAGIC 11 Pro",
    categoria: "CELULARES",
    preco: 5299.0,
    imagem:
      "https://br.redmagic.gg/cdn/shop/files/device-top__2x_bdff09d4-ce56-4750-b553-c820756f9d14.png?v=1761828406&width=628",
    descricao: "REDMAGIC 11 Pro",
  },
  {
    nome: "ROG Phone 9 Pro",
    categoria: "CELULARES",
    preco: 5000.0,
    imagem:
      "https://dlcdnwebimgs.asus.com/files/media/59e044d5-16d0-4b79-ba2e-1d0d878f4dec/v1/features/images/large/1x/kv/phone_left.png",
    descricao: "ROG Phone 9 Pro",
  },
  {
    nome: "Samsung S24 Ultra",
    categoria: "CELULARES",
    preco: 5199.0,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_699676-MLA99382879982_112025-F.webp",
    descricao: "Samsung Galaxy S24 Ultra 512GB Titânio",
  },
  {
    nome: "POCO X8 Pro",
    categoria: "CELULARES",
    preco: 6439.99,
    imagem:
      "https://m.media-amazon.com/images/I/61U2cKwv20L._AC_SX679_.jpg",
    descricao: "POCO X8 Pro",
  },
  {
    nome: "iPhone 17",
    categoria: "CELULARES",
    preco: 899.0,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_717704-MLA107971005255_032026-F.webp",
    descricao: "iPhone 17",
  },
  {
    nome: "Vivo X200 Ultra",
    categoria: "CELULARES",
    preco: 8999.0,
    imagem:
      "https://www.rbaimportados.com/media/catalog/product/cache/3c2036041cbcde60e4487744e349f5b9/v/i/vivo-x200-ultra_rbaimportados.com_14__1.webp",
    descricao:
      "Vivo X200 Ultra - 5G 6.78 AMOLED 2K+ Android 15 Snapdragon 8 Elite 256/512/1TB 200MP 8K IP68",
  },
  {
    nome: "Samsung S26 Ultra",
    categoria: "CELULARES",
    preco: 10349.1,
    imagem:
      "https://samsungbrshop.vtexassets.com/arquivos/ids/278468-600-auto?v=639076206131900000",
    descricao:
      "Samsung Galaxy S26 Ultra 5G, 512GB, 12GB RAM, câmera quádrupla e tela de 6.9 polegadas.",
  },
  {
    nome: "HUAWEI Mate XT Ultimate Design",
    categoria: "CELULARES",
    preco: 32999.0,
    imagem:
      "https://imgs.search.brave.com/3PGIm8BLECs6IMNDFw36A5v27eFTyBqAzHgYotCCg-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbHBo/YWdhZGdldC5jb20u/YmQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMDgvSHVhd2Vp/LU1hdGUtWFQtVWx0/aW1hdGUtRGVzaWdu/LVByaWNlLWluLUJh/bmdsYWRlc2guanBn",
    descricao: "Único modelo com três telas do mundo.",
  },
];

async function main() {
  console.log("🌱 Iniciando seed3 dos celulares...");

  let cadastrados = 0;

  for (const celular of CELULARES) {
    // Verifica se o celular já existe
    const existente = await prisma.produto.findFirst({
      where: {
        nome: celular.nome,
        categoria: "CELULARES",
      },
    });

    if (existente) {
      console.log(`⚠️ Já existe: ${celular.nome}`);
      continue;
    }

    await prisma.produto.create({
      data: {
        nome: celular.nome,
        categoria: celular.categoria,
        preco: celular.preco,
        imagemUrl: celular.imagem,
        descricao: celular.descricao,
      },
    });

    cadastrados++;

    console.log(
      `✅ ${cadastrados}/${CELULARES.length} - ${celular.nome}`
    );
  }

  console.log(
    `\n🎉 Seed3 finalizado! ${cadastrados} celulares novos foram cadastrados.`
  );
}

main()
  .catch((error) => {
    console.error("❌ Erro ao executar o seed3:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });