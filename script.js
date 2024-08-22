class Stories {
    constructor(id) {
        this.story = document.querySelector(`[data-slide="${id}"]`)
        this.active = 0
        this.start()
    }
    activeStory(index) {
        this.active = index
        this.items.forEach((item) => item.classList.remove('active'))
        this.items[index].classList.add('active')
        this.timerItems.forEach((item) => item.classList.remove('active'))
        this.timerItems[index].classList.add('active')
        this.playStory()
    }
    prev() {
        if (this.active > 0) {
            this.activeStory(this.active - 1)
        } else {
            this.activeStory(this.items.length -1)
        }
    }
    next() {
        if (this.active < this.items.length - 1) {
            this.activeStory(this.active + 1)
        } else {
            this.activeStory(0)
        }
    }
    navigation() {
        const next = this.story.querySelector('.next')
        const prev = this.story.querySelector('.prev')
        next.addEventListener('click', this.next)
        prev.addEventListener('click', this.prev)
    }
    timer() {
        this.items.forEach(() => (this.timerLocal.innerHTML += `<span></span>`))
        this.timerItems = Array.from(this.timerLocal.children)
    }
    playStory() {
        clearTimeout(this.time)
        this.time = setTimeout(this.next, 5000)
    }
    start() {
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.items = this.story.querySelectorAll('.story-items > *')
        this.timerLocal = this.story.querySelector('.story-timer')
        this.timer()
        this.activeStory(0)
        this.navigation()
    }
}

new Stories('story')