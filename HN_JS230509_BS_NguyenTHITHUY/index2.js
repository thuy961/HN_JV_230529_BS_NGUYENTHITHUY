// Bài 3 : Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó[30 điểm]
// ● Đầu vào : nhập tháng 8 năm 2023
// ● Đầu ra : số ngày trong tháng đó là 31


let  getDaysInMonth = function(month,year) {
    return new Date(year, month, 0).getDate();
   };
console.log(getDaysInMonth(4, 2012));
document.write