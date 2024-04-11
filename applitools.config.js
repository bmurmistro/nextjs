module.exports = {
  testConcurrency: 4,
  browser: [
    // Add browsers with different viewports
    {width: 1024, height: 768, name: 'chrome'},
    iosDeviceInfo: {
          deviceName: 'iPhone 15',
    }
    //{width: 700, height: 500, name: 'firefox'},
    //{width: 1600, height: 1200, name: 'ie11'},
    //{width: 1024, height: 768, name: 'edgechromium'},
    //{width: 800, height: 600, name: 'safari'} ,
    // Add mobile emulation devices in Portrait mode
    //{deviceName: 'Pixel 2', screenOrientation: 'portrait'}
  ],
  //serverUrl: 'https://~privatecloud~eyesapi.applitools.com',
  failCypressOnDiff: false, // don't fail the pipeline... use pull request check for quality gate
  dontCloseBatches: true // cypress closes batches automotically at the end of every spec. Leave open and close at the end of the suite (see .github/workflows/visual.yml)
}
