export type ClassId = 'mago' | 'berserker' | 'guerreiro' | 'arqueiro';
export type RaceId = 'humano' | 'anao' | 'elfo' | 'orc';
export type RegionId = 'bosque' | 'minas' | 'cripta';

export const classes: Record<ClassId, {name:string; icon:string; resource:string; base:string; skill:string; passive:string; unlocks:string[]}> = {
  mago: {name:'Mago', icon:'✦', resource:'Mana', base:'Feitiço de Fogo', skill:'Lança uma chama que causa dano mágico. Pode preparar uma explosão no próximo turno.', passive:'Convergência: alternar o elemento aumenta o próximo feitiço em 10%.', unlocks:['Círculo de Gelo — desacelera e reduz o ataque inimigo por 2 turnos.','Barreira Astral — absorve o próximo golpe e prepara magia forte.']},
  berserker: {name:'Berserker', icon:'✹', resource:'Fúria', base:'Golpe Brutal', skill:'Ataca e gera Fúria. Com 30 de Fúria, o golpe causa dano extra.', passive:'Sangue Quente: ganha Fúria ao receber dano.', unlocks:['Investida — consome 25 Fúria para golpear duas vezes.','Segundo Fôlego — consome 35 Fúria e recupera vida.']},
  guerreiro: {name:'Guerreiro', icon:'⬟', resource:'Guarda', base:'Golpe de Escudo', skill:'Causa dano e entra em Guarda, reduzindo o próximo ataque.', passive:'Disciplina: bloquear um ataque abre Contra-ataque por 1 turno.', unlocks:['Provocar — força o inimigo a anunciar o ataque pesado.','Muralha — bloqueia 70% do dano por 2 turnos.']},
  arqueiro: {name:'Arqueiro', icon:'⌁', resource:'Foco', base:'Disparo Marcador', skill:'Marca o alvo. O próximo tiro contra ele causa dano crítico garantido.', passive:'Olho Vivo: ganha Foco ao acertar um alvo marcado.', unlocks:['Chuva de Flechas — atinge duas vezes e aplica sangramento.','Disparo Preciso — sacrifica dano imediato para preparar crítico.']}
};

export const races: Record<RaceId, {name:string; icon:string; passive:string; bonus:string}> = {
  humano:{name:'Humano',icon:'♙',passive:'Adaptável: +3% de XP em todas as missões.',bonus:'+2 ataque'},
  anao:{name:'Anão',icon:'♜',passive:'Pele de Pedra: recebe 8% menos dano físico.',bonus:'+5 defesa'},
  elfo:{name:'Elfo',icon:'♧',passive:'Passo Silencioso: +8% de chance de agir primeiro.',bonus:'+4 velocidade'},
  orc:{name:'Orc',icon:'♞',passive:'Fúria Ancestral: abaixo de 40% de vida, causa 12% mais dano.',bonus:'+8 vida'}
};

export const regions: Record<RegionId,{name:string; subtitle:string; icon:string; boss:string; routes:string[]}> = {
  bosque:{name:'Bosque das Cinzas',subtitle:'Árvores que lembram nomes esquecidos.',icon:'♧',boss:'A Bruxa das Cinzas',routes:['Trilha do caçador — patrulha extra, +40 ouro','Passagem das raízes — chega ao chefe com +10% de vida']},
  minas:{name:'Minas de Ferro Oco',subtitle:'O metal canta quando a luz se apaga.',icon:'♢',boss:'Golem Ferrúgio',routes:['Galeria principal — saque abundante, +1 item','Veio abandonado — armadura inimiga começa vulnerável']},
  cripta:{name:'Cripta do Sol Partido',subtitle:'Onde o amanhecer foi enterrado.',icon:'☼',boss:'Arauto do Eclipse',routes:['Escadaria dos sinos — o chefe perde 10% de vida','Fenda lateral — poção encontrada antes do combate']}
};

