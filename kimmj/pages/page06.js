var page = new Page();

page.text = `
놀다 들어와 엄마한테 크게 혼났다
`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(6, page);
