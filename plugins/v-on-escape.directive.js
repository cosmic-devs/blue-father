import Vue from 'vue'

/* use:
<component v-on-escape="closeMethodOnComponent">
*/

const escConfig = {
  // created to filter event to escape only
  handleEscEvent(event) {
    if (event.key !== 'Escape') {
      return
    }
    return escConfig.callBack()
  },
  // When the bound element is inserted into the DOM
  // allow a function to be bound to window listener
  inserted(binding) {
    if (typeof binding.value !== 'function') {
      throw new TypeError('v-on-escape requires a function argument')
    }

    // We could add this listener to el instead
    escConfig.callBack = binding.value
    window.addEventListener('keydown', escConfig.handleEscEvent)
  },
  unbind() {
    window.removeEventListener('keydown', escConfig.handleEscEvent)
  }
}

// v-on-escape
Vue.directive('on-escape', escConfig)
