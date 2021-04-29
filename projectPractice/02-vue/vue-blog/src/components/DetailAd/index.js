//色系
const COLORS_ARR = [
  "#FF5F57",
  "#FFBD2E",
  "#28CA42",
  "#941966",
  "#1c2c36",
  "#2982ff",
  "#e0f0d8",
  "#0098c8",
  "#ba2d2a",
  "#de3803",
];
const STEP = 20;
const MARGIN_TOPS = 2;
const MARGIN_LEFTS = 5;

export default {
  data() {
    return {
      arr: ["全部文章全部文章", "javascript", "htmlhtml", "htmlhtml"],
      style: {
        marginLeft: "10px",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    getRandomMarginLeft() {
      return Math.ceil(Math.random() * MARGIN_LEFTS) * STEP;
    },
    getRandomMarginTop() {
      return Math.floor(Math.random() * MARGIN_TOPS) * STEP;
    },
    randomFn(min, max) {
      var ran = Math.random();
      var result = ran * (max - min) + min;
      return Math.floor(result);
    },
    getRandomColor() {
      return COLORS_ARR[this.randomFn(0, COLORS_ARR.length)];
    },
  },
};
