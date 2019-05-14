### 晓程序猿（微信小程序）

+ 页面UI 由三个人共同讨论怎样设计，由美工做图
+ 服务端由小程序云开发平台提供
+ 数据库中的JSON结构由我设计由另一个同学负责上传（数据上传量庞大，异常辛苦，万分感谢这位同学）


**当前版本已经上线，小程序码如下方所示**
![小程序码](https://706f-point-28b6b8-1256633983.tcb.qcloud.la/github/XIAOCHEGNXU.jpg?sign=de83ae70054b398845091bfa42aa8fb9&t=1556194263)


### 项目截图

![启动页](https://706f-point-28b6b8-1256633983.tcb.qcloud.la/github/01.jpg?sign=0e9a187cc119b1280b942593eb906a86&t=1556191668)

![首页](https://706f-point-28b6b8-1256633983.tcb.qcloud.la/github/02.jpg?sign=8512ffb6a01887c6340c64f485c9d220&t=1557811879)

![用户页](https://706f-point-28b6b8-1256633983.tcb.qcloud.la/github/03.jpg?sign=cefcff72c9872cd7c74d4e8ea67239a5&t=1557811905)

![小节](https://706f-point-28b6b8-1256633983.tcb.qcloud.la/github/04.jpg?sign=a221afb6f30ce6a7d3b8e50560a108f3&t=1556191760)

![文章详情](https://706f-point-28b6b8-1256633983.tcb.qcloud.la/github/05.jpg?sign=61fdf0f34372601e1a883b002a2fa5fa&t=1556191807)

![收藏详情页](https://706f-point-28b6b8-1256633983.tcb.qcloud.la/github/06.jpg?sign=392d5ed5621d33d7f56d09bdf819a8ad&t=1556192104)

![章节测试](https://706f-point-28b6b8-1256633983.tcb.qcloud.la/github/07.jpg?sign=2f934560242ac96abfacce7d2ea46be1&t=1557811928)

![章节测试详情](https://706f-point-28b6b8-1256633983.tcb.qcloud.la/github/08.jpg?sign=b50ccbd0de804e29ece84a3ef6604de9&t=1556191881)

![测试得分](https://706f-point-28b6b8-1256633983.tcb.qcloud.la/github/09.jpg?sign=05bc4d4b327e75a2c19bbe33c5a482f9&t=1556192215)

![徽章墙](https://706f-point-28b6b8-1256633983.tcb.qcloud.la/github/10.jpg?sign=de33cd2ff0bf9176ade43c6d2e719956&t=1556192262)





### 功能列表
+ 首页
+ 轮播页
+ 文章详情
+ 章节测试
+ 收藏功能
+ 阅读功能
+ 用户阅读进度
+ 用户阅读徽章
....

### 项目结构
```  
├─cloudfunctions
│  ├─calculate_progress
│  │      index.js
│  │      package.json
│  │      
│  ├─check_test
│  │      index.js
│  │      package.json
│  │      
│  ├─collections_add
│  │      index.js
│  │      package.json
│  │      
│  ├─collections_init
│  │      index.js
│  │      package.json
│  │      
│  ├─collection_add
│  │      index.js
│  │      package.json
│  │      
│  ├─collection_get
│  │      index.js
│  │      package.json
│  │      
│  ├─getachieve_edage
│  │      index.js
│  │      package.json
│  │      
│  ├─login
│  │      index.js
│  │      package.json
│  │      
│  ├─model_config
│  │      index.js
│  │      package.json
│  │      
│  ├─progress_init
│  │      index.js
│  │      package.json
│  │      
│  ├─remove_collection
│  │      index.js
│  │      package.json
│  │      
│  ├─retest
│  │      index.js
│  │      package.json
│  │      
│  ├─sections
│  │      index.js
│  │      package.json
│  │      
│  ├─sum
│  │      index.js
│  │      package.json
│  │      
│  ├─updata_pro
│  │      index.js
│  │      package.json
│  │      
│  ├─update_section
│  │      index.js
│  │      package.json
│  │      
│  └─user_init
│          index.js
│          package.json
│          
├─miniprogram
│  │  app.js
│  │  app.json
│  │  app.wxss
│  │  list.txt
│  │  
│  ├─images
│  │      book.png
│  │      book_2.png
│  │      book_3.png
│  │      book_4.png
│  │      chapter_name.png
│  │      chpter_name.png
│  │      col.png
│  │      collection.png
│  │      collectioned.png
│  │      datyinji.png
│  │      fail.png
│  │      index.png
│  │      index_select.png
│  │      into_section.png
│  │      logo.png
│  │      mine.png
│  │      mine_select.png
│  │      score.png
│  │      section_icon.png
│  │      section_icon_reverse.png
│  │      section_title.png
│  │      shuqian.png
│  │      shuqian_2.png
│  │      start_bg1.png
│  │      start_bg2.png
│  │      start_bg3.png
│  │      start_person.png
│  │      test_icon.png
│  │      title.png
│  │      
│  ├─pages
│  │  ├─articals
│  │  │      articals.js
│  │  │      articals.json
│  │  │      articals.wxml
│  │  │      articals.wxss
│  │  │      
│  │  ├─badage_wall
│  │  │      badage_wall.js
│  │  │      badage_wall.json
│  │  │      badage_wall.wxml
│  │  │      badage_wall.wxss
│  │  │      
│  │  ├─chapters
│  │  │      chapters.js
│  │  │      chapters.json
│  │  │      chapters.wxml
│  │  │      chapters.wxss
│  │  │      
│  │  ├─chapter_test
│  │  │      chapter_test.js
│  │  │      chapter_test.json
│  │  │      chapter_test.wxml
│  │  │      chapter_test.wxss
│  │  │      
│  │  ├─collections
│  │  │      collections.js
│  │  │      collections.json
│  │  │      collections.wxml
│  │  │      collections.wxss
│  │  │      
│  │  ├─lunbo_detail
│  │  │      lunbo_detail.js
│  │  │      lunbo_detail.json
│  │  │      lunbo_detail.wxml
│  │  │      lunbo_detail.wxss
│  │  │      
│  │  ├─question_detail
│  │  │      question_detail.js
│  │  │      question_detail.json
│  │  │      question_detail.wxml
│  │  │      question_detail.wxss
│  │  │      
│  │  ├─sections
│  │  │      sections.js
│  │  │      sections.json
│  │  │      sections.wxml
│  │  │      sections.wxss
│  │  │      
│  │  ├─start
│  │  │      start.js
│  │  │      start.json
│  │  │      start.wxml
│  │  │      start.wxss
│  │  │      
│  │  ├─test
│  │  │      test.js
│  │  │      test.json
│  │  │      test.wxml
│  │  │      test.wxss
│  │  │      
│  │  └─user_achievement
│  │          user_achievement.js
│  │          user_achievement.json
│  │          user_achievement.wxml
│  │          user_achievement.wxss
│  │          
│  ├─style
│  │      guide.wxss
│  │      
│  └─utils
│          animation.js
│          utils.js


### 交流
喜欢别忘了 Star，有问题可通过微信、公众号、QQ 群联系我，谢谢您的关注。
附上我的QQ:315782792

