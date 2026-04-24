const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".arrow-left");
const next = document.querySelector(".arrow-right");
const headerIndicatorIcon = document.querySelector(".header-indicator-icon");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navLastLink = document.querySelector(".nav a:last-child");
const cardsTrack = document.querySelector("[data-row-track]");
const recommendationsTrack = document.querySelector("[data-recommendations-track]");
const inspiredTrack = document.querySelector("[data-inspired-track]");
const gamersTrack = document.querySelector("[data-gamers-track]");
const continueTrack = document.querySelector("[data-continue-track]");
const historyList = document.querySelector("[data-history-list]");
const clearHistoryButton = document.querySelector("[data-clear-history]");
const contentRows = document.querySelectorAll(".content-row");

const continueWatchingItems = [
  {
    series: "Attack on Titan",
    title: "T3 E41 - Confiança",
    href: "/pt-br/watch/G9DUEPVPZ/trust",
    seriesHref: "/pt-br/series/GR751KNZY/attack-on-titan",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=640,height=360/catalog/crunchyroll/4a5c95280a10d45b2f2480c5a5d028a0.jpg",
    rating: "A16",
    date: "21/12/2021",
    progress: 8,
    duration: "23m restantes",
    cta: "Continuar T3 E41",
    audio: "Dub | Leg",
    description: "On the run and running out of time, the Scouts must entrust their lives to others if they plan on surviving.",
  },
  {
    series: "Ganhei um Poder Apelão em Outro Mundo e Agora Sou Imbatível no Mundo Real",
    title: "E2 - Instituto Ousei",
    href: "/pt-br/watch/GWDU8QZZE/ousei-academy",
    seriesHref: "/pt-br/series/GEXH3W49E/i-got-a-cheat-skill-in-another-world-and-became-unrivaled-in-the-real-world-too",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=640,height=360/catalog/crunchyroll/09ba4eeb702620d5f0eb029662bedd68.png",
    rating: "A12",
    date: "02/05/2023",
    progress: 30.7853,
    duration: "16m restantes",
    cta: "Continuar E2",
    audio: "Dub | Leg",
    description: "Yuuya é convidado para ir a outra escola, mas se sente intimidado por ser uma escola considerada da elite. No outro mundo, ele descobre algo importante.",
  },
  {
    series: "DARK MOON: THE BLOOD ALTAR",
    title: "E5 - Lua Minguante — Morda meu pescoço —",
    href: "/pt-br/watch/GE00366130PTBR/waxing-moon---bite-my-neck--",
    seriesHref: "/pt-br/series/GT00365556/dark-moon-the-blood-altar",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=640,height=360/catalog/crunchyroll/6a6845172e0fcb86be94282b5e983f77.png",
    rating: "A14",
    date: "06/02/2026",
    progress: 29.5983,
    duration: "16m restantes",
    cta: "Continuar E5",
    audio: "Dub | Leg",
    description: "Heli e companhia se preparam para a festa de aniversário. Ele e Sooha conversam sobre o passado.",
  },
  {
    series: "Kaiju No. 8",
    title: "E1 - O homem que virou kaiju",
    href: "/pt-br/watch/GVWU0MX0V/the-man-who-became-a-kaiju",
    seriesHref: "/pt-br/series/GG5H5XQ7D/kaiju-no-8",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=640,height=360/catalog/crunchyroll/81f0001d027d016192f81925fd8a86f7.png",
    rating: "A14",
    date: "13/04/2024",
    progress: 34.0141,
    duration: "15m restantes",
    cta: "Continuar E1",
    audio: "Dub | Leg",
    description: "Kafka é um faxineiro que abandonou seu sonho de entrar na Força de Defesa, até que um evento impossível muda tudo.",
  },
  {
    series: "SHIBOYUGI: Jogos Mortais para Colocar Comida na Mesa",
    title: "E2 - Chains Of ----",
    href: "/pt-br/watch/GE00367377PTBR/chains-of-----",
    seriesHref: "/pt-br/series/GT00365787/shiboyugi-playing-death-games-to-put-food-on-the-table",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=640,height=360/catalog/crunchyroll/4bdfeea05e4878c8a4bd24d63ba8359f.png",
    rating: "A16",
    date: "14/01/2026",
    duration: "23m",
    cta: "Reproduzir E2",
    audio: "Dub | Leg",
    description: "Em um jogo de fuga, Yuki encontra dificuldades para conquistar a confiança das demais participantes.",
  },
  {
    series: "I'm the Villainess, So I'm Taming the Final Boss",
    title: "E6 - A vilã é implacável contra o mal",
    href: "/pt-br/watch/GD9UV5D84/the-villainess-is-unforgiving-of-evil",
    seriesHref: "/pt-br/series/GG5H5X0JK/im-the-villainess-so-im-taming-the-final-boss",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=640,height=360/catalog/crunchyroll/32e5ab093b0c9aec35a893ad1397c7e3.jpg",
    rating: "A12",
    date: "19/11/2022",
    duration: "23m",
    cta: "Reproduzir E6",
    audio: "Dub | Leg",
    description: "Aileen segue as pistas para encontrar o incenso demoníaco, que pode desencadear um final trágico para ela.",
  },
];

