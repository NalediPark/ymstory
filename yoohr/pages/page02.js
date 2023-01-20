var page = new Page();

page.text = `
더운여름 내가 여름에 먹는음식은?.

`;

page.addChoice(new Choice('뜨거운음식', 4));
page.addChoice(new Choice('시원한음식', 5));

window.book.addPage(2, page);
