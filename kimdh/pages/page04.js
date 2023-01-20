var page = new Page();

page.text = `
2과목을 선택한당신 아깝게 50점


`;

page.addChoice(new Choice('다음 장면', 8));

window.book.addPage(4, page);
