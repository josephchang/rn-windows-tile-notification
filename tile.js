import Visual from './visual';

function Tile() {
  let $visual = new Visual();

  return {
    instance: Tile,
    visual: $visual,
    setVisual: (visual) => {
      if (visual.instance === Visual) {
        $visual = visual;
      }
    },
    getXml: () => (
      `<tile>${$visual.getXml()}</tile>`
    ),
  };
}

export default Tile;
