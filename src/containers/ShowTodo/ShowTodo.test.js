import { render } from "@testing-library/react";
import ShowTodo from "./ShowTodo";

describe("ShowTodo tests", () => {
  it("should render", () => {
    expect(render(<ShowTodo />)).toBeTruthy();
  });
});
