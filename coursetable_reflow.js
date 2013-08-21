// coursetable_reflow.js
// * designed for https://if192.aca.ntu.edu.tw/rtcourse/rt1_timetable_new.asp
// (c) Poren Chiang 2013 under GPLv2
(function(){
  var l = document.body.getElementsByTagName("td");
  for (var i = 0; i < l.length; i++) {
    var e = l.item(i);
    e.innerHTML = "<div style='overflow: auto; max-height: 6em; '>" + e.innerHTML + "</div>";
  }
})();
