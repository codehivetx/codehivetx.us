---
title: IETF BCP 47 - extensions
date: 2024-09-11
tags:
    - bcp47
draft: true
---

This is the second post in a discussion of [BCP 47][] Language Tags, in which we will explore extensions to BCP 47, both current and future.

---

_Note: For the first part of this series, see [Part I: BCP47](./2024-bcp47.md)_

## Extensions

As we saw last time, IETF BCP 47 builds on and extends previous standards to provide access to a wide array of possible language tags. The [ISO 639][] language part alone can choose any one of several thousand languages, plus scripts, regions, and registered variants.  Just from these facilities, BCP 47 is very productive.

This is all great, until we need to go beyong these capabilities.  Which brings us to the topic of extensions.

## Extensions in general

BCP 47 provides for _registered_ single letter extensions (besides `x` which we will discuss below). You can see the registry [here][language-tag-extensions-registry].
As of this writing, `u` and `t` are registered.

## `u`: Unicode extensions

You can find the official docs for the `-u-` extension [here][u-extension], especially the [key/type definitions][u-key-type].

The -u- extensions provide a variety of additional dimensions to language tags. I will highlight a couple here.

- `-u-sd` is one that might refer to a purely linguistic difference in the tagged content. For example, `en-US-u-sd-ustx` could refer to English as spoken in Texas (Texan!). `mt-u-sd-mt43` would be Maltese as spoken in [Ħal Qormi](https://en.wikipedia.org/wiki/Qormi_dialect) and so on.

Most of the other subtags affect how software processing or producing text using [CLDR][] locale data operates. For example:

- `en-u-tz-uslax` uses a UN LOCODE (in this case US-LAX, which, yes, refers to [Los Angeles International Airport](https://airportcodes.aero/lax)) that identifies, very compactly, the time zone `America/Los_Angeles`.  This type of a subtag is useful to convey user preferences, such as time zone, in environments (such as a browser context) where there otherwise isn't a way to convey such information.

- `en-US-u-hc-h24` specifies that you want 24 hour time, despite the preferred value for `en-US` as normally indicating 12 hour time. Again, this allows for a level of user 'customization' and could be passed to a an API performing date formatting.

- `cs-u-co-search` specifies the Czech language, but that a different collator is requested - one optimized for searching text, instead of sorting.  This useful as an argument to an API function.

See [the whole list][u-key-type] for the latest details. CLDR continues to add new keys periodically as need arises.

## `t`: Transform extensions

You can find the official docs for the `-t-` extension in [TR #35][t-extension] and also in [RFC 6497][].

`-t-` has to do with transformed content, sometimes known as (but going well beyond) transliteration (another T).

The `-t-` extension is useful for tagging content, for using as arguments to APIs which perform transform operations, and for identifying keyboards (more on that).

First, some examples.

- `el-Latn-t-el-Grek`  This is content that is _in_ Latin, in fact, it's Greek written in Latin, but it is transformed _from_ `el-Grek` that is, from Greek in the Greek script.

- `el-Latn-t-el-m0-bgn` This is content _in_ Latin, again Greek in Latin, but transformed from Greek (the Greek script is assumed), but according to
So `zoí` for example would be the transformed version of `ζωή` (which is in `el-Grek`). The `m0-bgn` specifies that the transform is according to the [United States Board on Geographic Names (BGN)][BGN].

- From the RFC, `und-Cyrl-t-und-latn-m0-ungegn-2007`. This is a transform from Latin to Cyrillic, using the 2007 version of the UN/GEGN rules.

- `hi-t-en-h0-hybrid` Hinglish! Yes, Hindi but including English. The [spec](https://www.unicode.org/reports/tr35/#Hybrid_Locale) gives some additional examples.

- Finally, `en-t-k0-colemak` can be used to specify an English keyboard, using the Colemak layout. See also [LDML Keyboards][].

## And more?

Those are all of the registered extensions as of this writing. But perhaps more are needed.

For example, the [Kinyamulenge](https://en.wikipedia.org/wiki/Banyamulenge) language considered a dialect of Kinyarwanda (Rwandan, `rw`) and so does not have its own [ISO 639][] code.  However, it has very distinct orthography and vocabulary.  How can documents be tagged properly that are in Kinyamulenge, or, locale data be selected?

- One option might be to register an IANA [variant tag][iana-lsr], `rw-`_something_.
- Since Kinyamulenge is spoken in the South Kivu province, perhaps the CLDR `-u-` subtag could be used: `rw-u-sd-cdsk` where `CD-SK` is the [ISO 3166-2:CD][] (subdivision) code referring to South Kivu province of the Democratic Republic of the Congo.
- There's some discussion underway about a possible extension to allow dialects and other variants to be chosen according to [ISO 21636][]. Perhaps the Glottolog code [`mule1238`][mule1238] could be used here somehow:  `rw-≈-gl-mule1238` (I'm using ≈ because there's no extension letter yet!)

One thing to note for all three of these approaches is that they gracefully degrade. That is, applications which don't understand the additional tags, can follow the fallback rules and they will end up with `rw` (Rwandan) which is a reasonable fallback for Kinyamulenge.

## Private use and the `x` escape hatch

I call this an "escape hatch", and I put this last in this article, because the options describe here should really be a last resort. Try everything else first!  That said, there are very valid reasons for using private use codes and extensions.

First, a note on "private use."  Private use is the opposite of public interchange.  Standards exist so that people (and software) around the world can send bits to one another by various means (such as viewing this blog post) and know that the data will be unambiguously receivable at the other end, without having to pre-arrange anything.  This doesn't guarantee that the receiver can read, interpret, or display the contents, but it does mean that there isn't any confusion at the architectural level as to what's sent or meant.

Thanks to the Unicode Standard, I can include text in this blog post in ᓀᐦᐃᓇᐍᐏᐣ or 𞤆𞤵𞤤𞤢𞤪 without having to pre-arrange what encoding scheme to use, and without you having to choose the right entry from the **Encoding...** menu.  You might not have the fonts or the display technology for it.

Private use refers to a _closed system_ of mutual _private agreement_, just as you'd need for a predefined "secret code" cipher book, where A=1, B=2, C=3 and so on.  Only people with the code book can read your message.

In this era of having thousands of "friends", a "private agreement" might mean: Everyone on this mailing list uses this system. Or, everyone accessing this website uses this system.  Better yet, "private use" would be confined to your own data/software.  That is, you might use BCP 47 language tags including private use codes or extensions, but would not send those tags to arbitrary people or processes.  The private tags would be prevented from "leaking out" as much as possible.

### Risks of private use

Being private and not registered, there are two obvious concerns and one not so obvious.

1. The first, more minor, is unusability.  Without private agreement, the other party won't know what to do with your private extension or code.  It may perform some fallback behavior, or fail completely depending on what the application is.

2. However, worse than a "good failure" is that a private code could, and probably is, used in a different way by a different user.  As a [list on wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#User-assigned_code_elements) notes, `XA` for example is known to have multiple meanings.

3. If a private use code is actually something that has a widespread need (and the appropriate criteria are met), an official code might come along. Then, you will have to update your application to use the "official" code, and perhaps deal with the disparities of having two ways to represent the same information.

With those caveats, let's take an overview of the world of private use tags.

### Private use language, script, and region codes

While not a part of BCP 47 itself, it should be noted here that the [ISO 639][], [ISO 15924][] and [ISO 3166][] standards themselves include "private use" codes which will never be assigned to regular values. See those standards for details, but I will give some examples of how these might be used.  Note that these remain private - mentioning them here doesn't in any way remove them from the possibility of other private use!

- Unicode [CLDR][] - for internal processing - has used among others:
  - `Qaag` for Zawgyi "script"
  - `QO` for Outlying Oceana
  - `ZZ` for "Any Region"
  - CLDR Previously used `Qaai` for "Inherited", which is now `Zinh`
- A large number of private use language codes are mapped to constructed languages for users of the [ConLang Code Registry (CLCR)][CLCR], such as `qaz` for Tolkein's Adûnaic language.

To take up the Kinyamulenge example above, one could arbitrarily use `qml` for Kinyamulenge, within a closed system.

### Private use language extension tags

We mentioned `x-` briefly last time, with the example of `x-codehive`. Actually, if the tag begins with an `x-` then the entire tag is private use.  You can do whatever you want!  And other software will have no idea what the tag means.

But, `-x-` can also be used as a private use extension, at the end of a language tag. Using another example from [CLCR][] that uses the [ISO 639][] code `art` (Artificial Languages), `art-x-adunaic` is used to refer to Adûnaic.  All software can recognize the `art`, and then the rest is private.  Again the `-x-` portion must be at the entire end of the sequence.

SIL's [SLDR][] repository and langtags.json file also uses `-x-` to refer to languages and dialects that don't otherwise have an assigned tag. For example, `acr-x-rabinal` to refer to the Rabinal dialect of the [Achi](https://en.wikipedia.org/wiki/Achi_language) language.

Again to give the Kinyamulenge exmaple, one could use `rw-x-mulenge`. This could be used today (as private use) with the benefit that software processing this tag could "fall back" to `rw` Kinyarwanda.

## Conclusion


<!-- Footnotes -->

[CLDR]: https://cldr.unicode.org
[CLCR]: https://www.kreativekorp.com/clcr/
[IETF]: https://ietf.org
[BCP 47]: https://www.rfc-editor.org/info/bcp47
[RFC 3066]: https://www.rfc-editor.org/info/rfc3066
[RFC 1766]: https://www.rfc-editor.org/info/rfc1766
[RFC 4647]: https://www.rfc-editor.org/info/rfc4647
[RFC 6497]: https://www.ietf.org/rfc/rfc6497.txt
[RFC 5646]: https://www.rfc-editor.org/info/rfc5646
[rfcstatus]: https://www.ietf.org/process/rfcs/#streams
[ISO 639]: https://www.iso.org/iso-639-language-code
[ISO 3166]: https://www.iso.org/iso-3166-country-codes.html
[ISO 15924]: https://www.unicode.org/iso15924/
[M.49]: https://unstats.un.org/unsd/methodology/m49/
[iana-lsr]: https://www.iana.org/assignments/lang-subtags-templates/
[language-tag-extensions-registry]: https://www.iana.org/assignments/language-tag-extensions-registry/language-tag-extensions-registry
[u-extension]: https://www.unicode.org/reports/tr35/#u_Extension
[t-extension]: https://www.unicode.org/reports/tr35/#BCP47_T_Extension
[u-key-type]: https://www.unicode.org/reports/tr35/#table-key-type-definitions
[BGN]: https://geonames.nga.mil/geonames/GNSHome/welcome.html
[LDML Keyboards]: https://cldr.unicode.org/index/keyboard-workgroup
[ISO 21636]: https://www.iso.org/standard/84965.html
[ISO 3166-2:CD]: https://en.wikipedia.org/wiki/ISO_3166-2:CD
[mule1238]: https://glottolog.org/resource/languoid/id/mule1238
[SLDR]: https://github.com/silnrsi/sldr
