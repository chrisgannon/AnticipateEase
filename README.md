# AnticipateEase
An anticipation ease function for GreenSock (GSAP).

This easing function adds an anticipation ease to GreenSock's library of eases.
It has 3 eases - easeIn, easeOut and easeInOut.

E.g. 

TweenMax.to('#el', {
  x:200,
  ease:Anticipate.easeIn
})
