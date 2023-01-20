var page = new Page();

page.text = `
역시 좀비는 청각에 예민하니 천천히오는게 맞았어! 식량을 엄청많이챙길까? 며칠먹을만큼만 챙길까..?
`;

page.addChoice(new Choice('많이챙기자', 11));
page.addChoice(new Choice('먹을만큼만 챙기자', 6));

window.book.addPage(10, page);
