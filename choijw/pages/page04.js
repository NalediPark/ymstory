var page = new Page();

page.text = `
국어를선택 했다.
집에가서공부를하자
6700원을 얻음
`;
page.addChoice(new Choice('다음',6 ));


window.book.addPage(4, page);
