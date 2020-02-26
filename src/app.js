function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('../src/fonts', true, /\.*$/));
importAll(require.context('../src/favicon', true, /\.*$/));
importAll(require.context('../src/', true, /\.scss$/))