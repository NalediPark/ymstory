var page = new Page();

page.text = `
거짓된 선택을해서 속이려 해도 안돼
이건 니가 저지른 거니까
`;

page.addChoice(new Choice('...', 27));

window.book.addPage(51, page);
