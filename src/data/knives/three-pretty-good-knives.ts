import type { Knife, Value } from "../amazonKnife";

const URLS = [
  "https://www.amazon.com/Benchmade-Buschcrafter-Outdoor-Knife-Handle/dp/B00B0E1MB6",
];

const BEST = "bg-green-300";

const cell = (value: number, dimension: string, style = ""): Value => ({
  value,
  dimension,
  type: "cell",
  style,
});

const knife1: Knife = {
  name: "Buschcrafter 162 Outdoor Knife",
  bladeSteel: "CPM-S30V (58-60 HRC)",
  bladeLength: cell(11.18, "cm"),
  bladeThickness: cell(4.17, "mm", BEST),
  overallLength: cell(23.24, "cm"),
  handleThickness: cell(23.37, "mm"),
  weight: cell(219, "g"),
  price: cell(0, "$"),
  isMetricNumbers: true,
};

const knife2: Knife = {
  name: "Morakniv Garberg Full Tang Fixed Blade Knife with Carbon Steel Blade",
  bladeSteel: "Carbon Steel",
  bladeLength: cell(10.9, "cm"),
  bladeThickness: cell(3.2, "mm"),
  overallLength: cell(23.24, "cm"),
  handleThickness: cell(23.37, "mm"),
  weight: cell(247, "g"),
  price: cell(74.55, "$"),
  isMetricNumbers: true,
};

export default {
  knife1,
  knife2,
  knife3: knife2,
};
