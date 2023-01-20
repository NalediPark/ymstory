var page = new Page();

page.text = `
나는결국 좀비바이러스가 지속되어 식량을 구할곳을 잃고 굶어죽었다.. 백신이 있었지만 사람들에게 배포하지 않은 나는 지옥에서 살이뜯기는 고통을 10년이나 느껴야 됐다.. 환생해 처음부터 다시시작해보자
`;

page.addChoice(new Choice('처음부터', 0));

window.book.addPage(15, page);
