import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const products: Prisma.ProductCreateInput[] = [
  // Anime Products
  {
    title: "Attack on Titan",
    image: "/images/animes/aot.jpg",
    description:
      "Humanity fights for survival against giant humanoid creatures.",
    price: 19.99,
    category: "ANIME",
    metadata: {
      regionCode: "Region 2",
      episodes: 25,
    },
  },
  {
    title: "Demon Slayer",
    image: "/images/animes/demon-slayer.jpg",
    description: "A young boy fights demons to save his sister and humanity.",
    price: 17.99,
    category: "ANIME",
    metadata: {
      regionCode: "Region 1",
      episodes: 26,
    },
  },
  {
    title: "Naruto Shippuden",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "La historia de Naruto Uzumaki, un ninja adolescente en busca de reconocimiento y su sueño de convertirse en Hokage.",
    price: 29.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 500,
    },
  },
  {
    title: "One Piece",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Monkey D. Luffy y su tripulación buscan el legendario tesoro One Piece para convertirse en el Rey de los Piratas.",
    price: 34.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 2",
      episodes: 1000,
    },
  },
  {
    title: "My Hero Academia",
    image: "https://images.unsplash.com/photo-1601758123927-2c8a4b4b5d0c",
    description:
      "En un mundo donde casi todos tienen poderes, un joven sin habilidades sueña con ser un héroe.",
    price: 24.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 88,
    },
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Dos hermanos alquimistas buscan la Piedra Filosofal para restaurar sus cuerpos después de un fallido experimento.",
    price: 29.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 64,
    },
  },
  {
    title: "Death Note",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un estudiante de secundaria encuentra un cuaderno que le permite matar a cualquiera con solo escribir su nombre.",
    price: 19.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 37,
    },
  },
  {
    title: "Dragon Ball Z",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Goku y sus amigos defienden la Tierra de poderosos enemigos en esta clásica serie de acción.",
    price: 39.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 291,
    },
  },
  {
    title: "Sword Art Online",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Jugadores quedan atrapados en un videojuego de realidad virtual y deben luchar para sobrevivir.",
    price: 24.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 25,
    },
  },
  {
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "La humanidad lucha por sobrevivir contra gigantes humanoides que devoran personas.",
    price: 29.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 75,
    },
  },
  {
    title: "Tokyo Ghoul",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un estudiante se convierte en mitad ghoul y debe adaptarse a su nueva vida.",
    price: 19.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 12,
    },
  },
  {
    title: "Neon Genesis Evangelion",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Adolescentes pilotan mechas para proteger a la humanidad de seres misteriosos.",
    price: 29.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 26,
    },
  },
  {
    title: "Hunter x Hunter",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un joven busca a su padre y se convierte en cazador en un mundo lleno de aventuras.",
    price: 34.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 148,
    },
  },
  {
    title: "Fairy Tail",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un gremio de magos realiza misiones y enfrenta poderosos enemigos.",
    price: 29.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 175,
    },
  },
  {
    title: "Bleach",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Ichigo Kurosaki obtiene poderes de Segador de Almas y protege a los vivos de los espíritus malignos.",
    price: 29.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 366,
    },
  },
  {
    title: "Cowboy Bebop",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un grupo de cazarrecompensas viaja por el espacio en busca de fugitivos en un futuro distópico.",
    price: 24.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 26,
    },
  },
  {
    title: "Steins;Gate",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un grupo de amigos descubre accidentalmente cómo enviar mensajes al pasado, alterando el curso de la historia.",
    price: 19.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 24,
    },
  },
  {
    title: "One Punch Man",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Saitama, un héroe capaz de derrotar a cualquier enemigo con un solo golpe, busca un oponente digno.",
    price: 19.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 12,
    },
  },
  {
    title: "Code Geass",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un exiliado príncipe obtiene un poder misterioso y lidera una rebelión contra un imperio tiránico.",
    price: 24.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 25,
    },
  },
  {
    title: "Your Lie in April",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un pianista prodigio redescubre su amor por la música gracias a una violinista extrovertida.",
    price: 19.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 22,
    },
  },
  {
    title: "Clannad: After Story",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Una emotiva historia sobre la vida, el amor y las dificultades de la edad adulta.",
    price: 24.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 24,
    },
  },
  {
    title: "Re:Zero - Starting Life in Another World",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un joven es transportado a un mundo de fantasía y descubre que tiene la habilidad de regresar en el tiempo al morir.",
    price: 24.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 25,
    },
  },
  {
    title: "The Seven Deadly Sins",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un grupo de caballeros legendarios debe reunirse para salvar al reino de las fuerzas del mal.",
    price: 29.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 24,
    },
  },
  {
    title: "Fate/Zero",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Siete magos convocan a héroes legendarios para luchar en una batalla por el Santo Grial.",
    price: 24.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 25,
    },
  },
  {
    title: "Anohana: The Flower We Saw That Day",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un grupo de amigos de la infancia se reúne para ayudar al espíritu de una amiga fallecida a encontrar la paz.",
    price: 19.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 11,
    },
  },
  {
    title: "Erased",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un hombre viaja al pasado para evitar la muerte de su madre y resolver una serie de secuestros.",
    price: 19.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 12,
    },
  },
  {
    title: "Black Clover",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Asta, un joven sin habilidades mágicas, sueña con convertirse en el Rey Mago de su reino.",
    price: 29.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 170,
    },
  },
  {
    title: "Naruto Shippuden: Colección Completa",
    image: "https://www.pexels.com/photo/naruto-figurine-123456/",
    description:
      "La historia completa de Naruto Uzumaki en su camino para convertirse en Hokage.",
    price: 129.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 500,
    },
  },
  {
    title: "One Piece: Saga de East Blue",
    image: "https://www.pexels.com/photo/one-piece-ship-model-789012/",
    description:
      "Las aventuras iniciales de Monkey D. Luffy y su tripulación en busca del One Piece.",
    price: 89.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 2",
      episodes: 61,
    },
  },
  {
    title: "My Hero Academia: Temporada 1",
    image: "https://www.pexels.com/photo/my-hero-academia-poster-456789/",
    description:
      "El comienzo de la historia de Izuku Midoriya en su camino para convertirse en héroe.",
    price: 39.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 13,
    },
  },
  {
    title: "Attack on Titan: Temporada Final",
    image: "https://www.pexels.com/photo/attack-on-titan-wall-art-654321/",
    description:
      "La conclusión épica de la lucha de la humanidad contra los titanes.",
    price: 49.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 16,
    },
  },
  {
    title: "Demon Slayer: Tren Infinito",
    image: "https://www.pexels.com/photo/demon-slayer-movie-poster-987654/",
    description:
      "Tanjiro y sus amigos enfrentan una nueva amenaza a bordo del Tren Infinito.",
    price: 24.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      duration: 117,
    },
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    image:
      "https://www.pexels.com/photo/fullmetal-alchemist-brotherhood-cover-321098/",
    description:
      "Los hermanos Elric buscan la Piedra Filosofal para recuperar lo que perdieron.",
    price: 59.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 64,
    },
  },
  {
    title: "Dragon Ball Z: Saga de Freezer",
    image: "https://www.pexels.com/photo/dragon-ball-z-freezer-saga-213456/",
    description: "Goku y sus amigos enfrentan al temible Freezer en Namek.",
    price: 49.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 33,
    },
  },
  {
    title: "One Punch Man: Temporada 1",
    image: "https://www.pexels.com/photo/one-punch-man-saitama-654987/",
    description: "Saitama, el héroe más fuerte, busca un oponente digno.",
    price: 29.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 12,
    },
  },
  {
    title: "Sword Art Online: Aincrad",
    image: "https://www.pexels.com/photo/sword-art-online-aincrad-789654/",
    description:
      "Jugadores atrapados en un juego de realidad virtual deben luchar por su vida.",
    price: 34.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 14,
    },
  },
  {
    title: "Neon Genesis Evangelion",
    image:
      "https://www.pexels.com/photo/neon-genesis-evangelion-poster-456123/",
    description:
      "Adolescentes pilotan mechas para salvar a la humanidad de seres misteriosos.",
    price: 44.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 26,
    },
  },
  {
    title: "Death Note: Serie Completa",
    image: "https://www.pexels.com/photo/death-note-cover-987321/",
    description:
      "Un estudiante encuentra un cuaderno que le permite matar a cualquiera escribiendo su nombre.",
    price: 39.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 37,
    },
  },
  {
    title: "Tokyo Ghoul: Temporada 1",
    image: "https://www.pexels.com/photo/tokyo-ghoul-kaneki-123789/",
    description:
      "Un joven se convierte en mitad ghoul y debe adaptarse a su nueva vida.",
    price: 29.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 12,
    },
  },
  {
    title: "Fairy Tail: Temporada 1",
    image: "https://www.pexels.com/photo/fairy-tail-guild-456987/",
    description:
      "Un gremio de magos realiza misiones y enfrenta poderosos enemigos.",
    price: 34.99,
    category: "ANIME",
    metadata: {
      regionCode: "Región 1",
      episodes: 48,
    },
  },

  // Comics Products
  {
    title: "Spider-Man: Miles Morales",
    image: "/images/comics/miles-morales.jpg",
    description:
      "Follow the adventures of Miles Morales as he takes up the mantle of Spider-Man.",
    price: 12.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Marvel",
    },
  },
  {
    title: "Batman: The Dark Knight Returns",
    image: "/images/comics/dark-knight.jpg",
    description:
      "An aging Batman returns from retirement to fight crime in a dark future Gotham.",
    price: 14.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "DC Comics",
    },
  },
  {
    title: "Watchmen",
    image: "/images/comics/watchmen.jpg",
    description:
      "A groundbreaking graphic novel that deconstructs superhero mythology.",
    price: 16.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "DC Comics",
    },
  },
  {
    title: "X-Men: Days of Future Past",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Los X-Men deben evitar un futuro distópico en el que los mutantes son cazados.",
    price: 13.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Marvel",
    },
  },
  {
    title: "Saga",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Una épica historia de ciencia ficción y fantasía que sigue a una familia en guerra.",
    price: 19.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Image Comics",
    },
  },
  {
    title: "The Sandman",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Una serie que explora el mundo de los sueños y la mitología.",
    price: 17.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Vertigo",
    },
  },
  {
    title: "Black Panther: A Nation Under Our Feet",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "T'Challa enfrenta desafíos políticos y amenazas internas en Wakanda.",
    price: 15.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Marvel",
    },
  },
  {
    title: "Superman: Red Son",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Una historia alternativa donde Superman aterriza en la Unión Soviética en lugar de Kansas.",
    price: 14.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "DC Comics",
    },
  },
  {
    title: "The Walking Dead: Compendium One",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "La saga completa de supervivencia en un mundo post-apocalíptico lleno de zombis.",
    price: 59.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Image Comics",
    },
  },
  {
    title: "Deadpool: Merc with a Mouth",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Las aventuras irreverentes y cómicas del antihéroe Deadpool.",
    price: 11.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Marvel",
    },
  },
  {
    title: "Wonder Woman: The Hiketeia",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Wonder Woman se ve atrapada en un antiguo ritual griego que la enfrenta a Batman.",
    price: 12.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "DC Comics",
    },
  },
  {
    title: "Hellboy: Seed of Destruction",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "La introducción al mundo sobrenatural de Hellboy y su lucha contra las fuerzas oscuras.",
    price: 14.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Dark Horse Comics",
    },
  },
  {
    title: "Daredevil: Born Again",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Daredevil enfrenta su mayor desafío cuando su identidad secreta es revelada.",
    price: 13.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Marvel",
    },
  },
  {
    title: "The Walking Dead: Compendio Uno",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "La saga completa de supervivencia en un mundo post-apocalíptico lleno de zombis.",
    price: 59.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Image Comics",
    },
  },
  {
    title: "Deadpool: Mercenario Bocazas",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Las aventuras irreverentes y cómicas del antihéroe Deadpool.",
    price: 11.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Marvel",
    },
  },
  {
    title: "Wonder Woman: La Hiketeia",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Wonder Woman se ve atrapada en un antiguo ritual griego que la enfrenta a Batman.",
    price: 12.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "DC Comics",
    },
  },
  {
    title: "Hellboy: Semilla de Destrucción",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "La introducción al mundo sobrenatural de Hellboy y su lucha contra las fuerzas oscuras.",
    price: 14.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Dark Horse Comics",
    },
  },
  {
    title: "Daredevil: Renacido",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Daredevil enfrenta su mayor desafío cuando su identidad secreta es revelada.",
    price: 13.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Marvel",
    },
  },
  {
    title: "V de Vendetta",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "En un futuro distópico, un vigilante enmascarado lucha contra un régimen totalitario.",
    price: 16.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Vertigo",
    },
  },
  {
    title: "Sin City: El Duro Adiós",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Una oscura historia de crimen y venganza en la corrupta ciudad de Basin City.",
    price: 14.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Dark Horse Comics",
    },
  },
  {
    title: "The Boys: Volumen 1",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Un grupo de vigilantes se propone controlar a los superhéroes corruptos.",
    price: 15.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Dynamite Entertainment",
    },
  },
  {
    title: "Locke & Key: Bienvenidos a Lovecraft",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Una familia descubre llaves mágicas que otorgan poderes y desatan peligros.",
    price: 13.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "IDW Publishing",
    },
  },
  {
    title: "Y: El Último Hombre",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Yorick Brown es el único hombre sobreviviente en un mundo donde los hombres han muerto.",
    price: 19.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Vertigo",
    },
  },
  {
    title: "Fábulas: Leyendas en el Exilio",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Personajes de cuentos de hadas viven en secreto en Nueva York.",
    price: 17.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Vertigo",
    },
  },
  {
    title: "Transmetropolitan: De Vuelta en las Calles",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un periodista cínico lucha contra la corrupción en una ciudad futurista.",
    price: 16.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Vertigo",
    },
  },
  {
    title: "Predicador: Rumbo a Texas",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Un predicador con poderes divinos busca respuestas sobre Dios.",
    price: 18.99,
    category: "COMICS",
    metadata: {
      issueNumber: 1,
      publisher: "Vertigo",
    },
  },

  // Gaming Products
  {
    title: "The Legend of Zelda: Tears of the Kingdom",
    image: "/images/gaming/zelda-totk.jpg",
    description:
      "Explore the vast skies and mysterious depths of Hyrule in this epic adventure.",
    price: 59.99,
    category: "GAMING",
    metadata: {
      platform: "Nintendo Switch",
      edition: "Standard",
    },
  },
  {
    title: "God of War Ragnarök",
    image: "/images/gaming/god-of-war.jpg",
    description:
      "Join Kratos and Atreus in their epic journey through the Nine Realms.",
    price: 69.99,
    category: "GAMING",
    metadata: {
      platform: "PlayStation 5",
      edition: "Deluxe",
    },
  },
  {
    title: "Elden Ring",
    image: "/images/gaming/elden-ring.jpg",
    description:
      "Embark on an epic adventure in a vast open world filled with mystery and danger.",
    price: 59.99,
    category: "GAMING",
    metadata: {
      platform: "PC",
      edition: "Collector's Edition",
    },
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Embárcate en una aventura épica en el vasto mundo de Hyrule, lleno de misterios y desafíos.",
    price: 59.99,
    category: "GAMING",
    metadata: {
      platform: "Nintendo Switch",
      edition: "Standard",
    },
  },
  {
    title: "Red Dead Redemption 2",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Vive la vida de un forajido en el Viejo Oeste en este aclamado juego de mundo abierto.",
    price: 49.99,
    category: "GAMING",
    metadata: {
      platform: "PlayStation 4",
      edition: "Standard",
    },
  },
  {
    title: "The Witcher 3: Wild Hunt",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Únete al cazador de monstruos Geralt de Rivia en una búsqueda épica en un mundo lleno de magia.",
    price: 39.99,
    category: "GAMING",
    metadata: {
      platform: "Xbox One",
      edition: "Game of the Year",
    },
  },
  {
    title: "Cyberpunk 2077",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Explora la metrópolis futurista de Night City en este juego de rol de mundo abierto.",
    price: 59.99,
    category: "GAMING",
    metadata: {
      platform: "PC",
      edition: "Standard",
    },
  },
  {
    title: "Animal Crossing: New Horizons",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Crea y personaliza tu propia isla paradisíaca en este relajante simulador de vida.",
    price: 59.99,
    category: "GAMING",
    metadata: {
      platform: "Nintendo Switch",
      edition: "Standard",
    },
  },
  {
    title: "Final Fantasy VII Remake",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Revive la clásica historia de Cloud Strife y sus amigos en este impresionante remake.",
    price: 59.99,
    category: "GAMING",
    metadata: {
      platform: "PlayStation 4",
      edition: "Deluxe",
    },
  },
  {
    title: "Ghost of Tsushima",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Defiende la isla de Tsushima de la invasión mongola en este hermoso juego de acción.",
    price: 59.99,
    category: "GAMING",
    metadata: {
      platform: "PlayStation 4",
      edition: "Standard",
    },
  },
  {
    title: "Hades",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Lucha para escapar del inframundo en este aclamado juego de acción roguelike.",
    price: 24.99,
    category: "GAMING",
    metadata: {
      platform: "Nintendo Switch",
      edition: "Standard",
    },
  },
  {
    title: "Doom Eternal",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Enfréntate a hordas de demonios en este frenético y visceral juego de disparos en primera persona.",
    price: 59.99,
    category: "GAMING",
    metadata: {
      platform: "PlayStation 4",
      edition: "Standard",
    },
  },
  {
    title: "Persona 5 Royal",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Únete a los Phantom Thieves en esta estilizada y profunda experiencia de rol japonés.",
    price: 59.99,
    category: "GAMING",
    metadata: {
      platform: "PlayStation 4",
      edition: "Standard",
    },
  },
  {
    title: "Sekiro: Shadows Die Twice",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Embárcate en una misión de venganza en el Japón feudal en este desafiante juego de acción.",
    price: 59.99,
    category: "GAMING",
    metadata: {
      platform: "PlayStation 4",
      edition: "Standard",
    },
  },
  {
    title: "Minecraft",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Explora, construye y crea en un mundo infinito de posibilidades en este fenómeno global.",
    price: 26.95,
    category: "GAMING",
    metadata: {
      platform: "PC",
      edition: "Java Edition",
    },
  },
  {
    title: "Overwatch",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Participa en frenéticas batallas multijugador en este popular shooter en equipo.",
    price: 39.99,
    category: "GAMING",
    metadata: {
      platform: "PlayStation 4",
      edition: "Standard",
    },
  },

  //Merchandising Products
  {
    title: "Camiseta de Naruto Uzumaki",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Camiseta de algodón con diseño de Naruto en pose de combate.",
    price: 19.99,
    category: "MERCHANDISE",
    metadata: {
      size: "M",
      material: "Algodón",
      brand: "Shonen Apparel",
    },
  },
  {
    title: "Taza de Ataque a los Titanes",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description: "Taza de cerámica con el emblema del Cuerpo de Exploración.",
    price: 12.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Cerámica",
      brand: "Anime Mugs",
    },
  },
  {
    title: "Gorra de One Piece",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Gorra ajustable con el logo de los Piratas de Sombrero de Paja.",
    price: 15.99,
    category: "MERCHANDISE",
    metadata: {
      size: "Única",
      material: "Poliéster",
      brand: "Grand Line Gear",
    },
  },
  {
    title: "Mochila de My Hero Academia",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Mochila escolar con estampado de los personajes principales.",
    price: 29.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Nylon",
      brand: "Hero Supply Co.",
    },
  },
  {
    title: "Llaveros de Demon Slayer",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Set de 4 llaveros con los personajes principales de Demon Slayer.",
    price: 14.99,
    category: "MERCHANDISE",
    metadata: {
      material: "PVC",
      brand: "Slayer Merch",
    },
  },
  {
    title: "Póster de Sailor Moon",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Póster decorativo de Sailor Moon en alta resolución.",
    price: 9.99,
    category: "MERCHANDISE",
    metadata: {
      size: "42x60 cm",
      material: "Papel satinado",
      brand: "Moonlight Prints",
    },
  },
  {
    title: "Almohada de Totoro",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Almohada suave con forma de Totoro.",
    price: 24.99,
    category: "MERCHANDISE",
    metadata: {
      size: "40x40 cm",
      material: "Plush",
      brand: "Ghibli Comforts",
    },
  },
  {
    title: "Calcetines de Pokémon",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Pack de 5 pares de calcetines con diseños de Pikachu y amigos.",
    price: 19.99,
    category: "MERCHANDISE",
    metadata: {
      size: "39-42",
      material: "Algodón",
      brand: "PokeWear",
    },
  },
  {
    title: "Figura de acción de Goku",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Figura articulada de Goku en modo Super Saiyan.",
    price: 34.99,
    category: "MERCHANDISE",
    metadata: {
      size: "15 cm",
      material: "PVC",
      brand: "Dragon Stars",
    },
  },
  {
    title: "Poster de Neon Genesis Evangelion",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Poster artístico de la serie Neon Genesis Evangelion.",
    price: 11.99,
    category: "MERCHANDISE",
    metadata: {
      size: "50x70 cm",
      material: "Papel satinado",
      brand: "Eva Prints",
    },
  },
  {
    title: "Sudadera de Fullmetal Alchemist",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description: "Sudadera con capucha con el símbolo de los Elric.",
    price: 39.99,
    category: "MERCHANDISE",
    metadata: {
      size: "L",
      material: "Algodón/Poliéster",
      brand: "Alchemy Apparel",
    },
  },
  {
    title: "Reloj de bolsillo de Death Note",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Reloj de bolsillo con el logo de Death Note.",
    price: 22.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Aleación metálica",
      brand: "Shinigami Timepieces",
    },
  },
  {
    title: "Funda de móvil de One Punch Man",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Funda protectora con diseño de Saitama.",
    price: 14.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Silicona",
      brand: "Hero Cases",
    },
  },
  {
    title: "Camiseta de Naruto Uzumaki",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Camiseta de algodón con diseño de Naruto en pose de combate.",
    price: 19.99,
    category: "MERCHANDISE",
    metadata: {
      size: "M",
      material: "Algodón",
      brand: "Shonen Apparel",
    },
  },
  {
    title: "Taza de Ataque a los Titanes",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description: "Taza de cerámica con el emblema del Cuerpo de Exploración.",
    price: 12.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Cerámica",
      brand: "Anime Mugs",
    },
  },
  {
    title: "Gorra de One Piece",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Gorra ajustable con el logo de los Piratas de Sombrero de Paja.",
    price: 15.99,
    category: "MERCHANDISE",
    metadata: {
      size: "Única",
      material: "Poliéster",
      brand: "Grand Line Gear",
    },
  },
  {
    title: "Mochila de My Hero Academia",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Mochila escolar con estampado de los personajes principales.",
    price: 29.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Nylon",
      brand: "Hero Supply Co.",
    },
  },
  {
    title: "Llaveros de Demon Slayer",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Set de 4 llaveros con los personajes principales de Demon Slayer.",
    price: 14.99,
    category: "MERCHANDISE",
    metadata: {
      material: "PVC",
      brand: "Slayer Merch",
    },
  },
  {
    title: "Póster de Sailor Moon",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Póster decorativo de Sailor Moon en alta resolución.",
    price: 9.99,
    category: "MERCHANDISE",
    metadata: {
      size: "42x60 cm",
      material: "Papel satinado",
      brand: "Moonlight Prints",
    },
  },
  {
    title: "Almohada de Totoro",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Almohada suave con forma de Totoro.",
    price: 24.99,
    category: "MERCHANDISE",
    metadata: {
      size: "40x40 cm",
      material: "Plush",
      brand: "Ghibli Comforts",
    },
  },
  {
    title: "Calcetines de Pokémon",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Pack de 5 pares de calcetines con diseños de Pikachu y amigos.",
    price: 19.99,
    category: "MERCHANDISE",
    metadata: {
      size: "39-42",
      material: "Algodón",
      brand: "PokeWear",
    },
  },
  {
    title: "Figura de acción de Goku",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Figura articulada de Goku en modo Super Saiyan.",
    price: 34.99,
    category: "MERCHANDISE",
    metadata: {
      size: "15 cm",
      material: "PVC",
      brand: "Dragon Stars",
    },
  },
  {
    title: "Poster de Neon Genesis Evangelion",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Poster artístico de la serie Neon Genesis Evangelion.",
    price: 11.99,
    category: "MERCHANDISE",
    metadata: {
      size: "50x70 cm",
      material: "Papel satinado",
      brand: "Eva Prints",
    },
  },
  {
    title: "Sudadera de Fullmetal Alchemist",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description: "Sudadera con capucha con el símbolo de los Elric.",
    price: 39.99,
    category: "MERCHANDISE",
    metadata: {
      size: "L",
      material: "Algodón/Poliéster",
      brand: "Alchemy Apparel",
    },
  },
  {
    title: "Reloj de bolsillo de Death Note",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Reloj de bolsillo con el logo de Death Note.",
    price: 22.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Aleación metálica",
      brand: "Shinigami Timepieces",
    },
  },
  {
    title: "Funda de móvil de One Punch Man",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Funda protectora con diseño de Saitama.",
    price: 14.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Silicona",
      brand: "Hero Cases",
    },
  },
  {
    title: "Camiseta de Naruto Uzumaki",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Camiseta de algodón con diseño de Naruto en pose de combate.",
    price: 19.99,
    category: "MERCHANDISE",
    metadata: {
      size: "M",
      material: "Algodón",
      brand: "Shonen Apparel",
    },
  },
  {
    title: "Taza de Ataque a los Titanes",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description: "Taza de cerámica con el emblema del Cuerpo de Exploración.",
    price: 12.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Cerámica",
      brand: "Anime Mugs",
    },
  },
  {
    title: "Gorra de One Piece",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Gorra ajustable con el logo de los Piratas de Sombrero de Paja.",
    price: 15.99,
    category: "MERCHANDISE",
    metadata: {
      size: "Única",
      material: "Poliéster",
      brand: "Grand Line Gear",
    },
  },
  {
    title: "Mochila de My Hero Academia",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Mochila escolar con estampado de los personajes principales.",
    price: 29.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Nylon",
      brand: "Hero Supply Co.",
    },
  },
  {
    title: "Llaveros de Demon Slayer",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Set de 4 llaveros con los personajes principales de Demon Slayer.",
    price: 14.99,
    category: "MERCHANDISE",
    metadata: {
      material: "PVC",
      brand: "Slayer Merch",
    },
  },
  {
    title: "Póster de Sailor Moon",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Póster decorativo de Sailor Moon en alta resolución.",
    price: 9.99,
    category: "MERCHANDISE",
    metadata: {
      size: "42x60 cm",
      material: "Papel satinado",
      brand: "Moonlight Prints",
    },
  },
  {
    title: "Almohada de Totoro",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Almohada suave con forma de Totoro.",
    price: 24.99,
    category: "MERCHANDISE",
    metadata: {
      size: "40x40 cm",
      material: "Plush",
      brand: "Ghibli Comforts",
    },
  },
  {
    title: "Calcetines de Pokémon",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Pack de 5 pares de calcetines con diseños de Pikachu y amigos.",
    price: 19.99,
    category: "MERCHANDISE",
    metadata: {
      size: "39-42",
      material: "Algodón",
      brand: "PokeWear",
    },
  },
  {
    title: "Figura de acción de Goku",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Figura articulada de Goku en modo Super Saiyan.",
    price: 34.99,
    category: "MERCHANDISE",
    metadata: {
      size: "15 cm",
      material: "PVC",
      brand: "Dragon Stars",
    },
  },
  {
    title: "Poster de Neon Genesis Evangelion",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Poster artístico de la serie Neon Genesis Evangelion.",
    price: 11.99,
    category: "MERCHANDISE",
    metadata: {
      size: "50x70 cm",
      material: "Papel satinado",
      brand: "Eva Prints",
    },
  },
  {
    title: "Sudadera de Fullmetal Alchemist",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description: "Sudadera con capucha con el símbolo de los Elric.",
    price: 39.99,
    category: "MERCHANDISE",
    metadata: {
      size: "L",
      material: "Algodón/Poliéster",
      brand: "Alchemy Apparel",
    },
  },
  {
    title: "Reloj de bolsillo de Death Note",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Reloj de bolsillo con el logo de Death Note.",
    price: 22.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Aleación metálica",
      brand: "Shinigami Timepieces",
    },
  },
  {
    title: "Funda de móvil de One Punch Man",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Funda protectora con diseño de Saitama.",
    price: 14.99,
    category: "MERCHANDISE",
    metadata: {
      material: "Silicona",
      brand: "Hero Cases",
    },
  },

  // Collectibles Products
  {
    title: "Figura de Naruto Uzumaki",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Figura detallada de Naruto Uzumaki en pose de combate.",
    price: 49.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Común",
      condition: "Nuevo",
      releaseYear: 2023,
    },
  },
  {
    title: "Estatua de Batman edición limitada",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Estatua de alta calidad de Batman basada en los cómics clásicos.",
    price: 129.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Raro",
      condition: "Nuevo",
      releaseYear: 2022,
    },
  },
  {
    title: "Figura de acción de Link",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Figura articulada de Link de la saga The Legend of Zelda.",
    price: 59.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Común",
      condition: "Nuevo",
      releaseYear: 2023,
    },
  },
  {
    title: "Colección de mangas de One Piece",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Set de los primeros 10 volúmenes del manga One Piece.",
    price: 89.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Común",
      condition: "Nuevo",
      releaseYear: 2021,
    },
  },
  {
    title: "Réplica del DeLorean de Volver al Futuro",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description: "Réplica detallada a escala 1:24 del DeLorean de la película.",
    price: 74.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Raro",
      condition: "Nuevo",
      releaseYear: 2020,
    },
  },
  {
    title: "Casco de Iron Man con luces LED",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Réplica del casco de Iron Man con efectos de luz y sonido.",
    price: 199.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Muy raro",
      condition: "Nuevo",
      releaseYear: 2023,
    },
  },
  {
    title: "Figura de acción de Kratos",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Figura detallada de Kratos del videojuego God of War.",
    price: 69.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Común",
      condition: "Nuevo",
      releaseYear: 2022,
    },
  },
  {
    title: "Póster firmado de Star Wars: Una Nueva Esperanza",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Póster original de la película firmado por el elenco principal.",
    price: 299.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Muy raro",
      condition: "Nuevo",
      releaseYear: 1977,
    },
  },
  {
    title: "Figura de colección de Sailor Moon",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Figura detallada de Sailor Moon en su traje clásico.",
    price: 54.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Común",
      condition: "Nuevo",
      releaseYear: 2021,
    },
  },
  {
    title: "Réplica del escudo del Capitán América",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description: "Escudo metálico a escala real del Capitán América.",
    price: 249.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Raro",
      condition: "Nuevo",
      releaseYear: 2023,
    },
  },
  {
    title: "Figura de acción de Samus Aran",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description: "Figura articulada de Samus Aran de la serie Metroid.",
    price: 64.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Común",
      condition: "Nuevo",
      releaseYear: 2022,
    },
  },
  {
    title: "Set de cartas coleccionables de Pokémon",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Set de cartas raras de la primera edición de Pokémon.",
    price: 149.99,
    category: "COLLECTIBLES",
    metadata: {
      rarity: "Muy raro",
      condition: "Usado",
      releaseYear: 1999,
    },
  },

  // Board games products
  {
    title: "Catan",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Un juego de estrategia en el que los jugadores colonizan una isla, construyen ciudades y comercian recursos para obtener puntos de victoria.",
    price: 44.99,
    category: "BOARD_GAMES",
    metadata: {
      players: "3-4",
      playTime: "60-120 minutos",
      complexity: "Media",
    },
  },
  {
    title: "Carcassonne",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Los jugadores construyen el paisaje medieval de Carcassonne colocando losetas y posicionando seguidores para controlar áreas y obtener puntos.",
    price: 34.99,
    category: "BOARD_GAMES",
    metadata: {
      players: "2-5",
      playTime: "35 minutos",
      complexity: "Baja",
    },
  },
  {
    title: "Dixit",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Un juego de cartas ilustradas donde los jugadores usan su imaginación para adivinar y describir imágenes en función de pistas creativas.",
    price: 29.99,
    category: "BOARD_GAMES",
    metadata: {
      players: "3-6",
      playTime: "30 minutos",
      complexity: "Baja",
    },
  },
  {
    title: "Pandemic",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Un juego cooperativo donde los jugadores trabajan juntos para detener la propagación de enfermedades y encontrar curas antes de que sea demasiado tarde.",
    price: 39.99,
    category: "BOARD_GAMES",
    metadata: {
      players: "2-4",
      playTime: "45 minutos",
      complexity: "Media",
    },
  },
  {
    title: "Ticket to Ride",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Los jugadores compiten para construir rutas de tren a través de un mapa, conectando ciudades y completando objetivos para ganar puntos.",
    price: 49.99,
    category: "BOARD_GAMES",
    metadata: {
      players: "2-5",
      playTime: "60 minutos",
      complexity: "Baja",
    },
  },
  {
    title: "Codenames",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Dos equipos compiten para identificar correctamente las palabras clave de su color basándose en pistas de una sola palabra dadas por su líder.",
    price: 24.99,
    category: "BOARD_GAMES",
    metadata: {
      players: "2-8",
      playTime: "15 minutos",
      complexity: "Baja",
    },
  },
  {
    title: "7 Wonders",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Un juego de construcción de civilizaciones donde los jugadores desarrollan su ciudad y construyen maravillas para obtener puntos de victoria.",
    price: 49.99,
    category: "BOARD_GAMES",
    metadata: {
      players: "3-7",
      playTime: "30 minutos",
      complexity: "Media",
    },
  },
  {
    title: "Azul",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Los jugadores toman turnos seleccionando azulejos de colores para decorar las paredes del palacio real de Évora, compitiendo por patrones y mayorías.",
    price: 39.99,
    category: "BOARD_GAMES",
    metadata: {
      players: "2-4",
      playTime: "30-45 minutos",
      complexity: "Media",
    },
  },
  {
    title: "Splendor",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Los jugadores asumen el papel de comerciantes del Renacimiento, adquiriendo gemas y desarrollando su red comercial para ganar prestigio y puntos de victoria.",
    price: 34.99,
    category: "BOARD_GAMES",
    metadata: {
      players: "2-4",
      playTime: "30 minutos",
      complexity: "Media",
    },
  },
  {
    title: "Terraforming Mars",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Los jugadores dirigen corporaciones que compiten por terraformar Marte, gestionando recursos y proyectos para aumentar la habitabilidad del planeta.",
    price: 69.99,
    category: "BOARD_GAMES",
    metadata: {
      players: "1-5",
      playTime: "120 minutos",
      complexity: "Alta",
    },
  },
  {
    title: "Kingdomino",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un juego de colocación de losetas donde los jugadores expanden su reino combinando diferentes tipos de terrenos y compitiendo por las mejores piezas.",
    price: 19.99,
    category: "BOARD_GAMES",
    metadata: {
      players: "2-4",
      playTime: "15-20 minutos",
      complexity: "Baja",
    },
  },

  // Manga products
  {
    title: "One Piece Volumen 1",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "El inicio de la épica aventura de Monkey D. Luffy en su búsqueda del tesoro legendario.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "Eiichiro Oda",
      publisher: "Shueisha",
    },
  },
  {
    title: "Naruto Volumen 1",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Conoce a Naruto Uzumaki, un joven ninja con el sueño de convertirse en Hokage.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "Masashi Kishimoto",
      publisher: "Shueisha",
    },
  },
  {
    title: "Dragon Ball Volumen 1",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Acompaña a Goku en sus primeras aventuras en busca de las esferas del dragón.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "Akira Toriyama",
      publisher: "Shueisha",
    },
  },
  {
    title: "Attack on Titan Volumen 1",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "La humanidad lucha por sobrevivir contra gigantes devoradores de hombres.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "Hajime Isayama",
      publisher: "Kodansha",
    },
  },
  {
    title: "My Hero Academia Volumen 1",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "En un mundo donde casi todos tienen superpoderes, un joven sin poderes sueña con ser héroe.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "Kohei Horikoshi",
      publisher: "Shueisha",
    },
  },
  {
    title: "Death Note Volumen 1",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Un estudiante encuentra un cuaderno que le permite matar a cualquiera con solo escribir su nombre.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "Tsugumi Ohba",
      publisher: "Shueisha",
    },
  },
  {
    title: "Fullmetal Alchemist Volumen 1",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Dos hermanos alquimistas buscan la piedra filosofal para recuperar lo que perdieron.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "Hiromu Arakawa",
      publisher: "Square Enix",
    },
  },
  {
    title: "Tokyo Ghoul Volumen 1",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un joven se convierte en mitad ghoul y debe adaptarse a su nueva vida.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "Sui Ishida",
      publisher: "Shueisha",
    },
  },
  {
    title: "One Punch Man Volumen 1",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Un héroe que derrota a todos sus enemigos de un solo golpe busca un verdadero desafío.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "ONE",
      publisher: "Shueisha",
    },
  },
  {
    title: "Bleach Volumen 1",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Un adolescente obtiene poderes de shinigami y debe proteger a los vivos de los espíritus malignos.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "Tite Kubo",
      publisher: "Shueisha",
    },
  },
  {
    title: "Fairy Tail Volumen 1",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Sigue las aventuras de un gremio de magos en un mundo lleno de magia y peligros.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "Hiro Mashima",
      publisher: "Kodansha",
    },
  },
  {
    title: "Hunter x Hunter Volumen 1",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Un joven busca convertirse en cazador para encontrar a su padre desaparecido.",
    price: 9.99,
    category: "MANGA",
    metadata: {
      volume: 1,
      author: "Yoshihiro Togashi",
      publisher: "Shueisha",
    },
  },

  // Movies products
  {
    title: "El Padrino",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Una crónica sobre la familia Corleone, una de las más influyentes en el mundo del crimen organizado en Nueva York.",
    price: 14.99,
    category: "MOVIES",
    metadata: {
      duration: 175,
      director: "Francis Ford Coppola",
      releaseYear: 1972,
    },
  },
  {
    title: "La Lista de Schindler",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "La historia de Oskar Schindler, quien salvó a más de mil judíos durante el Holocausto.",
    price: 12.99,
    category: "MOVIES",
    metadata: {
      duration: 195,
      director: "Steven Spielberg",
      releaseYear: 1993,
    },
  },
  {
    title: "Pulp Fiction",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Historias entrelazadas de crimen y redención en Los Ángeles.",
    price: 11.99,
    category: "MOVIES",
    metadata: {
      duration: 154,
      director: "Quentin Tarantino",
      releaseYear: 1994,
    },
  },
  {
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Un hobbit emprende una peligrosa misión para destruir un anillo poderoso.",
    price: 13.99,
    category: "MOVIES",
    metadata: {
      duration: 178,
      director: "Peter Jackson",
      releaseYear: 2001,
    },
  },
  {
    title: "Forrest Gump",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "La vida de un hombre con un coeficiente intelectual bajo que presencia eventos históricos clave.",
    price: 10.99,
    category: "MOVIES",
    metadata: {
      duration: 142,
      director: "Robert Zemeckis",
      releaseYear: 1994,
    },
  },
  {
    title: "Inception (Origen)",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Un ladrón que roba información infiltrándose en los sueños de sus víctimas.",
    price: 14.99,
    category: "MOVIES",
    metadata: {
      duration: 148,
      director: "Christopher Nolan",
      releaseYear: 2010,
    },
  },
  {
    title: "El Club de la Lucha",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Un hombre crea un club de pelea clandestino como forma de terapia.",
    price: 9.99,
    category: "MOVIES",
    metadata: {
      duration: 139,
      director: "David Fincher",
      releaseYear: 1999,
    },
  },
  {
    title: "Matrix",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Un hacker descubre la verdad sobre su realidad y su papel en la guerra contra sus controladores.",
    price: 12.99,
    category: "MOVIES",
    metadata: {
      duration: 136,
      director: "Lana Wachowski, Lilly Wachowski",
      releaseYear: 1999,
    },
  },
  {
    title: "El Silencio de los Corderos",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Una joven agente del FBI busca la ayuda de un brillante asesino en serie para atrapar a otro criminal.",
    price: 11.99,
    category: "MOVIES",
    metadata: {
      duration: 118,
      director: "Jonathan Demme",
      releaseYear: 1991,
    },
  },
  {
    title: "La Vida es Bella",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Un padre utiliza su imaginación para proteger a su hijo de los horrores de un campo de concentración nazi.",
    price: 10.99,
    category: "MOVIES",
    metadata: {
      duration: 116,
      director: "Roberto Benigni",
      releaseYear: 1997,
    },
  },
  {
    title: "Los Siete Samuráis",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Siete samuráis son contratados para defender una aldea de bandidos.",
    price: 13.99,
    category: "MOVIES",
    metadata: {
      duration: 207,
      director: "Akira Kurosawa",
      releaseYear: 1954,
    },
  },
  {
    title: "El Bueno, el Feo y el Malo",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Tres hombres buscan un tesoro durante la Guerra Civil estadounidense.",
    price: 12.99,
    category: "MOVIES",
    metadata: {
      duration: 161,
      director: "Sergio Leone",
      releaseYear: 1966,
    },
  },

  // Cosplay products
  {
    title: "Disfraz de Sailor Moon",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Conviértete en la icónica guerrera lunar con este disfraz fiel al anime original.",
    price: 49.99,
    category: "COSPLAY",
    metadata: {
      size: "M",
      character: "Sailor Moon",
      franchise: "Sailor Moon",
    },
  },
  {
    title: "Disfraz de Naruto Uzumaki",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Representa al ninja más famoso de Konoha con este traje detallado.",
    price: 59.99,
    category: "COSPLAY",
    metadata: {
      size: "L",
      character: "Naruto Uzumaki",
      franchise: "Naruto",
    },
  },
  {
    title: "Disfraz de Hermione Granger",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Luce como la brillante bruja de Hogwarts con este conjunto completo.",
    price: 69.99,
    category: "COSPLAY",
    metadata: {
      size: "S",
      character: "Hermione Granger",
      franchise: "Harry Potter",
    },
  },
  {
    title: "Disfraz de Spider-Man",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Ponte en la piel del amistoso vecino Spider-Man con este traje elástico.",
    price: 79.99,
    category: "COSPLAY",
    metadata: {
      size: "XL",
      character: "Spider-Man",
      franchise: "Marvel",
    },
  },
  {
    title: "Disfraz de Wonder Woman",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Empodérate con el traje de la amazona más famosa de DC Comics.",
    price: 89.99,
    category: "COSPLAY",
    metadata: {
      size: "M",
      character: "Wonder Woman",
      franchise: "DC Comics",
    },
  },
  {
    title: "Disfraz de Link",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Embárcate en una aventura en Hyrule con este traje del héroe legendario.",
    price: 69.99,
    category: "COSPLAY",
    metadata: {
      size: "L",
      character: "Link",
      franchise: "The Legend of Zelda",
    },
  },
  {
    title: "Disfraz de Harley Quinn",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Destaca con el colorido y atrevido traje de la villana más carismática.",
    price: 59.99,
    category: "COSPLAY",
    metadata: {
      size: "S",
      character: "Harley Quinn",
      franchise: "DC Comics",
    },
  },
  {
    title: "Disfraz de Goku",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description: "Transforma en Super Saiyan con este auténtico traje de Goku.",
    price: 74.99,
    category: "COSPLAY",
    metadata: {
      size: "M",
      character: "Goku",
      franchise: "Dragon Ball Z",
    },
  },
  {
    title: "Disfraz de Elsa",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description: "Brilla como la reina de Arendelle con este elegante vestido.",
    price: 64.99,
    category: "COSPLAY",
    metadata: {
      size: "L",
      character: "Elsa",
      franchise: "Frozen",
    },
  },
  {
    title: "Disfraz de Deadpool",
    image: "https://images.unsplash.com/photo-1592194996308-7a9f2b5b9b03",
    description:
      "Adopta el estilo irreverente del mercenario bocazas con este traje.",
    price: 84.99,
    category: "COSPLAY",
    metadata: {
      size: "XL",
      character: "Deadpool",
      franchise: "Marvel",
    },
  },
  {
    title: "Disfraz de Lara Croft",
    image: "https://images.unsplash.com/photo-1611605698973-0e3b9c9e6d83",
    description:
      "Conviértete en la intrépida arqueóloga con este conjunto aventurero.",
    price: 54.99,
    category: "COSPLAY",
    metadata: {
      size: "M",
      character: "Lara Croft",
      franchise: "Tomb Raider",
    },
  },
  {
    title: "Disfraz de Pikachu",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    description:
      "Añade un toque adorable a tu cosplay con este traje de Pikachu.",
    price: 44.99,
    category: "COSPLAY",
    metadata: {
      size: "S",
      character: "Pikachu",
      franchise: "Pokémon",
    },
  },
];

