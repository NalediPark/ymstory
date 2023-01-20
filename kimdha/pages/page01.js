var page = new Page();

page.text = `
오늘은 엄청난 어려운 문제가 있다
바로 게임과 공부중에 무엇을 먼저 할지 생각중이다.
이것은 너무어려운문제인것같다.
`;
page.addChoice(new Choice('게임먼저?', 5));
page.addChoice(new Choice('공부먼저?', 4));

window.book.addPage(1, page);
