export default {
  props: {
    styleInput: {
      type: Object,
      default: {
      }
    }
  },
  data () {
    return {
    };
  },
  created () {},
  mounted () {
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e)
    },
    handleInputBlur (e) {
      this.$emit('blur', e)
    },
  }
}
