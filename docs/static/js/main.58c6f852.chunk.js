(this["webpackJsonpseconds-counter-game"]=this["webpackJsonpseconds-counter-game"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/ready2count_optimal.e0370398.m4a"},function(e,t,a){e.exports=a.p+"static/media/wow_incredible.863679ba.m4a"},function(e,t,a){e.exports=a.p+"static/media/failure_sound.9ad5cf3f.m4a"},,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),c=a.n(r),i=a(8),o=a(3),m=a(4),u=a(10),l=a(9),d=function(e){var t=e.message,a=e.secondsCountingStarted,n=e.time,r=e.counter,c=e.gameOn,i=e.gameOver;return s.a.createElement(s.a.Fragment,null,!i&&s.a.createElement("div",{style:{height:100},className:"row justify-content-center"},s.a.createElement("div",{className:"gameMessage"},t)),!a&&n>=9.5&&n<=10.5&&s.a.createElement("div",{style:{height:100},className:"row justify-content-center"},s.a.createElement("div",{className:"messageSuccess"},"Incredible!")),1===r.length&&c&&!a&&n<9.5&&s.a.createElement("div",{style:{height:100},className:"row justify-content-center"},s.a.createElement("div",{className:"messageFailure"},"Too Quick")),!a&&n>10.5&&s.a.createElement("div",{style:{height:100},className:"row justify-content-center"},s.a.createElement("div",{className:"messageFailure"},"Too Slow")))},g=function(e){var t=e.onStartButtonClick,a=e.gameOn,n=e.gameOver,r=e.secondsCountingStarted,c=e.clockStop,i=e.resetGame;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row startContainer justify-content-center"},!a&&!n&&s.a.createElement("button",{className:"btn btn-primary mt-3 mb-3",onClick:function(){t()},disabled:a?"disabled":""},"START")),s.a.createElement("div",{className:"row justify-content-center"},a&&!n&&s.a.createElement("button",{className:"btn btn-primary mt-3 mb-3",onClick:function(){return c()},disabled:r?"":"disabled"},"STOP")),s.a.createElement("div",{className:"row justify-content-center"},n?s.a.createElement("button",{className:"btn btn-primary mt-3 mb-3",onClick:function(){return i()}},"RESET"):null))},f=(a(16),function(e){var t=e.time,a=e.addTimerClasses;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:a()},t))}),v=a(5),h=a.n(v),S=a(6),p=a.n(S),O=a(7),C=a.n(O),E=["","Ready","Ready","3","2","1","Go!"],y=new Audio(h.a),T=new Audio(p.a),b=new Audio(C.a),w=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={counter:E,gameOn:!1,gameOver:!1,secondsCountingStarted:!1,time:0,startTime:0,updatedTime:0,instructionText:["press START","press STOP after 10 seconds","game over"]},e.startButtonClicked=function(){y.play(),e.setState({gameOn:!0}),e.handleCountdownText()},e.handleCountdownText=function(){var t=Object(i.a)(e.state.counter);t.length>1?setTimeout((function(){t.shift(),e.setState({counter:t}),e.handleCountdownText()}),1e3):(e.clockStart(),e.setState({secondsCountingStarted:!0}))},e.tick=function(){var t=(new Date).getTime()-e.state.startTime;e.setState({time:(t%6e4/1e3).toFixed(2)})},e.clockStart=function(){e.setState({startTime:(new Date).getTime()}),e.intervalID=setInterval((function(){return e.tick()}),10)},e.clockStop=function(){clearInterval(e.intervalID),e.setState({secondsCountingStarted:!1,gameOver:!0}),e.state.time>9.5&&e.state.time<10.5?T.play():b.play()},e.addTimerClasses=function(){var t="row justify-content-center gameCounter ";return e.state.gameOn||e.state.secondsCountingStarted?e.state.gameOn&&!e.state.secondsCountingStarted?t+"unhidden":e.state.secondsCountingStarted&&e.state.gameOn?t+"fade-out":void 0:t},e.resetGame=function(){e.setState({counter:E,gameOn:!1,gameOver:!1,secondsCountingStarted:!1,time:0,startTime:0,updatedTime:0})},e.setInstructions=function(){return e.state.gameOn||e.state.gameOver?e.state.gameOn&&!e.state.gameOver?e.state.instructionText[1]:e.state.gameOver?e.state.instructionText[2]:void 0:e.state.instructionText[0]},e.setInstructionsClasses=function(){return"row justify-content-center "+(e.state.gameOn?"":"blinking")},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){document.title="Seconds Counter Game"}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"}),s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"row justify-content-center"},"10 Seconds"),s.a.createElement("h4",{className:"row justify-content-center"},"the game"),s.a.createElement("h6",{className:this.setInstructionsClasses()},this.setInstructions()),s.a.createElement(d,{message:this.state.counter[0],secondsCountingStarted:this.state.secondsCountingStarted,time:this.state.time,counter:this.state.counter,gameOn:this.state.gameOn,gameOver:this.state.gameOver}),s.a.createElement(f,{time:this.state.time,addTimerClasses:this.addTimerClasses}),s.a.createElement(g,{onStartButtonClick:this.startButtonClicked,gameOn:this.state.gameOn,resetGame:this.resetGame,gameOver:this.state.gameOver,secondsCountingStarted:this.state.secondsCountingStarted,clockStop:this.clockStop})))}}]),a}(n.Component);a(17);c.a.render(s.a.createElement(w,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.58c6f852.chunk.js.map