<template>
  <div class="picture">
    <div class="picture__container"> 
      <div class="picture__description" @mouseenter="hover = !hover" @mouseleave="hover = !hover">
          <div class="picture__description_title">
            <h3>{{title}}</h3>
            <p>Astronomy picture of the day {{getDate}}</p>
          </div>
          <transition name="description">
            <div v-if="hover" class="picture__description_text">
              <p>{{explanation}}</p>
            </div>
          </transition>       
      </div> 
      <div v-if="type === 'image'" class="picture__image">
        <img :src="source" />
      </div>
      <div v-else class="picture__video">
        <iframe :src="source" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        source: '',
        type: '',
        explanation: '',
        title: '',
        date: 0,
        hover: false
      }  
    },
    computed: {
      getDate() {
        return (new Date(this.date)).toLocaleDateString();
      }
    },
    created() {
      this.intervalId = setInterval(() => this.date = Date.now(), 1000);
    },
    beforeDestroy() {
      if (this.intervalId) clearInterval(this.intervalId);
    },
    async mounted() {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=pRLOIpJSj1pbZhCQY5EJgCE1H5j9ndZF24Q3c34Y');
        const data = await response.json();
        this.source = data.hdurl;
        if (!data.hdurl) this.source = data.url;
        this.title = data.title;
        this.type = data.media_type;
        this.explanation  = data.explanation;
    }
}

</script>

<style lang="scss" scoped>
  .picture { 
    width: 100vw;
    height: 100vh;
    .picture__container {
      position: relative;
      height: 100%;
      .picture__description {
        z-index: 2;
        width: 100%;
        bottom: 0;
        left: 0;
        position: absolute;
        font-family: 'Lato', sans-serif;
        background-color: rgba(17, 15, 16, 0.8);
        cursor: pointer;
        color: #fffaea;
        //padding: 10px 20px;
        h3 { font-family: 'Orbitron', sans-serif; }
        .picture__description_title {
          display: flex;
          margin: 15px 25px;
          justify-content: space-between;
        }
        .picture__description_text { 
          display: block; 
          p { 
            color: #c0bca8;
            font-weight: 400; 
            margin: 15px 25px;
            text-align: justify;
            line-height: 1.4;
          }
        }

        // animation
        .description-enter-active{ transition: all .5s; }
        .description-leave-active { transition: all .3s; }
        .description-enter, .description-leave-to {
          transform: translateY(40px);
          opacity: 0;
        }
      }
      .picture__video {
        position: relative;
        padding: 0 0 62% 0;
        iframe {
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;   
        }
      }
      .picture__image {
        padding: 0 0 62% 0;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          object-position: center center;
        }
      }
    } 
  }
</style>