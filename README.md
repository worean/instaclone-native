# Instaclone React Native Application
    React Native를 이용하여 Instaclone을 클론코딩하며
    React Native 관련 지식과 사용방법을 익히는데 목적이 있다.

    또한 해당 소스를 기반으로 수정하여 *Basket(게임 SNS Application)* 을 제작할 예정이다.



현재 Login/ LogOut 상태의 2가지 형태로 기본 제공하며,
1. LogOut : LoggedOut Navigation을 사용하며, 해당 하위 스크린으로서 Login, CreateAccount 2가지가 존재한다.
  1. Login Screen : 
  2. CreateAccount Screen

2. LogIn : Login이 된 상태의 Navigation이며, 기본적으로 Tab Navigation을 사용하며, 하위 5가지의 Stack Navigation을 제공한다.
  1. Home Screen (Feed.js) : 실제 실시간 Feed 정보가 보이는 스크린, 자신과 연관된 Feed들이 올라온다.
  2. Search Screen (Search.js) : Search Bar가 나오며, 해당 Bar에 검색을 통해서 원하는 Feed를 검색하고, 찾아볼 수 있다.
  3. Upload Screen (Upload.js) : 클라우드에 저장된 영상을 업로드하기 위한 스크린으로, 기본적인 영상길이 조절기능도 들어가 있다.
  4. Notification Screen (Notifications.js) : 자신에게 들어온 메시지 또는 알림을 볼 수 있으며, 해당 알림이나 메시지를 클릭하여 Feed, Comment나 Profile로 이동할 수 있다.
  5. Profile Screen (MyProfile.js) : 자기 자신의 프로파일을 보며, 지금 까지 업로드된 Feed들을 확인하고 볼수 있으며, 전체 팔로워 수나, 팔로잉 수를 확인 할 수 있다.  
  
   - 해당 내용은 Photo(Post.js로 수정 예정)과 Comment Screen 을 이용해서 Feed와 Feed를 눌렀을 때의 반응을 다룰 예정이며, avatar를 클릭할 때나, 닉네임을 클릭 할 때 해당 닉네임을 가지는 프로파일을 Profile.js 컴포넌트를 통해서 그려준다.