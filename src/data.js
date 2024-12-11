export const material = [
  { 
    label: "Dřevěná okna",
    value: "drevo",
    price: 0,
    image: "0ea0fd2e-4ca2-4ba9-a753-fac012739e4a.jpg",
    desc: "Dřevěná okna jsou velmi oblíbená pro svůj tradiční vzhled a řadu užitných vlastností.",
    recommended: false,
    next_step: "drevo_typ"
  },
  { 
    label: "Plastová okna", 
    value: "plast", 
    price: 3300, 
    image: "45c0970d-a5a4-4caf-a14c-19458e8239d1.jpg", 
    desc: "Plastová okna jsou velmi rozšířená.", 
    recommended: false,
    next_step: "sklo_pocet_vrstev" 
  }
];

export const drevo_typ = [
  { 
    label: "Eurookna", 
    value: "eurookna", 
    price: 1500, 
    image: "40b9a743-bb10-4f73-a272-af519be59f90.jpg", 
    desc: "Kvalitně navržená dřevěná okna mají dlouhou životnost, zároveň zlepšují klimatické podmínky v místnostech.", 
    recommended: true, 
    next_step: "profil" 
  },
  { 
    label: "Špaletová", 
    value: "spaletova", 
    price: 8000, 
    image: "14774e38-de25-4019-bc2d-051142520a57.jpg", 
    desc: "Špaletová okna, někdy nazývaná jako kastlová okna, navazují na tradici výroby oken z přelomu minulého století.", 
    recommended: false, 
    next_step: "prislusenstvi" 
  }
];

export const sklo_vrstvy = [
  { 
    label: "Dvojsklo", 
    value: "dvojsklo", 
    price: 0, 
    image: "247d28f3-a675-4465-bbec-8296e96a05d9.jpg", 
    desc: "Dvojsklo mírně zvyšuje tepelné zisky ze slunečního záření.", 
    recommended: false, 
    next_step: "sklo_pocet_kridel" 
  },
  { 
    label: "Trojsklo", 
    value: "trojsklo", 
    price: 0, 
    image: "1f303b7c-158a-4384-8473-4753d2810c5a.jpg", 
    desc: "Výrazně omezuje rosení oken a udrží v interiéru více tepla.", 
    recommended: true, 
    next_step: "sklo_zpusob_otevirani" 
  }
];

export const pocet_kridel = [
  { 
    label: "Jednokřídlé", 
    value: "jednokridle", 
    price: 2680, 
    image: "7285ca5d-17b5-4e72-9992-ae7444de2330.jpg", 
    desc: "Pokud stavíte nový dům nebo rekonstruujete ten stávající, jednokřídlá plastová okna se Vám určitě budou hodit.", 
    recommended: false, 
    next_step: "prislusenstvi" 
  },
  { 
    label: "Dvoukřídlé", 
    value: "dvoukridle", 
    price: 4320, 
    image: "2f48aca3-2d56-4f62-ae3d-3ddaa5e25645.jpg", 
    desc: "Plastové okno dvoukřídlé o venkovním rozměru rámu okna 145x115 cm v bílé barvě z interiéru i z exteriéru.", 
    recommended: false, 
    next_step: "prislusenstvi" 
  },
  { 
    label: "Trojkřídlé", 
    value: "trojkridle", 
    price: 7899, 
    image: "f1a520cc-9c7b-418d-914c-c4f3aaf2518e.jpg", 
    desc: "Plastové okno trojkřídlé se štulpem a pevným sloupkem.", 
    recommended: false, 
    next_step: "prislusenstvi" 
  }
];

