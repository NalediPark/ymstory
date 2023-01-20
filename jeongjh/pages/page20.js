var page = new Page();

page.text = `
나는 방해물을 제거해나가며 나아갔다
`;

page.addChoice(new Choice('다음으로', 24));

window.book.addPage(20, page);
