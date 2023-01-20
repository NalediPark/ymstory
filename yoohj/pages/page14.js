var page = new Page();

page.text = `
주머니칼이 이정도의 힘이였다.
작은고추가 매운법.

`;

page.addChoice(new Choice('다음', 15));


window.book.addPage(14, page);
