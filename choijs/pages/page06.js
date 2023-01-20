var page = new Page();

page.text = `
공부 다했다!!!이제 놀아야지!!
`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(6, page);
