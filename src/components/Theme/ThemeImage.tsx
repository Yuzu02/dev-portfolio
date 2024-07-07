import { useTheme } from "next-themes";
import Image from "next/image";

const ThemedImage = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Image
      src={
        currentTheme === "dark"
          ? "/assets/Roze/photo5.png"
          : "/assets/Roze/photo2.png"
      }
      priority
      quality={100}
      fill
      alt="Yuzu"
      className="object-contain rounded-full opacity-80"
    />
  );
};

export default ThemedImage;
