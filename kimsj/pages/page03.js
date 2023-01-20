var page = new Page();

page.text = `
본다.
재밌다!!! 어? 재밌는게 또 있네!
또 볼까? 공부할까?
`;

page.addChoice(new Choice('공부한다', 5));
page.addChoice(new Choice('또 본다', 4));

window.book.addPage(3, page);
