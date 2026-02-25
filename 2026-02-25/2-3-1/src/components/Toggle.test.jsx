import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toggle from "./Toggle";

test("초기 상태는 OFF", () => {
  render(<Toggle />);
  expect(screen.getByText("OFF")).toBeInTheDocument();
});

test("클릭하면 ON으로 변경", async () => {
  render(<Toggle />);
  const button = screen.getByRole("button");
  await userEvent.click(button);
  expect(screen.getByText("ON")).toBeInTheDocument();
});

test("다시 클릭하면 OFF로 변경", async () => {
  render(<Toggle />);
  const button = screen.getByRole("button");
  await userEvent.click(button);
  await userEvent.click(button);
  expect(screen.getByText("OFF")).toBeInTheDocument();
});