const historyItems = [
  {
    series: "Attack on Titan",
    title: "T3 E41 - Confian&ccedil;a",
    href: "/pt-br/watch/G9DUEPVPZ/trust",
    seriesHref: "/pt-br/series/GR751KNZY/attack-on-titan",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/4a5c95280a10d45b2f2480c5a5d028a0.jpg",
    rating: "A16",
    date: "23/04/2026",
    progress: 8,
    duration: "23m restantes",
  },
  {
    series: "Attack on Titan",
    title: "T3 E40 - Hist&oacute;ria Antiga",
    href: "/pt-br/watch/GQJUG98EJ/old-story",
    seriesHref: "/pt-br/series/GR751KNZY/attack-on-titan",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/b075e6e3d2b6f8bdbb934b53facc0646.jpg",
    rating: "A16",
    date: "22/04/2026",
    watched: true,
    duration: "Assistido",
  },
  {
    series: "Attack on Titan",
    title: "T3 E39 - Dor",
    href: "/pt-br/watch/G2XU03P53/pain",
    seriesHref: "/pt-br/series/GR751KNZY/attack-on-titan",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/a2d6e8cf6353edad325dfd90d6807694.jpg",
    rating: "A16",
    date: "22/04/2026",
    watched: true,
    duration: "Assistido",
  },
  {
    series: "Attack on Titan",
    title: "T3 E38 - Sinal de Fuma&ccedil;a",
    href: "/pt-br/watch/G31UX3J7P/smoke-signal",
    seriesHref: "/pt-br/series/GR751KNZY/attack-on-titan",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/3b94749042f9fc0ec08bcd688bf7b9fe.jpg",
    rating: "A16",
    date: "22/04/2026",
    progress: 88.0936,
    duration: "2m restantes",
  },
  {
    series: "Ganhei um Poder Apel&atilde;o em Outro Mundo e Agora Sou Imbat&iacute;vel no Mundo Real",
    title: "E2 - Instituto Ousei",
    href: "/pt-br/watch/GWDU8QZZE/ousei-academy",
    seriesHref: "/pt-br/series/GEXH3W49E/i-got-a-cheat-skill-in-another-world-and-became-unrivaled-in-the-real-world-too",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/09ba4eeb702620d5f0eb029662bedd68.png",
    rating: "A12",
    date: "21/04/2026",
    progress: 30.7853,
    duration: "16m restantes",
  },
  {
    series: "Kaiju No. 8",
    title: "E1 - O homem que virou kaiju",
    href: "/pt-br/watch/GVWU0MX0V/the-man-who-became-a-kaiju",
    seriesHref: "/pt-br/series/GG5H5XQ7D/kaiju-no-8",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/81f0001d027d016192f81925fd8a86f7.png",
    rating: "A14",
    date: "20/04/2026",
    progress: 34.0141,
    duration: "15m restantes",
  },
];

