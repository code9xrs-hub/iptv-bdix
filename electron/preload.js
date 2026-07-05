/* eslint-disable @typescript-eslint/no-require-imports */
const { contextBridge } = require('electron');

// Expose minimal API to the renderer if needed
contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  // Add more custom methods here if native capabilities are needed
});
