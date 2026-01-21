import Image from "next/image";
import Link from "next/link";

export default function ServicesPreviewSection() {
  return (
    <section className="py-20 px-6 bg-[#EFE1DA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#897980] mb-4">Our Services</h2>
          <p className="text-lg text-[#897980]/80">
            From intimate events to grand celebrations, we make your vision a reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/elegant-destination-wedding-in-uttarakhand-mountai.png"
              alt="Destination Weddings"
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#897980]/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-[#EFE1DA]">
              <h3 className="text-xl font-bold mb-2">Destination Weddings</h3>
              <p className="text-sm opacity-90">Magical ceremonies in stunning locations</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/corporate-team-building-event-in-mountain-resort.png"
              alt="Corporate Events"
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#897980]/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-[#EFE1DA]">
              <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
              <p className="text-sm opacity-90">Professional gatherings with charm</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/farm-tourism-experience-with-traditional-activitie.png"
              alt="Farm Tourism"
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#897980]/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-[#EFE1DA]">
              <h3 className="text-xl font-bold mb-2">Farm Tourism</h3>
              <p className="text-sm opacity-90">Authentic rural experiences</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <button className="bg-[#897980] hover:bg-[#6E6066] text-[#EFE1DA] px-8 py-4 text-lg rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
              Explore All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}