const trendingAnimeItems = [
  {
    title: "That Time I Got Reincarnated as a Slime",
    href: "/pt-br/series/GYZJ43JMR/that-time-i-got-reincarnated-as-a-slime",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/73e5f88d8820852b8320290637ab7c49.png",
    audio: "Leg | Dub",
  },
  {
    title: "One Piece",
    href: "/pt-br/series/GRMG8ZQZR/one-piece",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/4bdc346bdf8addbeb7477f7ee2a890c2.png",
    audio: "Leg | Dub",
  },
  {
    title: "JUJUTSU KAISEN",
    href: "/pt-br/series/GRDV0019R/jujutsu-kaisen",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/d128baf30c0638fafce3fd4e7c9ff37c.png",
    audio: "Leg | Dub",
  },
  {
    title: "Dr. STONE",
    href: "/pt-br/series/GYEXQKJG6/dr-stone",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/8c6a480e254bbfe8c30714eb60ff79b2.png",
    audio: "Leg | Dub",
  },
  {
    title: "My Hero Academia",
    href: "/pt-br/series/G6NQ5DWZ6/my-hero-academia",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/acae9f5a7c079cd575a64aab3f6343b6.png",
    audio: "Leg | Dub",
  },
  {
    title: "Re:ZERO -Starting Life in Another World- SHORTS",
    href: "/pt-br/series/GRGG9798R/rezero--starting-life-in-another-world-",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/3ecf494ffb3dda407a1802ad7bd0e5da.png",
    audio: "Leg | Dub",
  },
  {
    title: "Classroom of the Elite",
    href: "/pt-br/series/GRVN8MNQY/classroom-of-the-elite",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/3cfe30b74b8f536931370bcd441c1276.png",
    audio: "Leg | Dub",
  },
  {
    title: "Frieren e a Jornada para o Além",
    href: "/pt-br/series/GG5H5XQX4/frieren-beyond-journeys-end",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/6528adbf0a4e59a5bd22ee3779887838.png",
    audio: "Leg | Dub",
  },
  {
    title: "Fire Force",
    href: "/pt-br/series/GYQWNXPZY/fire-force",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/be95146cdfef1d1c5332a8eb006ed3e4.png",
    audio: "Leg | Dub",
  },
  {
    title: "Wistoria: Wand and Sword",
    href: "/pt-br/series/GW4HM7WK9/wistoria-wand-and-sword",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/2cbe815032897fb38c6e0d7c7aa21eda.png",
    audio: "Leg | Dub",
  },
  {
    title: "Hell's Paradise",
    href: "/pt-br/series/GJ0H7Q5ZJ/hells-paradise",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/d0e301af2d2589ca633a0acf43216311.png",
    audio: "Leg | Dub",
  },
  {
    title: "Meu Anjo de Vizinha Me Mima Demais",
    href: "/pt-br/series/G9VHN91DJ/the-angel-next-door-spoils-me-rotten",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/0a84360103b7b89ac4eb8bd0d30101b7.png",
    audio: "Leg | Dub",
  },
  {
    title: "The Beginning After the End",
    href: "/pt-br/series/G24H1NWKE/the-beginning-after-the-end",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/a0c91a42fd3804b47947c35928d13cb3.png",
    audio: "Leg | Dub",
  },
  {
    title: "An Observation Log of My Fiancée Who Calls Herself a Villainess",
    href: "/pt-br/series/GT00371887/an-observation-log-of-my-fiance-who-calls-herself-a-villainess",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/652daf8bade4ee2cbf8ba5c21dbc4201.png",
    audio: "Leg | Dub",
  },
  {
    title: "Rent-a-Girlfriend",
    href: "/pt-br/series/G6QWV3976/rent-a-girlfriend",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/64ccf1d014814b7fcb311540a697ce74.png",
    audio: "Leg | Dub",
  },
  {
    title: "Gachiakuta",
    href: "/pt-br/series/GP5HJ84P7/gachiakuta",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/9788dfbd85a08ebe0e0127047dacbc33.png",
    audio: "Leg | Dub",
  },
  {
    title: "Witch Hat Atelier",
    href: "/pt-br/series/GT00258001/witch-hat-atelier",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/354514144b82b6950c584f1e84cb49d9.png",
    audio: "Leg | Dub",
  },
  {
    title: "SPY x FAMILY",
    href: "/pt-br/series/G4PH0WXVJ/spy-x-family",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/1d05d76580b92974b125044b3a0bbc8c.png",
    audio: "Leg | Dub",
  },
  {
    title: "Dorohedoro",
    href: "/pt-br/series/GT00371893/dorohedoro",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/313dcf9368e916cde2ea9d56124310fb.png",
    audio: "Leg | Dub",
  },
  {
    title: "The Warrior Princess and the Barbaric King",
    href: "/pt-br/series/GT00362253/the-warrior-princess-and-the-barbaric-king",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/72a681db962841fd5f0cc1bf71fd06f9.png",
    audio: "Leg | Dub",
  },
];

