var page = new Page();

page.text = `
혼나지는 않았다.
이제 뭐하고 놀까?
`;

page.addChoice(new Choice('허락X게임', 11));
page.addChoice(new Choice('허락O게임', 12));

window.book.addPage(9, page);
