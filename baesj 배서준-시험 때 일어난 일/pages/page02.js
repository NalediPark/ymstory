var page = new Page();

page.text = `
공부를 했다면 아는 문제가 다 나왔다.


`;

page.addChoice(new Choice('다음으로',4));


window.book.addPage(2, page);
