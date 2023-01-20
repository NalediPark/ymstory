var page = new Page();

page.text = `
당ㅅ..나는 뱀을 공격했다
`;

page.addChoice(new Choice('다음으로...', 20));

window.book.addPage(16, page);
