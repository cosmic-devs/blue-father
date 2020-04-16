import Vue, { DirectiveOptions } from 'vue'

/**
 * Use:
 * <component v-focus-trap>
 *
 * Remember to remove out-line styling from component,
 * since it becomes focused when this directive is inserted
 */

interface FocusTrap extends DirectiveOptions {
  el: HTMLElement | null
  retainFocus(event: KeyboardEvent): void
}

const focusTrap: FocusTrap = {
  el: null,
  retainFocus: (event) => {
    let key = ''

    if (!focusTrap.el) return
    const focusable = focusTrap.el.querySelectorAll(
      'button:not([disabled]), [href], iframe, video, input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const focusableArray = Array.prototype.slice.call(focusable)

    // Filter out any disabled elements
    const availableFocusable = focusableArray.filter((item) => !item.disabled)

    const first = availableFocusable[0]
    const last = availableFocusable[availableFocusable.length - 1]

    /**
     * If the last focusable element is a radio group, store it's name to handle
     * the default behavior of skipping a group or focusable radio boxes
     */
    let lastRadioGroupName = null
    if (last.type === 'radio') {
      lastRadioGroupName = last.name
    }

    // if not first or last or radio group, exit early
    // @ts-ignore event.target.name not recognized
    if (event.target && event.target !== first && event.target !== last && event.target.name !== lastRadioGroupName) {
      return
    }

    if (event.key === 'Tab') {
      if (event.shiftKey) {
        key = 'shift-tab'
      } else {
        key = 'tab'
      }
    } else {
      return
    }

    if (event.target === first && key === 'shift-tab') {
      event.preventDefault()
      last.focus()
      // @ts-ignore event.target.name not recognized
    } else if (event.target && (event.target === last || event.target.name === lastRadioGroupName) && key === 'tab') {
      // If you are on the last radio grouping or last focusable element, return to first element
      event.preventDefault()
      first.focus()
    }
  },
  inserted(el) {
    el.tabIndex = -1
    focusTrap.el = el
    el.addEventListener('keydown', focusTrap.retainFocus)
    el.focus()
  },
  unbind(el) {
    el.removeEventListener('keydown', focusTrap.retainFocus)
  }
}

Vue.directive('focus-trap', focusTrap)
