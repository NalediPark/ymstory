var page = new Page();

page.text = `
공부를선택한 당신

`;

page.addChoice(new Choice('2과목을 공부할건가요?', 4));
page.addChoice(new Choice('전과목을 공부할건가요?', 5));

window.book.addPage(2, page);
