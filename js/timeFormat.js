const date = new Date(2019, 10, 12);

// new Intl.DateTimeFormat('en-US').format(date); // 11/12/2019
// new Intl.DateTimeFormat('ko').format(date); // 2019. 11. 12.

var result = "";

result = date.toLocaleDateString(); // 11/12/2019
result = date.toLocaleDateString("ko"); // 2019. 11. 12.

result = date.toLocaleDateString("ko", {
  dateStyle: "full",
  timeStyle: "long",
});

console.log(result);
