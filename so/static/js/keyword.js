$(function () {

  
  // 注册 Vue.js site-panel 组件
  Vue.component('site-panel', {
    props: {
      id: String,
      group: Object,
      sites: Array
    },
    template: '#site-panel-template'
  });

  //=============== 常量区 ===================
 
  const siteTemplates = 
  [
    {
      "id":"se",
      "group":{
        "title": "搜索引擎&知名网站",
      },
      "sites":[
        {
          "name":"百度",
          "url":"https://www.baidu.com/",
          "searchTemplate":"https://www.baidu.com/s?wd={{keyword}}"
        },
        {
          "name":"谷歌",
          "url":"https://www.google.com/",
          "searchTemplate":"https://www.google.com/search?newwindow=1&q={{keyword}}"
        },
        {
          "name":"Bing",
          "url":"https://cn.bing.com/",
          "searchTemplate":"https://cn.bing.com/search?q={{keyword}}"
        },
        {
          "name":"微信",
          "url":"https://weixin.sogou.com/",
          "searchTemplate":"https://weixin.sogou.com/weixin?type=2&query={{keyword}}"
        },
        {
          "name":"知乎",
          "url":"https://www.zhihu.com/",
          "searchTemplate":"https://www.sogou.com/sogou?query={{keyword}}&insite=zhihu.com"
        },
        {
          "name":"简书",
          "url":"https://www.jianshu.com/",
          "searchTemplate":"https://www.jianshu.com/search?q={{keyword}}&page=1&type=note"
        }
      ]
    },
    {
      "id":"test",
      "group":{
        "title": "测试社区",
      },
      "sites":[
        {
          "name":"TesterHome",
          "url":"https://testerhome.com/",
          "searchTemplate":"https://testerhome.com/search?q={{keyword}}"
        },
        {
          "name":"测试窝",
          "url":"https://www.testwo.com/",
          "searchTemplate":"https://www.testwo.com/cse/search?q={{keyword}}&click=1&entry=1&s=14266219828872573315&nsid="
        },
        {
          "name":"51Testing",
          "url":"http://www.51testing.com/",
          "searchTemplate":"http://www.51testing.com/batch.search.php?searchkey={{keyword}}&type=news"
        },
        {
          "name":"软件测试网",
          "url":"http://www.softtest.com/",
          "searchTemplate":"http://www.softtest.com/index.php?m=search&c=index&a=init&typeid=1&q={{keyword}}&siteid=1&time=all"
        },
        {
          "name":"EuroSTAR",
          "url":"https://huddle.eurostarsoftwaretesting.com/",
          "searchTemplate":"https://huddle.eurostarsoftwaretesting.com/?s={{keyword}}"
        },
        {
          "name":"TOOLSQA",
          "url":"https://www.toolsqa.com/",
          "searchTemplate":"https://www.toolsqa.com/?s={{keyword}}"
        }
      ]
    },
    {
      "id":"tech",
      "group":{
        "title": "技术社区",
      },
      "sites":[
        {
          "name":"Stack Overflow",
          "url":"https://stackoverflow.com/",
          "searchTemplate":"https://stackoverflow.com/search?q={{keyword}}"
        },
        {
          "name":"CSDN",
          "url":"https://www.csdn.net/",
          "searchTemplate":"https://so.csdn.net/so/search/s.do?q={{keyword}}"
        },
        {
          "name":"SegmentFault",
          "url":"https://segmentfault.com/",
          "searchTemplate":"https://segmentfault.com/search?q={{keyword}}"
        },
        {
          "name":"博客园",
          "url":"https://www.cnblogs.com/",
          "searchTemplate":"https://www.baidu.com/s?wd=site%3Acnblogs.com%20{{keyword}}"
        },
        {
          "name":"OSCHINA",
          "url":"https://www.oschina.net/",
          "searchTemplate":"https://www.oschina.net/search?scope=all&q={{keyword}}"
        },
        {
          "name":"开发者头条",
          "url":"https://toutiao.io/",
          "searchTemplate":"https://toutiao.io/search?utf8=%E2%9C%93&q={{keyword}}"
        },
        {
          "name":"掘金",
          "url":"https://juejin.im/",
          "searchTemplate":"https://juejin.im/search?query={{keyword}}&type=all"
        },
        {
          "name":"ThoughtWorks洞见",
          "url":"https://insights.thoughtworks.cn/",
          "searchTemplate":"https://insights.thoughtworks.cn/?s={{keyword}}"
        }
      ]
    },
    {
      "id":"video",
      "group":{
        "title": "视频",
      },
      "sites":[
        {
          "name":"哔哩哔哩",
          "url":"https://www.bilibili.com/",
          "searchTemplate":"https://search.bilibili.com/all?keyword={{keyword}}"
        },
        {
          "name":"Youtube",
          "url":"https://www.youtube.com/",
          "searchTemplate":"https://www.youtube.com/results?search_query={{keyword}}"
        },
        {
          "name":"今日头条",
          "url":"https://www.toutiao.com/",
          "searchTemplate":"https://www.toutiao.com/search/?keyword={{keyword}}"
        },
        {
          "name":"优酷",
          "url":"https://www.youku.com/",
          "searchTemplate":"https://so.youku.com/search_video/q_{{keyword}}"
        },
        {
          "name":"爱奇艺",
          "url":"https://www.iqiyi.com/",
          "searchTemplate":"https://so.iqiyi.com/so/q_{{keyword}}"
        },
        {
          "name":"腾讯视频",
          "url":"https://v.qq.com/",
          "searchTemplate":"https://v.qq.com/x/search/?q={{keyword}}"
        }
      ]
    },
    {
      "id":"ebook",
      "group":{
        "title": "电子书",
      },
      "sites":[
        {
          "name":"豆瓣读书",
          "url":"https://book.douban.com/",
          "searchTemplate":"https://search.douban.com/book/subject_search?search_text={{keyword}}"
        },
        {
          "name":"多抓鱼",
          "url":"https://www.duozhuayu.com/",
          "searchTemplate":"https://www.duozhuayu.com/search/{{keyword}}"
        },
        {
          "name":"IT熊猫",
          "url":"https://itpanda.net/",
          "searchTemplate":"https://itpanda.net/book/search?query={{keyword}}"
        },
        {
          "name":"Java电子书大全",
          "url":"https://www.ebook23.com/",
          "searchTemplate":"https://www.ebook23.com/"
        },
        {
          "name":"twirpx",
          "url":"https://www.twirpx.com/",
          "searchTemplate":"https://www.twirpx.com/search/"
        },
        {
          "name":"Library Genesis",
          "url":"https://libgen.lc/",
          "searchTemplate":"https://libgen.lc/search.php?&req={{keyword}}&sort=year&sortmode=DESC"
        },
        {
          "name":"All IT eBooks",
          "url":"http://www.allitebooks.org/",
          "searchTemplate":"http://www.allitebooks.org/?s={{keyword}}"
        },
        {
          "name":"OnlineProgrammingBooks",
          "url":"https://www.onlineprogrammingbooks.com/",
          "searchTemplate":"https://www.onlineprogrammingbooks.com/search/{{keyword}}"
        }
      ]
    },
    {
      "id":"other",
      "group":{
        "title": "代码&专利",
      },
      "sites":[
        {
          "name":"GitHub",
          "url":"https://github.com/",
          "searchTemplate":"https://github.com/search?q={{keyword}}"
        },
        {
          "name":"SooPAT",
          "url":"http://www.soopat.com/",
          "searchTemplate":"http://www.soopat.com/Home/Result?SearchWord={{keyword}}&FMZL=Y&SYXX=Y&WGZL=Y&FMSQ=Y"
        }
      ]
    },
    {
      "id":"network_disk",
      "group":{
        "title": "网盘搜索",
      },
      "sites":[
        {
          "name":"云盘精灵",
          "url":"https://www.yunpanjingling.com/",
          "searchTemplate":"https://www.yunpanjingling.com/search/{{keyword}}"
        },
        {
          "name":"大力盘搜索",
          "url":"https://www.dalipan.com/",
          "searchTemplate":"https://www.dalipan.com/search?keyword={{keyword}}"
        },
        {
          "name":"罗马盘",
          "url":"https://www.luomapan.com/",
          "searchTemplate":"https://www.luomapan.com/search?keyword={{keyword}}"
        },
        {
          "name":"小可搜搜",
          "url":"https://www.xiaokesoso.com/",
          "searchTemplate":"https://www.xiaokesoso.com/s/search?q={{keyword}}"
        }
      ]
    },
    {
      "id":"edu",
      "group":{
        "title": "教育网站",
      },
      "sites":[
        {
          "name":"慕课网",
          "url":"https://www.imooc.com/",
          "searchTemplate":"https://www.imooc.com/search/?words={{keyword}}"
        },
        {
          "name":"极客时间",
          "url":"https://time.geekbang.org/",
          "searchTemplate":"https://time.geekbang.org/search?q={{keyword}}"
        },
        {
          "name":"腾讯课堂",
          "url":"https://ke.qq.com/",
          "searchTemplate":"https://ke.qq.com/course/list/{{keyword}}"
        },
        {
          "name":"网易云课堂",
          "url":"https://study.163.com/",
          "searchTemplate":"https://study.163.com/courses-search?keyword={{keyword}}"
        },
        {
          "name":"实验楼",
          "url":"https://www.shiyanlou.com/",
          "searchTemplate":"https://www.shiyanlou.com/search/?type=course&search={{keyword}}"
        },
        {
          "name":"W3Cschool",
          "url":"https://www.w3cschool.cn/",
          "searchTemplate":"https://www.w3cschool.cn/search?w={{keyword}}"
        },
        {
          "name":"极客学院",
          "url":"https://www.jikexueyuan.com/",
          "searchTemplate":"https://search.jikexueyuan.com/course/?q={{keyword}}"
        }
      ]
    }
  ];

  //=============== 初始化 ===================
  var vm = new Vue({
    el:'#main-content',
    data:{
      'paneldatas':[]
    },
    created: function(){
      this.initPaneldatas();
    },
    methods:{
      initPaneldatas: function(){
          this.paneldatas = JSON.parse(JSON.stringify(siteTemplates));
      }
    }
  });

  //=============== 注册事件 ===================
  // 关键词搜索输入
  $('#search_keyword')
    .on('focus', function () {      //聚焦事件
      var keyword = $(this).val();
      keywordChange(keyword);
    })
    .on('keyup', function (event) { //按键弹起事件
      var keyword = $(this).val();
      keywordChange(keyword);
    })
    .on('blur', function () {       //失去焦点事件
      var keyword = $(this).val().trim();
      if (keyword === '') {
        vm.paneldatas = JSON.parse(JSON.stringify(siteTemplates));
      } else {
        //改变网站地址，即 href
        vm.paneldatas.forEach(group => {
          var sites = group.sites;
          sites.forEach(site => {
            switch(site.name){
              case "51Testing":
                var url = site.searchTemplate.replace(/{{keyword}}/,keyword);
                site.url = encodeURI(url);    //编码了也不行，51Testing 应该做了些什么，防止爬虫
                break;
              default:
                site.url = site.searchTemplate.replace(/{{keyword}}/,keyword);
            }
          });
        });
      }
    });

  // 清空输入框
  $('#clear_keyword').on('click', function () {
    $('#search_keyword').val('');
    $('#search_keyword').focus();
    $('#clear_keyword').hide();
  });

  // 点击高亮显示输入框
  $('#search_keyword').on('focus',  function () {
    $('.search-left').css(
      {
        "border-style":"solid",
        "border-color": "rgba(24, 144, 255, 1)",
        "box-shadow": "0px 0px 2px 1px rgba(145, 213, 255, 0.96)",
      }
    );
  }).on('blur',  function () {
    $('.search-left').prop('style','');
  });

  //输入框内容变化，展示/隐藏 “清空” 图标
  function keywordChange(keyword) {
    if (keyword === '') {
      $('#clear_keyword').hide();
    } else {
      $('#clear_keyword').show();
    }
  }

});