export type AmazonKnife2 = {
  recommendedusesforproduct: string;
  brand: string;
  modelname: string;
  specialfeature: string;
  agerangedescription: string;
  includedcomponents: string[];
  handlematerial: string;
  color: string;
  bladematerial: string;
  style: string;
  bladelength: string;
  theme: string;
  powersource: string;
  handorientation: string;
  countryoforigin?: string;
  productcareinstructions: string;
  itemweight: string;
  bladeshape: string;
  bladeedge: string;
  iscordless?: boolean;
  itemlength: string;
  globaltradeidentificationnumber: string;
  manufacturer: string;
  upc: string[];
  itempackagedimensions: {
    l: string;
    w: string;
    h: string;
  };
  packageweight: string;
  itemdimensions: {
    l: string;
    w: string;
    h: string;
  };
  brandname: string;
  warrantydescription: string;
  material?: string;
  suggestedusers: string;
  numberofitems: number;
  partnumber: string;
  modelyear: number;
  size: string;
};

export type Value = {
  type: "cell",
  value: number, 
  dimension: string,
  style?: string;
}

export type Knife = {
  name: string;
  bladeSteel: string;
  bladeLength: Value;
  bladeThickness: Value;
  overallLength: Value;
  handleThickness?: Value;
  weight: Value;
  price: Value
  isMetricNumbers: boolean;
}
