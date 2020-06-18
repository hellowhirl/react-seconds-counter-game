(this["webpackJsonpseconds-counter-game"]=this["webpackJsonpseconds-counter-game"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(2),c=n.n(r),o=n(6),i=n(3),m=n(4),l=n(8),u=n(7),d=function(e){var t=e.message;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{height:100},className:"row justify-content-center"},s.a.createElement("div",{className:"gameMessage"},t)))},g=function(e){var t=e.onStartButtonClick,n=e.gameOn;return s.a.createElement("div",{className:"row startContainer justify-content-center"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){t()},disabled:n?"disabled":""},"START"))},h=(n(14),function(e){var t=e.time,n=e.gameOn,a=e.secondsCountingStarted,r=e.clockStop,c=e.addTimerClasses;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:c()},t),s.a.createElement("div",{className:"row justify-content-center"},n&&s.a.createElement("button",{className:"btn btn-primary mt-3 mb-3",onClick:function(){return r()},disabled:a?"":"disabled"},"STOP")))}),f=function(e){var t=e.secondsCountingStarted,n=e.time,a=e.counter,r=e.gameOn,c=e.gameOver,o=e.resetGame;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{marginBottom:20,marginTop:10},className:"row justify-content-center"},!t&&n>=9.5&&n<=10.5&&s.a.createElement("div",{className:"messageSuccess"},"Excellent!"),1===a.length&&r&&!t&&n<9.5&&s.a.createElement("div",{className:"messageFailure"},"Too Quick"),!t&&n>10.5&&s.a.createElement("div",{className:"messageFailure"},"Too Slow")),s.a.createElement("div",{className:"row justify-content-center"},c?s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return o()}},"RESET"):null))},v=n(5),p=["","Ready","Ready","3","2","1","Go!"],S=new Audio(n.n(v).a),E=["https://hellowhirl.github.io/react-seconds-counter-game/static/media/ready2count.05013ceb.m4a"];function y(e){var t=new Audio;t.addEventListener("canplaythrough",b,!1),t.src=e}var C=0;function b(){++C==E.length&&function(){var e=0;S.onended=function(){var t;++e>=E.length||(t=e,S.src=E[t],S.play())}}()}for(var O in E)y(E[O]);var T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={counter:p,gameOn:!1,gameOver:!1,secondsCountingStarted:!1,time:0,startTime:0,updatedTime:0},e.startButtonClicked=function(){S.play(),e.setState({gameOn:!0}),e.handleCountdownText()},e.handleCountdownText=function(){var t=Object(o.a)(e.state.counter);t.length>1?setTimeout((function(){t.shift(),e.setState({counter:t}),e.handleCountdownText()}),1e3):(e.clockStart(),e.setState({secondsCountingStarted:!0}))},e.tick=function(){var t=(new Date).getTime()-e.state.startTime;e.setState({time:(t%6e4/1e3).toFixed(2)})},e.clockStart=function(){e.setState({startTime:(new Date).getTime()}),e.intervalID=setInterval((function(){return e.tick()}),10)},e.clockStop=function(){clearInterval(e.intervalID),e.setState({secondsCountingStarted:!1,gameOver:!0})},e.addTimerClasses=function(){var t="row justify-content-center gameCounter ";return e.state.gameOn||e.state.secondsCountingStarted?e.state.gameOn&&!e.state.secondsCountingStarted?t+"unhidden":e.state.secondsCountingStarted&&e.state.gameOn?t+"fade-out":void 0:t},e.resetGame=function(){e.setState({counter:p,gameOn:!1,gameOver:!1,secondsCountingStarted:!1,time:0,startTime:0,updatedTime:0})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){document.title="Seconds Counter Game"}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"}),s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"row justify-content-center"},"10 Seconds"),s.a.createElement("h4",{className:"row instructions justify-content-center"},"the game"),s.a.createElement("p",{className:"row instructions justify-content-center"},"press",s.a.createElement("span",{style:{display:"contents",fontWeight:"bold"}}," ","Start"),", then press"," ",s.a.createElement("span",{style:{display:"contents",fontWeight:"bold"}}," ","Stop"," ")," ","after"," ",s.a.createElement("span",{style:{display:"contents",fontWeight:"bold"}}," ","10 seconds"," ")),s.a.createElement(d,{message:this.state.counter[0]}),s.a.createElement(g,{onStartButtonClick:this.startButtonClicked,gameOn:this.state.gameOn}),s.a.createElement(h,{time:this.state.time,gameOn:this.state.gameOn,secondsCountingStarted:this.state.secondsCountingStarted,clockStop:this.clockStop,addTimerClasses:this.addTimerClasses}),s.a.createElement(f,{secondsCountingStarted:this.state.secondsCountingStarted,time:this.state.time,counter:this.state.counter,gameOn:this.state.gameOn,resetGame:this.resetGame,gameOver:this.state.gameOver})))}}]),n}(a.Component);n(15);c.a.render(s.a.createElement(T,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n.p+"static/media/ready2count.05013ceb.m4a"},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b6e02536.chunk.js.map