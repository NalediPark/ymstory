var page = new Page();

page.text = `
그리고 엄마에게 혼이 났다.


`;

page.addChoice(new Choice('처음으로 돌아가기', 0));


window.book.addPage(7, page);
