export const IMAGES = [
  "/images/package1.jpg",
  "/images/package2.jpg",
  "/images/package3.jpg",
  "/images/package4.jpg",
  "/images/package5.jpg",
  "/images/package6.jpg",
  "/images/package7.jpg",
  "/images/package8.jpg",
  "/images/package9.jpg",
  "/images/package10.jpg",
  "/images/package11.jpg",
  "/images/package12.jpg",
  "/images/package13.jpg",
  "/images/package14.jpg",
  "/images/package15.jpg",
  "/images/package16.jpg",
  "/images/package17.jpg",
  "/images/package18.jpg",
  "/images/package19.jpg",
  "/images/package20.jpg",
];

export const ADVENTUREIMAGES = [
  "/images/adventure1.jpg",
  "/images/adventure2.jpg",
  "/images/adventure3.jpg",
  "/images/adventure4.jpg",
  "/images/adventure5.jpg",
  "/images/adventure6.jpg",
  "/images/adventure7.jpg",
  "/images/adventure8.jpg",
  "/images/adventure9.jpg",
  "/images/adventure10.jpg",
];

// ---------- FIXED IMAGE GETTERS (NO RANDOM) ----------

// Safe: cycles images without randomness
export const getIndexedImage = (index: number): string => {
  return IMAGES[index % IMAGES.length];
};

export const getAdventureImage = (index: number): string => {
  return ADVENTUREIMAGES[index % ADVENTUREIMAGES.length];
};
