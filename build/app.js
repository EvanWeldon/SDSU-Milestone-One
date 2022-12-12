!function(e){function t(t){for(var i,a,o=t[0],c=t[1],p=t[2],l=0,u=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(h&&h(t);u.length;)u.shift()();return n.push.apply(n,p||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(i=!1)}i&&(n.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},r={0:0},n=[];function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var h=c;n.push([6,1]),s()}([,function(e,t,s){"use strict";var i=s(0),r=s.n(i);class n extends r.a.Scene{constructor(e,t){super(e),this.config=t,this.menu=[{scene:"play",text:"Start"}]}create(){this.add.image(0,0,"bg").setOrigin(0)}}t.a=n},,function(e,t,s){"use strict";var i=s(1);class r extends i.a{constructor(e){super("play",e),this.sprite=null,this.allPipes=null,this.pipeSpace=0,this.pipeRange=[100,250],this.pipeSPaceRange=[500,600],this.move=300,this.score=0,this.scoreText=""}create(){super.create(),this.player(),this.pipes(),this.colliders(),this.scoreCounter(),this.jump()}update(){this.isGameOver(),this.recycle()}background(){this.add.image(0,0,"bg").setOrigin(0,0)}player(){this.sprite=this.physics.add.sprite(this.config.startPosition.x,this.config.startPosition.y,"sprite").setOrigin(0),this.sprite.body.gravity.y=500,this.sprite.setCollideWorldBounds(!0)}pipes(){this.allPipes=this.physics.add.group();for(let e=0;e<4;e++){const e=this.allPipes.create(0,0,"pipe").setOrigin(0,1).setImmovable(!0),t=this.allPipes.create(0,0,"pipe").setOrigin(0,0).setImmovable(!0);this.pipePlacement(e,t)}this.allPipes.setVelocityX(-200)}colliders(){this.physics.add.collider(this.sprite,this.allPipes,this.gameOver,null,this)}jump(){this.input.keyboard.on("keydown_SPACE",this.spaceBarJump,this)}scoreCounter(){this.score=0,this.scoreText=this.add.text(10,10,"Score 0",{fontSize:"30px",fill:"#000"})}pipePlacement(e,t){const s=this.getPipe(),i=Phaser.Math.Between(...this.pipeRange),r=Phaser.Math.Between(30,this.config.height-30-i),n=Phaser.Math.Between(...this.pipeSPaceRange);e.x=s+n,e.y=r,t.x=e.x,t.y=e.y+i}recycle(){const e=[];this.allPipes.getChildren().forEach((t=>{t.getBounds().right<=0&&(e.push(t),2===e.length&&(this.pipePlacement(...e),this.getScore()))}))}gameOver(){this.physics.pause(),this.sprite.setTint(16711680),this.time.addEvent({delay:1e3,callback:()=>{this.scene.restart()},loop:!1})}spaceBarJump(){this.sprite.body.velocity.y=-this.move}isGameOver(){(this.sprite.getBounds().bottom>=this.config.height||this.sprite.y<=0)&&this.gameOver()}getScore(){this.score++,this.scoreText.setText("Score: "+this.score)}getPipe(){let e=0;return this.allPipes.getChildren().forEach((function(t){e=Math.max(t.x,e)})),e}}t.a=r},function(e,t,s){"use strict";var i=s(1);class r extends i.a{constructor(e){super("start",e),this.menu=[{scene:"play",text:"Start"}]}create(){this.add.image(0,0,"bg").setOrigin(0),this.scene.start("play")}}t.a=r},function(e,t,s){"use strict";(function(e){var i=s(0),r=s.n(i);class n extends r.a.Scene{constructor(e){super("preload"),this.menu=[{scene:"Play",text:"Start"}]}preload(){this.load.image("bg","assets/background.png"),this.load.image("sprite","assets/sprite.png"),this.load.image("pipe","assets/pipe.png");const t=e.env.FB_ENV||!0;this.load.on("progress",(e=>{t&&FBInstant.setLoadingProgress(100*e)})),this.load.once("complete",(()=>{t?FBInstant.startGameAsync().then((()=>{this.startGame()})):this.startGame()}))}startGame(){this.scene.start("start")}}t.a=n}).call(this,s(2))},function(e,t,s){"use strict";s.r(t),function(e){var t=s(0),i=s.n(t),r=s(3),n=s(4),a=s(5);const o={width:800,height:600,startPosition:{x:80,y:300}},c=[a.a,n.a,r.a],p={type:i.a.AUTO,...o,physics:{default:"arcade",arcade:{}},scene:c.map((e=>new e(o)))};e.env.FB_ENV,FBInstant.initializeAsync().then((()=>{new i.a.Game(p)}))}.call(this,s(2))}]);