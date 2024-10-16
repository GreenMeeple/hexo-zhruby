# hexo-zhruby

[![npm](https://img.shields.io/npm/v/hexo-zhruby)](https://www.npmjs.com/package/hexo-zhruby) [![types](https://img.shields.io/npm/types/hexo-zhruby)](https://www.npmjs.com/package/hexo-zhruby) [![license](https://img.shields.io/npm/l/hexo-zhruby)](https://www.npmjs.com/package/hexo-zhruby)

Implement the HTML tag `<ruby>` for Hexo using [Tag Plugin](https://hexo.io/docs/tag-plugins) feature. Provide auto pronunciation indication for Jyutping (Cantonese), Zhuyin (Taiwanese Mandarin), and Pinyin (Chinese Mandarin), and the default setting for general usage. Support Traditonal and Simplified Chinese characters.

Inspired by the [hexo-ruby-character](https://github.com/jamespan/hexo-ruby-character) by [jamespan](https://github.com/jamespan).

## Install

```
npm install hexo-zhruby --save
```
## Use cases

Ruby (ルビ) is also known as [Furigana](https://en.wikipedia.org/wiki/Furigana) (振り仮名).  It contains two basic use cases:

1. To clarify or indicate the pronunciation for readers
2. [Gikun](https://en.wikipedia.org/wiki/Kanji#Special_readings), in which the characters have different pronunciations than they seem due to convention or for a specific context. For example, the pronunciation of 煙草 in Japanese is *tabako (tobacco)*.

## Usage

**TLDR**: Usage: `{% tag rb|rt %}`; Tag options: `ruby_def`, `ruby_jy`, `ruby_py`, `ruby_zy`.

---

### For the 1st use case (pronunciation indication):

`ruby_def` allows any language, and the spacing in `rp` will expand evenly with respect to the word length in `rt`.

- `{% ruby_def 基本|きほん %}` → <ruby>基本<rp> (</rp><rt>きほん</rt><rp>) </rp></ruby>
- `{% ruby_def 基本|기본 %}` → <ruby>基本<rp> (</rp><rt>기본</rt><rp>) </rp></ruby>
- `{% ruby_def 基本|fundamental %}` → <ruby>基本<rp> (</rp><rt>fundamental</rt><rp>) </rp></ruby>
- `{% ruby_def 基本|θεμελιώδες %}` → <ruby>基本<rp> (</rp><rt>θεμελιώδες</rt><rp>) </rp></ruby>
- `{% ruby_def 基本|базовый %}` → <ruby>基本<rp> (</rp><rt>базовый</rt><rp>) </rp></ruby>
- `{% ruby_def 基本|základní %}` → <ruby>基本<rp> (</rp><rt>základní</rt><rp>) </rp></ruby>
- `{% ruby_def fundamental|基本 %}` → <ruby>fundamental<rp> (</rp><rt>基本</rt><rp>)

`ruby_jy`, `ruby_py`, `ruby_zy` refers to **Jyutping**, **Pinyin**, **Zhuyin** respectively. 

No need to enter the pronunciation manually in `rt`; the value will automatically be returned.

- `{% ruby_zy 基本 %}` → <ruby>基本<rp> (</rp><rt>ㄐㄧ ㄅㄣˇ</rt><rp>) </rp></ruby>
- `{% ruby_py 基本 %}` → <ruby>基本<rp> (</rp><rt>jī běn</rt><rp>) </rp></ruby>
- `{% ruby_jy 基本 %}` → <ruby>基本<rp> (</rp><rt>gei1 bun2</rt><rp>) </rp></ruby>

---

### For the 2nd use case (Gikun):

Same usage for `ruby_def`.

- `{% ruby_def special|basic %}` → <ruby>special<rp> (</rp><rt>basic</rt><rp>) </rp></ruby>
- `{% ruby_def 特別|基本 %}` → <ruby>特別<rp> (</rp><rt>基本</rt><rp>)

In `ruby_jy`, `ruby_py`, `ruby_zy`, you can also add `|rt` just like `ruby_def`.

- `{% ruby_zy 特別|special %}` → <ruby>特別<rp> (</rp><rt>special</rt><rp>) </rp></ruby>
- `{% ruby_py 特別|special %}` → <ruby>特別<rp> (</rp><rt>special</rt><rp>) </rp></ruby>
- `{% ruby_jy 特別|special %}` → <ruby>特別<rp> (</rp><rt>special</rt><rp>) </rp></ruby>
- `{% ruby_zy 特別|基本 %}` → <ruby>特別<rp> (</rp><rt>ㄐㄧ ㄅㄣˇ</rt><rp>) </rp></ruby>
- `{% ruby_py 特別|基本 %}` → <ruby>特別<rp> (</rp><rt>jī běn</rt><rp>) </rp></ruby>
- `{% ruby_jy 特別|基本 %}` → <ruby>特別<rp> (</rp><rt>gei1 bun2</rt><rp>) </rp></ruby>

Notice that the `rt` output depends on the pronunciation in `rt,` but **not** `rp.` This feature is only available when `rt` is a **Chinese Character** in [CJK Unified Ideographs](https://en.wikipedia.org/wiki/CJK_Unified_Ideographs_(Unicode_block)) (\U4E00-\U9FFF).

If the input of `rt` is not in CJK Unified Ideographs, it is considered as `ruby_def`.

## Known issues ##

The Chinese language contains a lot of **Homophones**, which can be resolved by context most of the time. However, for long sentences (>= 15 characters), or very specific names and terms, the auto-generation from 1st use case may not be very sensitive.

Please use `ruby_def` if it happens or contribute to this project by providing a more sensitive or advanced Chinese vocabulary library.

## References ##

- [CJK Unified Ideographs (Unicode block)](https://en.wikipedia.org/wiki/CJK_characters)
- [Homophone](https://en.wikipedia.org/wiki/Homophone)
- [Gikun (japanese only)](https://en.wiktionary.org/wiki/%E7%BE%A9%E8%A8%93#Japanese)
- [Gikun (English version under the article Kanji)](https://en.wikipedia.org/wiki/Kanji#Special_readings)
- [\<ruby\>: The Ruby Annotation element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)
- [Unicode/Character reference](https://en.wikibooks.org/wiki/Unicode/Character_reference)
- [Universal Character Set characters (Unicode)](https://en.wikipedia.org/wiki/Universal_Character_Set_characters)
