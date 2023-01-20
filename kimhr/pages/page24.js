var page = new Page();

page.text = `
헉 좀비에게 물린상처가 있었잖아? 어떡하지? 음식과 함께 내쫒을까 음식은 갖고 사람만 내쫒을까?
`;

page.addChoice(new Choice('음식만 갖고 내쫒는다.', 12));
page.addChoice(new Choice('음식과함께 내쫒는다', 12));

window.book.addPage(24, page);
