<script>
import { getCurrentInstance } from 'vue'
import { h } from 'vue/dist/vue.esm-bundler.js'

export default {
  props: {
    template: String,
  },
  setup(props) {
    const components = getCurrentInstance()?.appContext?.components ?? {}

    Object.keys(components).forEach((key) => {
      components[key] = components[key]?.default
      if (!components[key]) delete components[key]
    })

    return () =>
      h({
        components,
        template: props.template,
      })
  },
}
</script>
