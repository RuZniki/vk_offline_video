chrome.webRequest.onBeforeRequest.addListener(
  // callback
  function(obj) {
    return {cancel: true};
  },
  // filters
  {
    urls: [
      'http://vk.com/login.php?act=slogin*auto=1*'
    ],
    types: ['sub_frame']
  },
  // extraInfoSpec
  ['blocking']
);