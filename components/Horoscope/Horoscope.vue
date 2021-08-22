<template>
    <div class="horoscope">
        <div class="horoscope__grid">
            <div class="horoscope__sign" v-for="(zodiac,index) in zodiacSigns" :key="index">
                <img :src="getZodiacImgPath(zodiac)" :alt="zodiac" />
                <p @click="getHoroscope(index)">{{zodiac}}</p>
            </div>
        </div>
        <modal-window v-if="modalVisible" :zodiacText="zodiacText" :modalVisible="modalVisible"></modal-window>
    </div>
</template>

<script>
import Modal from '../ModalWindow/ModalWindow.vue';

export default {
    data() {
        return {
            zodiacSigns: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 
            'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
            modalVisible: false,
            zodiacText: ''
        }
    },
    components: {
        "modal-window": Modal
    },
    methods: {
        getZodiacImgPath(sign){
            const imgPath = `${sign.toLowerCase()}.svg`;
            return imgPath;
        },
        async getHoroscope(number) {
            try {
                const zodiacItem = this.zodiacSigns[number];
                const response = await fetch(`http://localhost:3000/horoscope/${zodiacItem.toLowerCase()}`);
                if(!response.ok) throw new Error(response.statusText);
                const data = await response.json();
                this.zodiacText = data;
                this.modalVisible = true;           
            } catch(err) {
                console.log(err);
            }
        },   
    }
}
</script>

<style lang="scss">
    .horoscope {
        width: 100%;
        height: 100%;
        .horoscope__grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 1fr;
            justify-items: center;
            align-items: center;
            margin: 100px;
            img { height: 80px; }
            p {
                color: $first-color;
                text-align: center;
                margin: 10px 0 20px 0;
                font-family: $first-font;
                font-weight: 400; 
                cursor: pointer;
            }
        }   
    }
</style>