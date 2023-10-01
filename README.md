# Zarola Generator

## What is this?

This is a simple passphrase generator that uses the [Zarola](https://zarola.oyd.org.tr/) method. It is written in Node.js and uses the [official zarola list](https://zarola.oyd.org.tr/zarola.json).

## What is Zarola?

[As stated in the official Zarola website](https://zarola.oyd.org.tr/belgeler/zarola-nedir/), Zarola (Eng. diceware) is a technique that allows you to create easily remembered secure passwords using dice. Passwords created using the Zarola method look like `mekik posta ekran semer toprak kalem ustura`.

## How to use?

```bash
npx zarola-gen [word_count] [separator]
```

## Usage examples

```bash
npx zarola-gen
sipahi-zorba-fanta-blokaj-pare-yoga-ozden

npx zarola-gen 5
lime-hasar-yuzey-kinali-lens

npx zarola-gen 5 " "
site azmi yalniz mucize santaj
```
