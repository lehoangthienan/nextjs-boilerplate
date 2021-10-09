import { notification } from 'antd'

const config = {
  style: {
    width: 300,
    marginLeft: 335 - 300,
  },
}

export const errorNotification = (message, description) => {
  config.message = message
  config.description = description
  return notification.error(config)
}

export const successNotification = (message, description) => {
  config.message = message
  config.description = description
  return notification.success(config)
}
