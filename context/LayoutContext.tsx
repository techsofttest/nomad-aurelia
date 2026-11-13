"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from "react";

interface Service {
  title: string;
  slug: string;
  sub: string[];
}

interface Contact {
  phone: string | null;
  email: string | null;
  address: string | null;
}

interface LayoutData {
  service: Service[];
  contact: Contact | null;
}

interface LayoutResponse {
  service: Service[];
  contact: Contact | null;
}

interface LayoutContextType {
  layoutData: LayoutData | null;
  loading: boolean;
}

const LayoutContext = createContext<LayoutContextType>({
  layoutData: null,
  loading: true,
});

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layoutData, setLayoutData] = useState<LayoutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") || "/api";

    fetch(`${baseUrl}/layout`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Layout request failed with status ${res.status}`);
        }
        return res.json() as Promise<LayoutResponse>;
      })
      .then((layoutRes) => {
        setLayoutData({
          service: layoutRes.service ?? [],
          contact: layoutRes.contact ?? null,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Layout Fetch Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <LayoutContext.Provider value={{ layoutData, loading }}>
      {children}
    </LayoutContext.Provider>
  );
}

export const useLayoutData = () => useContext(LayoutContext);