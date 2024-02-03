const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"]

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


const deadline = document.querySelector('.countdown')
const items = document.querySelectorAll('.deadline-format h4')


let futureDate = new Date(2026, 5, 19, 15, 0, 0)


const futureTime = futureDate.getTime()

function getRemainingTime() {
    const today = new Date().getTime()
    const t = futureTime - today
    console.log(t)

    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    let days = t / oneDay
    days = Math.floor(days)

    let hours = (t % oneDay) / oneHour
    hours = Math.floor(hours)

    let minutes = (t % oneHour) / oneMinute
    minutes = Math.floor(minutes)

    let seconds = (t % oneMinute) / 1000
    seconds = Math.floor(seconds)

    const values = [days, hours, minutes, seconds]

    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index])
    })
}


let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()