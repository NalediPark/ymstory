var page = new Page();

page.text = `
자는걸 선택한당신 엄마에게 죽을뻔 했습니다.

`;

page.addChoice(new Choice('다음 장면', 8));


window.book.addPage(7, page);
