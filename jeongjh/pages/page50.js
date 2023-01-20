var page = new Page();

page.text = `
당신은 뱀을 설득 했다
`;

page.addChoice(new Choice('다음으로', 23));

window.book.addPage(50, page);
