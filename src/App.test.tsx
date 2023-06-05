import {describe, expect} from "vitest";
import { render, screen } from "@testing-library/react";
import App from './App.tsx'

describe("<App/>", () => {
    test("<App/> should render without error", () => {
        render(<App />);
        expect(screen.getByRole("app")).toBeDefined();
    })
})
