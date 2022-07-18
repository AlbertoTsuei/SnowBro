import eventBus from '@/libs/emitter'

export default function (response, title = '更新') {
  if (response.data.success) {
    eventBus.emit('push-message', {
      style: 'primary',
      title: `${title}`
    })
  } else {
    eventBus.emit('push-message', {
      style: 'danger',
      title: `${title}`
    })
  }
}
