var page = new Page();

page.text = `
또 본다.
으악! 엄마?! 엄마의 주먹이 날라온다.
피할까? 맞을까?
`;

page.addChoice(new Choice('피한다', 8));
page.addChoice(new Choice('맞는다', 9));

window.book.addPage(4, page);
