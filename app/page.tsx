import { GeistMono } from "geist/font/mono";
import { TypewriterInput } from "@/components/app/typewriter-input";
import { Waitlist } from "@/components/dashboard/waitlist";
import { Footer } from "@/components/app/footer";
export default function HomePage() {
  const prompts = [
    "3 day trip to NYC under $4000",
    "Cozy Airbnb in the Alps with a good view?",
    "Vegan fine dining in New Delhi? (I'm on a diet)",
    "Gyms near Mykonos under EUR 30",
    "What's the train schedule from Paris to Barcelona?",
    "Packing list for a fall trip to Bali?",
  ];
  return (
    <main className="h-screen bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/bg.jpg")' }}
      />
      <div className="absolute inset-0 pointer-events-none z-10">
        <div
          className="h-[calc(100%)] w-[calc(100%)] grid"
          style={{
            gridTemplateColumns: "35% 20% 45%",
            gridTemplateRows: "15% 20% 65%",
          }}
        >
          {[...Array(9)].map((_, index) => {
            const borderClasses = [
              "border-dashed border-black/30",
              index % 3 !== 2 ? "border-r" : "",
              index < 6 ? "border-b" : "",
            ].join(" ");

            const isDiagonalCell = index === 0 || index === 4 || index === 5 || index === 8;
            const bgClass = isDiagonalCell ? "bg-transparent" : "bg-white";

            const isVisibleOnMobile =
              index % 3 === 2 ? "block" : "hidden md:block";

              if (index === 2) {
                return (
                  <div
                    key={index}
                    className={`p-4 ${borderClasses} bg-black ${isVisibleOnMobile} w-full md:w-auto w-screen`}
                  >
                    <div className="w-full md:max-w-md md:ml-auto">
                      <TypewriterInput prompts={prompts} className="w-full text-right" />
                    </div>
                  </div>
                );
              }
              
            return (
              <div
                key={index}
                className={`${borderClasses} ${bgClass} ${isVisibleOnMobile}`}
              />
            );
          })}
        </div>
      </div>

      <div className="fixed top-8 left-8 z-10">
        <div className="text-white px-1 font-medium md:text-sm text-xs tracking-tighter bg-black">
          meridian.ai
        </div>
      </div>

      <div className="absolute bottom-20 left-4 z-10 w-[300px] text-wrap md:text-black text-white">
        <div className="flex flex-col gap-4">
          <div className="text-xs tracking-tighter whitespace-nowrap">
            <span className="font-semibold text-white md:bg-white md:text-black">BOOK FASTER, TRAVEL SMARTER</span>
          </div>
          <div className="flex flex-col">
            <div className="text-5xl font-semibold leading-tighter tracking-[-0.2rem] flex flex-col">
                airbnbs, cars, flights, dining, visas
            </div>
            <div className="text-6xl tracking-tighter whitespace-nowrap flex gap-2">
              <span className="font-semibold sm:text-white md:text-black">just</span>
              <span
                className={`font-semibold text-teal-400 ${GeistMono.className}`}
              >
                prompt.
              </span>
            </div>
          </div>
          <div className="w-[350px]">
            <Waitlist />
          </div>
        </div>
      </div>
      <div className="bg-black fixed bottom-0 left-0 right-0 z-10">
        <Footer />
      </div>
    </main>
  );
}
