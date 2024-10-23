<script>
import { getCurrentInstance, h } from 'vue'

export default {
  props: {
    template: String,
  },
  setup(props) {
    const components = getCurrentInstance()?.appContext?.components ?? {}
    
    Object.keys(components).forEach((key) => {
      components[key] = components[key].default
    })

    return () =>
      h({
        components,
        template: props.template,
      })
  },
}
</script>
