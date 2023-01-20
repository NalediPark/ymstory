var page = new Page();

page.text = `
잠시뒤 슬라임이 나타났다

`;

page.addChoice(new Choice('당황한다', 6));

window.book.addPage(5, page);
