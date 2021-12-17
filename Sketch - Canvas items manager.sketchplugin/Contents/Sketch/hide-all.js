var onRun = function (context) {
  const sketch = require("sketch");
  const doc = sketch.getSelectedDocument();

  doc.pages.forEach((page) => {
    page.layers.forEach((layer) => {
      if (layer.type !== "Artboard" && layer.type !== "SymbolMaster") {
        layer.hidden = true;
      }
    });
  });
};
