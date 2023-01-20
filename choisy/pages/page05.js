var page = new Page();

page.text = `
너무 배가 고파.. 먹을게 없어..
`;

page.addChoice(new Choice('다음으로', 15));


window.book.addPage(5, page);
