import React from "react";
import NewsIndex from "../components/NewsIndex";
import { render, screen } from "@testing-library/react" 

describe('NewsIndex.jsx', () => {
  beforeEach(() => {
    render(<NewsIndex/>)
  });

  it('is expected to render first news header', () => {
    expect(screen.getByText("DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017")).toBeInTheDocument()
  });
    
});
