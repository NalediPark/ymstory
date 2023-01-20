var page = new Page();

page.text = `
좀비잖아? 일단집으로 돌아갈까? 나온김에 식량을 구해갈까?
`;

page.addChoice(new Choice('일단 집으로 돌아간다', 5));
page.addChoice(new Choice('나온김에 식량을 구해간다', 4));

window.book.addPage(3, page);
