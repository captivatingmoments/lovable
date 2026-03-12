import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";
import wedding7 from "@/assets/wedding-7.jpg";
import wedding8 from "@/assets/wedding-8.jpg";
import wedding9 from "@/assets/wedding-9.jpg";
import wedding10 from "@/assets/wedding-10.jpg";
import wedding11 from "@/assets/wedding-11.jpg";
import wedding12 from "@/assets/wedding-12.jpg";
import wedding13 from "@/assets/wedding-13.jpg";
import wedding14 from "@/assets/wedding-14.jpg";
import wedding15 from "@/assets/wedding-15.jpg";
import wedding16 from "@/assets/wedding-16.jpg";
import schoolFormal1 from "@/assets/school-formal-1.jpg";
import schoolFormal2 from "@/assets/school-formal-2.jpg";
import schoolFormal3 from "@/assets/school-formal-3.jpg";
import schoolFormal4 from "@/assets/school-formal-4.jpg";
import schoolFormal5 from "@/assets/school-formal-5.jpg";
import schoolFormal6 from "@/assets/school-formal-6.jpg";
import schoolFormal7 from "@/assets/school-formal-7.jpg";
import schoolFormal8 from "@/assets/school-formal-8.jpg";
import schoolFormal9 from "@/assets/school-formal-9.jpg";
import schoolFormal10 from "@/assets/school-formal-10.jpg";
import schoolFormal11 from "@/assets/school-formal-11.jpg";
import schoolFormal12 from "@/assets/school-formal-12.jpg";
import schoolFormal13 from "@/assets/school-formal-13.jpg";
import schoolFormal14 from "@/assets/school-formal-14.jpg";
import schoolFormal15 from "@/assets/school-formal-15.jpg";
import schoolFormal16 from "@/assets/school-formal-16.jpg";
import schoolFormal17 from "@/assets/school-formal-17.jpg";
import schoolFormal18 from "@/assets/school-formal-18.jpg";
import schoolFormal19 from "@/assets/school-formal-19.jpg";
import schoolFormal20 from "@/assets/school-formal-20.jpg";
import schoolFormal21 from "@/assets/school-formal-21.jpg";
import schoolFormal22 from "@/assets/school-formal-22.jpg";

import ceremony2 from "@/assets/ceremony-2.jpg";
import ceremony3 from "@/assets/ceremony-3.jpg";
import ceremony4 from "@/assets/ceremony-4.jpg";
import ceremony5 from "@/assets/ceremony-5.jpg";
import ceremony6 from "@/assets/ceremony-6.jpg";
import ceremony7 from "@/assets/ceremony-7.jpg";
import ceremony8 from "@/assets/ceremony-8.jpg";
import ceremony9 from "@/assets/ceremony-9.jpg";
import ceremony10 from "@/assets/ceremony-10.jpg";
import ceremony11 from "@/assets/ceremony-11.jpg";
import ceremony12 from "@/assets/ceremony-12.jpg";
import ceremony13 from "@/assets/ceremony-13.jpg";
import ceremony14 from "@/assets/ceremony-14.jpg";
import floral1 from "@/assets/floral-1.jpg";
import floral2 from "@/assets/floral-2.jpg";
import floral3 from "@/assets/floral-3.jpg";
import floral4 from "@/assets/floral-4.jpg";
import floral5 from "@/assets/floral-5.jpg";
import floral6 from "@/assets/floral-6.jpg";
import floral7 from "@/assets/floral-7.jpg";
import floral8 from "@/assets/floral-8.jpg";
import floral9 from "@/assets/floral-9.jpg";
import floral10 from "@/assets/floral-10.jpg";
import floral11 from "@/assets/floral-11.jpg";
import floral12 from "@/assets/floral-12.jpg";
import floral13 from "@/assets/floral-13.jpg";
import floral14 from "@/assets/floral-14.jpg";
import floral15 from "@/assets/floral-15.jpg";
import floral16 from "@/assets/floral-16.jpg";
import floral17 from "@/assets/floral-17.jpg";
import floral18 from "@/assets/floral-18.jpg";
import floral19 from "@/assets/floral-19.jpg";
import floral20 from "@/assets/floral-20.jpg";
import floral21 from "@/assets/floral-21.jpg";
import floral22 from "@/assets/floral-22.jpg";
import floral23 from "@/assets/floral-23.jpg";
import floral24 from "@/assets/floral-24.jpg";
import floral25 from "@/assets/floral-25.jpg";
import floral26 from "@/assets/floral-26.jpg";
import floral27 from "@/assets/floral-27.jpg";
import corporate1 from "@/assets/corporate-1.jpg";
import corporate2 from "@/assets/corporate-2.jpg";
import corporate3 from "@/assets/corporate-3.jpg";
import corporate4 from "@/assets/corporate-4.jpg";
import corporate5 from "@/assets/corporate-5.jpg";
import corporate6 from "@/assets/corporate-6.jpg";
import corporate7 from "@/assets/corporate-7.jpg";
import corporate8 from "@/assets/corporate-8.jpg";
import corporate9 from "@/assets/corporate-9.jpg";
import corporate10 from "@/assets/corporate-10.jpg";
import corporate11 from "@/assets/corporate-11.jpg";
import corporate12 from "@/assets/corporate-12.jpg";
import corporate13 from "@/assets/corporate-13.jpg";

