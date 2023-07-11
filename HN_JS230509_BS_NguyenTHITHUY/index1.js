// Bài 2 : Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng (space) ở đầu và cuối
// câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
// trong từ viết thường [30 điểm]
// ● Đầu vào: Câu là một chuỗi các ký tự
// ● Đầu ra: In ra chuỗi đã được chuẩn hóa.



// let text = " this is A test";
// let a = text.trim().split(/\s+/);

// for(let i = 0; i < a.length; i++) {
// 	let textI = a[i];
//     let textIUpperCase = textI.charAt(0).toUpperCase() + textI.slice(1);
//     a[i] = textIUpperCase;
  
// }

// let result = a.join(' ');
// console.log(result);



let texts = "heLlo riKkei academy";
let b = texts.trim().split(/\s+/);
for (let i = 0; i < b.length; i++) {
    let texs  = b[i];
    let textsUpperCase = texs.charAt(0).toUpperCase() + texs.slice(1);
    b[i] = textsUpperCase;
}
let result = b.join(' ');
console.log(result);
