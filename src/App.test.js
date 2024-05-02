import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App testing", () => {
  test("checking Snapshot", () => {
    const {asFragment} = render(<App/>)
    expect(asFragment(<App/>)).toMatchSnapshot()
  })
})
