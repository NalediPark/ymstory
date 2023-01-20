var page = new Page();

page.text = `
게임을 선택한 당신 엄마에게 많이 혼났습니다. 

`;

page.addChoice(new Choice('다음장면', 8));


window.book.addPage(6, page);
