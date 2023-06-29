const formatter = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });
const today = new Date();
const started = new Date(2022, 9, 26);
const daysPassed = Math.ceil((started - today) / (1000 * 60 * 60 * 24));

console.log(`입사일 : ${formatter.format(daysPassed, "day")}`);

formatter.format(1, "day");
formatter.format(2, "day");
formatter.format(-1, "day");
formatter.format(-2, "day");
