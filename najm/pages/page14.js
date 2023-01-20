var page = new Page();

page.text = `
내일은 영희가 기다리던 체험학습날 이에요!
`;

page.addChoice(new Choice('끗', 0));

window.book.addPage(14, page);
