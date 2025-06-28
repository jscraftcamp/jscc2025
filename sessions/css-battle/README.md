# CSS Battle

Check out cssbattle.dev - since we talked about the Pacman rule, we did battle #119: https://cssbattle.dev/play/119
(Sadly, we only got to 99.9% 😭)

```html
<div class="pacman"></div>
<div class="dots"></div>
<div class="ghost"></div>
<style>
  body {
    background: #000;
    display: grid;
    place-items: center;
  }
  .ghost {
    height: 60px;
    width: 60px;
    position: fixed;
    right: 60px;
    border-radius: 50% 50% 0 0;
    clip-path: shape(from 100% 100%, line to 100% 0, line to 0 0, line to 0 60px,line to 10px 50px,line to 20px 60px,line to 30px 50px,line to 40px 60px,line to 50px 50px);
/*    clip-path: shape(from 0 100%,line to 10px 50px, line to 20px 60px, line to 30px 50px, line to 40px 60px, line to 50px 50px, line to 60px 60px);*/
    background: #C74E4E;
  }
  .dots {
    height: 10px;
    width: 10px;
    background: #fff;
    border-radius: 50%;
    box-shadow: -30px 0 0 #fff,30px 0 0 #fff;
  }
  .pacman {
    width: 70px;
    height: 70px;
    position: fixed;
    left: 55px;
    background:
      radial-gradient(transparent 30px, #000 0),
      conic-gradient(#E0E246 45deg, #000 0 135deg, #E0E246 0);
  }
</style>
```


## Saturday session

https://cssbattle.dev/play/210

100% solution with clip-path

```html
<div></div>
<style>
  body {
    display:grid;
    place-items:center;
    background:#151917;
  }
  div {
    width: 210px;
    height: 210px;
    border: 20px solid #D83A34;
    border-radius: 50%;
  }
  div:after {
    content: '';
    position:absolute;
    inset:0;
    clip-path: shape(from 137px 81px, line to 262px 81px, line to 216px 50%, line to 262px 219px, line to 137px 219px, line to 183px 50%);
    background: #D83A34;
  }
</style>
```

99.9% solution with -webkit-box-reflect:

<details>
<summary>Code Source – <strong>597.3 {448}</strong></summary>
<!-- have to be followed by an empty line! -->

```html
<div><p></p></div>
<style>
  body {
    display:grid;
    place-items:center;
    background:#151917;
  }
  div {
    width: 210px;
    height: 210px;
    border: 20px solid #D83A34;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  p {
    position: absolute;
    top: 65px;
    border: 63.3px solid transparent;
    border-top: 94.5px solid #D83A34;
    border-bottom: 0;
    -webkit-box-reflect: below -50px;
  }
</style>
```

</details>

