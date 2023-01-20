var page = new Page();

page.text = `
뱀을 설득하는데 성공했다
`;

page.addChoice(new Choice('다음으로', 23));


window.book.addPage(49, page);
