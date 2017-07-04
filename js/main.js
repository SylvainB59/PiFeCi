var choix = ["Pierre", "Feuille", "Ciseaux"];
var sj = 0;
var jg = "Joueur gagne";
var so = 0;
var og = "ordi gagne";
var eg = "Egalité";


while( (sj !== 3) && (so !== 3) ){
  var ordi = parseInt((Math.random()*300)/100);
  var joueur = "0";
  while(joueur!="1" && joueur!="2" && joueur!="3"){
    joueur = prompt("1(pierre) / 2(feuille) / 3(ciseaux)");
  }
  joueur-=1;
  var battle = "Joueur : "+choix[joueur]+" vs "+choix[ordi]+" : Ordi"

  if( ((joueur==0)&&(ordi==1)) || ((joueur==1)&&(ordi==2)) || ((joueur==2)&&(ordi==0)) ){
    so++;
    alert(battle+"\n"+og+"\n"+"Joueur : " + sj + " / Ordi : " + so);
  }
  else if( ((joueur==0)&&(ordi==2)) || ((joueur==1)&&(ordi==0)) || ((joueur==2)&&(ordi==1)) ){
    sj++;
    alert(battle+"\n"+jg+"\n"+"Joueur : " + sj + " / Ordi : " + so);
  }
  else {
    alert(battle+"\n"+eg+"\n"+"Joueur : " + sj + " / Ordi : " + so);
  }
}
if(sj == 3){
  alert("YOU WIN!");
}
else{
  alert("YOU LOSE!");
}
