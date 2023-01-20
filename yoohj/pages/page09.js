var page = new Page();

page.text = `
ㅠㅠ당신은 실패했습니다.


`;

page.addChoice(new Choice('다시하기', 0));


window.book.addPage(9, page);