const recommendedAnimeItems = [
  {
    title: "Hell's Paradise",
    href: "/pt-br/series/GJ0H7Q5ZJ/hells-paradise",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/d0e301af2d2589ca633a0acf43216311.png",
    audio: "Leg | Dub",
  },
  {
    title: "Fire Force",
    href: "/pt-br/series/GYQWNXPZY/fire-force",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/be95146cdfef1d1c5332a8eb006ed3e4.png",
    audio: "Leg | Dub",
  },
  {
    title: "The Warrior Princess and the Barbaric King",
    href: "/pt-br/series/GT00362253/the-warrior-princess-and-the-barbaric-king",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/72a681db962841fd5f0cc1bf71fd06f9.png",
    audio: "Leg | Dub",
  },
  {
    title: "Tokyo Ghoul",
    href: "/pt-br/series/G6NV7Z50Y/tokyo-ghoul",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/b28d1a127ac63afcd08ff0b838a294d7.png",
    audio: "Leg | Dub",
  },
  {
    title: "Berserk",
    href: "/pt-br/series/GYX04955R/berserk",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Os Reinos da Ruína",
    href: "/pt-br/series/GG5H5XQ14/the-kingdoms-of-ruin",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/b037253cebde7b6f446c0f495659f9fc.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Drug Store in Another World - The Slow Life of a Cheat Pharmacist",
    href: "/pt-br/series/GDKHZEN80/drug-store-in-another-world---the-slow-life-of-a-cheat-pharmacist",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/6d1e702dc329d3d03cd978402d253ac1.jpg",
    audio: "Legendado",
  },
  {
    title: "Shikimori's Not Just a Cutie",
    href: "/pt-br/series/GNVHKN7M4/shikimoris-not-just-a-cutie",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/57da95e93614672250ff0312b4c8194c.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Code Geass",
    href: "/pt-br/series/GY2P9ED0Y/code-geass",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/efb29ad752e647212b3e199da7748e9e.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Welcome to Demon School! Iruma-kun",
    href: "/pt-br/series/G6NVG970Y/welcome-to-demon-school-iruma-kun",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/bf15a4ffbff627825aff5d46d8506eb3.png",
    audio: "Leg | Dub",
  },
  {
    title: "Scarlet Nexus",
    href: "/pt-br/series/GMEHME4J3/scarlet-nexus",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/af4c82f56d6debfb0813eb4abd79e9d0.jpe",
    audio: "Leg | Dub",
  },
  {
    title: "Takopi's Original Sin",
    href: "/pt-br/series/GKEH2G0X4/takopis-original-sin",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/b36c187f0831a5394b7a8815fc0fc2c9.png",
    audio: "Leg | Dub",
  },
  {
    title: "Miss Kobayashi's Dragon Maid",
    href: "/pt-br/series/G6497Z43Y/miss-kobayashis-dragon-maid",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/6f47c37390d0efe7ab61e34f93ddcfe7.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Recovery of an MMO Junkie",
    href: "/pt-br/series/GR49WNQE6/recovery-of-an-mmo-junkie",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/6bdbf28eda575de5f960c23d26fa65dd.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Grimgar, Ashes and Illusions",
    href: "/pt-br/series/GRVNX917Y/grimgar-ashes-and-illusions",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/ebcea0b1b6ee085d58a9759a54aefc5a.jpg",
    audio: "Legendado",
  },
  {
    title: "The Garden of Sinners",
    href: "/pt-br/series/G6DK07N7R/the-garden-of-sinners",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/14add982cd2dba236d5664a2b8f71b50.jpg",
    audio: "Legendado",
  },
  {
    title: "Sword Art Online Alternative: Gun Gale Online",
    href: "/pt-br/series/GY79P41KR/sword-art-online-alternative-gun-gale-online",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/6127044565d6f61c1954e1f6b871e81b.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Myriad Colors Phantom World",
    href: "/pt-br/series/G609G0PP6/myriad-colors-phantom-world",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/961d72f6b3825bca53b772996d47eae9.jpe",
    audio: "Leg | Dub",
  },
  {
    title: "Saving 80,000 Gold in Another World for my Retirement",
    href: "/pt-br/series/G4PH0WEM2/saving-80000-gold-in-another-world-for-my-retirement",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/a6ffa8f8b91daf0e7fe95f995e1dd90d.jpe",
    audio: "Leg | Dub",
  },
  {
    title: "KenIchi: The Mightiest Disciple",
    href: "/pt-br/series/GEXH3W859/kenichi-the-mightiest-disciple",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/5058333970778d0df722ff5bc79181d4.jpg",
    audio: "Leg | Dub",
  },
];

