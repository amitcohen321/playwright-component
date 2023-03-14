import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppProvider } from "../src/contexts/AppContext";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider messages={defaultStrings}>{children}</AppProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
