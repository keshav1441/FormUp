"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until mounted to avoid SSR issues
  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme || "light"}>
      <TabsList className="border">
        {/* Light theme trigger */}
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>

        {/* Dark theme trigger */}
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>

        {/* System theme trigger */}
        <TabsTrigger value="system" onClick={() => setTheme("system")}>
          <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
