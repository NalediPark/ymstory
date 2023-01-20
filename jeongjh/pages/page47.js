var page = new Page();

page.text = `
당신은 뱀을 공격했다
강해짐을 느꼈다
`;

page.addChoice(new Choice('다음으로', 23));

window.book.addPage(47, page);
