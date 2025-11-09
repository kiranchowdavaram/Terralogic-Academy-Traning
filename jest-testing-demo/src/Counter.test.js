import {
  render,
  screen,
  fireEvent,
  getAllByTestId,
  getByTestId,
} from "@testing-library/react";
import Counter from "./Counter";

test("renders counter with initial value 0", () => {
  render(<Counter />);
  const countText = screen.getByTestId("count-value");
  expect(countText).toHaveTextContent("Count: 0");
});

test("increments count when increment button is clicked", () => {
  render(<Counter />);
  const button = screen.getByTestId("increment-btn");
  fireEvent.click(button);
  const countText = screen.getByTestId("count-value");
  expect(countText).toHaveTextContent("Count: 1");
});

test("decrements count when decrement button is clicked", () => {
  render(<Counter />);
  const button = screen.getByTestId("decrement-btn");
  fireEvent.click(button);
  const countText = screen.getByTestId("count-value");
  expect(countText).toHaveTextContent("Count: -1");
});
