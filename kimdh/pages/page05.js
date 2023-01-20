var page = new Page();

page.text = `
전과목을 공부한당신 100점을 맞았어요.

`;

page.addChoice(new Choice('다음 장면', 9));

window.book.addPage(5, page);
