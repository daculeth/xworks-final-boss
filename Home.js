
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "xworks – The Power of Synergy";
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white text-center min-h-screen flex flex-col justify-center items-center">
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            xworks
          </motion.div>
        ) : (
          <>
            <h1 className="text-5xl font-semibold mb-4">The Power of Synergy</h1>
            <p className="text-gray-400 text-xl max-w-xl">
              Strategy. Design. Execution. All in harmony.
            </p>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
