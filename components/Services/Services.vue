<template>
  <div class="root">
    <div class="carousel-handle">
      <div v-if="loaded" class="carousel-wrap">
        <slick ref="slick" :options="slickOptions">
          <div class="item">
            <div class="carousel-prop">
              <div />
            </div>
          </div>
          <div v-for="(item, index) in servicesList" :key="index" class="item">
            <card :title="item.title" :desc="item.desc" :img="item.img" :button="$t('agencyLanding.services_button')" />
          </div>
          <div class="item">
            <div class="carousel-prop">
              <div />
            </div>
          </div>
        </slick>
      </div>
    </div>
    <div class="floating-title">
      <v-container class="fixed-width">
        <div class="title">
          <title-icon :text="$t('agencyLanding.services_title')" icon="apps" extended />
          <nav class="arrow">
            <v-btn fab small aria-label="next" class="margin" @click="next()">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn fab small aria-label="prev" class="margin" @click="prev()">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </nav>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script>
import imgApi from '~/static/images/imgAPI'
import Card from '../Cards/Default'
import TitleIcon from '../Title/WithIcon'

export default {
  components: {
    Card,
    TitleIcon,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      },
      servicesList: [
        {
          title: 'Web Development',
          desc:
            'We offer design and application development services for every stage of your project. Our Web Design and development services are client-centric to create a complete and customized solution.',
          img: imgApi.agency[0]
        },
        {
          title: 'E-commerce',
          desc:
            'We will design & develop an e-commerce website, that will help you triple the sales of your products and services online.',
          img: imgApi.agency[3]
        },
        {
          title: 'App Development',
          desc:
            'We create innovative, effective applications that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.',
          img: imgApi.agency[1]
        },
        {
          title: 'Search Engine Optimization',
          desc:
            'We can help increase your bottom line with an SEO campaign that is specifically designed for your business. Start earning more qualified search traffic to your website today with our search engine optimization services.',
          img: imgApi.agency[4]
        },
        {
          title: 'Graphic Design',
          desc: 'From branding, to web design, we got you all covered',
          img: imgApi.agency[5]
        },
        {
          title: 'Content Creation',
          desc:
            'We will create and write content for your website, social media, and marketing campaigns. Our content will excite the heart and ignite the mind... Expand your reach, build buzz, and make ‘em know that you’re the real deal.',
          img: imgApi.agency[2]
        }
      ]
    }
  },
  mounted() {
    this.loaded = true
    const props = window.innerWidth > 1400 ? 1 : 2 // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(
      this.servicesList.length + props - this.slickOptions.slidesToShow
    )
    setTimeout(() => {
      if (window.innerWidth > 1200 && !this.$vuetify.rtl) {
        console.log(lastSlide)
        this.$refs.slick.goTo(lastSlide)
      }
    }, 100)
  },
  methods: {
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    }
  }
}
</script>
