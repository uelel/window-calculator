import {
  materials,
  drevo_typ
} from './data';

export const steps = [
  { 
    index: 0,
    name: "material",
    label: "Materiál",
    data: materials,
    heading: "Vyberte Materiál",
    image: ""
  },
  {
    index: 1, 
    name: "drevo_typ", 
    label: "Typ", 
    data: drevo_typ, 
    heading: "Vyberte Typ Dřeva", 
    image: "0ea0fd2e-4ca2-4ba9-a753-fac012739e4a.jpg"
  },
  {
    index: 1, 
    name: "pocet_vrstev", 
    label: "Sklo", 
    data: pocet_vrstev, 
    heading: "Vyberte Sklo", 
    image: "06a46cf5-4ebf-43f5-9999-9fcc517f7548.jpg"
  },
];