window.Anticipate = {
  p1:function(){
    return 1.70158;
  } ,
  p2:function(){   
    return  Anticipate.p1() * 1.525
  },
  easeOut:function (p) {
					return ((p*=2) < 1) ? 0.5 * p * p * ((Anticipate.p2() + 1) * p - Anticipate.p2()) :  0.5 * (2 - Math.pow(2, -10 * (p - 1)));
			},
  easeIn:function(p){
				return ((p*=2) < 1) ? 0.5 * (Math.pow(2, 10 * (p - 1)) - 0.001) :  0.5 * ((p -= 2) * p * ((Anticipate.p2() + 1) * p + Anticipate.p2()) + 2);
			},
  easeInOut:function(p){
				return ((p *= 2) < 1) ? 0.5 * p * p * ((Anticipate.p2() + 1) * p - Anticipate.p2()) : 0.5 * ((p -= 2) * p * ((Anticipate.p2() + 1) * p + Anticipate.p2()) + 2);
			}
}