<template>
  <transition name="preloader">
      <div v-if="loading" class="preloader" >
        <div class="preloader__stars">
            <div class="star"><i class="fas fa-star"></i></div>
            <div class="star"><i class="fas fa-star"></i></div>
            <div class="star"><i class="fas fa-star"></i></div>
            <div class="star"><i class="fas fa-star"></i></div>
            <div class="star"><i class="fas fa-star"></i></div>
        </div>
      </div>
  </transition>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 3000);
        });
    },
    methods: {
        start() {
            this.loading = true;
        },
        finish() {
            this.loading = false;
        }
    }
}
</script>

<style lang="scss">
    .preloader {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: $bg-color;
        z-index: 3;
        .preloader__stars {
            display: flex;
            width: 14%;
            justify-content: space-between;
            padding: 0px 4px;        
            .star {
                @for $i from 1 to 6 {
                    &:nth-of-type(#{$i}) i { animation-delay: $i * 0.1s; }
                }
                i { animation: pulse 1.5s infinite; }
            }
        } 
        @keyframes pulse{
            0%{ transform: scale(1); color: $first-color; }
            50%{ transform: scale(0.2); opacity: 0.75; }
            100%{ transform: scale(1); color: #ffeea1;  }
        }

        .preloader-enter-ative, .preloader-leave-active { transition: opacity 2s; }
        .preloader-enter, .preloader-leave-to { opacity: 0; } 
    }    	
</style>