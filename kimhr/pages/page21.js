var page = new Page();

page.text = `
역시 열어주길 잘했다! 근데 좀 불안한데,, 음식과함께 내쫒을까 그냥 둘까?
`;

page.addChoice(new Choice('내쫒는다.', 12));
page.addChoice(new Choice('그냥둔다.', 24));

window.book.addPage(21, page);
