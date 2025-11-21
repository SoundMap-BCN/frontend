import { render, screen } from "@testing-library/react";

function FakeAudioList() {
  return (
    <div>
      <audio data-testid="audio-element" src="/fake-audio.mp3"></audio>
    </div>
  );
}

describe("Profile audio integration", () => {
  test("renders audio elements", () => {
    render(<FakeAudioList />);
    const audio = screen.getByTestId("audio-element");
    expect(audio).toBeDefined();
  });
});
