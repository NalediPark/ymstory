var page = new Page();

page.text = `
숙제를 모두 완료했다
      성  공
`;

page.addChoice(new Choice('다음으로', 7));


window.book.addPage(5, page);
