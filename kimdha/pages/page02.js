var page = new Page();

page.text = `
그래서 공부랑게임중 어던것을 할지생각하는 중.
너무 어려운 문제같아 엄청생각중이다.
`;


page.addChoice(new Choice('', ));
page.addChoice(new Choice('', ));

window.book.addPage(2, page);