const sections: Prisma.SectionCreateInput[] = [
  {
    title: "Anime",
    description: "Discover the latest anime releases and classics",
    image: "/images/sections/anime-cover.jpg",
    link: "/anime",
  },
  {
    title: "Comics",
    description: "Explore superhero universes and indie comics",
    image: "/images/sections/comics-cover.jpg",
    link: "/comics",
  },
  {
    title: "Gaming",
    description: "Stay updated with gaming news and reviews",
    image: "/images/sections/gaming-cover.jpg",
    link: "/gaming",
  },
  {
    title: "Merchandise",
    description:
      "Find exclusive apparel and accessories from your favorite franchises",
    image: "/images/sections/merchandise-cover.jpg",
    link: "/merchandise",
  },
  {
    title: "Collectibles",
    description: "Discover rare and limited edition figurines and memorabilia",
    image: "/images/sections/collectibles-cover.jpg",
    link: "/collectibles",
  },
  {
    title: "Board Games",
    description: "Explore strategic and fun tabletop games for all ages",
    image: "/images/sections/board-games-cover.jpg",
    link: "/board-games",
  },
  {
    title: "Manga",
    description:
      "Browse our extensive collection of Japanese comics and light novels",
    image: "/images/sections/manga-cover.jpg",
    link: "/manga",
  },
  {
    title: "Movies",
    description: "Check out the latest superhero films and animated features",
    image: "/images/sections/movies-cover.jpg",
    link: "/movies",
  },
  {
    title: "Cosplay",
    description:
      "Find costumes, accessories and guides for your next convention",
    image: "/images/sections/cosplay-cover.jpg",
    link: "/cosplay",
  },
];

export async function main() {
  console.log("Seeding database...");

  // Seed Products
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  // Seed Sections
  for (const section of sections) {
    await prisma.section.create({
      data: section,
    });
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error("Error while seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
