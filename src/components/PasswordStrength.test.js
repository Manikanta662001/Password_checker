import { render, screen } from "@testing-library/react";
import PasswordStrength from "./PasswordStrength";

describe("PasswordStrength testing", () => {
  test("checking text of div to be Weak Password", () => {
    render(<PasswordStrength password={"hii"} />);
    expect(screen.getByTestId("PasswordStrengthDiv")).toHaveTextContent("Weak Password");
    const computedStyle = window.getComputedStyle(screen.getByTestId("PasswordStrengthDiv"));
    expect(computedStyle.backgroundColor).toBe("red");
  });
  test("checking text of div to be Moderate Password", () => {
    render(<PasswordStrength password={"Hii12"} />);
    expect(screen.getByTestId("PasswordStrengthDiv")).toHaveTextContent("Moderate Password");
    const computedStyle = window.getComputedStyle(screen.getByTestId("PasswordStrengthDiv"));
    expect(computedStyle.backgroundColor).toBe("orange");
  });
  test("checking text of div to be Strong Password", () => {
    render(<PasswordStrength password={"Hii12#fnkre"} />);
    expect(screen.getByTestId("PasswordStrengthDiv")).toHaveTextContent("Strong Password");
    const computedStyle = window.getComputedStyle(screen.getByTestId("PasswordStrengthDiv"));
    expect(computedStyle.backgroundColor).toBe("green");
  });
});
