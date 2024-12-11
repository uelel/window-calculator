import {
  material,
  drevo_typ,
  sklo_vrstvy,
  pocet_kridel
} from './data';

export const steps = [
  { 
    name: "material",
    label: "Materiál",
    data: material,
    heading: "Vyberte Materiál",
    image: ""
  },
  {
    name: "drevo_typ", 
    label: "Typ", 
    data: drevo_typ, 
    heading: "Vyberte Typ Dřeva", 
    image: "0ea0fd2e-4ca2-4ba9-a753-fac012739e4a.jpg"
  },
  {
    name: "sklo_pocet_vrstev", 
    label: "Sklo", 
    data: sklo_vrstvy, 
    heading: "Vyberte Sklo", 
    image: "06a46cf5-4ebf-43f5-9999-9fcc517f7548.jpg"
  },
  {
    name: "sklo_pocet_kridel", 
    label: "Počet křídel", 
    data: pocet_kridel, 
    heading: "Vyberte Počet křídel", 
    image: "99211555-6283-4b9f-bb75-21a41735c6d3.jpg"
  },
];