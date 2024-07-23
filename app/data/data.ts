export type Skills = {
  name: string;
  image: string;
  description: string;
};
const hairMakeup1 = "/images/hair-makeup-1.jpg";
const hair2 = "/images/hair-2.jpg";
const eyelashes = "/images/eyelashes.jpg";
const eyelashes2 = "/images/eyelashes-2.jpg";

export const skills: Skills[] = [
  {
    name: "Makeup",
    image: hairMakeup1,
    description:
      "Makeup is so powerful, it's magical how makeup can enhance one's natural beauty. I've been doing make up since X (adjust this to experience/change it all together). From weddings to Quinceañeras, from the natural-look to extravagant, I can deliver!",
  },
  {
    name: "Hair",
    image: hair2,
    description:
      "I learned how to style hair from/when (will edit this with info). And ever since then, I have crafted and sculpted all kinds of looks and styles. (Maybe some specific hair styles you're super good at)",
  },
  {
    name: "Eyelash Extensions",
    image: eyelashes,
    description:
      "Let's extend our reach towards greater beauty. Our eyes can say so much with just a look; so why not add a touch of flair.",
  },
  {
    name: "Eyebrows",
    image: eyelashes2,
    description:
      "They say eyes are windows to the soul. Well, in this case, eyebrows are the frame for your eyes. Together let's find a frame that will support and bring more attention to those eyes.",
  },
];
