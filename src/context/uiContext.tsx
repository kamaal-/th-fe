import { createContext, ReactElement, useState } from "react";
import { UI } from "../@types";

export const UIContext = createContext<UI.UIContext | null>(null);

type Props = {
  initialProps: UI.UIContextValue;
  children: ReactElement;
};

/* c8 ignore start */
export const UIProvider = ({ initialProps, children }: Props) => {
  const [loading, setLoading] = useState<boolean>(initialProps.loading);
  const [placeholderImage, setPlaceHolderImages] = useState<boolean>(
    initialProps.placeholderImage
  );

  return (
    <UIContext.Provider
      value={{
        loading,
        placeholderImage,
        setLoading,
        setPlaceHolderImages,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
/* c8 ignore stop */