export const enemies = [
  {id:'lobo',name:'Lobo de Cinza',icon:'🐺',hp:72,attack:14,def:3,intent:'Mordida rápida'},
  {id:'bandido',name:'Bandido da Estrada',icon:'🗡️',hp:94,attack:17,def:6,intent:'Golpe baixo'},
  {id:'aranha',name:'Aranha de Brasa',icon:'🕷️',hp:65,attack:21,def:2,intent:'Veneno ardente'},
  {id:'mineiro',name:'Mineiro Oco',icon:'⛏️',hp:110,attack:18,def:9,intent:'Picareta pesada'},
  {id:'morcego',name:'Morcego de Ferro',icon:'🦇',hp:80,attack:20,def:4,intent:'Enxame sônico'},
  {id:'esqueleto',name:'Esqueleto Solar',icon:'💀',hp:105,attack:23,def:8,intent:'Lâmina espectral'},
  {id:'bruxa',name:'A Bruxa das Cinzas',icon:'🧙',hp:250,attack:26,def:12,intent:'Chama anunciada',boss:true},
  {id:'golem',name:'Golem Ferrúgio',icon:'🗿',hp:330,attack:30,def:18,intent:'Ergue os dois braços',boss:true},
  {id:'arauto',name:'Arauto do Eclipse',icon:'☠️',hp:420,attack:34,def:16,intent:'Eclipse crescente',boss:true}
];

export const shop = [
  {id:'pocao',name:'Poção de brasa',type:'consumivel',rarity:'comum',price:24,desc:'Recupera 35 de vida.',effect:'heal'},
  {id:'espada',name:'Espada do Vigia',type:'arma',rarity:'comum',price:65,desc:'+8 ataque.',effect:'attack:8'},
  {id:'escudo',name:'Escudo Rebarba',type:'armadura',rarity:'raro',price:120,desc:'+8 defesa; devolve 20% do dano bloqueado.',effect:'defense:8'},
  {id:'arco',name:'Arco Lua Nova',type:'arma',rarity:'epico',price:190,desc:'+12 ataque; alvo marcado recupera 8 Foco.',effect:'attack:12'},
  {id:'anel',name:'Anel do Fôlego',type:'acessorio',rarity:'raro',price:150,desc:'+15 vida máxima.',effect:'maxhp:15'}
];

export type World = {
  id:string; name:string; character?: Character; region:RegionId; screen:'create'|'village'|'map'|'combat'|'shop'|'inventory'|'victory';
  gold:number; xp:number; level:number; inventory:string[]; equipped:Record<string,string>; missionStage:number; combat?:Combat; explored:RegionId[]; lastAction:string; victory?:boolean;
};
export type Character = {name:string; race:RaceId; classId:ClassId; hp:number; maxHp:number; resource:number; maxResource:number; attack:number; defense:number; speed:number; crit:number; skills:number};
export type Combat = {enemyId:string; enemyHp:number; enemyMaxHp:number; turn:number; log:string[]; blocked:boolean; enemyIntent:string; marked:boolean; bleed:number; usedAction?:string; reward:number};

export function createWorld(id:string,name:string):World { return {id,name,region:'bosque',screen:'create',gold:80,xp:0,level:1,inventory:['pocao'],equipped:{},missionStage:0,explored:[],lastAction:'Mundo criado'}; }
export function createCharacter(name:string,race:RaceId,classId:ClassId):Character { const b={mago:[85,40,18,5,12],berserker:[125,30,24,8,9],guerreiro:[145,25,19,15,7],arqueiro:[95,35,22,6,15]}[classId]; const rb=race==='orc'?8:0; return {name,race,classId,hp:b[0]+rb,maxHp:b[0]+rb,resource:b[1],maxResource:b[1],attack:b[2]+(race==='humano'?2:0),defense:b[3]+(race==='anao'?5:0),speed:b[4]+(race==='elfo'?4:0),crit:5,skills:1}; }
export function xpNeeded(level:number){return 100+(level-1)*80;}
