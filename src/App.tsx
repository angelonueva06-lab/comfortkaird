import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import PasswordScreen from "./components/PasswordScreen";
import KairdGallery from "./components/KairdGallery";
import { AnimatePresence, motion } from "motion/react";

type AppState = "loading" | "password" | "main";

export default function App() {
  const [state, setState] = useState<AppState>("loading");

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setState("password");
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <AnimatePresence mode="wait">
        {state === "loading" && (
          <motion.div
            key="loading"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LoadingScreen />
          </motion.div>
        )}

        {state === "password" && (
          <motion.div
            key="password"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PasswordScreen onSuccess={() => setState("main")} />
          </motion.div>
        )}

        {state === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <KairdGallery />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
