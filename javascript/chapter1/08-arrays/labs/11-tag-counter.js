/*
게시글들의 해시태그들을 모아서 각 해시태그가 몇 번 등장했는지 세어보세요.
*/

const posts = [
    { title: "첫 글", tags: ["#daily", "#fun"] },
    { title: "맛집 후기", tags: ["#food", "#daily"] },
    { title: "운동 루틴", tags: ["#fitness", "#health"] },
];

// TODO: 모든 태그를 하나의 배열로 합친 후, forEach로 개수 세기
const tags = posts.flatMap((post) => post.tags);
console.log(tags);

let tagCnt = {}; // 객체

tags.forEach((tag) => {
    if (tagCnt[tag]) {
        tagCnt[tag]++;
    } else {
        tagCnt[tag] = 1;
    }
});

console.log(tagCnt);
