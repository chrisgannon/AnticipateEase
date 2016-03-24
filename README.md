# AnticipateEase
An anticipation ease function for GreenSock (GSAP).

This easing function adds an anticipation ease to GreenSock's library of eases.
It has 3 eases - easeIn, easeOut and easeInOut.

E.g. 

TweenMax.to('#el', {
  x:200,
  ease:Anticipate.easeIn
})

I have simply packaged this ease into a script that GSAP can use.

Thanks to Elliot Geno for the ease algorithm. You can find a thread [here](http://greensock.com/forums/topic/12000-easing-request-anticipate-ease/) about it.
