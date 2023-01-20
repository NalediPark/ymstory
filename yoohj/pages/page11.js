var page = new Page();

page.text = `
무기를 고를수 있다.


`;

page.addChoice(new Choice('주머니칼?', 14));
page.addChoice(new Choice('대대대대대대대검', 12));
page.addChoice(new Choice('활', 13));
window.book.addPage(11, page);
