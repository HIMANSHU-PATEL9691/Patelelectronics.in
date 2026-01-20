export interface Service {
  id: number;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  brands: string[];
  commonIssues: string[];
}

export const services: Service[] = [
  {
    id: 1,
    name: "Mobile Phone Repair",
    slug: "mobile-repair",
    icon: "Smartphone",
    shortDescription: "Screen, battery, charging port & software repairs",
    description: "Expert mobile repair services for all brands including Samsung, Apple, OnePlus, Xiaomi, and more. Our trained technicians use genuine parts and provide quick turnaround.",
    price: "Starting from ₹299",
    duration: "30 mins - 2 hours",
    features: [
      "Screen Replacement",
      "Battery Replacement",
      "Charging Port Repair",
      "Water Damage Recovery",
      "Software Issues",
      "Speaker & Mic Repair",
      "Camera Repair",
      "Motherboard Repair",
    ],
    brands: ["Samsung", "Apple", "OnePlus", "Xiaomi", "Realme", "Vivo", "Oppo", "Motorola"],
    commonIssues: [
      "Broken/Cracked Screen",
      "Battery Draining Fast",
      "Not Charging",
      "Hanging/Slow Performance",
      "Water Damage",
      "No Sound/Mic Issue",
    ],
  },
  {
    id: 2,
    name: "Television Repair",
    slug: "tv-repair",
    icon: "Tv",
    shortDescription: "LED, LCD, OLED & Smart TV repairs",
    description: "Complete TV repair solutions for all types - LED, LCD, OLED, QLED, and Smart TVs. We fix display issues, sound problems, and smart features.",
    price: "Starting from ₹499",
    duration: "1 - 4 hours",
    features: [
      "Display Panel Repair",
      "Backlight Replacement",
      "Motherboard Repair",
      "Sound Issues",
      "Smart TV Software",
      "Power Supply Issues",
      "Remote Pairing",
      "HDMI Port Repair",
    ],
    brands: ["Samsung", "LG", "Sony", "TCL", "Mi", "OnePlus", "Panasonic", "Philips"],
    commonIssues: [
      "No Display/Black Screen",
      "Lines on Screen",
      "No Power",
      "Sound Not Working",
      "Smart Features Not Working",
      "Remote Not Working",
    ],
  },
  {
    id: 3,
    name: "Laptop Repair",
    slug: "laptop-repair",
    icon: "Monitor",
    shortDescription: "Hardware, software & data recovery services",
    description: "Professional laptop repair for all brands. From hardware issues like broken screens and keyboards to software problems and virus removal.",
    price: "Starting from ₹399",
    duration: "1 - 24 hours",
    features: [
      "Screen Replacement",
      "Keyboard Replacement",
      "Battery Replacement",
      "RAM/SSD Upgrade",
      "Virus Removal",
      "OS Installation",
      "Data Recovery",
      "Hinge Repair",
    ],
    brands: ["HP", "Dell", "Lenovo", "Apple", "Asus", "Acer", "MSI", "Microsoft"],
    commonIssues: [
      "Broken Screen",
      "Not Turning On",
      "Slow Performance",
      "Keyboard Not Working",
      "Overheating",
      "Battery Issues",
    ],
  },
  {
    id: 4,
    name: "Refrigerator Repair",
    slug: "refrigerator-repair",
    icon: "Refrigerator",
    shortDescription: "Cooling issues, compressor & gas refill",
    description: "Expert refrigerator repair services including cooling issues, compressor problems, gas refilling, and thermostat repair. Same day service available.",
    price: "Starting from ₹349",
    duration: "1 - 3 hours",
    features: [
      "Cooling Problem",
      "Gas Refilling",
      "Compressor Repair",
      "Thermostat Repair",
      "Door Seal Replacement",
      "Ice Maker Repair",
      "Water Leakage",
      "Noise Issues",
    ],
    brands: ["Samsung", "LG", "Whirlpool", "Godrej", "Haier", "Bosch", "Panasonic", "Hitachi"],
    commonIssues: [
      "Not Cooling",
      "Over Cooling/Freezing",
      "Water Leakage",
      "Making Noise",
      "Ice Not Forming",
      "Door Not Closing",
    ],
  },
  {
    id: 5,
    name: "Washing Machine Repair",
    slug: "washing-machine-repair",
    icon: "WashingMachine",
    shortDescription: "Motor, drum, drainage & electrical repairs",
    description: "Complete washing machine repair for top load, front load, and semi-automatic models. Quick diagnosis and affordable solutions.",
    price: "Starting from ₹299",
    duration: "1 - 3 hours",
    features: [
      "Motor Repair",
      "Drum Repair",
      "Drainage Issues",
      "Water Inlet Problems",
      "Belt Replacement",
      "Timer/PCB Repair",
      "Vibration Issues",
      "Spin Problems",
    ],
    brands: ["Samsung", "LG", "Whirlpool", "IFB", "Bosch", "Haier", "Godrej", "Panasonic"],
    commonIssues: [
      "Not Starting",
      "Not Draining",
      "Not Spinning",
      "Water Leakage",
      "Making Noise",
      "Not Filling Water",
    ],
  },
  {
    id: 6,
    name: "Air Conditioner Repair",
    slug: "ac-repair",
    icon: "Wind",
    shortDescription: "Cooling issues, gas refill & installation",
    description: "AC repair and service for split, window, and cassette units. We offer installation, gas refilling, and comprehensive maintenance.",
    price: "Starting from ₹399",
    duration: "1 - 4 hours",
    features: [
      "Cooling Problem",
      "Gas Refilling",
      "Compressor Repair",
      "PCB Repair",
      "Fan Motor Repair",
      "Installation",
      "Deep Cleaning",
      "Thermostat Issues",
    ],
    brands: ["Daikin", "Voltas", "LG", "Samsung", "Carrier", "Blue Star", "Hitachi", "Panasonic"],
    commonIssues: [
      "Not Cooling",
      "Water Leakage",
      "Bad Smell",
      "Making Noise",
      "Remote Not Working",
      "Auto Off Issues",
    ],
  },
];

export const getServiceBySlug = (slug: string) => {
  return services.find((s) => s.slug === slug);
};
