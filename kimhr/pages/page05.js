var page = new Page();

page.text = `
누군가 문을두드린다.. 연구원이라는데 열어줄까..? 불안한데 열어주지말까.?
`;

page.addChoice(new Choice('연구원이니까 괜찮겠지 열어준다', 19));
page.addChoice(new Choice('그래도 불안한데..열어주지않는다', 6));

window.book.addPage(5, page);
