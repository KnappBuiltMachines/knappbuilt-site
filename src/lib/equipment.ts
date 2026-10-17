// Equipment lineup - shared by the home page explorer and /equipment.
export type Equipment = {
  slug: string;
  name: string;
  category: string;
  img: string;
  short: string;
  desc: string;
  points: string[];
};

export const EQUIPMENT: Equipment[] = [
  {
    slug: "vegetable-washer",
    name: "Vegetable Washer",
    category: "Washing",
    img: "/equipment/vegetable-washer.jpg",
    short: "Water-bath wash with an inclined dewatering conveyor and final rinse.",
    desc: "A stainless-steel wash system that gently cleans produce in a water bath, then lifts it out on an inclined dewatering conveyor. An overhead spray bar gives a final rinse before the next stage.",
    points: ["Stainless-steel construction", "Inclined dewatering conveyor", "Overhead spray bar for a final rinse"],
  },
  {
    slug: "bin-washer",
    name: "Bin Washer",
    category: "Washing",
    img: "/equipment/bin-washer.jpg",
    short: "Enclosed cabinet that blasts soil off harvest bins, lugs, and totes.",
    desc: "An enclosed wash cabinet for cleaning harvest bins, lugs, and totes. Internal spray manifolds blast away soil and debris, and a sloped hopper collects and drains the runoff.",
    points: ["Cleans bins, lugs, and totes", "Internal spray manifolds", "Sloped hopper collects and drains runoff"],
  },
  {
    slug: "conveyor",
    name: "Conveyor",
    category: "Material handling",
    img: "/equipment/conveyor.jpg",
    short: "Motor-driven stainless conveyors sized to your line.",
    desc: "Motor-driven conveyors that move product smoothly between stations. Built in stainless steel with adjustable height and lengths sized to your line.",
    points: ["Motor-driven", "Adjustable height", "Lengths sized to your line"],
  },
  {
    slug: "crossover-conveyor",
    name: "Cross-Over Conveyor",
    category: "Material handling",
    img: "/equipment/crossover-conveyor.jpg",
    short: "Lifts product up and over equipment or from one line to the next.",
    desc: "An inclined conveyor that elevates product up and over equipment or from one line to the next, keeping flow continuous without manual handling.",
    points: ["Inclined design", "Moves product between lines", "Keeps flow continuous without manual handling"],
  },
  {
    slug: "double-conveyor",
    name: "Double Conveyor",
    category: "Inspection & packing",
    img: "/equipment/double-conveyor.jpg",
    short: "Two-tier conveyor with a work shelf for sorting, culling, and packing.",
    desc: "A two-tier conveyor with an integrated work shelf \u2014 ideal for inspection, sorting, and culling, with product moving on one level and packed goods or returns on the other.",
    points: ["Two conveyor levels", "Integrated work shelf", "Built for inspection, sorting, and culling"],
  },
  {
    slug: "custom-fabrication",
    name: "Custom Fabrication",
    category: "Made to order",
    img: "/equipment/custom-fabrication.jpg",
    short: "Have something specific in mind? We engineer it to your operation.",
    desc: "Have something specific in mind? We design and build custom stainless equipment engineered to your operation, footprint, and throughput.",
    points: ["Designed around your operation", "Fit to your footprint", "Sized for your throughput"],
  },
];
