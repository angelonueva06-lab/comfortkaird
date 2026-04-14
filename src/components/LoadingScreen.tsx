import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#fdfbf7] z-50 overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-100/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[100px]" />

      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Nucleus */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-rose-300 shadow-lg shadow-orange-200/50"
        />

        {/* Orbit 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full border border-orange-200/40 rounded-[50%] rotate-x-[60deg]"
        >
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-400 rounded-full shadow-sm"
          />
        </motion.div>

        {/* Orbit 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full border border-blue-200/40 rounded-[50%] rotate-x-[60deg] rotate-y-[60deg]"
        >
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-sm"
          />
        </motion.div>

        {/* Orbit 3 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full border border-rose-200/40 rounded-[50%] rotate-x-[60deg] rotate-y-[-60deg]"
        >
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-rose-400 rounded-full shadow-sm"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <h1 className="text-2xl font-serif italic text-stone-700 tracking-wide">
          Comfort Kaird
        </h1>
        <p className="text-stone-400 text-sm mt-2 font-sans tracking-widest uppercase">
          Finding peace in every word
        </p>
      </motion.div>
    </div>
  );
}
