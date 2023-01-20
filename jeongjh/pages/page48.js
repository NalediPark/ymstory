var page = new Page();

page.text = `
당신은 뱀을 공격했다
강해짐을 느꼈다
`;

page.addChoice(new Choice('다음으로', 52));

window.book.addPage(48, page);