const categories = [
  {
    name: "Weddings",
    images: [
      
      { src: wedding2, alt: "Grand ballroom reception with white floral centrepieces" },
      { src: wedding3, alt: "Modern venue reception with colourful floral arrangements" },
      { src: wedding4, alt: "Heritage hall long table setting with pink florals" },
      { src: ceremony6, alt: "Elegant reception hall with long tables and floral centrepieces" },
      { src: wedding5, alt: "Couple embracing under fairy lights at candlelit wedding reception" },
      { src: wedding6, alt: "Intimate wedding table setting with candles and floral bud vases" },
      { src: wedding7, alt: "Elegant white reception with hanging greenery and chiavari chairs" },
      { src: wedding8, alt: "Heritage hall round table reception with tall floral centrepieces" },
      { src: wedding9, alt: "Gold chiavari chairs with pink and white floral centrepieces" },
      { src: wedding10, alt: "Modern reception with colourful hanging floral installation" },
      { src: wedding11, alt: "Contemporary venue with colourful bud vase floral arrangements" },
      { src: wedding12, alt: "Gold reception with tall white and orchid centrepiece" },
      { src: wedding13, alt: "Grand ballroom with fairy lights and gold chiavari chairs" },
      { src: wedding14, alt: "Warm reception with fairy lights and greenery centrepieces" },
      { src: wedding15, alt: "Gold chiavari reception with floral garland table runner" },
      { src: wedding16, alt: "Luxe draped ceiling reception with tall floral arrangements" },
    ],
  },
  {
    name: "School Formals",
    images: [
      { src: schoolFormal1, alt: "School formal event setup with gold chairs" },
      { src: schoolFormal2, alt: "School formal table setting with navy accents" },
      { src: schoolFormal3, alt: "School formal setup with silver sashes" },
      { src: schoolFormal4, alt: "School formal black and gold theme" },
      { src: schoolFormal5, alt: "Formal 2025 venue with draped ceiling and fairy lights" },
      { src: schoolFormal6, alt: "White and gold balloon centrepieces at school formal" },
      { src: schoolFormal8, alt: "Navy and gold formal dining setup with chiavari chairs" },
      { src: schoolFormal13, alt: "Elegant white and black formal with draped ceiling and chandelier" },
      { src: schoolFormal14, alt: "Black and white striped sash formal with confetti balloons" },
      { src: schoolFormal15, alt: "Dark themed formal with silver sashes and ceiling draping" },
      { src: schoolFormal16, alt: "Black and gold themed formal with candelabra centrepieces" },
      { src: schoolFormal22, alt: "Grand venue with white draping, chiavari chairs and dance floor" },
    ],
  },
  {
    name: "Wedding Ceremonies",
    images: [
      { src: ceremony2, alt: "Wedding ceremony aisle with arbour and bridge view" },
      { src: ceremony3, alt: "Wedding arbour with floral arrangement and Story Bridge" },
      { src: ceremony5, alt: "Ceremony aisle with floral arrangements and bridge backdrop" },
      { src: ceremony7, alt: "Floral-lined ceremony aisle with bridge backdrop" },
      { src: ceremony8, alt: "Indoor ceremony with white drapes and gold chairs" },
      { src: ceremony9, alt: "Riverside ceremony with vintage car and floral arch" },
      { src: ceremony10, alt: "Heritage hall ceremony with gold chiavari chairs and lantern pedestals" },
      { src: ceremony11, alt: "Indoor ceremony aisle with white chiavari chairs and floral urns" },
      { src: ceremony12, alt: "Riverside ceremony with floral arbour and Story Bridge backdrop" },
      { src: ceremony13, alt: "Indoor ceremony with white drapes, greenery wall and gold chairs" },
      { src: ceremony14, alt: "Gold chiavari ceremony with floral circle arch and carpet aisle" },
    ],
  },
  {
    name: "Floral Design",
    images: [
      { src: floral1, alt: "Bride and bridesmaids with white rose bouquets in the city" },
      { src: floral2, alt: "Bridal party with pink dresses and white bouquets under a tree" },
      { src: floral3, alt: "Blush and white rose bridal bouquet with satin ribbon" },
      { src: floral4, alt: "White rose boutonnière with baby's breath on pink petals" },
      { src: floral5, alt: "Pastel bridal bouquet with roses, stock and baby's breath" },
      { src: floral6, alt: "Pink and white rose centrepiece with baby's breath and eucalyptus" },
      { src: floral7, alt: "Bud vase trio with roses and wax flower on wooden board" },
      { src: floral8, alt: "Blush rose and wax flower table centrepiece arrangement" },
      { src: floral9, alt: "Boutonnière with white rose, delphinium and wax flower" },
      { src: floral10, alt: "Pink and burgundy ranunculus bridal bouquet with greenery" },
      { src: floral11, alt: "Burgundy ranunculus boutonnière with pink spray rose" },
      { src: floral12, alt: "Pink rose and ranunculus bouquet with wax flower accents" },
      { src: floral13, alt: "Burgundy and cream rose bouquet with eucalyptus and wax flower" },
      { src: floral14, alt: "Bride and groom with burgundy bridal bouquet in garden" },
      { src: floral15, alt: "Blush and burgundy bouquet with dahlias and garden roses" },
      { src: floral16, alt: "Pink rose and burgundy ranunculus boutonnières with ribbon" },
      { src: floral17, alt: "Burgundy and pink floral arrangement in gold urn centrepiece" },
      { src: floral18, alt: "Pink peony and cream rose centrepiece with wax flower" },
      { src: floral19, alt: "Pink and white roses with berries in gold urn arrangement" },
      { src: floral20, alt: "White and blush rose bridal bouquet with pink ribbon" },
      { src: floral21, alt: "Peach rose and green peony bridal bouquet" },
      { src: floral22, alt: "Blush roses and lisianthus centrepiece on mirror base" },
      { src: floral23, alt: "White rose and chrysanthemum centrepiece with baby's breath" },
      { src: floral24, alt: "Greenery wreath centrepiece with roses and hurricane candle" },
      { src: floral25, alt: "Church pew arrangement with white tulip, roses and organza bow" },
      { src: floral26, alt: "Lush greenery centrepiece with white roses and pillar candle" },
      { src: floral27, alt: "Blush and white rose centrepiece with snapdragons and greenery" },
    ],
  },
  {
    name: "Corporate & Gala Events",
    images: [
      { src: corporate1, alt: "Black and white gala with draped ceiling and chiavari chairs" },
      { src: corporate2, alt: "Colourful corporate event with multi-coloured sashes and draping" },
      { src: corporate3, alt: "Vibrant gerbera and rose centrepiece with gold votives" },
      { src: corporate4, alt: "Heritage ballroom with blue sash chair covers and formal settings" },
      { src: corporate5, alt: "Black and white corporate gala with candelabra centrepieces" },
      { src: corporate6, alt: "Navy and gold gala with chiavari chairs and formal place settings" },
      { src: corporate7, alt: "Elegant navy gala setup with gold chiavari chairs overhead view" },
      { src: corporate8, alt: "Heritage ballroom with white chiavari chairs and black linen round tables" },
      { src: corporate9, alt: "Navy linen gala with white chiavari chairs and candelabra centrepieces" },
      { src: corporate10, alt: "Corporate gala with orchid centrepieces and sponsor screens" },
      { src: corporate11, alt: "IWD gala with floral letter centrepiece and chiavari chairs" },
      { src: corporate12, alt: "IWD gala wide view with colourful bud vase centrepieces" },
      { src: corporate13, alt: "Heritage ballroom with gold polka dot dance floor and white chiavari chairs" },
    ],
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const activeImages = categories.find((c) => c.name === activeCategory)?.images ?? [];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center font-body text-sm uppercase tracking-[0.3em] text-gold mb-4"
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-display text-3xl md:text-5xl font-medium text-foreground mb-6"
        >
          Our Work
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="divider-gold w-24 mx-auto mb-12"
        />

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex justify-center gap-6 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`font-body text-sm uppercase tracking-[0.2em] pb-2 border-b-2 transition-colors duration-300 ${
                activeCategory === cat.name
                  ? "border-gold text-gold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {activeImages.map((img, i) => (
            <motion.div
              key={`${activeCategory}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
