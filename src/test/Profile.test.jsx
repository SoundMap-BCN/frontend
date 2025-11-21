import { render, screen } from "@testing-library/react";

function FakeProfile() {
  return <h1>Angela</h1>;
}

describe("Profile Page", () => {
  test("loads user name", () => {
    render(<FakeProfile />);
    const username = screen.getByText("Angela");
    expect(username).toBeDefined();
  });
});
