const talents = {
    hololive: [
      {
        name: "Kaela Kovalskia",
        image: "../img/gambarkrisna/kalea.jpeg",
        description: "Kaela adalah VTuber dari Hololive ID generasi ketiga bersama Zeta dan Kobo."
      },
      {
        name: "Gigi Murin",
        image: "../img/gambarkrisna/gigi.jpeg",
        description: "Gigi Murin adalah VTuber Hololive EN generasi keempat, debut Juni 2024."
      },
      {
        name: "Ouro Kronii",
        image: "../img/gambarkrisna/kronii.jpeg",
        description: "Kronii adalah bagian dari Hololive English -Council-, generasi kedua."
      },
      {
        name: "Raora Panthera",
        image: "../img/gambarkrisna/raora.jpeg",
        description: "Raora adalah talent Hololive English generasi keempat."
      },
      {
        name: "Airani Iofifteen",
        image: "../img/gambarkrisna/iofi.jpeg",
        description: "Iofi debut di Hololive ID generasi pertama bersama Moona dan Risu."
      }
    ],
    nijisanji: [
      {
        name: "Kuzuha",
        image: "../img/gambarkrisna/kuzuha.jpg",
        description: "Kuzuha adalah VTuber populer dari Nijisanji Jepang."
      },
      {
        name: "Kanae",
        image: "../img/gambarkrisna/kanae.jpg",
        description: "Kanae dikenal sebagai VTuber serba bisa di Nijisanji."
      },
      {
        name: "Mika Melatika",
        image: "../img/gambarkrisna/mika.jpg",
        description: "Mika adalah VTuber asal Indonesia dari cabang Nijisanji ID."
      },
      {
        name: "Hyona Elatiora",
        image: "../img/gambarkrisna/hyona.jpg",
        description: "Hyona adalah VTuber enerjik dari Nijisanji ID."
      },
      {
        name: "Siska Leontyne",
        image: "../img/gambarkrisna/siska.jpg",
        description: "Siska adalah salah satu anggota generasi awal Nijisanji ID."
      }
    ],
    vshojo: [
      {
        name: "Ironmouse",
        image: "../img/gambarkrisna/ironmouse.jpg",
        description: "Ironmouse dikenal karena suaranya yang khas dan energinya yang luar biasa."
      },
      {
        name: "Nyanners",
        image: "../img/gambarkrisna/nyanners.jpg",
        description: "Nyanners adalah VTuber VShojo dengan humor absurd dan suara imut."
      },
      {
        name: "Michi Mochievee",
        image: "../img/gambarkrisna/michi.jpg",
        description: "Michi adalah VTuber VShojo yang multibahasa dan kreatif."
      },
      {
        name: "Projekt Melody",
        image: "../img/gambarkrisna/melody.jpg",
        description: "Melody adalah VTuber AI dari VShojo yang populer di berbagai platform."
      },
      {
        name: "Zentreya",
        image: "../img/gambarkrisna/zentreya.jpg",
        description: "Zentreya adalah VTuber bisu yang menggunakan teknologi teks untuk berbicara."
      }
    ],
      indie: [
    {
      name: "Amano Pikamee",
      image: "../img/gambarkrisna/pikamee.jpg",
      description: "Pikamee adalah VTuber bilingual yang dulunya bagian dari VOMS Project."
    },
    {
      name: "Koa Kana",
      image: "../img/gambarkrisna/kana.jpg",
      description: "Koa Kana adalah indie VTuber dengan suara dan desain yang unik."
    },
    {
      name: "Fillian",
      image: "../img/gambarkrisna/fillian.jpg",
      description: "Fillian adalah VTuber indie yang dikenal dengan konten santai dan ramah."
    },
    {
      name: "Shoto",
      image: "../img/gambarkrisna/shoto.jpg",
      description: "Shoto adalah VTuber indie dengan gaya unik dan komunitas aktif."
    },
    {
      name: "Vedal & Neuro-Sama",
      image: "../img/gambarkrisna/neurosama.jpg",
      description: "Neuro-sama adalah seorang V-tuber berbasis Ai Yang membuatnya unik"
    }
  ]

  };
  
function showTalent(agency) {
  const container = document.getElementById("talent-display");
  const agencyData = talents[agency];

  if (!agencyData) return;

  const cardsHtml = agencyData.map(talent => `
    <div class="talent-card">
      <img src="${talent.image}" alt="${talent.name}" />
      <h4>${talent.name}</h4>
      <p>${talent.description}</p>
    </div>
  `).join("");

  container.innerHTML = `
    <h3>Talent dari ${agency.charAt(0).toUpperCase() + agency.slice(1)}</h3>
    <div class="talent-card-container">
      ${cardsHtml}
    </div>
  `;
}