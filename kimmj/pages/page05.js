var page = new Page();

page.text = `
개그를 보며깔깔 웃었다.
`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(5, page);
