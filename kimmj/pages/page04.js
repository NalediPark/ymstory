var page = new Page();

page.text = `
걱정없이 달콤한 게임을 했다.
`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(4, page);
