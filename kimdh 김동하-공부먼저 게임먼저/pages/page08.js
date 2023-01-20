var page = new Page();

page.text = `
역시 공부를 먼저해야 겠다.
선택을 잘한것 같다.
`;

page.addChoice(new Choice('몇시간뒤', 0));
page.addChoice(new Choice('몇시간뒤', 9));

window.book.addPage(8, page);
