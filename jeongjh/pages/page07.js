var page = new Page();

page.text = `
당신은 강해짐을 느꼈다

`;

page.addChoice(new Choice('. . .', 11));

window.book.addPage(7, page);
