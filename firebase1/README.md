# Firebase를 React에 적용시키자

1. Firebase는 Json으로 출력된다.
 - 해당 DB URL 뒤에 XXX.json을 붙여서 주소창에 입력하면 DB확인 가능

2. state 변수를 설정하고 fetch함수를 통해 Json데이터를 불러온 후 setState로 변수에 담아주기

3. 담아준 state 변수를 map함수로 찍어낼 수 있다.

4. firebase 기본 문법
 - const db = firebase.firestore();
    db.collection('product').get().then((결과) => {
        결과.forEach((doc)=>{
      console.log(doc.data())
    })
  })

5. 클릭 시 해당 값들 DB에 저장하기
 - $('#send').click(function(){
    var 저장할거 = { 
        제목 : $('#title').val(),
        가격 : $('#price').val(),
        내용 : $('#content').val(),
        날짜 : new Date()
    }
    db.collection('product').add(저장할거).then((result)=>{
        window.location.href = '/index.html'
    }).catch((error)=>{
        실패시 실행할거~~
    })
    });

6. 이미지는 storage라는 곳에 따로 저장해야함
 - const storage = firebase.storage();
    var file = document.querySelector('#image').files[0];
    var storageRef = storage.ref();
    var 저장할경로 = storageRef.child('image/' + '파일명');
    var 업로드작업 = 저장할경로.put(file)

7. 삭제 방법
 - const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if (ok) {
        await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
    };

* 항상 접근이 되지 않는다면 규칙에 들어가서 접근규칙을 허용해주어야 함! (true)