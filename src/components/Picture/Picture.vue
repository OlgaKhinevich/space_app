<template>
  <div class="picture">
      <div class="description">
        <h3>{{title}}</h3>
        <input type="checkbox" id="button">
        <div class="description-text"><p>{{explanation}}</p></div>
        <label for="button">Read more...</label>
        
      </div>

      <img v-if="type === 'image'" :src="source" />
      <div class="video" v-else>
          <iframe width="1050" height="600" :src="source" frameborder="0" allowfullscreen></iframe>
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
        title: ''
      }  
    },
    async mounted() {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=pRLOIpJSj1pbZhCQY5EJgCE1H5j9ndZF24Q3c34Y');
        const data = await response.json();
        console.log(data);
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
    width: 100%;
    .description {
      h3 {
        font-family: 'Orbitron', sans-serif;
        color: #fffaea;
      }
      position: absolute;
      font-family: 'Lato', sans-serif;
      top: 0;
      left: 20%;
      padding: 10px;
      background-color: rgba(17, 15, 16, 0.24);
      input[type="checkbox"] {
        display: none;
      }
      input[type="checkbox"]:checked + .description-text {
        height: auto;
      }
      label {
        order: 1;
        text-decoration: underline;
        font-size: 14px;
        cursor: pointer;
        color: #dddcc6;
      }
      .description-text {
        height: 53px;
        overflow: hidden;
        order: 0;
        p { 
          color: #dddcc6;
          font-weight: 400;
        }
      }
    }
    img {
      height: auto;
      width: 100%; 
    }
    .video {
      position: relative;
      padding-bottom: 75%; 
      height: 0;
      overflow: hidden;
      iframe {
        top: 0;
        left: 0;
        border-width: 0;
        outline-width: 0;
      }
    }
  }
</style>