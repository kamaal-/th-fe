import { UIContext } from "./uiContext.tsx";
import { render, screen } from "@testing-library/react";

describe("ThemeContext", () => {
  const customRender = () => {
    return render(
      <UIContext.Provider
        value={{
          loading: true,
          placeholderImage: false,
          setLoading: () => ({}),
          setPlaceHolderImages: () => ({}),
        }}
      >
        <p>Hi</p>
      </UIContext.Provider>
    );
  };

  it("ThemeContext shows value from provider", () => {
    customRender();
    expect(screen.getByText(/Hi/)).toHaveTextContent("Hi");
  });
});
