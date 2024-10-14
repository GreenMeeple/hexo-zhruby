const ToJyutping = require("to-jyutping");
const zhuyin = require('pinyin-zhuyin').pinyinToZhuyin;
const pinyin = require("pinyin").pinyin;

// usage: {% tag rp|rt %}

// basic tag, allow adding any word on top
hexo.extend.tag.register('ruby_def', function (args) {
  const splited = args.join(' ').split('|');
  const rp = splited[0].trim();

  if (splited.length > 1) {
    var temp_rt = splited[1].trim();
  }
  else temp_rt = "";

  const rt = temp_rt;

  return "<ruby>" + rp + "<rp>(</rp><rt>" + rt + "</rt><rp>)</rp></ruby>";
});

// JyutPing tag, automatically provide pinyin of rp if rt is missing.
// If rt is another chinese character, show rt's JyutPing instead.
hexo.extend.tag.register('ruby_jy', function (args) {
  const splited = args.join(' ').split('|');
  const rp = splited[0].trim();
  var text = rp;
  // check if rt exist
  if (splited.length > 1) {
    text = splited[1].trim();
  }
  var cjk = text;
  if(/[\u4E00-\u9FFF]/.test(cjk)){
    var cjk = ToJyutping.getJyutpingText(cjk);
  }
  
  const rt = cjk;
  
  return "<ruby>" + rp + "<rp>(</rp><rt>" + rt + "</rt><rp>)</rp></ruby>";
});

// ZhuYin tag, automatically provide pinyin of rp if rt is missing.
// If rt is another chinese character, show rt's ZhuYin instead.
hexo.extend.tag.register('ruby_zy', function (args) {
  const splited = args.join(' ').split('|');
  const rp = splited[0].trim();
  var text = rp;
  // check if rt exist
  if (splited.length > 1) {
    text = splited[1].trim();
  }
  var cjk = text;
  if(/[\u4E00-\u9FFF]/.test(cjk)){
    var cjk = pinyin(cjk, {segment: true}).flat().join(' ');
    cjk = zhuyin(cjk);
  }

  const rt = cjk;
  
  return "<ruby>" + rp + "<rp>(</rp><rt>" + rt + "</rt><rp>)</rp></ruby>";
});

// Pinyin tag, automatically provide pinyin of rp if rt is missing.
// If rt is another chinese character, show rt's Pinyin instead.
hexo.extend.tag.register('ruby_py', function (args) {
  const splited = args.join(' ').split('|');
  const rp = splited[0].trim();
  var text = rp;
  // check if rt exist
  if (splited.length > 1) {
    text = splited[1].trim();
  }
  var cjk = text;
  if(/[\u4E00-\u9FFF]/.test(cjk)){
    var cjk = pinyin(cjk, {segment: true}).flat().join(' ');
  }

  const rt = cjk;

  return "<ruby>" + rp + "<rp>(</rp><rt>" + rt + "</rt><rp>)</rp></ruby>";
});
