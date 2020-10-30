let host = this
// 获取当前窗口 id
chrome.tabs.query(
  {
    active: true,
    currentWindow: true,
  },
  function (tabs) {
    let tabId = tabs.length ? tabs[0].id : null
    // 向当前页面注入 JavaScript 脚本
    chrome.tabs.executeScript(
      tabId || null,
      {
        file: './js/recommend.js',
      },
      function () {
        // 向目标网页进行通信，向 recommend.js 发送一个消息
        chrome.tabs.sendMessage(
          tabId,
          {
            message: 'GET_TOPIC_INFO',
          },
          function (response) {
            // 获取到返回的文章 title 、url、description
            host.article.title = response.title
            host.article.link = response.link
            host.article.description = response.description
          }
        )
      }
    )
  }
)