const inspiredAnimeItems = [
  {
    title: "Plunderer",
    href: "/pt-br/series/GNVHKN70Z/plunderer",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/ea5fc0a87ca19fc62ff9e5654c9087ab.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Kaiju No. 8",
    href: "/pt-br/series/GG5H5XQ7D/kaiju-no-8",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/2c1650b6f77003bdd385c6ad66baa7a6.png",
    audio: "Leg | Dub",
  },
  {
    title: "To the Abandoned Sacred Beasts",
    href: "/pt-br/series/GRW459Z8Y/to-the-abandoned-sacred-beasts",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/fc074d8e78c7147c38370d99724afbe6.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Dorohedoro",
    href: "/pt-br/series/GT00371893/dorohedoro",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/313dcf9368e916cde2ea9d56124310fb.png",
    audio: "Leg | Dub",
  },
  {
    title: "Hell's Paradise",
    href: "/pt-br/series/GJ0H7Q5ZJ/hells-paradise",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/d0e301af2d2589ca633a0acf43216311.png",
    audio: "Leg | Dub",
  },
  {
    title: "Berserk: The Golden Age Arc - Memorial Edition",
    href: "/pt-br/series/G24H1N8XX/berserk-the-golden-age-arc---memorial-edition",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/128a3b34307dac418454b3a8831a495f.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "GIBIATE",
    href: "/pt-br/series/GR3K2EXXR/gibiate",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/d84257c8d1e87b9120cc44365c44291b.jpg",
    audio: "Legendado",
  },
  {
    title: "Dr. STONE",
    href: "/pt-br/series/GYEXQKJG6/dr-stone",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/8c6a480e254bbfe8c30714eb60ff79b2.png",
    audio: "Leg | Dub",
  },
  {
    title: "Casshern Sins",
    href: "/pt-br/series/GYNQEDGGY/casshern-sins",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/7042f60f20cc40e0609bc06921d8fe11.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Fire Force",
    href: "/pt-br/series/GYQWNXPZY/fire-force",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/be95146cdfef1d1c5332a8eb006ed3e4.png",
    audio: "Leg | Dub",
  },
  {
    title: "Sakura Wars the Animation",
    href: "/pt-br/series/GQWH0M72P/sakura-wars-the-animation",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/7fe481eee6f94614615bbbe63f5bc60e.jpe",
    audio: "Leg | Dub",
  },
  {
    title: "KanColle",
    href: "/pt-br/series/GYJQVX726/kancolle",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/b2e402bbadae6571be4612dc41b99e6b.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Fist of the North Star",
    href: "/pt-br/series/G6752ZK3R/fist-of-the-north-star",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/1c3b2de8c9ca1d985914f5f50c327710.png",
    audio: "Legendado",
  },
  {
    title: "Black Clover",
    href: "/pt-br/series/GRE50KV36/black-clover",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/b5ed4da5148ab6a3627ca2a5e5dbe59a.png",
    audio: "Leg | Dub",
  },
  {
    title: "GOD EATER",
    href: "/pt-br/series/GRDQNDVZY/god-eater",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/eb2abf56713df1334d8c96b26d13343b.jpg",
    audio: "Legendado",
  },
  {
    title: "Strike Witches",
    href: "/pt-br/series/GYEXXWD36/strike-witches",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/56404e3617fac9ba55ae7bbbdeab9a12.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Attack on Titan: Junior High",
    href: "/pt-br/series/GR758GE5Y/attack-on-titan-junior-high",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/f63a2629ae2e2dbebde87d56825155eb.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Alderamin on the Sky",
    href: "/pt-br/series/GY8VJW08Y/alderamin-on-the-sky",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/2a560a83c5ba6eefb87200bc4a03ddad.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Girly Air Force",
    href: "/pt-br/series/GYG5XKQ1Y/girly-air-force",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/f73c1967ae041068fec674330bd41009.jpg",
    audio: "Legendado",
  },
  {
    title: "Kabaneri of the Iron Fortress",
    href: "/pt-br/series/GR24GX896/kabaneri-of-the-iron-fortress",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/81226c70a1b4e6b39eda6c902ba4145b.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Warlords of Sigrdrifa",
    href: "/pt-br/series/GNVHKNG35/warlords-of-sigrdrifa",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/a7d441ae1f599bef61e6296ad024f87e.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "NieR:Automata Ver1.1a",
    href: "/pt-br/series/GNVHKNPW1/nierautomata-ver11a",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/60ae0b1c6c34b3ef0279f07481a3b983.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Genesis Climber MOSPEADA",
    href: "/pt-br/series/G24H1NW50/genesis-climber-mospeada",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/3312baff62ace715145cb1cb8ad4a986.jpg",
    audio: "Legendado",
  },
  {
    title: "Qualidea Code",
    href: "/pt-br/series/G649023EY/qualidea-code",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/7f1e7b254596ba93d7ec9331375052e9.jpe",
    audio: "Legendado",
  },
  {
    title: "SABIKUI BISCO",
    href: "/pt-br/series/G79H23V24/sabikui-bisco",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/bc32305b564fad77c2eb5e8884ba280c.jpg",
    audio: "Leg | Dub",
  },
];

