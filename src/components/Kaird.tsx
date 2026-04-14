import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RefreshCw } from "lucide-react";

interface KairdProps {
  question: string;
  quote: string;
}

export default function Kaird({ question, quote }: KairdProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full max-w-sm aspect-[3/4] perspective-1000 group">
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="relative w-full h-full preserve-3d shadow-2xl rounded-[2rem]"
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-stone-100">
          <div className="absolute top-8 left-8 text-stone-200 font-serif text-6xl opacity-50 select-none">“</div>
          <h3 className="text-2xl md:text-3xl font-serif text-stone-800 leading-relaxed px-4">
            {question}
          </h3>
          <div className="absolute bottom-8 right-8 text-stone-200 font-serif text-6xl opacity-50 select-none rotate-180">“</div>
          
          <button
            onClick={() => setIsFlipped(true)}
            className="mt-12 px-8 py-3 bg-stone-50 text-stone-500 rounded-full text-sm font-sans tracking-widest uppercase hover:bg-stone-100 transition-colors flex items-center gap-2"
          >
            <RefreshCw size={14} />
            Flip to see quote
          </button>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden bg-stone-900 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center rotate-y-180"
        >
          <div className="absolute top-8 left-8 text-stone-700 font-serif text-6xl opacity-50 select-none">“</div>
          <p className="text-xl md:text-2xl font-serif italic text-stone-200 leading-relaxed px-4">
            {quote}
          </p>
          <div className="absolute bottom-8 right-8 text-stone-700 font-serif text-6xl opacity-50 select-none rotate-180">“</div>

          <button
            onClick={() => setIsFlipped(false)}
            className="mt-12 px-8 py-3 bg-stone-800 text-stone-400 rounded-full text-sm font-sans tracking-widest uppercase hover:bg-stone-700 transition-colors flex items-center gap-2"
          >
            <RefreshCw size={14} />
            Back to question
          </button>
        </div>
      </motion.div>
    </div>
  );
}
