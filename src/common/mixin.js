import BackTop from '@/components/content/backTop/BackTop';
export const backTop={
  data() {
    return {
      isBackShow:false,
    }
  },
  components: {
    BackTop,
  },
  methods: {
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0,300)
    }
  },
}