const gamersAnimeItems = [
  {
    title: "NieR:Automata Ver1.1a",
    href: "/pt-br/series/GNVHKNPW1/nierautomata-ver11a",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/60ae0b1c6c34b3ef0279f07481a3b983.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Arknights",
    href: "/pt-br/series/GG5H5X3VN/arknights",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/5884d1150f3f358914fcd811f6b6b0b2.png",
    audio: "Leg | Dub",
  },
  {
    title: "The World Ends With You The Animation",
    href: "/pt-br/series/G79H23VVG/the-world-ends-with-you-the-animation",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/89c4d1238a6c388f41aff7b7cf6e45c4.jpe",
    audio: "Leg | Dub",
  },
  {
    title: "Fate/Zero",
    href: "/pt-br/series/GRJQ04Z3Y/fatezero",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/2ee05df6e44530437069955b71f09daf.jpg",
    audio: "Legendado",
  },
  {
    title: "D_CIDE TRAUMEREI THE ANIMATION",
    href: "/pt-br/series/GXJHM3DZX/d_cide-traumerei-the-animation",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/c29990c814378978d2a634e706692daf.jpg",
    audio: "Legendado",
  },
  {
    title: "Fate/stay night",
    href: "/pt-br/series/GY8V11X7Y/fatestay-night-unlimited-blade-works",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/fd6f801d77097e20eb5ffb9232de14d0.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Re:ZERO -Starting Life in Another World- SHORTS",
    href: "/pt-br/series/GRGG9798R/rezero--starting-life-in-another-world-",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/3ecf494ffb3dda407a1802ad7bd0e5da.png",
    audio: "Leg | Dub",
  },
  {
    title: "Yu-Gi-Oh!",
    href: "/pt-br/series/G6P8DV7V6/yu-gi-oh",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/837409ac43551c978dd2978d3a55f92a.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Yu-Gi-Oh! ZEXAL",
    href: "/pt-br/series/GRDQD8PDY/yu-gi-oh-zexal",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/2da12ed5b907017b6d52d4f867027012.jpg",
    audio: "Dublado",
  },
  {
    title: "Shadowverse",
    href: "/pt-br/series/GYEX244X6/shadowverse",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/b4bd984c06546db73cd72c9404211127.jpg",
    audio: "Legendado",
  },
  {
    title: "DRAGON QUEST The Adventure of Dai",
    href: "/pt-br/series/GYXM79M56/dragon-quest-the-adventure-of-dai",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/cba230badc3a1559995f8f7503af4788.jpg",
    audio: "Legendado",
  },
  {
    title: "Yu-Gi-Oh! 5D's",
    href: "/pt-br/series/G62P107J6/yu-gi-oh-5ds",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/4d3d909ba50ff696547ce482aa01f5fb.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Yu-Gi-Oh! ARC-V",
    href: "/pt-br/series/GYDQ77GZ6/yu-gi-oh-arc-v",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/3487d0fff949e19e3e0b4922606fff39.jpe",
    audio: "Legendado",
  },
  {
    title: "Log Horizon",
    href: "/pt-br/series/GRVNMG93Y/log-horizon",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/f39842bd473e2db08ea8a1d8849c93ae.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Yu-Gi-Oh! GX",
    href: "/pt-br/series/GY8V1ED9Y/yu-gi-oh-gx",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/938ffd2c76c1d1b7082d1e47ce0352bf.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Koro Sensei Quest!",
    href: "/pt-br/series/GYWEK9KNY/koro-sensei-quest",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/8ec04fb0f1d48df8f1bd2fb7202539c6.jpe",
    audio: "Leg | Dub",
  },
  {
    title: "Persona4 the Golden ANIMATION",
    href: "/pt-br/series/GR9P3GND6/persona4-the-golden-animation",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/eb010c5efc2550478889040ace097fa4.jpe",
    audio: "Legendado",
  },
  {
    title: "NEW GAME!",
    href: "/pt-br/series/GRWE2PQQR/new-game",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/1af14876af87bdfbe42e0220c9e5d002.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Do You Love Your Mom and Her Two-Hit Multi-Target Attacks?",
    href: "/pt-br/series/G6J0EEP0R/do-you-love-your-mom-and-her-two-hit-multi-target-attacks",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/15227df9c745ab29831756f9cde7d239.jpg",
    audio: "Legendado",
  },
  {
    title: "Kuma Kuma Kuma Bear",
    href: "/pt-br/series/GQWH0M990/kuma-kuma-kuma-bear",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/fd5484b177ee95615c65b2c61e81ea9c.jpg",
    audio: "Leg | Dub",
  },
  {
    title: "Sword Art Online",
    href: "/pt-br/series/GR49G9VP6/sword-art-online",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/13d6e1ce564b2080bcc39f8ef1288690.jpg",
    audio: "Leg | Dub",
  },
];

let currentSlide = 0;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getRatingClass(rating) {
  return `rating-${rating.toLowerCase()}`;
}

function renderContinueWatching() {
  if (!continueTrack) {
    return;
  }

  continueTrack.innerHTML = renderPlayableCards(continueWatchingItems);
}

