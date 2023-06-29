//console.log('hello world!!');

const views = 98765432;

const formatter = new Intl.NumberFormat("ko");

//const formatter = new Intl.NumberFormat('ko', {notation : 'compact'});

//const formatter = new Intl.NumberFormat('en', {notation : 'compact'});

// const formatter = new Intl.NumberFormat('en', {
//     notation : 'compact',
//     compactDisplay : 'long'
// });

// 브라우저에 맞게 언어값 불러옴 - 브라우저에서 실행해야함
// const formatter = new Intl.NumberFormat(navigator.language, {
//     notation : 'compact',
//     compactDisplay : 'long'
// });
//
//

console.log(formatter.format(views));
