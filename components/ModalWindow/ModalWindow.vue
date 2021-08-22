<template>
    <transition name="modal">
        <div v-if="modalVisible" class="modal__shadow">
            <div class="modal">
                <div class="modal__title">
                    <h2>Horoscope for {{zodiacText.sign}}</h2>    
                </div>
                <div class="modal__body">
                    {{zodiacText.horoscope}}    
                </div>
                <div class="modal__footer">
                    <button class="button" @click="closeModal">
                        OK
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['zodiacText', 'modalVisible'],
    methods: {
        closeModal() {
            this.modalVisible = false
        },
    }
}
</script>

<style lang="scss">
    .modal__shadow {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.60);
        .modal {
            background-color: $bg-color;
            border-radius: 8px;
            padding: 15px;
            min-width: 500px;
            max-width: 600px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .modal__title {
                h2 {
                    color:  $first-color;
                    padding: 0 10px;
                    font-family: $second-font;
                    margin-bottom: 10px;
                }
            }
            .modal__body {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 10px;
                color: $second-color;
                font-family: $first-font;
                line-height: 1.5;
                text-align: justify;
            }
            .modal__footer {
                display: flex;
                justify-content: center;
                .button {
                    margin-top: 10px;
                    height: 40px;
                    width: 120px;
                    background-color: $bg-color;
                    border: 2px solid $first-color;
                    text-align: center;
                    border-radius: 5px;
                    font-family: $first-font;
                    font-weight: 400; 
                    color: $first-color;
                    padding: 2px 0 3px 0;
                    cursor: pointer;
                }
            }
        }
    }
</style>