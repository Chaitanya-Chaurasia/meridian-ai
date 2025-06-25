import { GeistMono } from "geist/font/mono";
import { TypewriterInput } from "@/components/app/typewriter-input";
import { Waitlist } from "@/components/dashboard/waitlist";
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
              "border-dashed border-black/70",
              index % 3 !== 2 ? "border-r" : "",
              index < 6 ? "border-b" : "",
            ].join(" ");

            const isDiagonalCell = index === 0 ||  index === 5 || index === 8;
            const bgClass = isDiagonalCell ? 'bg-transparent' : 'bg-white';
            
            if (index === 2) {
              return (
                <div
                  key={index}
                  className={`p-4 flex items-center justify-end ${borderClasses} bg-black`}
                >
                  <div className="w-full max-w-md">
                    <TypewriterInput prompts={prompts} className="text-right" />
                  </div>
                </div>
              );
            }
            return <div key={index} className={`${borderClasses} ${bgClass}`} />;
          })}
        </div>
      </div>

      <div className="fixed top-8 left-8 z-10">
        <div className="text-white px-1 font-medium text-sm tracking-tighter bg-black">
          MERIDIAN.ai
        </div>
      </div>

      <div className="absolute bottom-8 left-2 right-2 z-10">
        <div className="flex flex-col gap-4">
          <div className="text-xs tracking-tighter whitespace-nowrap">
            BOOK FASTER, BOOK SMARTER
          </div>
          <div className="flex flex-col">
            <div className="text-5xl font-medium leading-tighter tracking-[-0.3rem] flex flex-col">
              <span 
                className="text-black"
              >
                airbnbs, cars, flights, dining, visas
              </span>
            </div>
            <div className="text-6xl tracking-tighter whitespace-nowrap flex gap-2">
              <span className="font-semibold">just</span>
              <span
                className={`font-medium text-lime-300 ${GeistMono.className}`}
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
    </main>
  );
}
