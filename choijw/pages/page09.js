var page = new Page();

page.text = `
수학시험은 100점
나이스!!!!!
하느님 부천님 감사함니다!
`;

page.addChoice(new Choice('다음', 0));

window.book.addPage(9, page);
