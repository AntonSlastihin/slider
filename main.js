
class Slider {
    constructor(slname, {timer, time}) {
        this.count = 0
        this.slider = document.getElementsByClassName(slname)[0]
        this.slides = this.slider.getElementsByClassName('slide')
        const buttons = this.slider.getElementsByClassName('button')
            buttons.next.onclick = this.nextSlider.bind(this)
            buttons.prev.onclick = this.prevSlider.bind(this)
            this.showSlider = this.showSlider.bind(this)
        if ((timer && timer === true) &&
            (typeof time === "number" && time >= 1)){
            this.startTimer(time)
        }
        this.showSlider(this.count)
    }
    startTimer(time){
        setInterval(function() {
            this.showSlider(++this.count)
        }.bind(this), time)
    }
    nextSlider(){
        this.showSlider(++this.count)
    }
    prevSlider(){
        this.showSlider(--this.count)
    }
    showSlider(count){
        [...this.slides].forEach(slide => {
            slide.classList.remove('active')
        })
        if(this.count < 0){
            this.count = this.slides.length - 1
        } else if (this.count > this.slides.length - 1){
            this.count = 0
        }
        this.slides[this.count].classList.add("active")
        console.log(this.count)
    }
}
const a = new Slider('slider', {
    timer: true,
    time: 3000
})
