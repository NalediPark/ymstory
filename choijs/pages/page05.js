var page = new Page();

page.text = `
쳇, 한국이라니!!!
`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(5, page);
