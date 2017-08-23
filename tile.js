function Tile() {
  return {
    setVisual: (visual) => {
      this.visual = visual;
    },
    getXml: () => (
      `<tile>${this.visual ? this.visual.getXml() : ''}</tile>`
    ),
  };
}

export default Tile;
