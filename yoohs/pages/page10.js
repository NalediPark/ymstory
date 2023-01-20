var page = new Page();

page.text = `
엄마께 졸랐다가 혼났다.
그런데,마지막날 할게 없다!
일찍 갈까,놀다 갈까?
`;

page.addChoice(new Choice('일찍 간다', 13));
page.addChoice(new Choice('놀다 간다', 14));

window.book.addPage(10, page);
