const G=require('./engine.js');
function fightRes(run){const st=G.newFight(run);while(!st.over)G.step(st);return st;}
function place(run,id,greedy,rnd){
  const ex=run.board.findIndex(s=>s&&s.id===id);
  if(ex>=0){run.board[ex].lv++;return;}
  let best=null,bs=-1;
  for(let i=0;i<5;i++){const b=run.board.map(x=>x&&{...x});b[i]={id,lv:0};
    const sc=greedy?G.powerScore(b,run.powers):(run.board[i]?-1:rnd());
    if(sc>bs){bs=sc;best=b;}}
  if(greedy && bs<=G.powerScore(run.board,run.powers)) return;
  if(best) run.board=best;
}
function play(greedy,seed){
  let s=seed;const rnd=()=>{s=(s*16807)%2147483647;return s/2147483647;};
  const run=G.newRun();let wins=0;const durs=[];
  while(run.fight<10&&run.lives>0){
    const st=fightRes(run);durs.push(st.t.toFixed(0));
    const boss=G.FIGHTS[run.fight].boss;
    if(st.over>0){wins++;run.maxHp+=10;} else run.lives--;
    if(boss&&st.over>0){const po=G.powerOffers(run,rnd);run.powers.push(greedy?po[0]:po[Math.floor(rnd()*3)]);}
    run.fight++;
    const of=G.offers(run,rnd);
    if(greedy){let bid=of[0],bv=-1;for(const id of of){const r2=JSON.parse(JSON.stringify(run));place(r2,id,true,rnd);const v=G.powerScore(r2.board,r2.powers);if(v>bv){bv=v;bid=id;}}place(run,bid,true,rnd);}
    else place(run,of[Math.floor(rnd()*3)],false,rnd);
  }
  return {wins,lives:run.lives,durs,score:G.powerScore(run.board,run.powers)};
}
for(const g of [true,false]){let tot=0,clear=0,per=Array(11).fill(0);const D=[];
 for(let k=1;k<=400;k++){const r=play(g,k*7919);tot+=r.wins;if(r.wins>=10)clear++;per[r.wins]++;if(k<4)D.push(r.durs.join(',')+' sc'+r.score);}
 console.log(g?'AKILLI':'RASTGELE','ort galibiyet',(tot/400).toFixed(2),'10/10',clear/4+'%','dağılım',per.join(' '));console.log(D.join('\n'));}
