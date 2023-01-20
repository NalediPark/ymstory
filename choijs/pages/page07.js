var page = new Page();

page.text = `
밖에 나가서 놀아야지!!!
`;

page.addChoice(new Choice('처음으로', 8));


window.book.addPage(7, page);
