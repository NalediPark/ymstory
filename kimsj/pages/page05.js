var page = new Page();

page.text = `
공부한다.
재밌는 너튜브를 보고 공부하고 있다. 근데 엄마가 공부하고 있다며 1000원을 주셨다.
나가서 놀까? 공부할까? 
`;

page.addChoice(new Choice('논다', 13));
page.addChoice(new Choice('공부한다', 12));

window.book.addPage(5, page);
