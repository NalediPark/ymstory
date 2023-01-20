var page = new Page();

page.text = `
당신은 보석을 발견했다
어떻게 할까?
`;

page.addChoice(new Choice('줍는다', 2));
page.addChoice(new Choice('그냥 간다', 30));

window.book.addPage(1, page);
