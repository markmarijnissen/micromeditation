import { ref } from "vue";
import { IfVisible } from '@rosskevin/ifvisible';
import NoSleep from 'nosleep.js';
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwyxz', 10);
import { getValue, setValue } from "./firebase";
import dayjs from "dayjs";
import durationPlugin from "dayjs/plugin/duration";
dayjs.extend(durationPlugin)

// helpers
export const id = location.search.replace(/^\?id=/, '') || localStorage.id || nanoid();
localStorage.id = id;
export const sharelink = `${location.origin}/?id=${id}`;
console.log(sharelink);
if (location.search) {
    location.href = location.origin;
}

// state
const today = dayjs().format('YYYY-MM-DD');
export const now = ref(0);
export const duration = ref({
    today: 0,
    alltime: 0,
    date: today
});
getValue(id).then(value => duration.value = value);

// util
export const format = t => dayjs.duration(t, 'seconds').format('HH:mm:ss');

// page visibility
const ifvisible = new IfVisible(window, document);
ifvisible.setIdleDuration(15 * 60); // 15 min
ifvisible.setThrottleDuration(500);
ifvisible.onEvery(1, () => {
    now.value++;
    if (duration.value.date === today) {
        duration.value.today++;
    } else {
        duration.value.today = 0;
        duration.value.date = today;
    }
    duration.value.alltime++;
    document.title = format(now.value);
    setValue(id, duration.value);
});

ifvisible.on('focus', async () => {
    console.debug('sync');
    duration.value = await getValue(id);
})

export function link() {
    // navigator.clipboard.writeText(sharelink);
    navigator.share({
        title: "Sync Micro Meditation",
        url: sharelink
    })
}

export function reset() {
    if (confirm("Are you sure?")) {
        now.value = 0;
        duration.value.today = 0;
        duration.value.alltime = 0;
        setValue(id, duration.value);
    }
}


const ns = new NoSleep();
document.addEventListener('click', function enableNoSleep() {
    ns.enable();
    // const element = window.document.documentElement;
    // if (element.requestFullscreen) {
    //     element.requestFullscreen();
    // } else if (element.mozRequestFullScreen) {
    //     element.mozRequestFullScreen();
    // } else if (element.webkitRequestFullScreen) {
    //     element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    // }
}, false);


