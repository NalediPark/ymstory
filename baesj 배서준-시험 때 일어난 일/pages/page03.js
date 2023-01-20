var page = new Page();

page.text = `
공부를 하지 못했다면 시험 중에 다 모르는 문제가 나왔다.


`;

page.addChoice(new Choice('다음으로',6 ));


window.book.addPage(3, page);
