var page = new Page();

page.text = `
문이네...나갈래?
`;

page.addChoice(new Choice('아니', 21));
page.addChoice(new Choice('응', 21));

window.book.addPage(24, page);
