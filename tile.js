import Visual from './visual';

function Tile() {
  let $visual = new Visual();

  return {
    setVisual: (visual) => {
      if (visual instanceof Visual) {
        $visual = visual;
      }
    },
    getXml: () => (
      `<tile>${$visual.getXml()}</tile>`
    ),
  };
}

export default Tile;
