var page = new Page();

page.text = `
나 이제 않쓸거임
`;

page.addChoice(new Choice('도망간다', 7));
page.addChoice(new Choice('싸운다', 6));

window.book.addPage(3, page);
