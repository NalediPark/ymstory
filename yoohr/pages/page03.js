var page = new Page();

page.text = `
추운 겨울에 내가 먹는 음식은?

`;

page.addChoice(new Choice('따뜻한 음식', 6));
page.addChoice(new Choice('차가운 음식', 7));

window.book.addPage(3, page);
