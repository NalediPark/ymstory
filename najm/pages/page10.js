var page = new Page();

page.text = `
영희에게 참 즐거운.. 하루엿어요… 집에 가자마자 영희는 잣답니다...
`;

page.addChoice(new Choice('다음', 11));

window.book.addPage(10, page);
