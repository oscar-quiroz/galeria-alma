import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/interfaces/IBrallet';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  images:any;


  imagen:string = '';
  valorB:string = ''

  constructor() { 
    
    this.images = [
		{
			"img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103413265_2683109511958138_7449347726880263576_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=xxZooZBfdBQAX-plJaC&tp=1&oh=e4bf815f6a6ebf52c263a08cf2d255c6&oe=6037B7C6",
			"valor": "55000"
		  },
		  {
			  "img": "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/103152955_879044675931567_4028597452015048587_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=xn5ttvbqff8AX_QI3fx&tp=1&oh=241fe1bae014f6c81f9de66231346a28&oe=6036B2C2",
				"valor": "40000"
		  },
		  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/106125848_3239822822740739_4097266057780311394_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=YxMbJ8PkpbUAX9mP2pg&tp=1&oh=9fd4997fb0d5ce29913825872eca5ac7&oe=6035A691",
				"valor": "70000"
		  },
		  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/58410043_463478217744170_977438754259401486_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=3u2DkQ5zQjYAX9WBlQ6&tp=1&oh=33519d7429477a48af8473c61e92f778&oe=603617C1",
				"valor": "45000"
		  },
		  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/61362838_679948235790761_4590818423695418674_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=bFEnUqPv5D4AX8R3jPj&tp=1&oh=ea17cd6dcf3f301b558af70f4bbe0079&oe=6037748A",
				"valor": "55000"
		  },
		  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c161.0.1118.1118a/s640x640/81324422_164693091476117_1758037501355990236_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=m_A5sTC3wXUAX-Qx0i1&tp=1&oh=9390cefbb7d465ce76980df0220ab90d&oe=60391E8A",
				"valor": "45000"
		  },
		  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/84969909_557636734837437_1300505162178303605_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=VbKb5Okado8AX_saMvW&tp=1&oh=8f226a827e9f405e4e29efe656be3a8d&oe=6036E127",
				"valor": "45000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/100088360_250419346296506_5233394623166058450_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=uZlcIejMzkgAX-6b3W_&tp=1&oh=fbd8010c079daae431176db4771dd893&oe=6036B895",
				"valor": "50000"
		  },
	  
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/101497657_947377542364919_6291092226371069126_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=BIpzrtcUHskAX_Wt7lp&tp=1&oh=4b26dc6690de804f0f6245f7fab59a00&oe=60374B89",
				"valor": "55000"
		  },
	  
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/100977928_670474267067906_8464669902445977084_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5Ps-nQv_L5YAX9o3iXZ&tp=1&oh=06f27ae05f7664bad179272006e179e7&oe=60382CBF",
				"valor": "45000"
		  },
	  
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/101317320_680481052514523_9102066897710931257_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=xTrAUdAtG4oAX_hUNAV&tp=1&oh=25699d66a92848347a8b8fd26a592460&oe=6036C590",
				"valor": "48000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/101052311_242973183656096_7753151522986380622_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=971yVAYVuRwAX-tX-dA&tp=1&oh=a13842be20fa91e96246e1cf0052bd8d&oe=6035BD73",
				"valor": "60000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/101700870_587070892213787_4868273023928829674_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=aOzQDI0HHyAAX8UZUNx&tp=1&oh=cd87859c641f4086b43dcb46dde2a9e4&oe=60365323",
				"valor": "60000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/c2.0.610.610a/102930881_633532673917502_6544700609745393319_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=3CLYJTigPnQAX8S5lZm&tp=1&oh=040ffd9088c4f136677a998a7c344884&oe=6036FFDF",
				"valor": "40000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/101850265_3074400859282159_2982821532027083906_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=57qVTnXPFTUAX9UBIiC&tp=1&oh=11ac455862dbdaeaa9ea0bb6031a860e&oe=603723E4",
				"valor": "50000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/104431501_280652993054014_6196255716059884687_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=b9_jQDVwg_EAX9_kPJv&tp=1&oh=84a6554af3d71deba58e5ede9cc22f6d&oe=60368FA3",
				"valor": "50000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/105971230_161729792076301_4312024289326883771_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=tsZGlHRt3jcAX-ZNtW6&tp=1&oh=00c31a8905a5fbb9830151b126b218f3&oe=6035CF42",
				"valor": "55000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/105291317_879691182521185_2758727585435142154_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=PouFegaYswcAX_ncniO&tp=1&oh=2663e780479511486a8fd41a86e92a58&oe=6037848B",
				"valor": "45000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/106125848_3239822822740739_4097266057780311394_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=YxMbJ8PkpbUAX9mP2pg&tp=1&oh=9fd4997fb0d5ce29913825872eca5ac7&oe=6035A691",
				"valor": "70000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/71730461_289915048725179_3217192421260901557_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=JkNrx9IN4UkAX9olfK7&tp=1&oh=b99d886a00e8bb311f10658451935c1d&oe=6038225D",
				"valor": "65000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/105943636_1131165440594914_4012476989071069872_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=HO3OG4KG6C8AX9vU1ps&tp=1&oh=f5321d999f0fa8465f03b343d1de097c&oe=60384C0D",
				"valor": "50000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/109474273_563814997619365_314366267049866944_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=gHADunzArjQAX8oRJVB&tp=1&oh=f246a8d04c1ad8f95bb8b2046b0dca62&oe=60379230",
				"valor": "45000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/117790199_607427643188367_3472104704743599769_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Pptsx-aD1VcAX-OcYZ9&tp=1&oh=cba51d15330a9b224f2bb0c7cd06898e&oe=6037A689",
				"valor": "26000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/118119081_2756614924553964_3335208367859640217_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=ENe99BfA1JkAX_vAQi_&tp=1&oh=1914342211efb162e937990b90c1ee10&oe=603717E7",
				"valor": "50000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/118177370_311948793254454_2065545894058963640_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LTySeZ6Sd7sAX__8Xx5&tp=1&oh=de27361248eae7679c1fb478ebb09ab5&oe=60367C89",
				"valor": "50000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/118131588_321505759292189_79413335065680300_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=WEXmNQLiM6oAX83Se-y&tp=1&oh=c3cedc159379842c186cf31754f53372&oe=60364E4C",
				"valor": "20000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/118288044_3075959485860096_1123112408689588146_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=7q_frRsEp1IAX-5EICY&tp=1&oh=e639f2d3456db08624151ff47b1ab364&oe=6036CD9C",
				"valor": "40000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/118370341_329298391450592_8946651437815477279_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=44aI36Pf7xcAX9RNSyZ&tp=1&oh=734b432c8e9dcfe4d0c78d24e072d620&oe=60360DEC",
				"valor": "50000"
		  },
	  
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/118192960_122012139359062_7115346976159690820_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=MQj24-qyn3gAX82XbQK&tp=1&oh=4f369ff29ac9079f5c3c382f6f77b3a0&oe=6038C577",
				"valor": "65000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/118492246_316999166305190_8472548589389379527_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=UmElGFu-oGsAX_cLOAu&tp=1&oh=4766a9a4760ca7d6d16ffe61d9a26a2c&oe=6037CDA4",
				"valor": "45000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/118561213_344613086678244_6743063901743922577_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=ryJx37ZfNZkAX8ntviU&tp=1&oh=558a377af1360365437228f46e0bef39&oe=60392795",
				"valor": "36000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/118472513_165591248453745_8712619214308771160_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=qXqqFQgMPY4AX-76vNz&tp=1&oh=4916f0b482183831d9bffd77135efae2&oe=60376CED",
				"valor": "50000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/118403134_178158050418867_1716613157816167508_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Q7IkoiBDGAwAX_QAOD6&tp=1&oh=4c6c76f21e28d8f6c35ded7b0862d596&oe=603933C7",
				"valor": "60000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/118801024_638605826794908_5217518947783430906_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=gA0CzcJ55gAAX8m0P_w&tp=1&oh=d6043be9672068bb32bff7d7a06ba16b&oe=603596F7",
				"valor": "40000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/120524136_631369364229335_7091330890063100286_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=wztdf7KWkdEAX_DgBo9&tp=1&oh=4de49a7da36fc083723d8b2136f515b8&oe=60362925",
				"valor": "55000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/120823252_378798310034713_4660062408583121313_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Vp7Ph_7jjA8AX9p_toI&tp=1&oh=2048d7a2f19b2f7196bcee113d9b62cd&oe=603845AB",
				"valor": "38000"
		  },
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/120819108_1389136758093800_2153195939044725998_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=wt3AJCOYvogAX_zjTHJ&tp=1&oh=12a9fbff9fda6c0cac02f92d45e56786&oe=603618B7",
				"valor": "60000"
		  },
	  
	  {
			  "img": "https://instagram.fbog15-1.fna.fbcdn.net/v/t51.2885-15/e35/123519570_132544058616719_2454882424662747157_n.jpg?_nc_ht=instagram.fbog15-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=O2-W9tHIH4kAX--yYJb&tp=1&oh=71789f08ca89542cbe7a3091e5735c94&oe=60387594",
				"valor": "35000"
		  }
  ]
  }

  ngOnInit(): void {
  }

  enviarImagen( img:Imagen ){
	  this.imagen= img.img;
	  this.valorB= img.valor;
  }

}
