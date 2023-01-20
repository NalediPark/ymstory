var page = new Page();

page.text = `
헉 밖은 좀비때로 가득하잖아?! 빨리 편의점으로 향할까 좀비는 눈이없으니 조용히 숨죽이며 천천히갈까?
`;

page.addChoice(new Choice('빨리 편의점으로 향한다.', 7));
page.addChoice(new Choice('조용히 숨죽이며 천천히간다.', 10));

window.book.addPage(4, page);
