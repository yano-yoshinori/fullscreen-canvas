/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css'

function createColorButton(label: string, color: string, left: number) {
  const button = document.createElement('button')
  button.textContent = label
  button.style.setProperty('position', 'fixed')
  button.style.setProperty('top', '0')
  button.style.setProperty('left', `${left}px`)
  button.addEventListener('click', () => {
    context.strokeStyle = color
  })
  document.body.append(button)
}

const canvas = document.createElement('canvas')
canvas.setAttribute('width', `${window.innerWidth}`)
canvas.setAttribute('height', `${window.innerHeight}`)
document.body.append(canvas)

const context = canvas.getContext('2d')
context.lineCap = 'round'
context.lineJoin = 'round'

createColorButton('K', '#000', 0)
createColorButton('R', '#F00', 30)
createColorButton('G', 'lime', 60)
createColorButton('B', 'skyblue', 90)
createColorButton('W', 'white', 120)

let drawing = false

canvas.addEventListener('mousedown', (e) => {
  const { clientX, clientY } = e

  drawing = true

  context.beginPath()
  context.moveTo(clientX, clientY)
})

canvas.addEventListener('mousemove', (e) => {
  if (!drawing) return

  const { clientX, clientY } = e

  context.lineTo(clientX, clientY)
  context.stroke()
})

canvas.addEventListener('mouseup', (e) => {
  drawing = false
})
