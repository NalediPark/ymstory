var page = new Page();

page.text = `
공부를 한지 2시간뒤.......
`;

page.addChoice(new Choice('게임시간',10 ));
page.addChoice(new Choice('게임시간', 0));

window.book.addPage(9, page);
