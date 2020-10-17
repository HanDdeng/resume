let date = new Date();
let hours = date.getHours();

if (hours < 7) {
    alert("凌晨了，努力的人总是好运的，但是身体也很重要，早点休息鸭～～～");
} else if (hours >= 7
    && hours < 12
) {
    alert("早上好，今天有没有好好吃早饭鸭～～～");
} else if (hours >= 12
    && hours < 19
) {
    alert("下午好，今天过的怎么样鸭～～～");
} else {
    alert("晚上好，下班回家，要多犒劳以下自己哟～～～");
}