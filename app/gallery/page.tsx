import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GalleryCarousel from "@/components/GalleryCarousel";

export const metadata: Metadata = {
  title: "Bathroom Gallery | ALR Bathrooms Surrey",
  description:
    "Browse our gallery of bathroom installations across Surrey — marble finishes, brass fittings, designer vanity units and bespoke tiling. ALR Bathrooms & Design.",
  alternates: { canonical: "https://www.alrbathrooms.com/gallery" },
};

const images = [
  {
    src: "/images/bathroom-1.jpg",
    alt: "Dark navy vanity unit with Carrara marble vessel sink, round walnut mirror and amber wall sconces",
    title: "Bespoke Vanity",
    location: "Cobham, Surrey",
    detail: "Carrara vessel sink · Brass tap · Bespoke dark cabinetry · Walnut mirror",
  },
  {
    src: "/images/bathroom-6.jpg",
    alt: "Victorian cloakroom with wall panelling, brass oval mirror, gold heated towel rail and chevron marble floor",
    title: "Victorian Cloakroom",
    location: "Esher, Surrey",
    detail: "Wall panelling · Brass fittings · Chevron marble floor · Gold heated towel rail",
  },
  {
    src: "/images/bathroom-3.jpg",
    alt: "Rose marble bathroom with brass rain shower head, dark vanity unit and geometric chevron floor tiles",
    title: "Rose Marble & Brass",
    location: "Wimbledon",
    detail: "Rose onyx marble · Brass rain shower · Geometric chevron floor tiles",
  },
  {
    src: "/images/bathroom-8.jpg",
    alt: "Artisan star-pattern tiled shower room with traditional brass shower column and gold heated towel rail",
    title: "Star-Tile Shower Room",
    location: "Kingston upon Thames",
    detail: "Artisan star tiles · Traditional brass shower · Gold heated towel rail",
  },
  {
    src: "/images/bathroom-9.jpg",
    alt: "Floating white vanity unit with mirrored cabinet, wall-mounted taps and wall-hung WC",
    title: "Minimalist Floating Vanity",
    location: "Surrey",
    detail: "Floating vanity · Mirrored cabinet · Wall-mounted taps · Wall-hung WC",
  },
  {
    src: "/images/bathroom-10.jpg",
    alt: "Full bathroom with floating vanity, under-unit LED lighting, bath with shower screen and chrome towel rail",
    title: "Contemporary Family Bathroom",
    location: "Surrey",
    detail: "LED under-vanity lighting · Bath with shower screen · Chrome towel rail · Skylights",
  },
  {
    src: "/images/bathroom-14.jpg",
    alt: "Matte black overhead rain shower head and controls over a white bath set against large-format white marble tiles",
    title: "Marble & Matte Black — Shower",
    location: "Sutton, Surrey",
    detail: "Matte black fittings · Large-format marble tiles · Overhead rain shower · Bath/shower combination",
  },
  {
    src: "/images/bathroom-15.jpg",
    alt: "Full marble bathroom with matte black fluted vanity unit, round backlit LED mirror and matte black heated towel rail",
    title: "Marble & Matte Black — Full Suite",
    location: "Sutton, Surrey",
    detail: "Marble tiles · Matte black fluted vanity · Round LED mirror · Black heated towel rail",
  },
  {
    src: "/images/bathroom-16.jpg",
    alt: "Dark emerald herringbone tiled shower with black-framed glass screen, brass gold rain shower and geometric hexagonal floor tiles",
    title: "Emerald Herringbone Shower Suite",
    location: "Redhill",
    detail: "Emerald herringbone tiles · Black frame glass screen · Brass rain shower · Geometric floor tiles",
  },
  {
    src: "/images/bathroom-17.jpg",
    alt: "Marble-tiled bathroom vanity wall with matte black fluted vanity unit and round backlit LED mirror",
    title: "Marble & Matte Black — Vanity",
    location: "Sutton, Surrey",
    detail: "Matte black fluted vanity · Round LED mirror · Large-format marble tiles",
  },
  {
    src: "/images/bathroom-18.jpg",
    alt: "Stone-effect bathroom with wall-hung WC, illuminated bronze hexagon mosaic feature wall and brushed bronze heated towel rail",
    title: "Bronze Mosaic Feature Wall",
    location: "Woking",
    detail: "Illuminated bronze hexagon mosaic · Stone-effect walls · Wall-hung WC · Brushed bronze towel rail",
  },
  {
    src: "/images/bathroom-19.jpg",
    alt: "Framed glass shower enclosure with bronze fittings, square rain shower head and illuminated circular penny tile mosaic niche",
    title: "Bronze Shower Enclosure",
    location: "Woking",
    detail: "Bronze fittings · Square rain shower · Illuminated penny tile niche · Large-format stone tiles",
  },
  {
    src: "/images/bathroom-21.jpg",
    alt: "Spacious family bathroom with Calacatta marble tiles, bold star-pattern floor, fluted oak floating vanity, round backlit mirror and gold tap",
    title: "Star-Floor Family Bathroom",
    location: "Epsom",
    detail: "Calacatta marble · Star-pattern floor tiles · Fluted oak vanity · Gold tap · Round backlit mirror",
  },
  {
    src: "/images/bathroom-20.jpg",
    alt: "Close-up of a running brushed brass tall monobloc tap beside a round white vessel sink with marble-tiled splashback",
    title: "Star-Floor Family Bathroom — Tap Detail",
    location: "Epsom",
    detail: "Brushed brass tap · Round vessel sink · Marble tiling · Warm wall lighting",
  },
  {
    src: "/images/bathroom-22.jpg",
    alt: "Bathroom with deep teal vertical brick tiles, bath with folding glass screen, brass overhead rain shower and brass mixer taps",
    title: "Teal Brick & Brass Bathroom",
    location: "Surbiton",
    detail: "Deep teal vertical tiles · Brass rain shower · Fold-over glass screen · Niche shelf",
  },
  {
    src: "/images/bathroom-29.jpg",
    alt: "Arched brass-framed mirror above a walnut vanity unit with white marble top and gold tap, beside deep teal vertical tiles",
    title: "Teal Brick & Brass Bathroom — Walnut Vanity",
    location: "Surbiton",
    detail: "Arched brass mirror · Walnut vanity · Marble top · Gold tap · Deep teal vertical tiles",
  },
  {
    src: "/images/bathroom-23.jpg",
    alt: "Loft ensuite with stone-effect tiles, sliding glass shower, wall-hung WC, floating vanity and backlit mirror beneath a dormer window",
    title: "Ottershaw Loft Ensuite — Full View",
    location: "Ottershaw",
    detail: "Stone-effect tiles · Sliding glass shower · Wall-hung WC · Floating vanity · Dormer window",
  },
  {
    src: "/images/bathroom-24.jpg",
    alt: "Bath with hinged glass screen, chrome rain shower head, hand shower and thermostatic controls against textured stone-effect tiles",
    title: "Ottershaw Loft Ensuite — Bath & Shower",
    location: "Ottershaw",
    detail: "Rain shower head · Hand shower · Hinged bath screen · Textured stone-effect tiles",
  },
  {
    src: "/images/bathroom-25.jpg",
    alt: "Floating vanity with white basin and chrome tap, large backlit LED mirror, chrome heated towel rail and dormer window",
    title: "Ottershaw Loft Ensuite — Vanity",
    location: "Ottershaw",
    detail: "Backlit LED mirror · Floating vanity · Chrome tap · Chrome heated towel rail",
  },
  {
    src: "/images/bathroom-26.jpg",
    alt: "Walk-in shower with sliding glass enclosure, chrome riser rail, thermostatic control and decorative square drain",
    title: "Ottershaw Loft Ensuite — Shower",
    location: "Ottershaw",
    detail: "Sliding glass enclosure · Chrome riser rail · Thermostatic shower · Decorative drain",
  },
  {
    src: "/images/bathroom-31.jpg",
    alt: "Blush pink shower room with rounded backlit LED mirror, round white basin on a fluted pedestal, brushed nickel tap and walk-in shower with geometric tiles and lit niche",
    title: "Blush Pink Shower Room",
    location: "Kingston upon Thames",
    detail: "Backlit LED mirror · Round basin on fluted pedestal · Brushed nickel tap · Geometric tiled shower · Illuminated niche",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Our Work</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Gallery</h1>
          <p className="text-[#8B8FA0] text-lg max-w-2xl leading-relaxed">
            A selection of bathrooms we&apos;ve designed and installed. Every project
            crafted to the client&apos;s exact vision — from first sketch to final finish.
            Swipe or use the arrows to browse.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Carousel */}
            <div className="lg:sticky lg:top-24">
              <GalleryCarousel images={images} showCaptions={true} />
            </div>

            {/* Project details */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-2">Our Projects</p>
                <h2 className="text-2xl font-black text-brand">Recent Installations</h2>
              </div>

              {images.map((img, i) => (
                <div key={img.src} className="flex gap-4 pb-8 border-b border-[#EDEAE3] last:border-0 last:pb-0">
                  <div className="text-2xl font-black text-[#EDEAE3] shrink-0 w-10 text-right leading-tight">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-[#C9A97A] mb-1">
                      {img.location}
                    </div>
                    <h3 className="font-black text-brand text-lg mb-2">{img.title}</h3>
                    <p className="text-sm text-[#8B8FA0] leading-relaxed">{img.detail}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <Link
                  href="/free-estimate"
                  className="inline-flex items-center gap-2 bg-[#C9A97A] hover:bg-[#B8955A] text-white font-bold px-6 py-3 rounded-xl shadow-sm transition-colors"
                >
                  Book Free Estimate <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Could Your Bathroom Look Like This?</h2>
          <p className="text-[#8B8FA0] mb-8">
            Get a free design consultation and estimate — no obligation, no pressure.
          </p>
          <Link
            href="/free-estimate"
            className="inline-flex items-center gap-2 bg-[#C9A97A] hover:bg-[#B8955A] text-white font-bold px-8 py-4 rounded-xl shadow-md transition-colors"
          >
            Book Free Estimate <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
