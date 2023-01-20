var page = new Page();

page.text = `
이제 드디어 결심했다.
아주 자랑스러운 선택이다.
`;

page.addChoice(new Choice('선택공부', 8 ));
page.addChoice(new Choice('선택게임', 0));

window.book.addPage(7, page);
