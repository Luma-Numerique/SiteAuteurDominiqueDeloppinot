import { createContext, useContext, useEffect, useState } from "react";
import type { Livre } from "../models";
import { getAllBooks } from "./client";

const STORAGE_KEY = "livresCache";
const CACHE_VERSION = 2;

interface LivresContextType {
  livres: Livre[];
}

interface CachedLivres {
  version: number;
  livres: Livre[];
}

const LivresContext = createContext<LivresContextType>({
  livres: [],
});

export const LivresProvider = ({ children }: { children: React.ReactNode }) => {
  const [livres, setLivres] = useState<Livre[]>([]);

  useEffect(() => {
    const cachedLivres = sessionStorage.getItem(STORAGE_KEY);
    if (cachedLivres) {
      try {
        const parsed = JSON.parse(cachedLivres) as CachedLivres;
        if (parsed.version === CACHE_VERSION && Array.isArray(parsed.livres)) {
          setLivres(parsed.livres);
          return;
        }
      } catch {
        // invalid cache, ignore
      }
      sessionStorage.removeItem(STORAGE_KEY);
    }

    const fetchLivres = async () => {
      const data = await getAllBooks();
      const booksWithImageUrl = data.map((book) => ({
        ...book,
      }));
      setLivres(booksWithImageUrl);
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ version: CACHE_VERSION, livres: booksWithImageUrl })
      );
    };

    fetchLivres();
  }, []);

  return (
    <LivresContext.Provider value={{ livres }}>
      {children}
    </LivresContext.Provider>
  );
};

export const useLivres = () => useContext(LivresContext);
