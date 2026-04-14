import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shuffle, Heart } from "lucide-react";
import { kairds, KairdData } from "../data/kairds";
import Kaird from "./Kaird";

export default function KairdGallery() {
  const [currentKaird, setCurrentKaird] = useState<KairdData | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    // Pick a random card on mount
    const randomIndex = Math.floor(Math.random() * kairds.length);
    setCurrentKaird(kairds[randomIndex]);
  }, []);

  const handleShuffle = () => {
    setIsShuffling(true);
    
    // Simulate shuffle animation delay
    setTimeout(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * kairds.length);
      } while (currentKaird && kairds[nextIndex].id === currentKaird.id && kairds.length > 1);
      
      setCurrentKaird(kairds[nextIndex]);
      setIsShuffling(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] flex flex-col items-center py-12 px-6">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="text-rose-300 w-5 h-5 fill-rose-300" />
          <h1 className="text-3xl font-serif text-stone-800 tracking-tight">Comfort Kaird</h1>
        </div>
        <p className="text-stone-400 font-sans text-sm tracking-widest uppercase">
          A gentle reminder for your soul
        </p>
      </motion.header>

      <main className="flex-1 w-full max-w-lg flex flex-col items-center justify-center gap-12">
        <div className="relative w-full flex justify-center">
          <AnimatePresence mode="wait">
            {currentKaird && !isShuffling && (
              <motion.div
                key={currentKaird.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="w-full flex justify-center"
              >
                <Kaird 
                  question={currentKaird.question} 
                  quote={currentKaird.quote} 
                />
              </motion.div>
            )}

            {isShuffling && (
              <motion.div
                key="shuffling"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                      className="w-3 h-3 bg-stone-300 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShuffle}
          disabled={isShuffling}
          className="group flex items-center gap-3 px-10 py-4 bg-white border border-stone-100 rounded-full shadow-xl shadow-stone-200/50 text-stone-600 font-sans font-medium tracking-wide hover:bg-stone-50 transition-all disabled:opacity-50"
        >
          <Shuffle className={`w-5 h-5 transition-transform duration-500 ${isShuffling ? 'rotate-180' : 'group-hover:rotate-45'}`} />
          Shuffle Kairds
        </motion.button>
      </main>

      <footer className="mt-12 text-stone-300 text-xs font-sans tracking-widest uppercase">
        Take a deep breath. You are doing fine.
      </footer>
    </div>
  );
}
