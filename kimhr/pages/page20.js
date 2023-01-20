var page = new Page();

page.text = `
밖으로나갈까..
`;

page.addChoice(new Choice('밖으로나간다', 4));
page.addChoice(new Choice('굶어죽어도 좀비소굴에는 나가지않는다.', 23));

window.book.addPage(20, page);
