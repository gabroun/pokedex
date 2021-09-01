import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressBar from "@components/ProgressBar";

const data = {
  base_stat: 45,
  stat: {
    name: "hp",
  },
};
describe("ProgressBar", () => {
  test("renders correctly", () => {
    render(<ProgressBar stat={data} />);

    expect(screen.getByText(data.stat.name)).toBeInTheDocument();
  });
});
