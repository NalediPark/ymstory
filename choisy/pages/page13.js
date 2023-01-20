var page = new Page();

page.text = `
와 ! 연기를 보고 배가 가까이 다가왔다 !!
`;

page.addChoice(new Choice('다음으로', 14));


window.book.addPage(13, page);
