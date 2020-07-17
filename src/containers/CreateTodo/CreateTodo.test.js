import { render } from "@testing-library/react";
import CreateTodo from "./CreateTodo";

describe("CreateTodo tests", () => {
  it("should render", () => {
    expect(render(<CreateTodo />)).toBeTruthy();
  });
});