function renderPlayableCards(items) {
  return items
    .map((item) => {
      const progress = Number.isFinite(item.progress)
        ? `<div class="playable-progress" aria-hidden="true"><span style="width: ${item.progress}%;"></span></div>`
        : "";

      return `
        <article class="playable-card">
          <a class="playable-card-link" href="${item.href}" aria-label="${escapeHtml(item.cta)} de ${escapeHtml(item.series)}"></a>

          <div class="playable-thumbnail">
            <img src="${item.image}" alt="${escapeHtml(item.title)}" />

            <div class="playable-play-overlay" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M4 2l16 10L4 22z"></path>
              </svg>
            </div>

            ${progress}
            <span class="playable-duration">${escapeHtml(item.duration)}</span>
          </div>

          <div class="playable-body">
            <a class="playable-series" href="${item.seriesHref}">${escapeHtml(item.series)}</a>
            <h3>${escapeHtml(item.title)}</h3>

            <p class="playable-meta" data-audio="${escapeHtml(item.audio)}">
              <span class="rating-age ${getRatingClass(item.rating)}">${escapeHtml(item.rating)}</span>
              <span class="calendar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M4 20h16v-8H4v8zM6 6v1a1 1 0 0 0 2 0V6h8v1a1 1 0 1 0 2 0V6h2v4H4V6h2zm15-2h-3V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"></path>
                </svg>
              </span>
              ${escapeHtml(item.date)}
            </p>

            <p class="playable-description">${escapeHtml(item.description)}</p>

            <div class="playable-footer">
              <a class="playable-continue" href="${item.href}">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726l11.054 6.503L7 18.732l.001-13.006"></path>
                </svg>
                ${escapeHtml(item.cta)}
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderHistory() {
  if (!historyList) {
    return;
  }

  historyList.innerHTML = historyItems
    .map(
      (item, index) => `
        <div class="erc-my-lists-item" role="listitem" data-index="${index}">
          <article class="history-playable-card">
            <a class="history-playable-card-link" href="${item.href}" aria-label="Reproduzir ${escapeHtml(item.title.replace(/&[^;]+;/g, ""))} de ${escapeHtml(item.series)}"></a>

            <a class="history-playable-card-thumbnail" href="${item.href}" tabindex="-1" aria-hidden="true">
              <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />

              <span class="history-rating ${getRatingClass(item.rating)}">${escapeHtml(item.rating)}</span>

              <span class="history-play-overlay" aria-hidden="true">
                ${
                  item.watched
                    ? `<svg class="history-replay-icon" viewBox="0 0 24 24" role="img"><path d="M12 2c-5.177 0-9.446 3.954-9.949 9H0l3 3 3-3H4.069C4.564 7.06 7.928 4 12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8a7.986 7.986 0 0 1-5.333-2.037 1 1 0 1 0-1.334 1.49A9.977 9.977 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2"></path></svg>`
                    : ""
                }
                <svg class="history-play-icon" viewBox="0 0 24 24" role="img"><path d="m4 2 16 10L4 22z"></path></svg>
              </span>

              ${
                Number.isFinite(item.progress)
                  ? `<div class="history-progress" aria-hidden="true"><span style="width: ${item.progress}%;"></span></div>`
                  : ""
              }
              <span class="history-duration">${escapeHtml(item.duration)}</span>
            </a>

            <div class="history-playable-card-body">
              <a class="history-show-link" href="${item.seriesHref}">${escapeHtml(item.series)}</a>
              <h3><a href="${item.href}" tabindex="-1">${item.title}</a></h3>

              <div class="history-playable-card-footer">
                <span>${escapeHtml(item.date)}</span>
                <button class="history-trash-button" type="button" aria-label="Remover" data-remove-history-item>
                  <svg viewBox="0 0 24 24" aria-hidden="true" role="img">
                    <path d="M13 2h-2a1 1 0 0 0-1 1v1H4a1 1 0 0 0 0 2h1v15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6h1a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1m-1 2v2h5v14H7V6h5V4zm-2 5a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      `
    )
    .join("");
}

function renderAnimeCards(track, items) {
  if (!track) {
    return;
  }

  track.innerHTML = items
    .map(
      (item) => `
        <article class="anime-card">
          <a class="anime-card-poster" href="${item.href}" aria-label="${escapeHtml(item.title)}">
            <img src="${item.image}" alt="${escapeHtml(item.title)}" />
          </a>
          <h3>
            <a href="${item.href}">${escapeHtml(item.title)}</a>
          </h3>
          <p>${escapeHtml(item.audio)}</p>
        </article>
      `
    )
    .join("");
}

function renderTrendingAnime() {
  renderAnimeCards(cardsTrack, trendingAnimeItems);
}

function renderRecommendations() {
  renderAnimeCards(recommendationsTrack, recommendedAnimeItems);
}

function renderInspiredAnime() {
  renderAnimeCards(inspiredTrack, inspiredAnimeItems);
}

function renderGamersAnime() {
  renderAnimeCards(gamersTrack, gamersAnimeItems);
}

renderContinueWatching();
renderHistory();
renderTrendingAnime();
renderRecommendations();
renderInspiredAnime();
renderGamersAnime();

if (clearHistoryButton && historyList) {
  clearHistoryButton.addEventListener("click", () => {
    historyList.classList.add("history-empty");
    historyList.innerHTML = "<p>Seu hist&oacute;rico est&aacute; vazio.</p>";
    clearHistoryButton.disabled = true;
  });
}

if (historyList) {
  historyList.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-history-item]");

    if (!removeButton) {
      return;
    }

    const item = removeButton.closest(".erc-my-lists-item");
    item?.remove();

    if (!historyList.querySelector(".erc-my-lists-item")) {
      historyList.classList.add("history-empty");
      historyList.innerHTML = "<p>Seu hist&oacute;rico est&aacute; vazio.</p>";
      if (clearHistoryButton) {
        clearHistoryButton.disabled = true;
      }
    }
  });
}

