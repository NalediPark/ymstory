var page = new Page();

page.text = `
박사님 감사합니다!! 이백신.. 나혼자 가지고 있다가 쓸까.. 사람들한테 배포해 좀비를 모두처치할까..?
`;

page.addChoice(new Choice('나혼자 가지고 있다가 쓴다.', 15));
page.addChoice(new Choice('사람들에게 배포해 좀비를 처치한다.', 16));

window.book.addPage(14, page);
