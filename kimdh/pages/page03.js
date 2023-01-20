var page = new Page();

page.text = `
공부를 안한다고 한 당신

`;

page.addChoice(new Choice('게임을 할건가요?', 6));
page.addChoice(new Choice('잘 건가요?', 7));

window.book.addPage(3, page);