function showSlide(index) {
  if (!slides.length || !dots.length || !slides[index] || !dots[index]) {
    return;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}

function nextSlide() {
  if (!slides.length) {
    return;
  }

  let index = currentSlide + 1;

  if (index >= slides.length) {
    index = 0;
  }

  showSlide(index);
}

function prevSlide() {
  if (!slides.length) {
    return;
  }

  let index = currentSlide - 1;

  if (index < 0) {
    index = slides.length - 1;
  }

  showSlide(index);
}

function setIndicatorShiftToNavEnd() {
  if (!header || !headerIndicatorIcon || !navLastLink) {
    return;
  }

  const iconRect = headerIndicatorIcon.getBoundingClientRect();
  const lastLinkRect = navLastLink.getBoundingClientRect();
  const targetX = lastLinkRect.right + 20;
  const shift = Math.max(0, targetX - iconRect.left - iconRect.width);

  header.style.setProperty("--indicator-shift", `${shift}px`);
}

function activateHeaderIndicator() {
  setIndicatorShiftToNavEnd();
  header.classList.add("header-indicator-active");
}

function resetHeaderIndicator() {
  if (!header) {
    return;
  }

  header.classList.remove("header-indicator-active");
  header.style.setProperty("--indicator-shift", "0px");
}

if (header) {
  header.addEventListener("mouseenter", activateHeaderIndicator);
  header.addEventListener("mouseleave", resetHeaderIndicator);

  header.addEventListener("focusin", activateHeaderIndicator);
  header.addEventListener("focusout", (event) => {
    if (!header.contains(event.relatedTarget)) {
      resetHeaderIndicator();
    }
  });
}

window.addEventListener("resize", () => {
  if (header && header.classList.contains("header-indicator-active")) {
    setIndicatorShiftToNavEnd();
  }
});

function scrollCardsRow(track, direction) {
  if (!track) {
    return;
  }

  const cardWidth = track.querySelector(".anime-card")?.offsetWidth || 178;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 18;
  const amount = Math.max(track.clientWidth - cardWidth - gap, cardWidth + gap);

  track.scrollBy({
    left: direction * amount,
    behavior: "smooth",
  });
}

function updateRowArrowState(row) {
  const track = row.querySelector(".cards-track");
  const rowArrowLeft = row.querySelector(".row-arrow-left");
  const rowArrowRight = row.querySelector(".row-arrow-right");

  if (!track || !rowArrowLeft || !rowArrowRight) {
    return;
  }

  const atStart = track.scrollLeft <= 1;
  const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;

  rowArrowLeft.classList.toggle("row-arrow-is-hidden", atStart);
  rowArrowRight.classList.toggle("row-arrow-is-hidden", atEnd);
  rowArrowLeft.disabled = atStart;
  rowArrowRight.disabled = atEnd;
}

contentRows.forEach((row) => {
  const track = row.querySelector(".cards-track");
  const rowArrowLeft = row.querySelector(".row-arrow-left");
  const rowArrowRight = row.querySelector(".row-arrow-right");

  if (track && rowArrowLeft && rowArrowRight) {
    rowArrowLeft.addEventListener("click", () => {
      scrollCardsRow(track, -1);
      requestAnimationFrame(() => updateRowArrowState(row));
    });
    rowArrowRight.addEventListener("click", () => {
      scrollCardsRow(track, 1);
      requestAnimationFrame(() => updateRowArrowState(row));
    });
    track.addEventListener("scroll", () => updateRowArrowState(row), { passive: true });
    updateRowArrowState(row);
  }
});

window.addEventListener("resize", () => {
  contentRows.forEach(updateRowArrowState);
});

if (slides.length) {
  setInterval(nextSlide, 6000);
}
if (next) {
  next.addEventListener("click", nextSlide);
}

if (prev) {
  prev.addEventListener("click", prevSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});