export const zpusob_otevirani = [
  { 
    label: "Pevné", 
    value: "pevne", 
    price: 2850, 
    image: "9163a2d9-80ce-42a0-80ca-71894b4c4dbd.jpg", 
    desc: "Pevné (fixní) okno sice nejde otevřít, zato má ale lepší izolační vlastnosti.", 
    recommended: true, 
    next_step: "prislusenstvi" 
  },
  { 
    label: "Posuvné", 
    value: "posuvne", 
    price: 3980, 
    image: "46b8e910-97c1-4728-9000-b71339694650.jpg", 
    desc: "Posuvné okno: otevírá se posouváním částí okna po kolejnici.", 
    recommended: false, 
    next_step: "prislusenstvi" 
  },
  { 
    label: "Sklopné", 
    value: "sklopne", 
    price: 1500, 
    image: "370f42d7-6b46-4a8d-a65a-f8a6eb3757c6.jpg", 
    desc: "Sklopné okno: otevírá se pouze směrem dovnitř do interiéru, a to jako ventilace.", 
    recommended: false, 
    next_step: "prislusenstvi" 
  }
];

export const profil = [
  { 
    label: "Eurookno 68", 
    value: "eurookno_68", 
    price: 1800, 
    image: "68_31d6b674-182b-4ea1-9eb7-2c590f825641.jpg", 
    desc: "Dřevěná eurookna se stavební hloubkou 68 mm jsou ideální volbou za rozumnou cenu.", 
    recommended: true, 
    next_step: "prislusenstvi" 
  },
  { 
    label: "Eurookno 78", 
    value: "eurookno_78", 
    price: 2400, 
    image: "78_eb45079b-7f02-450d-aafa-6e2cab8ce159.jpg", 
    desc: "Dřevěná eurookna se zvýšenou stavební hloubkou jsou dobrou volbou.", 
    recommended: true, 
    next_step: "prislusenstvi" 
  },
  { 
    label: "Eurookno 92", 
    value: "eurookno_92", 
    price: 2689, 
    image: "92_16b04474-18d0-4181-847c-f182720b0223.jpg", 
    desc: "Dřevěná okna vhodná do pasivních a nízkoenergetických staveb.", 
    recommended: true, 
    next_step: "prislusenstvi" 
  }
];

export const parapety = [
  { 
    label: "Vnější parapet pozinkovaný", 
    value: "vnejsi_parapet_pozinkovany", 
    price: 150, 
    image: "69a483f7-9ee2-44cb-bd78-b5983889ad9d.png", 
    desc: "Vnější parapety se od sebe liší použitým materiálem, způsobem zpracování a tloušťkou použitého materiálu.", 
    recommended: true, 
    next_step: "rekapitulace" 
  },
  { 
    label: "Vnitřní parapet antracit", 
    value: "vnitrni_parapet_antracit", 
    price: 175, 
    image: "8f797637-533f-4c5a-a554-7f53f57e9061.jpg", 
    desc: "Parapety jsou součástí každého okna.", 
    recommended: true, 
    next_step: "rekapitulace" 
  }
];

export const sitky = [
  { 
    label: "Sítka proti hmyzu pro hliníková okna", 
    value: "hlinikova", 
    price: 325, 
    image: "79f3a89a-8335-42ab-81c1-dfdcc98a21cb.jpg", 
    desc: "", 
    recommended: true, 
    next_step: "rekapitulace" 
  },
  { 
    label: "Síťka proti hmyzu pro plastová okna", 
    value: "plastova", 
    price: 255, 
    image: "baa61feb-7b3c-4df8-80e2-5d312b2c3dfd.jpg", 
    desc: "Nejednodušší ochrana před dotěrným hmyzem.", 
    recommended: true, 
    next_step: "rekapitulace" 
  }
];

export const kliky = [
  { 
    label: "Plastové kliky", 
    value: "plastova", 
    price: 85, 
    image: "c91ac7df-fdd2-47f5-9f56-51c5da691126.jpg", 
    desc: "Nyní v akci!", 
    recommended: true, 
    next_step: "rekapitulace" 
  },
  { 
    label: "Hliníkové kliky", 
    value: "hlinikova", 
    price: 115, 
    image: "64392cb4-ee14-4edd-a9ae-9d30e54728f4.jpg", 
    desc: "", 
    recommended: true, 
    next_step: "rekapitulace" 
  }
];