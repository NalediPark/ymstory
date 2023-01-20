var page = new Page();

page.text = `
숫자 4개를 말하라는 듯하다
`;

page.addChoice(new Choice('1', 39));
page.addChoice(new Choice('2', 36));
page.addChoice(new Choice('3', 39));
page.addChoice(new Choice('4', 39));
page.addChoice(new Choice('5', 39));
page.addChoice(new Choice('6', 39));
page.addChoice(new Choice('7', 39));
page.addChoice(new Choice('8', 39));
page.addChoice(new Choice('9', 39));
page.addChoice(new Choice('0', 39));
window.book.addPage(35, page);
