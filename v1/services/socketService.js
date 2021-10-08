import io from 'socket.io-client'

import configs from '../configures/configs'
import { EVENT_SOCKET } from '../utils/constants'

let socket = null

export function connectSocket(token, dispatch, userId) { // eslint-disable-line
  disConnectSocket()
  socket = io(configs.API_URL, {
    query: {
      accessToken: token,
    },
  })

  socket.on(EVENT_SOCKET.CONNECT, () => {
    console.log('Socket Connect Successfuly')
  })

  return socket
}

export function disConnectSocket() {
  if (socket) {
    socket.disconnect()
  }
}
