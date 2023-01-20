var page = new Page();

page.text = `
굶어죽어도 나가지않아 굶어죽었다.
`;

page.addChoice(new Choice('처음으로', 0));

window.book.addPage(23, page);
