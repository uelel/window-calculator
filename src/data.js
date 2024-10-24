export const materials = [
  { label: "Dřevěná okna", value: "drevo", price: 0, image: "0ea0fd2e-4ca2-4ba9-a753-fac012739e4a.jpg", desc: "Dřevěná okna jsou velmi oblíbená pro svůj tradiční vzhled a řadu užitných vlastností.", recommended: false, next_step: "drevo_typ" },
  { label: "Plastová okna", value: "plast", price: 3300, image: "45c0970d-a5a4-4caf-a14c-19458e8239d1.jpg", desc: "Plastová okna jsou velmi rozšířená.", recommended: false, next_step: "sklo_vrstvy" }
];

export const drevo_typ = [
  { label: "Eurookna", value: "eurookna", price: 1500, image: "40b9a743-bb10-4f73-a272-af519be59f90.jpg", desc: "Kvalitně navržená dřevěná okna mají dlouhou životnost, zároveň zlepšují klimatické podmínky v místnostech.", recommended: true, next_step: "" },
  { label: "Špaletová", value: "spaletova", price: 8000, image: "14774e38-de25-4019-bc2d-051142520a57.jpg", desc: "Špaletová okna, někdy nazývaná jako kastlová okna, navazují na tradici výroby oken z přelomu minulého století.", recommended: false, next_step: "" }
];