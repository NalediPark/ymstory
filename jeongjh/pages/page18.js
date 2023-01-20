var page = new Page();

page.text = `
뱀을 설득하는데 성공했다(이성을 잡았다)
`;

page.addChoice(new Choice('다음으로', 19));

window.book.addPage(18, page);
