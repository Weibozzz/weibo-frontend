
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      // this.form.setFieldsValue({
      //   note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      // });
    },
  },
};
