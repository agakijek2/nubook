/* ------------------------------------------------------------------ data */
/* Status to badge variant. The visible text lives in I18N, so a label here would
   be a second copy of it that never reaches the screen. */
const STATUS = {
  new:      {cls:""},
  soon:     {cls:"soon"},
  last:     {cls:"last"},
  out:      {cls:"out"},
  pulitzer: {cls:"award"},
};

const COVER_GWO = "assets/covers/girl-woman-other.jpg";

const COVER_ORL = "assets/covers/orlando.jpg";

const COVER_HMT = "assets/covers/handmaids-tale.jpg";

const COVER_SBB = "assets/covers/stone-butch-blues.jpg";

const COVER_BEL = "assets/covers/bell-jar.jpg";

const COVER_KJY = "assets/covers/kim-jiyoung.jpg";

const COVER_PWR = "assets/covers/the-power.jpg";

const COVER_TBJ = "assets/covers/their-eyes-were-watching-god.jpg";

const COVER_DTB = "assets/covers/detransition-baby.jpg";

const COVER_AMR = "assets/covers/americanah.jpg";

const COVER_WSS = "assets/covers/wide-sargasso-sea.jpg";

const COVER_MBF = "assets/covers/my-brilliant-friend.jpg";

const COVER_NW = "assets/covers/nightwood.jpg";

const COVER_TCP = "assets/covers/the-color-purple.jpg";

const COVER_JE = "assets/covers/jane-eyre.jpg";

const COVER_CSW = "assets/covers/a-room-of-ones-own.jpg";

const COVER_MDX = "assets/covers/middlesex.jpg";

const COVER_HBP = "assets/covers/her-body-and-other-parties.jpg";

const COVER_WRC = "assets/covers/we-should-all-be-feminists.jpg";

const PHOTO_ATWOOD = "assets/covers/atwood-portrait.jpg";

const BOOKS = [
  {t:"The Handmaid's Tale", aphoto:PHOTO_ATWOOD, tp:"Opowieść podręcznej", ed:"en", added:"2025-12-29", pub:1985,
   de:"Atwood's chilling vision of Gilead, where women's bodies are property of the state - the defining feminist dystopia.",
   q:"Nolite te bastardes carborundorum - don't let the bastards grind you down.", qby:"Offred",
   dp:"Mrożąca wizja Gileadu, w którym ciała kobiet są własnością państwa - najważniejsza feministyczna dystopia.",
   qp:"Nolite te bastardes carborundorum - nie pozwól, żeby skurwiele cię złamali.", qbyp:"Offred", a:"Margaret Atwood", gd:"f", ab:"Canadian writer, twice winner of the Booker Prize. Her dystopias made women's rights a mainstream literary subject - lines from her books ended up on protest banners worldwide.", abp:"Kanadyjska pisarka, dwukrotna laureatka Nagrody Bookera. Jej dystopie wprowadziły prawa kobiet do głównego nurtu literatury, a cytaty z jej książek trafiły na transparenty protestów na całym świecie.",        g:"Dystopia",     p:14.00, pp:59.90, s:null,
   img:COVER_HMT},
  {t:"Orlando", tp:"Orlando. Biografia", ed:"en", added:"2026-06-05", pub:1928,
   de:"Woolf's playful 'biography' of a poet who lives four centuries and changes sex along the way - a love letter to Vita Sackville-West.",
   q:"As long as she thinks of a man, nobody objects to a woman thinking.", qby:"the narrator",
   dp:"Przewrotna 'biografia' poety, który żyje cztery stulecia i po drodze zmienia płeć - list miłosny Woolf do Vity Sackville-West.",
   qp:"Dopóki kobieta myśli o mężczyźnie, nikomu nie przeszkadza, że myśli.", qbyp:"narrator", a:"Virginia Woolf", gd:"f", ab:"Modernist pioneer and central figure of the Bloomsbury Group. Her essay A Room of One's Own remains a founding text of feminist literary criticism.", abp:"Pionierka modernizmu i centralna postać grupy Bloomsbury. Jej esej Własny pokój pozostaje tekstem założycielskim feministycznej krytyki literackiej.",                     g:"Classic",      p:11.50, pp:48.90, s:"new",
   img:COVER_ORL},
  {t:"Girl, Woman, Other", tp:"Dziewczyna, kobieta, inna", ed:"en", added:"2026-03-30", pub:2019,
   de:"Twelve interwoven lives, mostly of Black British women - Evaristo's Booker-winning chorus of voices.",
   q:"Privilege is about context and circumstances.", qby:"Yazz",
   dp:"Dwanaście splecionych losów, głównie czarnych Brytyjek - nagrodzony Bookerem chór głosów Evaristo.",
   qp:"Przywilej zależy od kontekstu i okoliczności.", qbyp:"Yazz", a:"Bernardine Evaristo", gd:"f", ab:"First Black woman to win the Booker Prize (2019). A lifelong champion of Black British women's stories and president of the Royal Society of Literature.", abp:"Pierwsza czarna laureatka Nagrody Bookera (2019). Od lat promuje historie czarnych Brytyjek; przewodniczy Royal Society of Literature.",     g:"Contemporary", p:16.00, pp:67.90, s:null,
   img:COVER_GWO},
  {t:"Stone Butch Blues", tp:"Stone Butch Blues", ed:"en", added:"2026-01-19", pub:1993,
   de:"Feinberg's landmark novel of butch life, labour and survival in pre-Stonewall America.",
   q:"I didn't want to be different. I longed to be everything grown-ups wanted, so they would love me.", qby:"Jess Goldberg",
   dp:"Przełomowa powieść Feinberg o życiu butch, pracy i przetrwaniu w Ameryce sprzed Stonewall.",
   qp:"Nie chciałam być inna. Pragnęłam być wszystkim, czego chcieli dorośli, żeby mnie pokochali.", qbyp:"Jess Goldberg", a:"Leslie Feinberg", gd:"nb", ab:"Transgender activist, communist and writer. Stone Butch Blues won the Lambda Literary Award and gave generations of queer readers a mirror.", abp:"Osoba transpłciowa, aktywistyczna i pisarska. Stone Butch Blues zdobyło nagrodę Lambda Literary i stało się lustrem dla pokoleń osób queer.",          g:"Queer",        p:18.50, pp:78.90, s:"last",
   img:COVER_SBB},
  {t:"Beloved", tp:"Umiłowana", ed:"en", added:"2025-11-03", pub:1987,
   de:"Morrison's Pulitzer-winning masterpiece: a mother haunted by slavery and by the daughter she lost.",
   q:"You your best thing, Sethe. You are.", qby:"Paul D",
   dp:"Arcydzieło Morrison nagrodzone Pulitzerem: matka nawiedzana przez niewolnictwo i utraconą córkę.",
   qp:"To ty jesteś tym, co masz najlepszego, Sethe. Ty.", qbyp:"Paul D", a:"Toni Morrison", gd:"f", ab:"Nobel laureate in Literature (1993) and Pulitzer winner. She centred Black women's interior lives and reshaped the American canon.", abp:"Laureatka literackiego Nobla (1993) i Pulitzera. Umieściła wewnętrzne życie czarnych kobiet w centrum literatury i przebudowała amerykański kanon.",                      g:"Classic",      p:12.50, pp:52.90, s:"pulitzer",
   img:COVER_BEL},
  {t:"Kim Jiyoung, Born 1982", tp:"Kim Dzijong. Urodzona w 1982", ed:"en", added:"2026-05-28", pub:2016,
   de:"An ordinary Korean woman's life told as a quiet indictment of everyday sexism - the novel that sparked a national debate.",
   q:"Why should I give up something I want now for the sake of a future that may or may not come?", qby:"Kim Jiyoung",
   dp:"Życie zwykłej Koreanki jako cichy akt oskarżenia wobec codziennego seksizmu - powieść, która wywołała narodową debatę.",
   qp:"Dlaczego mam rezygnować z czegoś, na co mam teraz ochotę, w imię przyszłości, która może, ale wcale nie musi nadejść?", qbyp:"Kim Dzijong", a:"Cho Nam-joo", gd:"f", ab:"Former TV scriptwriter. Her novel sold over a million copies and galvanised South Korea's #MeToo conversation about everyday sexism.", abp:"Była scenarzystka telewizyjna. Jej powieść sprzedała się w ponadmilionowym nakładzie i stała się katalizatorem koreańskiej debaty #MeToo o codziennym seksizmie.",         g:"Contemporary", p:15.00, pp:63.90, s:"new",
   img:COVER_KJY},
  {t:"The Power", tp:"Siła", ed:"en", added:"2026-03-12", pub:2016,
   de:"Teenage girls develop the power to electrocute at will, and the world's hierarchies flip. What would women do with power?",
   q:"That's the trouble with the kind of power that lets you destroy. It can only be used to break, never to mend.", qby:"the narrator",
   dp:"Nastolatki zyskują zdolność rażenia prądem i światowe hierarchie się odwracają. Co kobiety zrobiłyby z władzą?",
   qp:"Na tym polega kłopot z władzą, która pozwala niszczyć. Można nią tylko łamać, nigdy naprawiać.", qbyp:"narrator", a:"Naomi Alderman", gd:"f", ab:"British novelist and game designer, mentored by Margaret Atwood. The Power won the Women's Prize for Fiction (2017) for its study of gendered power.", abp:"Brytyjska pisarka i projektantka gier, mentorowana przez Margaret Atwood. Siła zdobyła Women's Prize for Fiction (2017) za studium płciowego wymiaru władzy.",                   g:"Dystopia",     p:14.00, pp:59.90, s:null,
   img:COVER_PWR},
  {t:"The Bell Jar", tp:"Szklany klosz", ed:"en", added:"2025-11-21", pub:1963,
   de:"Plath's only novel: Esther Greenwood's brilliant, suffocating summer in New York and the descent that follows.",
   q:"I took a deep breath and listened to the old brag of my heart. I am, I am, I am.", qby:"Esther Greenwood",
   dp:"Jedyna powieść Plath: błyskotliwe, duszne lato Esther Greenwood w Nowym Jorku i późniejszy upadek.",
   qp:"Wzięłam głęboki oddech i wsłuchałam się w stare przechwałki mojego serca. Jestem, jestem, jestem.", qbyp:"Esther Greenwood", a:"Sylvia Plath", gd:"f", ab:"Confessional poet, posthumous Pulitzer winner (1982). Her work voiced the suffocation of 1950s womanhood like no other.", abp:"Poetka konfesyjna, pośmiertna laureatka Pulitzera (1982). Jak nikt inny wyraziła duszność kobiecości lat 50.",                  g:"Classic",      p:10.50, pp:44.90, s:"last",
   img:COVER_TBJ},
  {t:"Detransition, Baby", tp:"Detranzycja, kochanie", ed:"en", added:"2026-04-17", pub:2021,
   de:"Three women - trans and cis - and one unplanned pregnancy. A sharp, funny novel about gender, motherhood and modern family.",
   q:"To have anything you have to figure out how to want it, and to want it you have to be able to imagine it.", qby:"Reese",
   dp:"Trzy kobiety - trans i cis - i jedna nieplanowana ciąża. Błyskotliwa powieść o płci, macierzyństwie i współczesnej rodzinie.",
   qp:"Żeby cokolwiek mieć, trzeba najpierw nauczyć się tego pragnąć, a żeby tego pragnąć, trzeba umieć to sobie wyobrazić.", qbyp:"Reese", a:"Torrey Peters", gd:"f", ab:"Trans novelist; Detransition, Baby was longlisted for the Women's Prize, bringing trans women's lives into mainstream literary fiction.", abp:"Pisarka trans; Detranzycja, kochanie trafiła na długą listę Women's Prize, wprowadzając życie kobiet trans do głównego nurtu prozy.",           g:"Queer",        p:17.50, pp:74.90, s:null,
   img:COVER_DTB},
  {t:"Americanah", tp:"Amerykaana", ed:"en", added:"2026-02-24", pub:2013,
   de:"Ifemelu leaves Nigeria for America and discovers race; years later she returns. A sweeping story of love, hair and belonging.",
   q:"Why must we always talk about race anyway? - That is exactly what white privilege is, that you can say that.", qby:"a dinner guest & Professor Hunk",
   dp:"Ifemelu wyjeżdża z Nigerii do Ameryki i odkrywa, czym jest rasa; po latach wraca. Opowieść o miłości, włosach i przynależności.",
   qp:"Czemu w ogóle ciągle musimy mówić o rasie? - Na tym właśnie polega biały przywilej, że możesz tak powiedzieć.", qbyp:"gość przy stole i Professor Hunk", a:"Chimamanda Ngozi Adichie", gd:"f", ab:"Nigerian writer, winner of the Orange Prize. Her TED talk and essay We Should All Be Feminists made her a global voice of contemporary feminism.", abp:"Nigeryjska pisarka, laureatka Orange Prize. Wystąpienie TED i esej Wszyscy powinniśmy być feministami uczyniły ją globalnym głosem współczesnego feminizmu.",        g:"Contemporary", p:16.00, pp:67.90, s:null,
   img:COVER_AMR},
  {t:"Wide Sargasso Sea", tp:"Szerokie Morze Sargassowe", ed:"en", added:"2025-09-12", pub:1966,
   de:"The untold story of the 'madwoman in the attic': Rhys gives Brontë's Bertha a voice, a history and a Caribbean home.",
   q:"There is always the other side, always.", qby:"Antoinette",
   dp:"Nieopowiedziana historia 'szalonej z poddasza': Rhys oddaje głos Bercie z powieści Brontë i jej karaibskiemu światu.",
   qp:"Zawsze jest druga strona, zawsze.", qbyp:"Antoinette", a:"Jean Rhys", gd:"f", ab:"Dominica-born novelist. She gave voice to colonised, dismissed women decades before postcolonial feminism named them; honoured with the WH Smith Award.", abp:"Pisarka urodzona na Dominice. Oddała głos skolonizowanym, lekceważonym kobietom na długo przed feminizmem postkolonialnym; uhonorowana nagrodą WH Smith.",                g:"Classic",      p:11.50, pp:48.90, s:"out",
   img:COVER_WSS},
  {t:"My Brilliant Friend", tp:"Genialna przyjaciółka", ed:"en", added:"2026-02-06", pub:2011,
   de:"Lila and Lenù grow up poor and fierce in postwar Naples - the first of Ferrante's Neapolitan novels.",
   q:"You're my brilliant friend, you have to be the best of all, boys and girls.", qby:"Lila",
   dp:"Lila i Lenù dorastają w biednym, gwałtownym powojennym Neapolu - pierwszy tom cyklu neapolitańskiego Ferrante.",
   qp:"Jesteś moją genialną przyjaciółką, musisz być najlepsza ze wszystkich, chłopców i dziewczyn.", qbyp:"Lila", a:"Elena Ferrante", gd:"f", ab:"Anonymous Italian author, Booker International finalist. Her Neapolitan novels map female friendship, ambition and class with rare honesty.", abp:"Anonimowa włoska autorka, finalistka Międzynarodowego Bookera. Cykl neapolitański z rzadką szczerością opisuje kobiecą przyjaźń, ambicję i klasę.",         g:"Contemporary", p:15.00, pp:63.90, s:null,
   img:COVER_MBF},
  {t:"Nightwood", tp:"Ostępy nocy", ed:"en", added:"2025-09-28", pub:1936,
   de:"Barnes's modernist classic of obsessive love between women in 1920s Paris, with a preface by T. S. Eliot.",
   q:"Have you ever loved someone and it became yourself?", qby:"Nora",
   dp:"Modernistyczny klasyk Barnes o obsesyjnej miłości między kobietami w Paryżu lat 20., z przedmową T. S. Eliota.",
   qp:"Czy kochałaś kiedyś kogoś tak, że stał się tobą?", qbyp:"Nora", a:"Djuna Barnes", gd:"f", ab:"Bohemian modernist of 1920s Paris. She wrote lesbian desire when it was unprintable, paving the way for queer literature.", abp:"Modernistka i bohemka Paryża lat 20. Pisała o lesbijskim pożądaniu, gdy było ono niecenzuralne, torując drogę literaturze queer.",                     g:"Queer",        p:12.50, pp:52.90, s:"out",
   img:COVER_NW},
  {t:"The Color Purple", tp:"Kolor purpury", ed:"en", added:"2025-10-16", pub:1982,
   de:"Celie writes letters to God from rural Georgia, surviving abuse and finding love - Walker's Pulitzer-winning classic.",
   q:"I think it pisses God off if you walk by the color purple in a field somewhere and don't notice it.", qby:"Shug Avery",
   dp:"Celie pisze listy do Boga z wiejskiej Georgii - o przemocy, przetrwaniu i miłości. Klasyka nagrodzona Pulitzerem.",
   qp:"Myślę, że Bóg się wkurza, kiedy mijasz kolor purpury na polu i go nie zauważasz.", qbyp:"Shug Avery", a:"Alice Walker", gd:"f", ab:"First Black woman to win the Pulitzer for fiction (1983). She coined the term womanism to centre Black women within feminism.", abp:"Pierwsza czarna laureatka Pulitzera w dziedzinie prozy (1983). Ukuła pojęcie womanizmu, stawiając czarne kobiety w centrum feminizmu.",              g:"Classic",      p:12.50, pp:52.90, s:null,
   img:COVER_TCP},
  {t:"Jane Eyre", tp:"Dziwne losy Jane Eyre", ed:"en", added:"2025-09-01", pub:1847,
   de:"Plain, poor and unbreakable: Brontë's governess demands love on equal terms - a protofeminist classic.",
   q:"I am no bird; and no net ensnares me: I am a free human being with an independent will.", qby:"Jane Eyre",
   dp:"Skromna, biedna i niezłomna: guwernantka Brontë żąda miłości na równych prawach - protofeministyczny klasyk.",
   qp:"Nie jestem ptakiem i nie schwyta mnie żadna sieć: jestem wolną istotą ludzką o niezależnej woli.", qbyp:"Jane Eyre", a:"Charlotte Brontë", gd:"f", ab:"Published as Currer Bell to bypass prejudice against women writers. Jane Eyre demanded equality in love and work as early as 1847.", abp:"Publikowała jako Currer Bell, by ominąć uprzedzenia wobec piszących kobiet. Jane Eyre już w 1847 roku żądała równości w miłości i pracy.",                 g:"Classic",      p:9.50, pp:40.90, s:null,
   img:COVER_JE},
  {t:"Convenience Store Woman", tp:"Dziewczyna z konbini", ed:"en", added:"2026-05-21", pub:2016,
   de:"Keiko has worked in a konbini for eighteen years and is perfectly happy - it's everyone else who has a problem.",
   q:"My present self is formed almost completely of the people around me.", qby:"Keiko",
   dp:"Keiko od osiemnastu lat pracuje w konbini i jest zupełnie szczęśliwa - to inni mają z tym problem.",
   qp:"Moje obecne ja jest niemal w całości ulepione z ludzi wokół mnie.", qbyp:"Keiko", a:"Sayaka Murata", gd:"f", ab:"Winner of Japan's Akutagawa Prize. She skewers expectations of marriage and motherhood - drawing on her own 18 years behind a konbini counter.", abp:"Laureatka japońskiej Nagrody Akutagawy. Rozprawia się z oczekiwaniami wobec małżeństwa i macierzyństwa, czerpiąc z własnych 18 lat pracy w konbini.",      g:"Contemporary", p:14.00, pp:59.90, s:"new",
   img:COVER_CSW},
  {t:"Middlesex", tp:"Middlesex", ed:"en", added:"2025-12-10", pub:2002,
   de:"Cal Stephanides, born intersex, traces three generations of a Greek-American family. Pulitzer Prize 2003.",
   q:"I was born twice: first, as a baby girl, and then again, as a teenage boy.", qby:"Cal Stephanides",
   dp:"Cal Stephanides, osoba interpłciowa, opowiada dzieje trzech pokoleń grecko-amerykańskiej rodziny. Pulitzer 2003.",
   qp:"Urodziłem się dwa razy: najpierw jako dziewczynka, a potem ponownie jako nastoletni chłopiec.", qbyp:"Cal Stephanides", a:"Jeffrey Eugenides", gd:"m", ab:"American novelist; Middlesex won the Pulitzer Prize (2003) and brought intersex experience into the literary mainstream.", abp:"Amerykański pisarz; Middlesex zdobył Nagrodę Pulitzera (2003) i wprowadził doświadczenie interpłciowości do literackiego mainstreamu.",                g:"Queer",        p:16.00, pp:67.90, s:"pulitzer",
   img:COVER_MDX},
  {t:"Her Body and Other Parties", tp:"Jej ciało i inne strony", ed:"en", added:"2026-06-01", pub:2017,
   de:"Machado bends horror, fairy tale and SF into stories about women's bodies and the violence done to them.",
   q:"I have heard all of the stories about girls like me, and I am unafraid to make more of them.", qby:"the narrator",
   dp:"Machado łączy horror, baśń i SF w opowiadania o kobiecych ciałach i przemocy wobec nich.",
   qp:"Słyszałam wszystkie opowieści o dziewczynach takich jak ja i nie boję się tworzyć kolejnych.", qbyp:"narratorka", a:"Carmen M. Machado", gd:"f", ab:"Queer essayist and fabulist, National Book Award finalist. In the Dream House reframed how we talk about abuse in queer relationships.", abp:"Queerowa eseistka i bajarka, finalistka National Book Award. W śnionym domu zmieniło sposób mówienia o przemocy w queerowych związkach.", g:"Contemporary", p:17.50, pp:74.90, s:"soon",
   img:COVER_HBP},
  {t:"Women, Race & Class", tp:"Kobiety, rasa, klasa", ed:"en", added:"2026-06-10", pub:1981,
   de:"Davis's classic study of how racism and class shaped the women's movement - essential intersectional history.",
   q:"Birth control - individual choice, safe contraceptive methods, as well as abortions when necessary - is a fundamental prerequisite for the emancipation of women.", qby:"Angela Y. Davis",
   dp:"Klasyczne studium Davis o tym, jak rasizm i klasa kształtowały ruch kobiecy - fundament myśli intersekcjonalnej.",
   qp:"Kontrola urodzeń - wolny wybór, bezpieczne metody antykoncepcji oraz aborcja, gdy jest konieczna - to podstawowy warunek emancypacji kobiet.", qbyp:"Angela Y. Davis", a:"Angela Y. Davis", gd:"f", ab:"Philosopher, civil-rights icon and a founding thinker of intersectional feminism; decades of activism for prison abolition and women's liberation.", abp:"Filozofka, ikona ruchu praw obywatelskich i współtwórczyni feminizmu intersekcjonalnego; od dekad działa na rzecz abolicji więzień i wyzwolenia kobiet.",        g:"Non-fiction",  p:13.50, pp:57.90, s:"new",
   img:COVER_WRC},
];
BOOKS.forEach((b,i)=>b.id=i);

/* ------------------------------------------------------- i18n + currency */
const I18N = {
  en: {
    docTitle:"nubook. — novels on women & gender",
    coverAlt:"Cover of", qtyLess:"Decrease quantity", qtyMore:"Increase quantity",
    strap:"novels on women & gender", skip:"Skip to content", schemeLight:"Light", schemeDark:"Dark",
    genre:"Genre", tag:"Tag", lang:"Language", filter:"Filter", sort:"Sort by:",
    searchPh:"Search by title or author", searchClear:"Clear",
    /* The one-time introduction. Each entry replaces the one before it, and the
       last one is what the field settles on - it has to equal searchPh. */
    searchIntro:["Search by title","Search by author","Search by title or author"],
    all:"All",
    sorts:{featured:"Our recommendations",newest:"Newest first","price-asc":"Price, low to high","pub-asc":"First published: oldest"},
    status:{new:"New",soon:"Coming soon",last:"Last pieces",out:"Not available",pulitzer:"Pulitzer Winner"},
    genres:{}, /* English genre names are the data keys */
    editions:{en:"English", pl:"Polish"},
    empty:"No novels match these filters.", clear:"Clear all filters",
    back:"Back", addToCart:"Add to cart", preorder:"Pre-order", notAvail:"Not available",
    added:"Added",
    cartTitle:"Cart", cartEmpty:"Your cart is empty.", subtotal:"Items", shipping:"Shipping",
    rights:"All rights reserved.",
    total:"Total", vatNote:"incl. VAT", toCheckout:"Checkout", removeItem:"Remove",
    toCartPage:"View cart", cartPageTitle:"Cart", toOrder:"Proceed to checkout",
    promoCopy:"10% off every title with the code", promoAria:"Copy the discount code",
    promoDone:"Copied", promoFail:"Copy it by hand",
    discount:"Discount code", discountPh:"Enter code", discountApply:"Apply",
    discountInvalid:"Invalid code", discountRow:"Discount", discountRemove:"remove",
    shipAtCheckout:"calculated at checkout",
    freeLeft:"away from free shipping", freeDone:"Free shipping unlocked!",
    coTitle:"Checkout", backShop:"Back to shop",
    secContact:"Contact & delivery address", secShip:"Delivery method", secPay:"Payment method", secConsent:"Consents",
    fName:"Full name", fEmail:"E-mail", fPhone:"Phone", fPrefix:"Prefix",
    fStreet:"Street", fHouse:"No.", fFlat:"Flat", fFlatHint:"(optional)",
    fZip:"Postal code", fCity:"City", fCountry:"Country",
    errRequired:"Fill in this field.",
    errEmail:"Enter an address in the form name@domain.com.",
    errPhone:"A phone number has 9 digits.",
    errAlnum:"Digits and letters only.",
    errZip:"A postal code has the form 00-000.",
    errConsent:"Accepting the terms is required to place an order.",
    shipNames:{inpost:"InPost parcel locker", courier:"DPD courier", pickup:"Pick up at the bookshop"},
    shipDesc:{inpost:"1–2 business days", courier:"1–2 business days", pickup:"Wrocław, same day"},
    freeWord:"free",
    payNames:{blik:"BLIK", card:"Payment card", p24:"Przelewy24"},
    consentReq:"I accept the shop terms and the privacy policy (required)",
    consentNews:"I want to receive the newsletter (optional)",
    withdrawal:"You may withdraw from the contract within 14 days without giving a reason (EU Directive 2011/83).",
    gdpr:"The data controller is nubook. Your personal data is processed solely to fulfil this order. You have the right to access, correct and delete your data.",
    orderBtn:"Order with obligation to pay", processing:"Processing…",
    summary:"Order summary",
    thanks:"Thank you for your order!", orderNo:"Order number",
    thanksInfo:"A confirmation has been sent to your e-mail address. We will dispatch your parcel within 1–2 business days.",
    backHome:"Back to the shop",
    dGenre:"Genre", dLang:"Edition language", dStatus:"Status",
    aboutAuthor:{f:"About the author", m:"About the author", nb:"About the author"},
    aria:{fav:"Favourites",account:"Account",cart:"Cart",
          close:"Close",langGroup:"Language",curGroup:"Currency",schemeGroup:"Theme"},
    designSystem:"Design system",
  },
  pl: {
    docTitle:"nubook. — powieści o kobietach i płci",
    coverAlt:"Okładka:", qtyLess:"Zmniejsz ilość", qtyMore:"Zwiększ ilość",
    strap:"powieści o kobietach i płci", skip:"Przejdź do treści", schemeLight:"Jasny", schemeDark:"Ciemny",
    genre:"Gatunek", tag:"Tag", lang:"Język", filter:"Filtry", sort:"Sortuj:",
    searchPh:"Szukaj tytułu lub autorki", searchClear:"Wyczyść",
    searchIntro:["Szukaj tytułu","Szukaj autorki","Szukaj tytułu lub autorki"],
    all:"Wszystkie",
    sorts:{featured:"Nasze rekomendacje",newest:"Od najnowszych","price-asc":"Cena: od najniższej","pub-asc":"Pierwsze wydanie: rosnąco"},
    status:{new:"Nowość",soon:"Wkrótce",last:"Ostatnie sztuki",out:"Niedostępna",pulitzer:"Nagroda Pulitzera"},
    genres:{"Classic":"Klasyka","Contemporary":"Współczesna","Dystopia":"Dystopia","Queer":"Queer","Non-fiction":"Literatura faktu"},
    editions:{en:"Angielski", pl:"Polski"},
    empty:"Żadna książka nie pasuje do wybranych filtrów.", clear:"Wyczyść filtry",
    back:"Wróć", addToCart:"Dodaj do koszyka", preorder:"Zamów przedpremierowo", notAvail:"Niedostępna",
    added:"Dodano",
    cartTitle:"Koszyk", cartEmpty:"Twój koszyk jest pusty.", subtotal:"Produkty", shipping:"Dostawa",
    rights:"Wszelkie prawa zastrzeżone.",
    total:"Razem", vatNote:"w tym VAT", toCheckout:"Przejdź do kasy", removeItem:"Usuń",
    toCartPage:"Przejdź do koszyka", cartPageTitle:"Koszyk", toOrder:"Przejdź do zamówienia",
    promoCopy:"10% rabatu na wszystkie tytuły z kodem", promoAria:"Skopiuj kod rabatowy",
    promoDone:"Skopiowano", promoFail:"Skopiuj ręcznie",
    discount:"Kod rabatowy", discountPh:"Wpisz kod", discountApply:"Zastosuj",
    discountInvalid:"Nieprawidłowy kod", discountRow:"Rabat", discountRemove:"usuń",
    shipAtCheckout:"wyliczona w zamówieniu",
    freeLeft:"do darmowej dostawy", freeDone:"Masz darmową dostawę!",
    coTitle:"Zamówienie", backShop:"Wróć do sklepu",
    secContact:"Dane kontaktowe i adres dostawy", secShip:"Sposób dostawy", secPay:"Metoda płatności", secConsent:"Zgody",
    fName:"Imię i nazwisko", fEmail:"E-mail", fPhone:"Telefon", fPrefix:"Prefiks",
    fStreet:"Ulica", fHouse:"Nr domu", fFlat:"Nr lokalu", fFlatHint:"(opcjonalnie)",
    fZip:"Kod pocztowy", fCity:"Miasto", fCountry:"Kraj",
    errRequired:"Uzupełnij to pole.",
    errEmail:"Podaj adres w postaci nazwa@domena.pl.",
    errPhone:"Numer telefonu ma 9 cyfr.",
    errAlnum:"Tylko cyfry i litery.",
    errZip:"Kod pocztowy ma postać 00-000.",
    errConsent:"Do złożenia zamówienia potrzebna jest akceptacja regulaminu.",
    shipNames:{inpost:"Paczkomat InPost", courier:"Kurier DPD", pickup:"Odbiór w księgarni"},
    shipDesc:{inpost:"1–2 dni robocze", courier:"1–2 dni robocze", pickup:"Wrocław, od ręki"},
    freeWord:"za darmo",
    payNames:{blik:"BLIK", card:"Karta płatnicza", p24:"Przelewy24"},
    consentReq:"Akceptuję regulamin sklepu oraz politykę prywatności (wymagane)",
    consentNews:"Chcę otrzymywać newsletter z nowościami (opcjonalnie)",
    withdrawal:"Masz prawo odstąpić od umowy w ciągu 14 dni bez podania przyczyny (dyrektywa 2011/83/UE).",
    gdpr:"Administratorem danych osobowych jest nubook. Dane przetwarzamy wyłącznie w celu realizacji zamówienia. Masz prawo dostępu do danych, ich sprostowania i usunięcia.",
    orderBtn:"Zamawiam z obowiązkiem zapłaty", processing:"Przetwarzanie…",
    summary:"Podsumowanie zamówienia",
    thanks:"Dziękujemy za zamówienie!", orderNo:"Numer zamówienia",
    thanksInfo:"Potwierdzenie wysłaliśmy na podany adres e-mail. Przesyłkę nadamy w ciągu 1–2 dni roboczych.",
    backHome:"Wróć do sklepu",
    dGenre:"Gatunek", dLang:"Język wydania", dStatus:"Status",
    aboutAuthor:{f:"O autorce", m:"O autorze", nb:"O osobie autorskiej"},
    aria:{fav:"Ulubione",account:"Konto",cart:"Koszyk",
          close:"Zamknij",langGroup:"Język",curGroup:"Waluta",schemeGroup:"Motyw"},
    designSystem:"System projektowy",
  },
};
let LANG = "pl";
let CUR = "pln";
/* "auto" until somebody chooses: the shop then follows the reader's system. */
let SCHEME = "auto";
/* The search field introduces itself once and then stops. A demonstration
   watched a third time has stopped demonstrating and started interrupting. */
let INTRO_SEEN = false;

/* Preview sandboxes (like the Claude artifact viewer) intercept clicks on <a>.
   When embedded in a frame we render cards as JS-driven elements instead;
   opened normally (deployed), cards are real deep-linkable anchors. */
const EMBEDDED = (()=>{ try { return window.self !== window.top; } catch(e){ return true; } })();

const T = () => I18N[LANG];
const titleOf = b => LANG === "pl" ? b.tp : b.t;
const genreLabel = g => T().genres[g] || g;
const priceOf = b => CUR === "pln" ? b.pp : b.p;
/* One money format for the whole shop, declared next to the cart totals that
   already used it. The currency is named by the EUR/PLN switch in the header,
   so a price does not repeat the code beside the symbol. */

/* ------------------------------------------------------------ state */
const state = {
  genre:  new Set(),       // empty = all
  status: new Set(),       // empty = all
  lang:   "en",            // edition language shown; single-select, default English
  sort: "featured",
  /* What was typed into the search field. A moment, not a setting: it is not
     saved and not restored, unlike the four above it. */
  q: "",
};

/* Everything the reader chose about how the shop is shown, kept together: the
   language and the currency, which nobody wants to set on every visit, and the
   filters and the sort, which are a question already answered once. Same
   treatment as the cart - the store may be missing, refused, or written by
   another version of the shop, so every value is checked against what the shop
   actually offers and anything else falls back to the default.

   Saved from render(), because render is what every one of these changes ends
   in: one call instead of eight, and no way to add a ninth that forgets. */
const PREFS_KEY = "nubook.prefs.v1";
const SORTS = ["featured","newest","price-asc","pub-asc"];
function savePrefs(){
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify({
      lang: LANG, cur: CUR, scheme: SCHEME, edition: state.lang, sort: state.sort, introSeen: INTRO_SEEN,
      genre: [...state.genre], status: [...state.status],
    }));
  } catch {}
}
(function restorePrefs(){
  let p; try { p = JSON.parse(localStorage.getItem(PREFS_KEY) || "{}"); } catch { return; }
  if (!p || typeof p !== "object") return;
  const known = (field, value) => BOOKS.some(b => b[field] === value);
  if (p.lang === "en" || p.lang === "pl") LANG = p.lang;
  if (p.cur === "eur" || p.cur === "pln") CUR = p.cur;
  if (p.scheme === "light" || p.scheme === "dark") SCHEME = p.scheme;
  if (p.introSeen === true) INTRO_SEEN = true;
  if (p.edition === "en" || p.edition === "pl") state.lang = p.edition;
  if (SORTS.includes(p.sort)) state.sort = p.sort;
  if (Array.isArray(p.genre))  p.genre .filter(k => known("g", k)).forEach(k => state.genre.add(k));
  if (Array.isArray(p.status)) p.status.filter(k => known("s", k)).forEach(k => state.status.add(k));
})();

/* Two strings match when they match after the differences a reader does not
   think about are taken away: case, and the marks over Polish letters. Somebody
   typing "umilowana" on a keyboard without them is looking for "Umiłowana", and
   "ATWOOD" is looking for Atwood. NFD splits a letter from its mark so the mark
   can be dropped; ł has no mark to split, so it is replaced on its own. */
const fold = s => (s || "")
  .toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/ł/g, "l");
/* A book answers a query when the query appears in its title, in either
   language, or in its author. Genre and tag are left out on purpose: the chips
   above already do that, and two ways to say the same thing disagree sooner or
   later. */
const matchesQuery = (b, q) => {
  const n = fold(q).trim();
  if (n.length < 2) return true;
  return [b.t, b.tp, b.a].some(v => fold(v).includes(n));
};

/* ------------------------------------------------------ filter chips */
function buildChips(rowId, items, set){
  const row = document.getElementById(rowId);
  row.innerHTML = "";
  const all = document.createElement("button");
  all.type = "button"; all.className = "chip";
  all.innerHTML = `<span class="chip-t"></span>`;
  all.firstChild.textContent = T().all;
  all.setAttribute("aria-pressed", set.size === 0);
  all.onclick = () => { set.clear(); render(); };
  row.appendChild(all);

  items.forEach(([key,label,count])=>{
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip";
    b.innerHTML = `<span class="chip-t">${label}</span>` + (count!=null ? `<sup>${count}</sup>` : "");
    b.setAttribute("aria-pressed", set.has(key));
    // an option that would yield no results is inactive (unless it is already selected,
    // so the user can always un-select it)
    if (count === 0 && !set.has(key)) b.disabled = true;
    b.onclick = () => {
      set.has(key) ? set.delete(key) : set.add(key);
      render();
    };
    row.appendChild(b);
  });
}

/* Count for a chip: matches every OTHER active filter (genre / status / language),
   with the counted option substituted in its own dimension. */
function countFor(dim, key){
  const genreOK  = b => dim === "genre"  ? b.g === key : (state.genre.size===0  || state.genre.has(b.g));
  const statusOK = b => dim === "status" ? b.s === key : (state.status.size===0 || state.status.has(b.s));
  const langOK   = b => dim === "lang"   ? b.ed === key : b.ed === state.lang;
  /* The query narrows the count as much as any chip does: a count that ignored
     it would promise results the reader cannot reach. */
  return BOOKS.filter(b => matchesQuery(b, state.q) && genreOK(b) && statusOK(b) && langOK(b)).length;
}

function chipData(){
  /* Every count answers: "how many results would I get with this option, given everything
     else that is currently selected in the OTHER categories?"  With nothing selected anywhere
     that is simply the global count. */
  const genres = [...new Set(BOOKS.map(b=>b.g))].sort()
    .map(g=>[g, genreLabel(g), countFor("genre", g)]);
  const statuses = Object.keys(STATUS)
    .map(k=>[k, T().status[k], countFor("status", k)]);
  buildChips("genreRow", genres, state.genre);
  buildChips("statusRow", statuses, state.status);

  /* edition language: single-select, no "All"; zero-count options greyed out */
  const langRow = document.getElementById("langRow");
  langRow.innerHTML = "";
  ["en","pl"].forEach(k=>{
    const count = countFor("lang", k);
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip";
    b.innerHTML = `<span class="chip-t">${T().editions[k]}</span><sup>${count}</sup>`;
    b.setAttribute("aria-pressed", state.lang === k);
    if (count === 0 && state.lang !== k) b.disabled = true;
    b.onclick = () => { state.lang = k; render(); };
    langRow.appendChild(b);
  });
}

/* ------------------------------------------------------------ sort */
const sortBtn = document.getElementById("sortBtn"),
      sortMenu = document.getElementById("sortMenu");

/* A menu button: the trigger says a menu hangs off it, the panel is a menu, and
   each option is one choice out of a set. That is what makes aria-checked the
   right attribute here — it belongs to a radio item, not to a list option.
   The role also promises keyboard behaviour, so the keyboard has to deliver it:
   arrows walk the options, Home and End reach the ends, Escape closes and hands
   focus back to the trigger. */
const sortItems = () => [...sortMenu.querySelectorAll('[role="menuitemradio"]')];
const sortOpen  = () => sortBtn.getAttribute("aria-expanded") === "true";

function setSortOpen(open, moveFocus = true){
  sortBtn.setAttribute("aria-expanded", String(open));
  if (open && moveFocus){
    const items = sortItems();
    (items.find(b => b.getAttribute("aria-checked") === "true") || items[0]).focus();
  }
  // only take focus back if it is inside the menu, so a click elsewhere on the
  // page closes the menu without pulling focus across the screen
  if (!open && moveFocus && sortMenu.contains(document.activeElement)) sortBtn.focus();
}

sortBtn.onclick = (e)=>{ e.stopPropagation(); setSortOpen(!sortOpen()); };
sortBtn.addEventListener("keydown", e=>{
  if (e.key === "ArrowDown" || e.key === "ArrowUp"){ e.preventDefault(); setSortOpen(true); }
});
sortMenu.addEventListener("keydown", e=>{
  const items = sortItems(), i = items.indexOf(document.activeElement);
  const go = n => { e.preventDefault(); items[(n + items.length) % items.length].focus(); };
  if (e.key === "ArrowDown") return go(i + 1);
  if (e.key === "ArrowUp")   return go(i - 1);
  if (e.key === "Home")      return go(0);
  if (e.key === "End")       return go(items.length - 1);
  // the menu answers Escape itself, so the key does not travel on to close a drawer
  if (e.key === "Escape"){ e.stopPropagation(); setSortOpen(false); }
  if (e.key === "Tab")       setSortOpen(false, false);
});
document.addEventListener("click", ()=>{ setSortOpen(false, false); });
sortItems().forEach(b=>{
  b.onclick = (e)=>{
    e.stopPropagation();
    state.sort = b.dataset.sort;
    sortItems().forEach(x=>x.setAttribute("aria-checked", String(x === b)));
    document.getElementById("sortLbl").textContent = b.textContent;
    setSortOpen(false);
    render(false);
  };
});

/* ------------------------------------------------------------ search */
/* The field narrows the same list the chips narrow, so it does the same thing
   they do: change the state and re-render. Live from the second character,
   because at this size there is nothing to wait for. */
const searchInput = document.getElementById("searchInput");

/* The field says what can be typed into it by typing it. A search box with one
   example teaches one thing; this one swaps the word to show the range, then
   settles on the sentence that is true and stays there.

   Written on the placeholder alone. The accessible name never moves: it carries
   the final wording from the first moment, so a screen reader is told the whole
   truth once instead of being handed a changing label.

   It runs once per reader, stops the moment anyone touches the field, and does
   not run at all for somebody who asked for less motion - they get the final
   wording immediately, which is the whole content of the demonstration. */
let introTimer = null;
function endIntro(){
  clearTimeout(introTimer); introTimer = null;
  searchInput.placeholder = T().searchPh;
  if (!INTRO_SEEN){ INTRO_SEEN = true; savePrefs(); }
}
function playIntro(){
  const steps = T().searchIntro;
  if (INTRO_SEEN || !steps || document.activeElement === searchInput || searchInput.value){
    searchInput.placeholder = T().searchPh; return;
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches){ endIntro(); return; }
  const char = motionMs("--nu-motion-instant"), hold = motionMs("--nu-motion-slow");
  let i = 0, shown = "";
  const shared = (a, b) => { let n = 0; while (n < a.length && n < b.length && a[n] === b[n]) n++; return n; };
  const tick = ()=>{
    const target = steps[i];
    if (shown === target){
      if (i === steps.length - 1){ endIntro(); return; }
      i++; introTimer = setTimeout(tick, hold); return;
    }
    const keep = shared(shown, steps[i]);
    shown = shown.length > keep ? shown.slice(0, -1) : target.slice(0, shown.length + 1);
    searchInput.placeholder = shown;
    introTimer = setTimeout(tick, char);
  };
  searchInput.placeholder = "";
  introTimer = setTimeout(tick, hold);
}
searchInput.addEventListener("focus", endIntro, {once:false});
const searchClear = document.getElementById("searchClear");
/* The way out of a query, and the only thing that says one is running when the
   field has scrolled out of sight. It appears with something to clear and takes
   itself out of the tab order the moment there is nothing left, so nobody tabs
   onto a control with no work to do. */
function syncSearch(){
  state.q = searchInput.value;
  searchClear.hidden = !searchInput.value;
  render();
}
searchInput.addEventListener("input", ()=>{ endIntro(); syncSearch(); });
/* Pressing a button takes the focus off whatever held it - onto the button in
   some browsers, onto the document in others - and either way the field would
   close under the pointer on its way to being emptied, because its width follows
   the focus. Refusing the default on mousedown leaves the caret where it is, so
   nothing moves but the text. */
searchClear.addEventListener("mousedown", e => e.preventDefault());
searchClear.addEventListener("click", ()=>{
  searchInput.value = "";
  /* For a keyboard press, where the focus really is on the button: put it back
     before the button is hidden, or it lands on the document. */
  searchInput.focus();
  syncSearch();
});
/* Escape empties the field while it holds the focus, and stops there: the key
   also closes the sort menu, the sheet, the drawers and the product view, and a
   reader clearing a query is not asking for any of that. */
searchInput.addEventListener("keydown", e=>{
  if (e.key !== "Escape" || !searchInput.value) return;
  e.stopPropagation();
  searchInput.value = "";
  syncSearch();
});

/* --------------------------------------------------- mobile toggle */
const shopEl = document.getElementById("shop"),
      filterToggle = document.getElementById("filterToggle");
const filtersEl = document.getElementById("filters");
/* How long a movement takes is decided in one place, the stylesheet. The script
   reads the same token instead of keeping a second copy that could drift away
   from it. */
const motionMs = name => {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v.endsWith("ms") ? parseFloat(v) : parseFloat(v) * 1000;
};
const motionCurve = name =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const FT_MS = motionMs("--nu-motion-base"), FT_EASE = "linear";   // tiles
const FT_GHOST_MS = motionMs("--nu-motion-instant");  // filters clear well before the tiles expand

filterToggle.onclick = ()=>{
  const desktop = window.matchMedia("(min-width:821px)").matches;
  const reduce  = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const willHide = !shopEl.classList.contains("filters-hidden");

  // mobile has two places the panel can appear, so it gets its own decision
  if (!desktop){ mobileFilterTap(); return; }

  if (reduce){
    // reduced motion just snaps
    shopEl.classList.toggle("filters-hidden", willHide);
    filterToggle.setAttribute("aria-expanded", String(!willHide));
    return;
  }

  // 1) FIRST: remember where every product tile is
  const cards  = [...gridEl.querySelectorAll(".card")];
  const before = cards.map(c=>c.getBoundingClientRect());
  const fRect  = filtersEl.getBoundingClientRect();

  // when hiding, keep a visual copy of the filters to slide/fade out
  let ghost = null;
  if (willHide){
    ghost = filtersEl.cloneNode(true);
    ghost.classList.add("filters-ghost");
    ghost.removeAttribute("id");
    Object.assign(ghost.style, {
      position:"fixed", left:fRect.left+"px", top:fRect.top+"px",
      width:fRect.width+"px", height:fRect.height+"px", margin:0, opacity:1
    });
    document.body.appendChild(ghost);
  }

  // 2) LAST: apply the layout change instantly
  shopEl.classList.toggle("filters-hidden", willHide);
  filterToggle.setAttribute("aria-expanded", String(!willHide));
  void shopEl.offsetWidth;

  // 3) INVERT + PLAY: every tile moves & resizes linearly from old box to new box
  cards.forEach((c,i)=>{
    const a = before[i], b = c.getBoundingClientRect();
    if (!a.width || !b.width) return;
    const dx = a.left - b.left, dy = a.top - b.top;
    const sx = a.width / b.width, sy = a.height / b.height;
    if (Math.abs(dx)<.5 && Math.abs(dy)<.5 && Math.abs(sx-1)<.001 && Math.abs(sy-1)<.001) return;
    c.style.transformOrigin = "top left";
    c.animate(
      [{transform:`translate(${dx}px,${dy}px) scale(${sx},${sy})`},{transform:"none"}],
      {duration:FT_MS, easing:FT_EASE}
    ).onfinish = ()=>{ c.style.transformOrigin = ""; };
  });

  // 4) the filters column itself: slide + fade, linear
  if (willHide){
    ghost.animate(
      [{opacity:1, transform:"translateX(0)"},{opacity:0, transform:"translateX(-10px)"}],
      {duration:FT_GHOST_MS, easing:FT_EASE, fill:"forwards"}
    ).onfinish = ()=> ghost.remove();
  } else {
    filtersEl.animate(
      [{opacity:0, transform:"translateX(-16px)"},{opacity:1, transform:"translateX(0)"}],
      {duration:FT_MS, easing:FT_EASE}
    );
  }
};

/* ------------------------------------ mobile: bottom bar + filter sheet */
/* The shop bar is pinned to the bottom of the screen on mobile, which puts it
   far away from the inline filter panel at the top of the list. So the toggle
   drives the panel from two places, depending on what is on screen:

     inline panel still in view  → tap expands / collapses it where it sits
     scrolled past it            → tap raises the SAME panel as a bottom sheet

   Only the positioning differs; there is one filter panel in the document, so a
   chip tapped in the sheet is already the selected chip in the inline panel. */
const isMobile = ()=>window.matchMedia("(max-width:820px)").matches;
const fsheetBg = document.getElementById("fsheetBg");

/* A collapsed panel has no box of its own (max-height:0), so fall back to the
   top edge of the list. 90px keeps the answer "yes" while the panel is only
   just under the header rather than genuinely gone. */
function inlineFiltersInView(){
  const r = filtersEl.getBoundingClientRect();
  const y = r.height > 1 ? r.bottom : shopEl.getBoundingClientRect().top;
  return y > 90;
}
const sheetOpen = ()=>document.body.classList.contains("fsheet");

/* The sheet and the inline panel are one element, so raising the sheet takes a
   few hundred pixels out of the document and dropping it puts them back. Left
   alone, that slides the whole list under the reader's thumb. Anchor on the
   grid, apply the change in a single frame, then undo the difference by the same
   amount — from the reader's side nothing moves but the sheet. */
function keepListStill(mutate){
  const before = gridEl.getBoundingClientRect().top;
  filtersEl.classList.add("no-anim");
  mutate();
  void filtersEl.offsetHeight;          // force the new layout before measuring
  const delta = gridEl.getBoundingClientRect().top - before;
  if (delta) window.scrollBy(0, delta);
  requestAnimationFrame(()=>filtersEl.classList.remove("no-anim"));
}

function openFilterSheet(){
  if (sheetOpen()) return;
  keepListStill(()=>{
    /* Collapse the inline copy: it is off screen anyway, and this way closing
       the sheet can never leave the user with two open panels. */
    shopEl.classList.add("filters-hidden");
    document.body.classList.remove("fsheet-out");
    document.body.classList.add("fsheet");
  });
  fsheetBg.classList.add("open");
  setPageInert(document.getElementById("filters"));
  filterToggle.setAttribute("aria-expanded","true");
}
function closeFilterSheet(){
  if (!sheetOpen()) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  fsheetBg.classList.remove("open");
  document.body.classList.add("fsheet-out");
  setPageInert(null);
  filterToggle.setAttribute("aria-expanded","false");
  // let it slide out before it drops back into the flow
  const settle = ()=>keepListStill(()=>{
    document.body.classList.remove("fsheet","fsheet-out");
  });
  reduce ? settle() : setTimeout(settle, motionMs("--nu-motion-base"));
}
function mobileFilterTap(){
  if (sheetOpen()){ closeFilterSheet(); return; }
  if (inlineFiltersInView()){
    const willHide = !shopEl.classList.contains("filters-hidden");
    shopEl.classList.toggle("filters-hidden", willHide);
    filterToggle.setAttribute("aria-expanded", String(!willHide));
    return;
  }
  openFilterSheet();
}
/* The icon has to read "collapsed" the moment the inline panel scrolls away,
   because from that point a tap opens the sheet instead of closing anything. */
function syncFilterToggle(){
  if (!isMobile() || sheetOpen()) return;
  const open = inlineFiltersInView() && !shopEl.classList.contains("filters-hidden");
  filterToggle.setAttribute("aria-expanded", String(open));
}
let syncPending = false;
window.addEventListener("scroll", ()=>{
  if (syncPending) return;
  syncPending = true;
  requestAnimationFrame(()=>{ syncPending = false; syncFilterToggle(); });
}, {passive:true});

fsheetBg.onclick = closeFilterSheet;
document.getElementById("fsheetClose").onclick = closeFilterSheet;
/* sorting and filtering both want the space above the bar — one at a time */
sortBtn.addEventListener("click", ()=>{ if (isMobile()) closeFilterSheet(); });

/* The bars are the page's bottom edge on mobile, so the clearance underneath the
   content has to match them exactly — measured, not guessed, because the label
   length and the device safe area both change the height. */
function measureBars(){
  const bar = document.getElementById("shopbar");
  const co  = document.getElementById("coBar");
  const root = document.documentElement.style;
  /* Round up to the 4px rhythm: a measured height would otherwise put an
     off-grid value into a clearance the spacing scale is supposed to govern.
     Up, never down, so the bar can never crop the content beneath it. */
  const grid = px => Math.ceil(px / 4) * 4 + "px";
  if (!bar.hidden) root.setProperty("--nu-mobar-height", grid(bar.offsetHeight));
  if (!co.hidden)  root.setProperty("--nu-cobar-height", grid(co.offsetHeight));
}
window.addEventListener("resize", ()=>{
  if (!isMobile()) closeFilterSheet();
  measureBars();
  syncFilterToggle();
  /* the example's marks are absolute boxes measured once, so they have to be
     taken again whenever the text they were measured against can reflow */
  if (!dsEl.hidden) dsHighlight(dsEl);
});
/* the display face arrives after first paint and changes the quote's height */
if (document.fonts && document.fonts.ready){
  document.fonts.ready.then(()=>{ if (!dsEl.hidden) dsHighlight(dsEl); });
}

/* ----------------------------------------------------------- covers */
/* Packshot container: grey tile + badge + cover. Used on the grid AND on the product page,
   so the open transition can zoom one and the same box. `ctx` = "grid" | "product". */
function tileHTML(b, ctx){
  const st = b.s ? STATUS[b.s] : null;
  const cls = ctx === "product" ? "tile p-tile" : "tile";
  return `<div class="${cls}" data-book="${b.id}">
      ${st ? `<span class="badge ${st.cls}">${T().status[b.s]}</span>` : ""}
      ${coverHTML(b)}
    </div>`;
}

function coverHTML(b){
  /* Every title ships a real cover image; the box adopts the image's own proportions. */
  return `
    <div class="cover cv-img">
      <img src="${b.img}" alt="${T().coverAlt} ${titleOf(b)}">
    </div>`;
}
function visibleBooks(){
  let list = BOOKS.filter(b =>
    matchesQuery(b, state.q) &&
    (state.genre.size===0  || state.genre.has(b.g)) &&
    (state.status.size===0 || state.status.has(b.s)) &&
    b.ed === state.lang
  );
  switch(state.sort){
    case "price-asc":  list = [...list].sort((a,b)=>priceOf(a)-priceOf(b)); break;
    /* oldest first by year of first publication in the original language;
       titles from the same year keep the curated order via the title tiebreak */
    case "pub-asc":    list = [...list].sort((a,b)=>a.pub-b.pub || a.t.localeCompare(b.t)); break;
    case "newest":     list = [...list].sort((a,b)=>{
      const rank = x => x.s === "soon" ? 0 : x.s === "out" ? 2 : 1;
      return rank(a) - rank(b) || b.added.localeCompare(a.added);
    }); break;
    /* featured = curated order of the data array */
  }
  return list;
}

function render(rebuildChips = true){
  savePrefs();
  if (rebuildChips) chipData();
  const grid = document.getElementById("grid");
  const list = visibleBooks();

  if (!list.length){
    grid.innerHTML = `<div class="empty">${T().empty}
      <button type="button" class="btn-ghost" id="resetBtn"><span class="lbl">${T().clear}</span></button></div>`;
    document.getElementById("resetBtn").onclick = ()=>{
      state.genre.clear(); state.status.clear(); state.lang = "en";
      render();
    };
    return;
  }

  const firstVisit = !render._done;      // only the very first paint of the grid
  render._done = true;

  grid.innerHTML = list.map(b=>{
    const st = b.s ? STATUS[b.s] : null;
    return `
    <article class="card ${b.s==="out"?"is-out":""}">
      ${EMBEDDED
        ? `<div class="cardlink" role="link" tabindex="0" aria-label="${titleOf(b)}, ${b.a}"
             onclick="location.hash='p${b.id}'"
             onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();location.hash='p${b.id}'}">`
        : `<a href="#p${b.id}" aria-label="${titleOf(b)}, ${b.a}">`}
        ${tileHTML(b, "grid")}
        <div class="meta">
          <span class="title">${titleOf(b)} <span class="author">- ${b.a}</span></span>
          <div class="price">${fmtMoney(priceOf(b))}</div>
        </div>
      ${EMBEDDED ? `</div>` : `</a>`}
    </article>`;
  }).join("");

  if (firstVisit){
    // give each card a random slot in a staggered sequence -> mosaic-like reveal
    const cards = [...grid.querySelectorAll(".card")];
    const order = cards.map((_,i)=>i).sort(()=>Math.random()-.5);
    const step = Math.max(28, Math.min(80, motionMs("--nu-motion-stagger") / Math.max(cards.length,1)));
    order.forEach((cardIdx, slot)=>{
      cards[cardIdx].style.setProperty("--d", (slot*step) + "ms");
    });
    grid.classList.add("mosaic");
    const total = order.length*step + 600;
    setTimeout(()=>{
      grid.classList.remove("mosaic");
      cards.forEach(c=>c.style.removeProperty("--d"));
    }, total);
  }
}

/* ---------------- packshot open transition ---------------- */
/* Both the grid tile and the product tile are the same 4/5 box with the cover at 62% width,
   so we can zoom ONE box uniformly (same scale on both axes) — no stretching. */
let openFrom = null;   // { rect, node }
const gridEl = document.getElementById("grid");
function captureTile(e){
  const tile = e.target.closest(".tile");
  if (!tile) return;
  openFrom = { rect: tile.getBoundingClientRect(), node: tile.cloneNode(true) };
}
gridEl.addEventListener("pointerdown", captureTile);
gridEl.addEventListener("keydown", e=>{ if (e.key === "Enter" || e.key === " ") captureTile(e); });

function playOpenTransition(){
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const info  = productEl.querySelector(".p-info");
  const cta   = productEl.querySelector(".p-cta");
  const ptile = productEl.querySelector(".p-tile");
  const from = openFrom; openFrom = null;

  const revealInfo = ()=>{
    if (!info || reduce) return;
    info.classList.add("p-enter");
    if (cta) cta.classList.add("p-enter-cta");
    void info.offsetWidth;
    requestAnimationFrame(()=>{
      info.classList.add("p-enter-in");
      if (cta) cta.classList.add("p-enter-cta-in");
      setTimeout(()=>{
        info.classList.remove("p-enter","p-enter-in");
        if (cta) cta.classList.remove("p-enter-cta","p-enter-cta-in");
      }, 1000);
    });
  };

  if (!from || !ptile || reduce){ revealInfo(); return; }
  const to = ptile.getBoundingClientRect();
  if (!to.width || !to.height){ revealInfo(); return; }

  // hide the real target + text while the box flies in
  ptile.style.visibility = "hidden";
  if (info) info.style.visibility = "hidden";

  const clone = from.node;
  clone.classList.add("fly-tile");
  clone.classList.remove("p-tile");
  Object.assign(clone.style, {
    position:"fixed", left: from.rect.left+"px", top: from.rect.top+"px",
    width: from.rect.width+"px", height: from.rect.height+"px",
    margin:0, zIndex:60, pointerEvents:"none",
    transformOrigin:"top left", willChange:"transform", aspectRatio:"auto"
  });
  document.body.appendChild(clone);

  // uniform scale (boxes share the 4/5 ratio) — take the width ratio; height follows
  const s  = to.width / from.rect.width;
  const dx = to.left - from.rect.left, dy = to.top - from.rect.top;
  const anim = clone.animate([
    { transform:"translate(0,0) scale(1)" },
    { transform:`translate(${dx}px,${dy}px) scale(${s})` }
  ], { duration: motionMs("--nu-motion-slower"), easing: motionCurve("--nu-ease-zoom"), fill:"forwards" });

  anim.onfinish = ()=>{
    ptile.style.visibility = "";
    if (info) info.style.visibility = "";
    clone.remove();          // real tile is pixel-identical at this point — no reload/flash
    revealInfo();
  };
}

/* --------------------------------------------------- product page + cart */
/* ---------------- author drawer ---------------- */
const drawerEl = document.getElementById("drawer"),
      drawerBg = document.getElementById("drawerBg");
let drawerBook = null;

function fillDrawer(){
  if (!drawerBook) return;
  const b = drawerBook, t = T();
  drawerEl.setAttribute("aria-label", b.a);
  document.getElementById("drawerBody").innerHTML = `
    ${b.aphoto
      ? `<img class="d-ava" src="${b.aphoto}" alt="${b.a}">`
      : `<span class="d-ava" aria-hidden="true">${b.a.split(" ").map(w=>w[0]).slice(0,2).join("")}</span>`}
    <div class="d-label">${t.aboutAuthor[b.gd]}</div>
    <h2 class="d-name">${b.a}</h2>
    <p class="d-bio">${LANG === "pl" ? b.abp : b.ab}</p>`;
}
/* aria-modal tells assistive technology to ignore everything outside an open
   dialog. inert makes the same thing true for the pointer and for the Tab key,
   which aria-modal does not touch: without it the promise holds for a screen
   reader and breaks for a keyboard, which walks out of the open drawer onto the
   page behind and clicks things nobody can see.

   Everything that is not on the dialog's own ancestry is marked, level by level,
   because the two drawers sit under the body while the filter sheet sits inside
   the shop - one rule reaches both. The backdrops are left alone: they carry the
   click that closes the dialog, and having no tabindex they are not reachable by
   keyboard anyway. */
function setPageInert(live){
  document.querySelectorAll("[inert]").forEach(el => el.removeAttribute("inert"));
  if (!live) return;
  for (let el = live; el && el.parentElement && el !== document.body; el = el.parentElement)
    [...el.parentElement.children].forEach(sib => {
      if (sib === el) return;
      if (sib.classList.contains("drawer-backdrop") || sib.classList.contains("sheet-backdrop")) return;
      sib.setAttribute("inert", "");
    });
}
function openAuthor(id){
  drawerBook = BOOKS[id];
  fillDrawer();
  drawerEl.classList.add("open");
  drawerBg.classList.add("open");
  drawerEl.setAttribute("aria-hidden", "false");
  setPageInert(drawerEl);
  document.getElementById("drawerClose").focus();
}
function closeAuthor(){
  drawerBook = null;
  drawerEl.classList.remove("open");
  drawerBg.classList.remove("open");
  drawerEl.setAttribute("aria-hidden", "true");
  setPageInert(null);
}
document.getElementById("drawerClose").onclick = closeAuthor;
drawerBg.onclick = closeAuthor;

/* ---------------- cart state ---------------- */
/* The cart outlives a reload. A shop that empties the basket because somebody
   refreshed the page punishes them for it, and localStorage rather than
   sessionStorage because a cart is expected to survive closing the browser too.

   Reading it back is treated like reading anything from outside the shop: the
   store can be missing, refused outright - Safari does that on a file:// page -
   or hold something another version wrote. Every entry is checked against the
   catalogue and anything that does not fit is dropped rather than trusted. */
const CART_KEY = "nubook.cart.v1";
function loadCart(){
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    if (!Array.isArray(raw)) return new Map();
    return new Map(raw.filter(e =>
      Array.isArray(e) && e.length === 2 &&
      Number.isInteger(e[0]) && BOOKS[e[0]] && BOOKS[e[0]].id === e[0] &&
      Number.isInteger(e[1]) && e[1] > 0));
  } catch { return new Map(); }
}
function saveCart(){
  try { localStorage.setItem(CART_KEY, JSON.stringify([...CART])); } catch {}
}
const CART = loadCart();          // book id -> qty
const SHIPPING = [
  {id:"inpost",  pln:12.99, eur:2.99},
  {id:"courier", pln:16.99, eur:3.99},
  {id:"pickup",  pln:0,     eur:0},
];
const FREE_OVER = {pln:150, eur:35};
/* The one icon the shop builds from script rather than from markup. Same grid,
   stroke and fill rules as every other: 24x24, 1.5, none, currentColor. It used
   to be a typed arrow inside the translated string, which meant a glyph living
   in the content layer and taking its weight from the font. */
const ICON_BACK = '<svg class="ico-back ico-sm" viewBox="0 0 16 16" aria-hidden="true">' +
  '<path d="M13.6 8H2.75"/><path d="M6.95 3.45L2.4 8l4.55 4.55"/></svg>';
const ICON_MINUS = '<svg class="ico-sm ico-minus" viewBox="0 0 16 16" aria-hidden="true">' +
  '<path d="M3.5 8h9"/></svg>';
const ICON_PLUS = '<svg class="ico-sm ico-plus" viewBox="0 0 16 16" aria-hidden="true">' +
  '<path d="M3.5 8h9"/><path d="M8 3.5v9"/></svg>';
const ICON_CHECK = '<svg class="ico-check ico-sm" viewBox="0 0 16 16" aria-hidden="true">' +
  '<path d="M2.75 8.35l3.5 3.5 7-8.05"/></svg>';
const ICON_CHEVRON = '<svg class="ico-chevron ico-sm" viewBox="0 0 16 16" aria-hidden="true">' +
  '<path d="M3.5 6.25L8 10.75l4.5-4.5"/></svg>';
/* A link that names where it goes is an <a>: it announces as a link, opens in a
   new tab on a middle click and hands its address to the context menu. Hash
   routing already listens for the address changing, so no handler is needed.
   Stepping back through history is not a destination, so that one stays a
   button. */
/* The stepper, written once because it stands in two places: the cart drawer and
   the cart page. At one the minus is disabled - taking the last copy away is the
   Remove button's job, not a side effect of counting down. */
const qtyHTML = (id, q) => `<span class="qty">
  <button type="button" aria-label="${T().qtyLess}"${q <= 1 ? " disabled" : ""} onclick="setQty(${id},${q - 1})">${ICON_MINUS}</button>
  <span>${q}</span>
  <button type="button" aria-label="${T().qtyMore}" onclick="setQty(${id},${q + 1})">${ICON_PLUS}</button>
</span>`;

const backHref = (text, href, cls = "back") =>
  `<a class="${cls} link has-icon" href="${href}">${ICON_BACK}<span class="lbl">${text}</span></a>`;
/* Stepping back has no address, so it is not a link but the lightest button
   tier - the same one that closes a drawer, which is the same move by another
   name: undoing a navigation. */
const backLink = (text, onclick, cls = "back") =>
  `<button type="button" class="${cls} btn-tertiary" onclick="${onclick}">` +
  `${ICON_BACK}${text}</button>`;

const DISCOUNTS = {ROOM10:0.10, SIOSTRA15:0.15, ROOM5:0.05};
// the code the promo bar advertises, read from the table above so the two cannot drift
const PROMO_CODE = "ROOM10";
let shipSel = "inpost", paySel = "blik", lastOrder = null, discount = null;

const fmtMoney = v => CUR === "pln"
  ? v.toFixed(2).replace(".", ",") + " zł"
  : "€" + v.toFixed(2);
const shipPrice = s => CUR === "pln" ? s.pln : s.eur;
const cartCount = () => [...CART.values()].reduce((a,b)=>a+b, 0);
const cartSubtotal = () => [...CART.entries()].reduce((sum,[id,q])=>sum + priceOf(BOOKS[id])*q, 0);
const discountValue = () => discount ? cartSubtotal() * discount.pct : 0;
const effSubtotal = () => cartSubtotal() - discountValue();
const freeShipping = () => effSubtotal() >= FREE_OVER[CUR];
const shipCost = () => {
  const s = SHIPPING.find(x=>x.id===shipSel);
  if (s.id !== "pickup" && freeShipping()) return 0;
  return shipPrice(s);
};

function applyDiscount(){
  const inp = document.getElementById("discInput");
  const code = (inp.value || "").trim().toUpperCase();
  if (DISCOUNTS[code]){
    discount = {code, pct: DISCOUNTS[code]};
    renderCartPage();
  } else {
    // a code that does not exist is a wrong value in a field, marked the way
    // every other wrong value is
    markField(inp, T().discountInvalid);
  }
}
function removeDiscount(){
  discount = null;
  renderCartPage();
}

function updateBadge(mode){
  const el = document.getElementById("cartN");
  const n = cartCount();
  el.textContent = n;
  el.hidden = n === 0;
  el.classList.remove("bump", "dot-in");
  if (!mode || n === 0) return;
  void el.offsetWidth;
  el.classList.add(mode === "in" ? "dot-in" : "bump");
}

function addToCart(id, btn){
  const wasEmpty = cartCount() === 0;
  CART.set(id, (CART.get(id) || 0) + 1);
  saveCart();
  updateBadge(wasEmpty ? "in" : "bump");
  setTimeout(openCart, motionMs("--nu-motion-slow"));
  if (btn){
    const label = btn.querySelector(".cta-label") || btn;
    const orig = label.innerHTML;
    btn.style.width = btn.offsetWidth + "px";   // freeze width for the whole sequence
    btn.classList.add("is-adding");             // stays visually active; clicks blocked in CSS
    const swap = (html, done) => {
      btn.classList.add("swap-out");
      setTimeout(()=>{
        label.innerHTML = html;
        btn.classList.remove("swap-out");
        btn.classList.add("swap-in");
        void btn.offsetWidth;                    // reflow, then ease back in
        btn.classList.remove("swap-in");
        if (done) done();
      }, 170);
    };
    swap(ICON_CHECK + T().added, ()=>{
      setTimeout(()=>{
        swap(orig, ()=>{
          btn.classList.remove("is-adding");
          btn.style.width = "";
        });
      }, 1000);
    });
  }
  renderCart();
}
function refreshCartViews(){
  renderCart();
  if (!cartPageEl.hidden) renderCartPage();
  if (CART.size === 0 && (location.hash === "#cart" || location.hash === "#checkout")) location.hash = "";
}
function setQty(id, q){
  if (q <= 0){ removeItem(id); return; }
  CART.set(id, q);
  saveCart();
  updateBadge(false);
  refreshCartViews();
}
function removeItem(id){
  const rows = [document.getElementById("ci"+id), document.getElementById("cp"+id)].filter(Boolean);
  const finish = ()=>{ CART.delete(id); saveCart(); updateBadge(false); refreshCartViews(); };
  if (rows.length){ rows.forEach(r=>r.classList.add("removing")); setTimeout(finish, motionMs("--nu-motion-base")); } else finish();
}

/* ---------------- cart drawer ---------------- */
const cartDrawerEl = document.getElementById("cartDrawer"),
      cartBgEl = document.getElementById("cartBg");
let cartOpen = false;

function renderCart(){
  const t = T();
  document.getElementById("cartTitle").textContent = t.cartTitle;
  const body = document.getElementById("cartBody");
  if (CART.size === 0){
    body.innerHTML = `<p class="cart-empty">${t.cartEmpty}</p>`;
    return;
  }
  const sub = cartSubtotal();
  const left = Math.max(0, FREE_OVER[CUR] - sub);
  const pct = Math.min(100, sub / FREE_OVER[CUR] * 100);
  body.innerHTML = [...CART.entries()].map(([id,q])=>{
    const b = BOOKS[id];
    return `
    <div class="ci" id="ci${id}">
      <div class="ci-cover">${coverHTML(b)}</div>
      <div class="ci-main">
        <span class="ci-title">${titleOf(b)}</span>
        <div class="ci-price">${fmtMoney(priceOf(b))}</div>
        <div class="ci-row">
            ${qtyHTML(id, q)}
          <span class="ci-line">${fmtMoney(priceOf(b)*q)}</span>
        </div>
        <button class="ci-remove btn-ghost" onclick="removeItem(${id})"><span class="lbl">${t.removeItem}</span></button>
      </div>
    </div>`;
  }).join("") + `
    <div class="cart-foot">
      <div class="fs-note">${left > 0
        ? `${fmtMoney(left)} ${t.freeLeft}`
        : t.freeDone}</div>
      <div class="fs-bar"><div class="fs-fill" style="width:${pct}%"></div></div>
      <div class="sum-row total"><span>${t.total}</span><span>${fmtMoney(sub - discountValue())}</span></div>
      <div class="sum-row muted"><span></span><span>${t.vatNote}</span></div>
      <button class="btn-primary cart-cta" onclick="goCartPage()">${t.toCartPage}</button>
    </div>`;
}
/* Focus always follows the drawer in. aria-modal tells assistive technology to
   ignore everything outside it, so focus left behind is focus in a dead zone -
   the drawer is open and the reader has no way to know or to reach it. */
function openCart(){
  renderCart();
  cartOpen = true;
  cartDrawerEl.classList.add("open");
  cartBgEl.classList.add("open");
  cartDrawerEl.setAttribute("aria-hidden", "false");
  setPageInert(cartDrawerEl);
  document.getElementById("cartClose").focus();
}
function closeCart(){
  cartOpen = false;
  cartDrawerEl.classList.remove("open");
  cartBgEl.classList.remove("open");
  cartDrawerEl.setAttribute("aria-hidden", "true");
  setPageInert(null);
}
document.getElementById("cartClose").onclick = closeCart;
cartBgEl.onclick = closeCart;
document.getElementById("btnCart").onclick = ()=>{
  if (CART.size === 0){ cartOpen ? closeCart() : openCart(); return; }
  goCartPage();
};

function goCartPage(){
  if (CART.size === 0) return;
  closeCart();
  location.hash = "cart";
}
function goCheckout(){
  if (CART.size === 0) return;
  closeCart();
  location.hash = "checkout";
}

/* ---------------- full cart page ---------------- */
const cartPageEl = document.getElementById("cartPage");

function renderCartPage(){
  const t = T();
  const sub = cartSubtotal(), disc = discountValue();
  cartPageEl.innerHTML = `
  ${backLink(t.backShop, "history.length > 1 ? history.back() : location.hash=''")}
  <h1 class="co-h">${t.cartPageTitle}</h1>
  <div class="co-grid">
    <div class="cart-page-list">
      ${[...CART.entries()].map(([id,q])=>{
        const b = BOOKS[id];
        return `
        <div class="ci" id="cp${id}">
          <div class="ci-cover">${coverHTML(b)}</div>
          <div class="ci-main">
            <span class="ci-title">${titleOf(b)}</span>
            <div class="ci-price">${b.a} · ${fmtMoney(priceOf(b))}</div>
            <div class="ci-row">
            ${qtyHTML(id, q)}
              <span class="ci-line">${fmtMoney(priceOf(b)*q)}</span>
            </div>
            <button class="ci-remove btn-ghost" onclick="removeItem(${id})"><span class="lbl">${t.removeItem}</span></button>
          </div>
        </div>`;
      }).join("")}
    </div>
    <aside class="co-side">
      <h3>${t.discount}</h3>
      ${discount
        ? `<div class="disc-applied">${discount.code} (−${Math.round(discount.pct*100)}%)
             <button type="button" class="btn-ghost" onclick="removeDiscount()"><span class="lbl">${t.discountRemove}</span></button></div>`
        : `<div class="disc-row">
             <input class="input" id="discInput" aria-label="${t.discount}" placeholder="${t.discountPh}" aria-describedby="discMsg"
               oninput="markField(this,'')"
               onkeydown="if(event.key==='Enter'){event.preventDefault();applyDiscount()}">
             <button class="btn-secondary" onclick="applyDiscount()">${t.discountApply}</button>
           </div>
           <p class="field-msg" id="discMsg"></p>`}
      <div style="margin-top:var(--nu-space-micro)">
        <div class="sum-row muted"><span>${t.subtotal}</span><span>${fmtMoney(sub)}</span></div>
        ${discount ? `<div class="sum-row muted"><span>${t.discountRow}</span><span>−${fmtMoney(disc)}</span></div>` : ""}
        <div class="sum-row muted"><span>${t.shipping}</span><span>${t.shipAtCheckout}</span></div>
        <div class="sum-row total"><span>${t.total}</span><span>${fmtMoney(sub - disc)}</span></div>
        <div class="sum-row muted"><span></span><span>${t.vatNote}</span></div>
      </div>
      <button class="btn-primary order-btn" onclick="goCheckout()">${t.toOrder}</button>
    </aside>
  </div>`;
}

/* ---------------- checkout ---------------- */
const checkoutEl = document.getElementById("checkout"),
      coBarEl = document.getElementById("coBar"),
      doneEl = document.getElementById("doneView");

/* One shape for every field: a label bound to its control by id, the control,
   and a line underneath that stays empty until something is wrong. The message
   is announced through aria-describedby, so a screen reader reads it as part of
   the field rather than as loose text nearby. */
const fieldHTML = (key, label, attrs = "", cls = "") => `
  <div class="field${cls ? " " + cls : ""}">
    <label for="f-${key}">${label}</label>
    <input class="input" id="f-${key}" name="${key}" aria-describedby="e-${key}" ${attrs}>
    <p class="field-msg" id="e-${key}"></p>
  </div>`;

/* What a field accepts and what it must end up being. The mask runs while the
   reader types and only ever takes characters away, so nothing can be entered
   that would later fail; the pattern is checked on leaving the field and on
   submit. Both live here, side by side, because a mask that lets through what
   the pattern rejects is the way these two drift apart. */
/* One list, two controls: the dialling code and the country name are the same
   six countries, so they are written once and read twice. */
const COUNTRIES = [
  {code: "48",  name: "Polska"},      {code: "49",  name: "Deutschland"},
  {code: "420", name: "\u010cesko"},  {code: "421", name: "Slovensko"},
  {code: "370", name: "Lietuva"},     {code: "43",  name: "\u00d6sterreich"},
];

const FORM_RULES = {
  name:   {},
  email:  {re: /^[^\s@]+@[^\s@.]+(\.[^\s@.]{2,})+$/, err: "errEmail"},
  phone:  {mask: "digits", max: 9, re: /^\d{9}$/, err: "errPhone"},
  street: {},
  house:  {mask: "alnum", re: /^[\p{L}\d]+$/u, err: "errAlnum"},
  flat:   {mask: "alnum", re: /^[\p{L}\d]+$/u, err: "errAlnum", optional: true},
  zip:    {mask: "zip", re: /^\d{2}-\d{3}$/, err: "errZip"},
  city:   {},
  terms:  {err: "errConsent"},
};
const MASKS = {
  digits: (v, max) => v.replace(/\D/g, "").slice(0, max),
  alnum:  v => v.replace(/[^\p{L}\d]/gu, ""),
  /* The hyphen is written by the field, not by the reader: five digits go in,
     00-000 comes out. */
  zip: v => {
    const d = v.replace(/\D/g, "").slice(0, 5);
    return d.length > 2 ? d.slice(0, 2) + "-" + d.slice(2) : d;
  },
};
function fieldError(input){
  const rule = FORM_RULES[input.name];
  if (!rule) return "";
  if (input.type === "checkbox") return input.checked ? "" : T()[rule.err];
  const v = input.value.trim();
  if (!v) return rule.optional ? "" : T().errRequired;
  return rule.re && !rule.re.test(v) ? T()[rule.err] : "";
}
/* The message goes to the element the control already points at through
   aria-describedby, so a container holding two controls — prefix and number —
   writes each message under its own field. */
function markField(input, msg){
  const out = document.getElementById(input.getAttribute("aria-describedby"));
  input.classList.toggle("is-error", !!msg);
  input.setAttribute("aria-invalid", msg ? "true" : "false");
  if (out) out.textContent = msg;
}
/* Returns the first field that failed, so the caller can put focus there:
   an error the reader cannot find is an error twice over. */
function validateForm(form){
  let first = null;
  form.querySelectorAll("input[name]").forEach(input => {
    if (!(input.name in FORM_RULES)) return;
    const msg = fieldError(input);
    markField(input, msg);
    if (msg && !first) first = input;
  });
  return first;
}

function shipRow(s){
  const t = T();
  const free = s.id !== "pickup" && freeShipping();
  const price = (free || shipPrice(s) === 0) ? t.freeWord : fmtMoney(shipPrice(s));
  return `
  <label class="opt">
    <input type="radio" name="ship" value="${s.id}" ${shipSel===s.id?"checked":""}
      onchange="shipSel=this.value;refreshTotals()">
    <span class="o-main">${t.shipNames[s.id]}<br><span class="o-sub">${t.shipDesc[s.id]}</span></span>
    <span class="o-price">${price}</span>
  </label>`;
}

function renderCheckout(){
  const t = T();
  checkoutEl.innerHTML = `
  ${backHref(t.backShop, "#")}
  <h1 class="co-h">${t.coTitle}</h1>
  <form id="coForm" novalidate>
  <div class="co-grid">
    <div>
      <div class="co-sec">
        <h3>${t.secContact}</h3>
        <div class="f-grid">
          ${fieldHTML("name", t.fName, 'required autocomplete="name"', "wide")}
          ${fieldHTML("email", t.fEmail, 'type="email" required autocomplete="email" inputmode="email"')}
          <div class="field">
            <label for="f-phone">${t.fPhone}</label>
            <div class="f-group">
              <span class="select-wrap">
                <select class="select" id="f-prefix" name="prefix" aria-label="${t.fPrefix}" autocomplete="tel-country-code">
                  ${/* The country is the group's name, not the option's: a group label
                        shows in the open list and never in the closed field, so the
                        field holds digits only without anything rewriting it. */""}
                  ${COUNTRIES.map(c => `<optgroup label="${c.name}"><option value="${c.code}">+${c.code}</option></optgroup>`).join("")}
                </select>${ICON_CHEVRON}
              </span>
              <input class="input" id="f-phone" name="phone" type="tel" required inputmode="numeric"
                autocomplete="tel-national" aria-describedby="e-phone">
            </div>
            <p class="field-msg" id="e-phone"></p>
          </div>
          <div class="f-addr">
            ${fieldHTML("street", t.fStreet, 'required autocomplete="address-line1"')}
            ${fieldHTML("house", t.fHouse, 'required autocomplete="address-line2"')}
            ${fieldHTML("flat", `${t.fFlat} <span class="f-hint">${t.fFlatHint}</span>`, 'autocomplete="address-line3"')}
          </div>
          ${fieldHTML("zip", t.fZip, 'required autocomplete="postal-code" inputmode="numeric" placeholder="00-000"')}
          ${fieldHTML("city", t.fCity, 'required autocomplete="address-level2"')}
          <div class="field wide"><label for="f-country">${t.fCountry}</label>
            <span class="select-wrap">
              <select class="select" id="f-country" name="country">
                ${COUNTRIES.map(c => `<option>${c.name}</option>`).join("")}
              </select>${ICON_CHEVRON}
            </span>
          </div>
        </div>
      </div>
      <div class="co-sec">
        <h3>${t.secShip}</h3>
        ${SHIPPING.map(shipRow).join("")}
      </div>
      <div class="co-sec">
        <h3>${t.secPay}</h3>
        ${["blik","card","p24"].map(p=>`
        <label class="opt">
          <input type="radio" name="pay" value="${p}" ${paySel===p?"checked":""} onchange="paySel=this.value">
          <span class="o-main">${t.payNames[p]}</span>
        </label>`).join("")}
      </div>
      <div class="co-sec">
        <h3>${t.secConsent}</h3>
        <label class="consent"><input type="checkbox" name="terms" required aria-describedby="e-terms"><span>${t.consentReq}</span></label>
        <p class="field-msg" id="e-terms"></p>
        <label class="consent"><input type="checkbox" name="news"><span>${t.consentNews}</span></label>
        <p class="legal">${t.withdrawal}<br>${t.gdpr}</p>
      </div>
    </div>
    <aside class="co-side">
      <h3>${t.summary}</h3>
      ${[...CART.entries()].map(([id,q])=>{
        const b = BOOKS[id];
        return `<div class="co-item"><span class="n">${titleOf(b)} <span class="q">× ${q}</span></span><span>${fmtMoney(priceOf(b)*q)}</span></div>`;
      }).join("")}
      <div style="margin-top:var(--nu-space-small)">
        <div class="sum-row muted"><span>${t.subtotal}</span><span>${fmtMoney(cartSubtotal())}</span></div>
        ${discount ? `<div class="sum-row muted"><span>${t.discountRow} (${discount.code})</span><span>−${fmtMoney(discountValue())}</span></div>` : ""}
        <div class="sum-row muted"><span>${t.shipping}</span><span id="coShip">${shipCost()===0?t.freeWord:fmtMoney(shipCost())}</span></div>
        <div class="sum-row total"><span>${t.total}</span><span id="coTotal">${fmtMoney(effSubtotal()+shipCost())}</span></div>
        <div class="sum-row muted"><span></span><span>${t.vatNote}</span></div>
      </div>
      <button class="btn-primary order-btn" id="orderBtn" type="submit">${t.orderBtn}</button>
    </aside>
  </div>
  </form>`;
  const form = document.getElementById("coForm");
  form.onsubmit = submitOrder;
  /* Delegated, because the form is rebuilt whenever the language or the currency
     changes and per-field handlers would go with it. The mask only ever removes
     characters, so the caret goes to the end of what is left. */
  form.addEventListener("input", e => {
    const rule = FORM_RULES[e.target.name];
    if (!rule) return;
    if (rule.mask){
      const masked = MASKS[rule.mask](e.target.value, rule.max);
      if (masked !== e.target.value){
        e.target.value = masked;
        e.target.setSelectionRange(masked.length, masked.length);
      }
    }
    // clearing on the way in, checking on the way out: nobody wants to be told
    // the address is wrong while still typing it
    e.target.dataset.typed = "1";
    markField(e.target, "");
  });
  form.addEventListener("change", e => {
    if (e.target.type === "checkbox" && e.target.name in FORM_RULES)
      markField(e.target, fieldError(e.target));
  });
  /* A field nobody has typed in yet says nothing on the way out: leaving an
     empty field is not a mistake, it is a reader who has not got there. Once
     a character has been typed the field reports for the rest of the visit,
     and the submit checks everything regardless. */
  form.addEventListener("focusout", e => {
    const el = e.target;
    if (!(el.name in FORM_RULES)) return;
    if (!el.value && !el.dataset.typed) return;
    markField(el, fieldError(el));
  }, true);
  /* Mobile: amount due and the submit follow the user down the form. The button
     lives outside <form> (see index.html) and reaches it by id instead. */
  coBarEl.innerHTML = `
    <div>
      <span class="cb-lbl">${t.total}</span>
      <span class="cb-val" id="coBarTotal">${fmtMoney(effSubtotal()+shipCost())}</span>
    </div>
    <button class="btn-primary order-btn" id="orderBtnBar" type="submit" form="coForm">${t.orderBtn}</button>`;
  measureBars();
}
function refreshTotals(){
  const t = T();
  const s = document.getElementById("coShip"), tt = document.getElementById("coTotal");
  if (s) s.textContent = shipCost()===0 ? t.freeWord : fmtMoney(shipCost());
  const amount = fmtMoney(effSubtotal()+shipCost());
  if (tt) tt.textContent = amount;
  const bar = document.getElementById("coBarTotal");
  if (bar) bar.textContent = amount;
}
function submitOrder(e){
  e.preventDefault();
  const form = e.target;
  const bad = validateForm(form);
  if (bad){ bad.focus(); return; }
  // whichever one is on screen, both report the same state
  ["orderBtn","orderBtnBar"].forEach(id=>{
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.disabled = true;
    btn.textContent = T().processing;
  });
  setTimeout(()=>{
    lastOrder = {
      no: "RM-" + String(Date.now()).slice(-6),
      // form.elements.x rather than form.x: the shorthand is a browser nicety
      // the test harness does not implement, and this reads no worse
      email: form.elements.email.value,
    };
    CART.clear();
    saveCart();
    updateBadge(false);
    location.hash = "done";
  }, 1100);
}
function renderDone(){
  const t = T();
  if (!lastOrder){ location.hash = ""; return; }
  doneEl.innerHTML = `
    <p>${t.thanks}</p>
    <div class="done-no">${t.orderNo}: ${lastOrder.no}</div>
    <p>${t.thanksInfo}</p>
    <p class="legal" style="margin-top:var(--nu-space-small)">${t.withdrawal}</p>
    ${backHref(t.backHome, "#", "done-back")}`;
}

const dsEl = document.getElementById("dsPage");
const productEl = document.getElementById("product"),
      shopbarEl = document.getElementById("shopbar"),
      shopBodyEl = document.getElementById("shop");

function currentProduct(){
  const m = location.hash.match(/^#p(\d+)$/);
  return m ? BOOKS[+m[1]] : null;
}

function renderProduct(b){
  const t = T();
  document.getElementById("backBtn").innerHTML = ICON_BACK + t.back;
  const st = b.s ? STATUS[b.s] : null;
  const cta = b.s === "out"
    ? `<button class="btn-primary p-cta" disabled><span class="cta-label">${t.notAvail}</span></button>`
    : `<button class="btn-primary p-cta" id="ctaBtn"><span class="cta-label">${b.s === "soon" ? t.preorder : t.addToCart}</span></button>`;
  document.getElementById("pGrid").innerHTML = `
    ${tileHTML(b, "product")}
    <div class="p-info">
      <h1 class="p-title">${titleOf(b)}</h1>
      <button class="p-author btn-ghost" onclick="openAuthor(${b.id})"
        aria-haspopup="dialog" aria-label="${b.a} — ${t.aboutAuthor[b.gd]}"><span class="lbl">${b.a}</span></button>
      <div class="p-price ${b.s==="out"?"is-out":""}">${fmtMoney(priceOf(b))}</div>
      <p class="p-desc">${LANG === "pl" ? b.dp : b.de}</p>
      ${(LANG === "pl" ? b.qp : b.q) ? `<p class="p-quote">${LANG === "pl" ? b.qp : b.q}<span class="q-by"><span class="q-dash">—</span> ${LANG === "pl" ? b.qbyp : b.qby}</span></p>` : ""}
      <dl class="p-details">
        <div><dt>${t.dGenre}</dt><dd>${genreLabel(b.g)}</dd></div>
        <div><dt>${t.dLang}</dt><dd>${t.editions[b.ed]}</dd></div>
      </dl>
      ${cta}
    </div>`;
  const btn = document.getElementById("ctaBtn");
  if (btn) btn.onclick = ()=>addToCart(b.id, btn);
}

function route(){
  const b = currentProduct();
  const view = b ? "product"
    : /^#design(\/|$)/.test(location.hash) ? "design"
    : location.hash === "#cart" && CART.size > 0 ? "cart"
    : location.hash === "#checkout" && CART.size > 0 ? "checkout"
    : location.hash === "#done" && lastOrder ? "done"
    : "grid";
  dsEl.hidden = view !== "design";
  if (view === "design"){ dsCurrent = dsFromHash(); renderDesignSystem(); }
  document.getElementById("siteFoot").hidden = view === "design";
  document.getElementById("promo").hidden = view === "design";
  shopbarEl.hidden  = view !== "grid";
  shopBodyEl.hidden = view !== "grid";
  productEl.hidden = view !== "product";
  cartPageEl.hidden = view !== "cart";
  checkoutEl.hidden = view !== "checkout";
  coBarEl.hidden   = view !== "checkout";
  doneEl.hidden    = view !== "done";
  /* mobile clearance: only the view that shows a bar pays for it */
  document.body.classList.toggle("has-mobar", view === "grid");
  document.body.classList.toggle("has-cobar", view === "checkout");
  if (view !== "grid") closeFilterSheet();
  if (view === "product") renderProduct(b);
  if (view === "cart") renderCartPage();
  if (view === "checkout") renderCheckout();
  if (view === "done") renderDone();
  if (view === "grid") measureBars();
  if (view !== "grid") window.scrollTo({top:0, behavior:"instant"});
  if (view === "product") playOpenTransition();   // measure the target after scrolling
}
window.addEventListener("hashchange", route);
document.getElementById("backBtn").onclick = ()=>{
  history.length > 1 ? history.back() : (location.hash = "");
};
document.addEventListener("keydown", e=>{
  if (e.key !== "Escape") return;
  if (sortOpen()) { setSortOpen(false); return; }
  if (sheetOpen()) { closeFilterSheet(); return; }
  if (cartOpen) { closeCart(); return; }
  if (drawerBook) { closeAuthor(); return; }
  if (currentProduct()) location.hash = "";
});

/* ------------------------------------------------- language & currency UI */
function applyLang(){
  const t = T();
  document.documentElement.lang = LANG;
  document.title = t.docTitle;
  document.getElementById("strap").textContent = t.strap;
  document.getElementById("skipLink").textContent = t.skip;
  document.querySelector("#swLight").closest(".sw-group").setAttribute("aria-label", t.aria.schemeGroup);
  document.getElementById("swLight").querySelector(".chip-t").textContent = t.schemeLight;
  document.getElementById("swDark").querySelector(".chip-t").textContent = t.schemeDark;
  document.getElementById("promoCopy").textContent = t.promoCopy;
  const pc = document.getElementById("promoCode");
  document.getElementById("promoCodeLabel").textContent = PROMO_CODE;
  pc.setAttribute("aria-label", `${t.promoAria} ${PROMO_CODE}`);
  document.getElementById("promoDone").textContent = "";
  document.getElementById("lblGenre").textContent = t.genre;
  document.getElementById("lblTag").textContent = t.tag;
  document.getElementById("lblLang").textContent = t.lang;
  document.getElementById("lblFilter").textContent = t.filter;
  document.getElementById("lblFilterSheet").textContent = t.filter;
  document.getElementById("lblSort").textContent = t.sort;
  document.getElementById("sortLbl").textContent = t.sorts[state.sort];
  /* The mark travels with the label: the sort in force comes from state, which a
     previous visit may have set, so the menu cannot rely on the one written into
     the markup. */
  sortItems().forEach(b=>{
    b.querySelector(".lbl").textContent = t.sorts[b.dataset.sort];
    b.setAttribute("aria-checked", String(b.dataset.sort === state.sort));
  });
  document.getElementById("btnFav").setAttribute("aria-label", t.aria.fav);
  document.getElementById("btnAccount").setAttribute("aria-label", t.aria.account);
  const si = document.getElementById("searchInput");
  si.setAttribute("aria-label", t.searchPh);
  document.getElementById("searchClear").setAttribute("aria-label", t.searchClear);
  /* A language change lands mid-demonstration only if one is running; either way
     the field ends up saying the new wording. */
  if (introTimer) { clearTimeout(introTimer); introTimer = null; INTRO_SEEN = false; playIntro(); }
  else si.placeholder = t.searchPh;
  document.getElementById("btnCart").setAttribute("aria-label", t.aria.cart);
  /* Six strings used to sit in the markup untranslated, so a reader on EN heard
     the Polish close label and a reader on PL heard the English group names. */
  ["drawerClose","cartClose","fsheetClose"].forEach(id=>{
    const el = document.getElementById(id);
    if (el) el.setAttribute("aria-label", t.aria.close);
  });
  document.querySelector('[aria-label="Language"], #swEN')?.closest(".sw-group")
    ?.setAttribute("aria-label", t.aria.langGroup);
  document.querySelector("#swEUR")?.closest(".sw-group")
    ?.setAttribute("aria-label", t.aria.curGroup);
  document.getElementById("lnkDesign").textContent = t.designSystem;
  document.getElementById("swEN").setAttribute("aria-pressed", LANG==="en");
  document.getElementById("swPL").setAttribute("aria-pressed", LANG==="pl");
  measureBars();   // a longer sort label can make the mobile bar taller
}
/* The scheme is one attribute on the root: light-dark() reads it through
   color-scheme and every colour follows. "auto" means no attribute at all, so
   the media query built into color-scheme keeps the reader's own setting.
   The documentation is redrawn because its contrast table reads the values that
   are in force, and those have just changed. */
function applyScheme(){
  const root = document.documentElement;
  if (SCHEME === "auto") root.removeAttribute("data-scheme");
  else root.setAttribute("data-scheme", SCHEME);
  document.getElementById("swLight").setAttribute("aria-pressed", SCHEME === "light");
  document.getElementById("swDark").setAttribute("aria-pressed", SCHEME === "dark");
  savePrefs();
  if (!dsEl.hidden) renderDesignSystem();
}
function applyCur(){
  document.getElementById("swEUR").setAttribute("aria-pressed", CUR==="eur");
  document.getElementById("swPLN").setAttribute("aria-pressed", CUR==="pln");
}
/* The Clipboard API needs a secure context, which the single-file build opened
   from disk is not; execCommand is the fallback there. If both refuse the caller
   says so rather than claiming a copy that never happened. */
async function copyText(text){
  try { await navigator.clipboard.writeText(text); return true; }
  catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;opacity:0";
      document.body.appendChild(ta); ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch { return false; }
  }
}

let promoTimer;
document.getElementById("promoCode").addEventListener("click", async ()=>{
  const done = document.getElementById("promoDone");
  const ok = await copyText(PROMO_CODE);
  const btn = document.getElementById("promoCode");
  // success is carried by the glyph; the message stays for screen readers and
  // only becomes visible when there is no check to show
  btn.classList.toggle("is-copied", ok);
  done.textContent = ok ? T().promoDone : T().promoFail;
  done.classList.toggle("is-visible", !ok);
  clearTimeout(promoTimer);
  promoTimer = setTimeout(()=>{
    btn.classList.remove("is-copied");
    done.textContent = ""; done.classList.remove("is-visible");
  }, 1800);
});

document.getElementById("swEN").onclick = ()=>{ if(LANG!=="en"){LANG="en"; applyLang(); render();} };
document.getElementById("swPL").onclick = ()=>{ if(LANG!=="pl"){LANG="pl"; applyLang(); render();} };
document.getElementById("swEUR").onclick = ()=>{ if(CUR!=="eur"){CUR="eur"; applyCur(); render(false);} };
document.getElementById("swPLN").onclick = ()=>{ if(CUR!=="pln"){CUR="pln"; applyCur(); render(false);} };
/* Clicking the chip already in force hands the choice back to the system, so a
   reader who set it by accident is not stuck with it. */
document.getElementById("swLight").onclick = ()=>{ SCHEME = SCHEME==="light" ? "auto" : "light"; applyScheme(); };
document.getElementById("swDark").onclick  = ()=>{ SCHEME = SCHEME==="dark"  ? "auto" : "dark";  applyScheme(); };

const _applyLang = applyLang;
applyLang = function(){ _applyLang(); const b = currentProduct(); if (b) renderProduct(b); fillDrawer(); if (cartOpen) renderCart(); if (!cartPageEl.hidden) renderCartPage(); if (!checkoutEl.hidden) renderCheckout(); if (!doneEl.hidden) renderDone(); };
const _applyCur = applyCur;
applyCur = function(){ _applyCur(); const b = currentProduct(); if (b) renderProduct(b); if (cartOpen) renderCart(); if (!cartPageEl.hidden) renderCartPage(); if (!checkoutEl.hidden) renderCheckout(); };

/* ------------------------------------------------------- design system docs */
/* The value a token really has, asked of the element that carries it: the shop's
   tokens live on the root, the documentation's own two on the documentation
   page, so a token declared there is read there rather than coming back empty. */
function dsVal(name){
  const host = name.startsWith("--ds-")
    ? (document.getElementById("dsPage") || document.documentElement)
    : document.documentElement;
  return getComputedStyle(host).getPropertyValue(name).trim();
}
/* Both the palette and what each colour feeds are discovered in :root. Typed out
   beside the table they went stale twice over &mdash; once for the scrim, once for
   the measure tint &mdash; because adding a semantic token does not remind anyone to
   come back and amend a list. */
const DS_PRIMITIVE = /^--nu-(?:white|grey|red|burgundy|gold)/;
const DS_SEMANTIC  = /^--nu-(?:bg|fg|border)-/;
/* Served from a <link> and opened off the filesystem, the sheet cannot be read
   back at all, and both tables below would render empty. These two lists are the
   fallback for that case only: values still come from the computed style, and
   what each colour feeds is simply left out, since it cannot be worked out
   without the declarations. */
const DS_FALLBACK_PRIMITIVES = ["--nu-white","--nu-grey-100","--nu-grey-400","--nu-grey-600",
  "--nu-grey-900","--nu-red-600","--nu-burgundy-500","--nu-burgundy-700",
  "--nu-gold-100","--nu-gold-600","--nu-gold-800"];
const DS_FALLBACK_MEANINGS = ["primary","secondary","tertiary","inverse","neutral","muted",
  "highlight","warning","alert","scrim","measure","action","action-secondary",
  "action-glow","action-glow-deep"];
function dsPrimitiveRows(){
  const found = Object.keys(dsRootDecls()).filter(n => DS_PRIMITIVE.test(n));
  const names = found.length ? found : DS_FALLBACK_PRIMITIVES.filter(dsVal);
  return names.map(token => `
    <tr>
      <td class="spec"><span class="swatch" style="background:${dsVal(token)}"></span><code>${token}</code></td>
      <td>${dsVal(token)}</td>
    </tr>`).join("");
}
/* The meanings actually in use, read off the semantic token names. */
function dsMeanings(){
  const names = Object.keys(dsRootDecls()).filter(n => DS_SEMANTIC.test(n));
  const set = names.length
    ? [...new Set(names.map(n => n.replace(DS_SEMANTIC, "")))]
    : DS_FALLBACK_MEANINGS;
  return set.map(m => `<code>${m}</code>`).join(" &middot; ");
}
/* Contrast computed from the tokens themselves, so lightening a grey shows up
   here as a changed ratio and a changed verdict rather than staying a number
   somebody typed once. Returns null for anything that is not a plain hex. */
/* Follows the alias chain itself rather than trusting the engine to substitute:
   a semantic token points at a primitive, and occasionally at another semantic
   token first. Returns null for anything that does not end at a plain hex. */
function dsHex(token, depth){
  const raw = (dsRootDecls()[token] || dsVal(token) || "").trim();
  const ref = raw.match(/^var\((--[\w-]+)\)$/);
  if (ref) return (depth || 0) < 4 ? dsHex(ref[1], (depth || 0) + 1) : null;
  const m = raw.match(/^#([0-9a-f]{6})$/i);
  return m ? m[1] : null;
}
function dsContrast(fg, bg){
  const a = dsHex(fg), b = dsHex(bg);
  if (!a || !b) return null;
  const lum = h => {
    const ch = [0,2,4].map(i => parseInt(h.substr(i,2),16) / 255)
      .map(c => c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4));
    return 0.2126*ch[0] + 0.7152*ch[1] + 0.0722*ch[2];
  };
  const la = lum(a), lb = lum(b);
  const ratio = (Math.max(la,lb) + 0.05) / (Math.min(la,lb) + 0.05);
  return { ratio: ratio.toFixed(2), pass: ratio >= 4.5 };
}
function dsContrastCell(fg, bg){
  const c = dsContrast(fg, bg);
  if (!c) return "&mdash;";
  const verdict = c.pass ? "AA" : L("below AA","poniżej AA");
  const colour = c.pass ? "" : ` style="color:var(--nu-fg-alert)"`;
  return `${c.ratio}:1 <span${colour}>${verdict}</span>`;
}
/* A specification names the token first and gives its value second. The name is
   what gets reused; the value is only there so the reader can picture it. One
   helper, so every page states it the same way. */
/* The icon parameter table, computed from the tokens rather than typed beside
   them. The safe area is not a token of its own: it is what the container leaves
   after the inset on both sides, so stating it separately would be a second copy
   of the same decision. */
/* The ratio between the two safe areas. Stated in the prose as the factor a
   drawing is scaled by, so it has to follow the tokens rather than sit beside
   them as a number that was true once. */
/* Through dsPx, not parseFloat: the container is declared in rem and the margin
   in px, so reading both as bare numbers subtracts one unit from the other. */
function dsIconRatio(){
  const px = t => dsPx(t);
  const safe = k => px(`--nu-icon-${k}`) - 2 * px(`--nu-icon-${k}-inset`);
  const r = safe("sm") / safe("lg");
  return String(Math.round(r * 100) / 100).replace(".", L(".", ","));
}
/* A token's value in pixels, whatever unit it is written in. The icon table
   measures a drawing against its container, and that arithmetic is in pixels
   even when the container is declared in rem. */
function dsPx(token){
  const v = dsVal(token);
  const n = parseFloat(v) || 0;
  if (v.endsWith("rem")) return n * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
  return n;
}
function dsIconRows(){
  const px = t => dsPx(t);
  return [["lg", "--nu-icon-lg"], ["sm", "--nu-icon-sm"]].map(([k, box]) => {
    const size = px(box), inset = px(`--nu-icon-${k}-inset`);
    const stroke = dsVal(`--nu-icon-${k}-stroke`);
    const n = v => String(v).replace(".", L(".", ","));
    return `<tr>
      <td class="spec"><code>${box}</code> &middot; ${n(size)} &times; ${n(size)} px</td>
      <td>${n(size - 2 * inset)} &times; ${n(size - 2 * inset)} px</td>
      <td>${n(inset)} px</td>
      <td>${n(stroke)} px</td>
    </tr>`;
  }).join("");
}
/* Column widths shared by the documentation tables. The first column names
   a state, a variant or a property; the last lists tokens, and holds the widest
   of them on one line rather than breaking a name in half. Written here once,
   so tables meant to look alike cannot drift apart. */
const DS_COL_NAME = 'style="width:190px"';
const DS_COL_TOK  = 'style="width:220px"';

function dsTok(token){
  const v = dsVal(token);
  return `<code>${token}</code>${v ? ` &middot; ${v}` : ""}`;
}
function dsPrimitiveCount(){
  const found = Object.keys(dsRootDecls()).filter(n => DS_PRIMITIVE.test(n)).length;
  return found || DS_FALLBACK_PRIMITIVES.filter(dsVal).length;
}
/* The declared source of a token, read from the stylesheet itself: a semantic token
   shows the primitive it points at, never a hex value. */
let DS_DECLS = null;
/* Every token declared in the sheet, in source order. Two blocks hold them:
   ":root" for the shop and ".ds" for the two the documentation declares for
   itself. Both are read, because the inventory promises every token and a
   reader who meets --ds-font-mono in another tab has to find it here. The built
   shop inlines the sheet in a <style>, so reading the text is enough; served
   from a <link> there is no text to read, and the CSSOM has to be asked
   instead. Order matters — the docs list a scale in the order it is declared,
   not in an order repeated here. */
function dsRootDecls(){
  if (DS_DECLS) return DS_DECLS;
  DS_DECLS = {};
  const blocks = [];
  const inline = [...document.querySelectorAll("style")].map(s=>s.textContent).join("\n");
  if (inline.includes(":root{")){
    blocks.push(inline.slice(inline.indexOf(":root{"), inline.indexOf("}", inline.indexOf(":root{"))));
    /* The documentation's own tokens sit in a .ds rule, and .ds is not the only
       rule with that selector, so the block is found by what it declares rather
       than by where it stands. Comments go first: one sits between the two
       declarations and would otherwise be read as part of a value. */
    const bare = inline.replace(/\/\*[\s\S]*?\*\//g, "");
    blocks.push([...bare.matchAll(/[{;]\s*(--ds-[\w-]+\s*:\s*[^;]+)/g)].map(m=>m[1]).join(";"));
  } else {
    for (const sheet of document.styleSheets){
      let rules; try { rules = sheet.cssRules; } catch { continue; }   // cross-origin
      for (const r of rules || []){
        if (r.selectorText === ":root") blocks.push(r.style.cssText);
        else if (r.style && r.style.cssText && r.style.cssText.includes("--ds-")) blocks.push(r.style.cssText);
      }
      if (blocks.length) break;
    }
  }
  blocks.join(";").split(";").forEach(line=>{
    const m = line.match(/(--[\w-]+)\s*:\s*([^;]+)/);
    if (m) DS_DECLS[m[1]] = m[2].replace(/\/\*[\s\S]*?\*\//g, "").trim();
  });
  return DS_DECLS;
}
/* Every token in :root, sorted into groups by the prefix it carries. Names and
   order come from the sheet, so a token added there shows up here on its own —
   and one whose prefix matches nothing lands in a group of its own rather than
   disappearing, because a silently dropped token is exactly what this table
   exists to prevent. */
/* A category is found by the prefix a token carries. Inside it, a section is
   found by the declaration itself: a token either holds a value or points at
   another token, and nothing else can be true. Reading that from the sheet
   rather than listing it here means a section cannot describe a token the code
   stopped agreeing with, and the column heading above each table follows from
   the same fact instead of being written down a second time. A category whose
   tokens all sit on one side gets one unnamed section, which renders as the
   table alone. */
const dsIsBuilt = name => /--nu-/.test(dsRootDecls()[name] || "");
const DS_TOKEN_GROUPS = [
  ["colour", ["--nu-white","--nu-grey","--nu-red","--nu-burgundy","--nu-gold","--nu-bg","--nu-fg","--nu-border"],
             [["primitive", false], ["semantic", true]]],
  ["type",   ["--nu-font","--nu-text","--nu-tracking","--nu-line","--nu-weight","--nu-type","--nu-underline"],
             [["primitive", false], ["style", true]]],
  ["space",  ["--nu-space"]],
  ["layout", ["--nu-gutter","--nu-form-max","--nu-cover","--nu-thumb","--nu-control","--nu-field","--nu-mobar","--nu-cobar"],
             [["scale", true], ["own", false]]],
  ["icon",   ["--nu-icon"]],
  ["motion", ["--nu-motion","--nu-ease"]],
  ["focus",  ["--nu-focus"]],
  ["docs",   ["--ds-"]],
];
/* Names of every token, from whichever source can be reached. A value is easy:
   the computed style hands it back for any name you ask about, which is why the
   other tabs work anywhere. Listing them all is the hard part, because it needs
   the names, and where they come from depends on how the page was opened:

   1. the stylesheet inlined in a <style> — the built page. Keeps the order the
      sheet declares them in and says what each one is built from.
   2. the CSSOM — the folder served over http. Same names, same order.
   A stylesheet arriving through a <link> from a local file is readable by
   neither: the browser treats it as opaque. Enumerating the computed style
   looks like a third way out and is not taken, because browsers differ in what
   they expose there — a list that is complete in one browser and short in
   another is worse in a tab whose whole point is completeness. When the names
   cannot be read the tab says so instead of printing a confident number. */
function dsTokenNames(){
  return Object.keys(dsRootDecls()).filter(n => /^--(nu|ds)-/.test(n));
}
/* The shape of a name shown rather than described: its parts as badges in a
   specimen box, written in the general form, with real tokens standing
   underneath it as examples. */
function dsNamePattern(parts){
  return `<div class="demo ds-pattern">${parts.map(seg => `<span class="badge">${seg}</span>`).join("")}</div>`;
}
/* Examples of a level, with the second column read from the sheet on the same
   terms as the inventory below: a primitive shows its value, everything else
   shows what it is built from. An example that stops being true in the code
   stops being printed here. */
function dsTokenExamples(list, primitive){
  return `<table><thead><tr><th ${DS_COL_NAME}>${L("Example","Przykład")}</th><th>${
    primitive ? L("Value","Wartość") : L("Built from","Zbudowany z")}</th></tr></thead><tbody>
    ${list.map(n => `<tr><td class="spec"><code>${n}</code></td><td>${
      primitive ? dsVal(n) : dsDecl(n)}</td></tr>`).join("")}
  </tbody></table>`;
}
function dsTokenGroups(){
  const shape = g => (g[2] || [["", null]]).map(([sub, built]) => ({ key: sub, built, list: [] }));
  const groups = DS_TOKEN_GROUPS.map(g => ({ key: g[0], sections: shape(g) }));
  groups.push({ key:"other", sections:[{ key:"", built:null, list:[] }] });
  dsTokenNames().forEach(name => {
    const i = DS_TOKEN_GROUPS.findIndex(([, prefixes]) => prefixes.some(p => name.startsWith(p)));
    const g = i < 0 ? groups[groups.length - 1] : groups[i];
    (g.sections.find(sec => sec.built === null || sec.built === dsIsBuilt(name))).list.push(name);
  });
  groups.forEach(g => {
    g.sections = g.sections.filter(sec => sec.list.length);
    g.count = g.sections.reduce((n, sec) => n + sec.list.length, 0);
  });
  return groups.filter(g => g.count);
}

function dsDecl(token){
  const declared = dsRootDecls()[token];
  if (declared){
    // var(--nu-grey-100) -> --nu-grey-100 ; keep color-mix() readable
    const single = declared.match(/^var\((--[\w-]+)\)$/);
    return single ? `<code>${single[1]}</code>`
                  : declared.replace(/var\((--[\w-]+)\)/g, (_,t)=>`<code>${t}</code>`);
  }
  /* No declarations to read. A browser hands back the substituted value here, so
     the column would show a hex the reader has to look up. Match each primitive's
     own value inside it and name the palette entry instead. */
  let raw = dsVal(token);
  DS_FALLBACK_PRIMITIVES.forEach(p => {
    const v = dsVal(p);
    if (!v) return;
    const needle = new RegExp(v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    raw = raw.replace(needle, `<code>${p}</code>`);
  });
  // an engine that leaves var() alone gets the same reading as one that substitutes
  return raw.replace(/var\((--[\w-]+)\)/g, (_,t)=>`<code>${t}</code>`);
}
/* The scale is discovered in the stylesheet rather than listed here a second
   time: whatever :root declares as --nu-space-* is what the docs show, in the
   order it is declared. Names carry no position, so a step can be dropped or
   renamed without renumbering anything — only its note is looked up, and a step
   with no note says so instead of quietly vanishing. */
/* The three curves CSS names with a keyword, written here as the numbers the
   specification gives them. Ours come from the sheet instead. */
const DS_CURVE_KEYWORDS = {
  "linear":      [0, 0, 1, 1],
  "ease":        [.25, .1, .25, 1],
  "ease-in-out": [.42, 0, .58, 1],
};
/* One drawing, one movement, one source: the path and the dot both take their
   numbers from the same place, so a curve cannot be drawn as one thing and run
   as another. */
function dsCurveGraph(spec){
  const nums = spec.startsWith("--")
    ? (dsVal(spec).match(/-?\d*\.?\d+/g) || []).map(Number)
    : DS_CURVE_KEYWORDS[spec];
  if (!nums || nums.length !== 4) return "";
  const X = v => (10 + v * 64).toFixed(1), Y = v => (74 - v * 64).toFixed(1);
  const timing = spec.startsWith("--") ? `var(${spec})` : spec;
  return `<svg class="ds-curve" width="84" height="84" viewBox="0 0 84 84" aria-hidden="true">
    <rect x="10" y="10" width="64" height="64" rx="3"/>
    <path class="ref" d="M10 74L74 10"/>
    <path class="crv" d="M10 74C${X(nums[0])} ${Y(nums[1])} ${X(nums[2])} ${Y(nums[3])} 74 10"/>
    <g class="cx"><g class="cy" style="animation-timing-function:${timing}"><circle class="dot" cx="10" cy="74" r="3"/></g></g>
  </svg>`;
}

/* The motion scale read back from the sheet, on the same terms as the spacing
   scale: names from :root when its text can be reached, values always from the
   computed style. */
function dsMotionSteps(){
  const notes = new Map([
    ["instant", L("Short enough that the change does not read as movement, it simply happens. The filter column disappears within it, before the tiles start to spread.",
                  "Tak krótki, że zmiana nie wygląda na ruch, tylko po prostu następuje. Kolumna filtrów znika w tym czasie, zanim kafle zaczną się rozsuwać.")],
    ["quick",   L("An answer that lasts as long as the pointer stays: a button presses, a stepper cell fills, a link takes on its second colour, a label crossfades into the next one. The element does not leave its place.",
                  "Odpowiedź, która trwa tyle, ile kursor nad elementem: przycisk się wciska, komórka steppera wypełnia się tłem, link przechodzi w drugi kolor, napis przechodzi w kolejny. Element nie zmienia położenia.")],
    ["base",    L("A change that stays after the pointer leaves: a field keeps the border it took on being entered, an icon keeps its turn, a cart line goes for good.",
                  "Zmiana, która zostaje po zdjęciu kursora: pole trzyma ramkę, którą przyjęło po wejściu w nie, ikona zostaje obrócona, pozycja koszyka odchodzi na dobre.")],
    ["slow",    L("An element comes onto the screen or leaves it: either drawer, the filter panel, the dimmed backdrop behind them.",
                  "Element wjeżdża na ekran albo z niego znika: każda z dwóch szuflad, panel filtrów, przyciemnione tło pod nimi.")],
    ["slower",  L("The longest transitions, the ones covering a larger area: a tile growing into a packshot, and cards appearing in the grid.",
                  "Najdłuższe przejścia, te obejmujące większy obszar: kafel powiększający się do packshotu i karty pojawiające się w siatce.")],
    ["loop",    L("The one thing that repeats: the accent in the logo.",
                  "Jedyna rzecz, która się powtarza: akcent w logo.")],
    ["stagger", L("This one does not set how long an animation lasts, but the window its starts are spread over: the mosaic cards begin one after another within it.",
                  "Ten nie ustala, jak długo trwa animacja, tylko w jakim czasie rozkładają się jej starty: karty mozaiki ruszają jedna po drugiej właśnie w nim.")],
  ]);
  const P = "--nu-motion-";
  const fromSheet = Object.keys(dsRootDecls()).filter(n => n.startsWith(P));
  const names = fromSheet.length ? fromSheet : [...notes.keys()].map(k => P + k);
  const undocumented = `<em>${L("not documented yet","jeszcze nieopisane")}</em>`;
  return names
    .map(name => [name, dsVal(name), notes.get(name.slice(P.length)) || undocumented])
    .filter(([,val]) => val);
}
function dsSpaceSteps(){
  /* A Map, not an object: some step names are still bare numbers, and object
     keys that look like integers are iterated before the rest whatever order
     they were written in — which would print the scale out of order whenever
     the names have to come from here. */
  /* Two answers per step, because a step answers two different questions:
     how much air at an element's own edge, and how far apart two elements sit.
     One sentence covering both is what made the old column read as a grab bag. */
  const notes = new Map([
    ["nano",   [L("The smallest controls: badge, counter, chip, toggle","Najdrobniejsze kontrolki: odznaka, licznik, chip, przełącznik"),
                L("Parts meant to read as one object: tiles in the grid, a chip and its count","Części czytające się jako jeden przedmiot: kafle w siatce, chip i jego licznik")]],
    ["micro",  [L("Menus and table cells","Menu i komórki tabeli"),
                L("A thing and its own label: icon and word, quote and attribution","Rzecz i jej własny podpis: ikona i słowo, cytat i autor")]],
    ["milli",  [L("Fields, buttons, bars","Pola, przyciski, belki"),
                L("Parts of one form row: a checkbox and its text, two fields side by side","Części jednego wiersza formularza: pole wyboru i jego tekst, dwa pola obok siebie")]],
    ["small",  [L("The page's own edge, and one row of a list","Własna krawędź strony i jeden wiersz listy"),
                L("Items sitting in one list or one row","Pozycje stojące w jednej liście albo jednym rzędzie")]],
    ["medium", [L("Panels: drawer, order summary, footer","Panele: szuflada, podsumowanie zamówienia, stopka"),
                L("Groups within one view, and below a block before the next","Grupy w obrębie jednego widoku i pod blokiem przed następnym")]],
    ["large",  [L("The widest air inside a panel","Najszersze powietrze wewnątrz panelu"),
                L("Sections within one view","Sekcje w obrębie jednego widoku")]],
    ["xlarge", [L("The sides of the committing action","Boki akcji wiążącej"),
                L("The two halves of a bar or a header","Dwie połowy paska albo nagłówka")]],
    ["huge",   [L("The shop's bottom edge on mobile","Dolna krawędź sklepu na mobile"),
                L("Columns of a layout, through --nu-gutter-column; above a documentation chapter","Kolumny układu, przez --nu-gutter-column; nad rozdziałem dokumentacji")]],
    ["max",    [L("The page's bottom edge, and the empty state","Dolna krawędź strony i stan pusty"), null]],
  ]);
  const P = "--nu-space-";
  /* Names come from the sheet when its text can be reached, so a step added in
     CSS shows up here on its own. Served from a <link> there is nothing to read
     back — and the scale must still render, so the notes supply the names then.
     Values always come from the computed style, which works either way. */
  const fromSheet = Object.keys(dsRootDecls()).filter(n => n.startsWith(P));
  const names = fromSheet.length ? fromSheet : [...notes.keys()].map(k => P + k);
  const blank = `<span class="none">&ndash;</span>`;
  const undocumented = [`<em>${L("not documented yet","jeszcze nieopisane")}</em>`, ""];
  return names
    .map(name => {
      const [pad, gap] = notes.get(name.slice(P.length)) || undocumented;
      return [name, dsVal(name), pad || blank, gap || blank];
    })
    // a note left behind for a deleted step resolves to nothing, and is dropped
    // rather than inventing a row for a token the shop no longer has
    .filter(([,val]) => val);
}
/* The stylesheet quoted back to the reader, not retyped into the docs. Reads
   the inlined <style> when the shop is built as one file, and asks the CSSOM
   otherwise. Returns "" if neither can be reached, so the caller can leave the
   code block out rather than print an empty box. */
/* Worked examples are measured, not described. A cell carrying data-measure
   names a selector and a property; the value is read back off the specimen the
   browser has actually laid out, then matched against the scale to recover the
   token. Restyle the component and this table follows it. Move it off the
   scale and the cell says so instead of quietly printing a number. */
/* Paints the three distances of the worked example. Every rectangle is derived
   from the component's own laid-out boxes, never from a token, so a mark can
   only ever show a distance the component actually has. */
function dsHighlight(root){
  const eg = root.querySelector(".ds-eg");
  if (!eg) return;
  eg.querySelectorAll(".sp-mark").forEach(n => n.remove());
  const quote = eg.querySelector(".p-quote"), by = eg.querySelector(".q-by");
  if (!quote || !by) return;
  const num = v => parseFloat(v) || 0;
  const base = eg.getBoundingClientRect();
  const q = quote.getBoundingClientRect(), b = by.getBoundingClientRect();
  const qs = getComputedStyle(quote), bs = getComputedStyle(by);
  const mark = (top, left, w, h) => {
    if (!(w > 0 && h > 0)) return;
    const m = document.createElement("div");
    m.className = "sp-mark";
    m.style.cssText = `top:${top - base.top}px;left:${left - base.left}px;width:${w}px;height:${h}px`;
    eg.appendChild(m);
  };
  const lead = num(bs.marginTop);
  mark(b.top - lead, b.left, b.width, lead);                                   // quote to attribution
  const edge = num(qs.borderLeftWidth);
  mark(q.top, q.left + edge, num(qs.paddingLeft), q.height);                   // rule to text
  mark(q.bottom, q.left, q.width, num(qs.marginBottom));                       // block to next block
}
function dsMeasure(root){
  const steps = dsSpaceSteps().map(([token, val]) => [token, val]);
  root.querySelectorAll("[data-measure]").forEach(cell => {
    const [sel, prop] = cell.dataset.measure.split("|");
    const el = root.querySelector(sel);
    if (!el) return;
    /* Most engines hand back a used length; some hand back the var() reference
       untouched. Resolve that case rather than reporting the component as
       off-scale when it is simply being quoted rather than computed. */
    const raw = getComputedStyle(el)[prop] || "";
    const ref = raw.match(/var\((--[\w-]+)\)/);
    const px = ref ? dsVal(ref[1]) : raw;
    const hit = steps.find(([, v]) => v === px);
    cell.innerHTML = hit
      ? `<code>${hit[0]}</code> &middot; ${px}`
      : `${px} <span class="none">${L("off the scale","poza skalą")}</span>`;
  });
}
/* Same contract as the spacing scale: the size printed beside each specimen is
   asked of the stylesheet, and the specimen itself is set from the same token,
   so the two cannot disagree. Every style on a specimen goes through a token —
   a literal here would be a value the shop has no way of honouring. */
/* The nine styles read back from their own declarations and split into the four
   properties the shorthand packs, so the table cannot describe a style the
   stylesheet does not have. Returns an empty list when the declarations are out
   of reach, and the tab says so rather than printing an empty table. */
function dsTypeStyles(){
  const decls = dsRootDecls();
  const shape = /var\((--nu-weight-[\w-]+)\)\s+var\((--nu-text-[\w-]+)\)\/var\((--nu-line-[\w-]+)\)\s+var\((--nu-font-[\w-]+)\)/;
  /* A style may point at another style instead of repeating its four properties,
     so the declaration is followed until it holds them. One hop is all the sheet
     uses; the guard is there so a loop cannot hang the page. */
  const resolve = (name, hops = 0) => {
    const v = decls[name] || "";
    const alias = v.match(/^var\((--nu-type-[\w-]+)\)$/);
    return alias && hops < 4 ? resolve(alias[1], hops + 1) : v;
  };
  return Object.keys(decls).filter(n => n.startsWith("--nu-type-")).map(name => {
    const m = resolve(name).match(shape);
    return m ? {name, weight: m[1], size: m[2], line: m[3], family: m[4]} : null;
  }).filter(Boolean);
}
/* One sentence at every step of the scale: the steps are then compared against
   each other rather than against different words. */
function dsTypeSteps(){
  const line = L("Novels about women and gender.", "Powieści o kobietach i płci.");
  return ["--nu-text-size-2xl","--nu-text-size-xl","--nu-text-size-lg",
          "--nu-text-size-md","--nu-text-size-sm","--nu-text-size-xs"]
    .map(token => [token,
      `<span class="ds-eg" style="font-family:var(--nu-font-text);font-size:var(${token})">${line}</span>`]);
}

/* Each style set in itself. The two label styles add the case and the tracking
   here, because the shorthand carries neither - which is the limitation the tab
   states just below. */
function dsTypeSpecimens(){
  const caps = "text-transform:uppercase;letter-spacing:var(--nu-tracking-caps)";
  return [
    ["--nu-type-h1", L("The Handmaid&rsquo;s Tale","Opowieść podręcznej"), ""],
    ["--nu-type-h2", L("Your cart","Twój koszyk"), ""],
    ["--nu-type-h3", "nubook.", ""],
    ["--nu-type-body-l", "59,90 z&#322;", ""],
    ["--nu-type-body-m", L("Novels about women and gender.","Powieści o kobietach i płci."), ""],
    ["--nu-type-body-s", L("Delivery in 2&ndash;3 working days","Dostawa w 2&ndash;3 dni robocze"), ""],
    ["--nu-type-label", L("Sort by","Sortuj"), caps],
    ["--nu-type-caption", "12", ""],
  ];
}
/* Token, what it is built from, and the rule it stands for. Deliberately not a
   list of the places it is used: that is inventory the code already holds, it
   goes stale the moment a component moves, and every component tab states which
   tokens it takes - so the same fact would live in two places and drift in one. */
function dsColorRows(rows){
  return rows.map(([token, role]) => `
    <tr>
      <td class="spec"><span class="swatch" style="background:${dsVal(token)}"></span><code>${token}</code></td>
      <td>${dsDecl(token)}</td>
      <td>${role}</td>
    </tr>`).join("");
}

/* Docs are bilingual like the rest of the shop: L(en, pl) picks by LANG. */
function L(en, pl){ return LANG === "pl" ? pl : en; }

const DS_SECTIONS = [
  { group:{en:"",pl:""}, id:"overview", label:{en:"Overview",pl:"Wprowadzenie"}, body: ()=>`
    <h1>${L("Design system","System projektowy")}</h1>
    <p class="ds-lede">${L(
      "The rules behind the nubook. shop: what each token means, when to reach for it, and how the components are assembled from them.",
      "Zasady stojące za sklepem nubook.: co oznacza każdy token, kiedy po niego sięgać i jak zbudowane są z nich komponenty.")}</p>
    <p>${L(
      "Colour swatches, the type scale, spacing values, the contrast figures and the drawings illustrating them are read from the live stylesheet, so a value printed here is the value the shop uses. Component specifications and the prose on what each token is for are written by hand, and those are the parts to revisit after a change in the code.",
      "Próbki kolorów, skala typograficzna, wartości odstępów, wyliczenia kontrastu i ilustrujące je rysunki czytane są z żywego arkusza, więc wypisana tu wartość jest tą, której używa sklep. Specyfikacje komponentów i opisy zastosowań pisane są ręcznie i to one wymagają przejrzenia po każdej zmianie w kodzie.")}</p>
    <h3>${L("How to use it","Jak z tego korzystać")}</h3>
    <p>${L(
      "A token is chosen by role, not by appearance. An element's role &ndash; supporting copy, a disabled option, a warning about stock &ndash; determines the token; the shade follows from it. A component takes its colour and spacing from tokens alone; the hues of the dot in the logotype are the single exception. Literal values stay with the dimensions the scale does not cover: hairlines, icon containers, the width of a drawer.",
      "Token dobiera się według roli, nie wyglądu. Rola elementu &ndash; tekst pomocniczy, opcja wyłączona, ostrzeżenie o stanie magazynu &ndash; wyznacza token, a odcień wynika z niego. Kolor i odstęp komponent bierze wyłącznie z tokenów; jedynym wyjątkiem są barwy kropki w logotypie. Dosłowne wartości zostają przy wymiarach, których skala nie obejmuje: kreskach włosowych, kontenerach ikon, szerokości szuflady.")}</p>
    <h3>${L("Principles","Założenia")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}><strong>${L("Quiet by default","Domyślnie cicho")}</strong></td>
          <td>${L("The books carry the colour. The interface is white, hairlines and near-black type.",
                  "Kolor wnoszą książki. Interfejs to biel, cienkie linie i niemal czarna typografia.")}</td></tr>
      <tr><td><strong>${L("One committing action","Jedna akcja wiążąca")}</strong></td>
          <td>${L("A view carries at most one primary button, built as dark translucent glass. Below it stand three lighter tiers &ndash; secondary, tertiary and ghost &ndash; and beside them the chip and the link.",
                  "Widok ma najwyżej jeden przycisk główny, zbudowany jako ciemne, półprzezroczyste szkło. Pod nim stoją trzy lżejsze stopnie &ndash; drugorzędny, trzeciorzędny i ghost &ndash; a obok nich chip i link.")}</td></tr>
      <tr><td><strong>${L("Motion explains","Ruch objaśnia")}</strong></td>
          <td>${L("Animation shows where something came from or where it went. That is its only job.",
                  "Animacja pokazuje, skąd coś przyszło albo dokąd odeszło. To jej jedyne zadanie.")}</td></tr>
      <tr><td><strong>${L("Bilingual first","Dwujęzyczność u podstaw")}</strong></td>
          <td>${L("No string stays as the markup wrote it: every one passes through <code>I18N</code> in Polish and English, at start-up and on every change of language, including the labels only a screen reader reaches.",
                  "Żaden napis nie zostaje w postaci wpisanej w znacznikach: wszystkie przechodzą przez <code>I18N</code> po polsku i angielsku, przy starcie i przy każdej zmianie języka &ndash; łącznie z etykietami, do których dociera wyłącznie czytnik ekranu.")}</td></tr>
    </tbody></table>` },

  { group:{en:"",pl:""}, id:"a11y", label:{en:"Accessibility",pl:"Dostępność"}, body: ()=>`
    <h1>${L("Accessibility","Dostępność")}</h1>
    <p class="ds-lede">${L(
      "An accessible interface works for everyone, whatever they use to see, read and control it. This page records where the shop meets that and where it does not.",
      "Dostępny interfejs działa dla każdego &ndash; niezależnie od tego, jak widzi, czyta i steruje. Ta strona zapisuje, gdzie sklep to spełnia, a gdzie nie.")}</p>
    <h3>${L("In place","Na miejscu")}</h3>
    <table><colgroup><col style="width:190px"><col></colgroup><tbody>
      <tr><td>${L("Native elements","Elementy natywne")}</td>
          <td>${L("A control is the HTML element that already means what it does: a chip is a <code>button</code>, a link and a product card are <code>a</code> with an <code>href</code>, a quantity stepper is two buttons around a number. Those elements bring focus, keyboard handling and a spoken role with them. ARIA adds only what HTML has no element for &ndash; that a panel is open, that a drawer is a dialogue, that a button showing one glyph is called Close.",
                  "Kontrolka jest tym elementem HTML, który już znaczy to, co ona robi: chip to <code>button</code>, link i karta produktu to <code>a</code> z atrybutem <code>href</code>, stepper ilości to dwa przyciski wokół liczby. Te elementy przynoszą ze sobą fokus, obsługę klawiatury i wypowiadaną rolę. ARIA dokłada wyłącznie to, na co HTML nie ma elementu &ndash; że panel jest rozwinięty, że szuflada jest dialogiem, że przycisk z jednym znakiem nazywa się Zamknij.")}</td></tr>
      <tr><td>${L("Visible focus","Widoczny fokus")}</td>
          <td>${L("Every interactive element draws a <code>:focus-visible</code> ring in <code>--nu-border-primary</code>, one thickness throughout and one distance out. A control sitting flush inside another one's outline &ndash; a stepper button, an option in the sort menu &ndash; draws the ring inward instead, because outside there is no room for it to stand. Form fields drop the ring and darken their border instead, so the focused field is still marked without a ring sitting inside a box.",
                  "Każdy element interaktywny rysuje obwódkę <code>:focus-visible</code> w kolorze <code>--nu-border-primary</code>, o jednej grubości i jednym odsunięciu na zewnątrz. Kontrolka siedząca ciasno w cudzym obrysie &ndash; przycisk steppera, opcja w menu sortowania &ndash; rysuje obwódkę do środka, bo na zewnątrz nie ma dla niej miejsca. Pola formularza rezygnują z obwódki na rzecz przyciemnienia własnej ramki, więc pole w fokusie nadal jest oznaczone, bez obwódki wewnątrz ramki.")}</td></tr>
      <tr><td>${L("Keyboard","Klawiatura")}</td>
          <td>${L("The first thing the Tab key finds on any view is a link past the promotion and the header, straight to the content; it shows itself the moment it takes focus and is of no use to anyone else. It works under two conditions, both to be kept in mind whenever the header changes: it has to stay the first element that takes focus, and its target has to stay directly after the header. Escape closes, in order: the sort menu, the filter sheet, the cart, the author drawer, the product view. Opening a drawer moves focus to its close button and marks everything outside it <code>inert</code>, so the page behind is out of reach of the Tab key, the pointer and assistive technology alike until it closes; opening the sort menu moves focus to the option in force, and closing it hands focus back to the button that opened it.",
                  "Pierwszym, co tabulator znajduje na każdym widoku, jest link prowadzący za promocję i nagłówek, prosto do treści; pokazuje się w chwili, gdy przyjmie fokus, i nikomu innemu nie przeszkadza. Działa pod dwoma warunkami, o które trzeba zadbać przy każdej zmianie w nagłówku: sam musi zostać pierwszym elementem przyjmującym fokus, a jego cel musi stać zaraz za nagłówkiem. Escape zamyka kolejno: menu sortowania, panel filtrów, koszyk, szufladę autorki, widok produktu. Otwarcie szuflady przenosi fokus na jej przycisk zamknięcia i oznacza wszystko poza nią atrybutem <code>inert</code>, więc do strony pod spodem nie sięga ani tabulator, ani wskaźnik, ani technologia wspomagająca &ndash; aż do zamknięcia; a otwarcie menu sortowania &ndash; na obowiązującą opcję; zamknięcie oddaje fokus przyciskowi, który je otworzył.")}</td></tr>
      <tr><td>${L("Announced state","Ogłaszany stan")}</td>
          <td>${L("<code>aria-expanded</code> on the filter and sort controls, <code>aria-pressed</code> on the language, currency and filter toggles, <code>role=&quot;menu&quot;</code> with <code>aria-checked</code> on the sort options, <code>role=&quot;dialog&quot;</code> with <code>aria-modal</code> on both drawers, backed by <code>inert</code> on everything outside them so the attribute describes what actually happens, <code>aria-invalid</code> with <code>aria-describedby</code> on a field whose value did not pass. The product grid is an <code>aria-live</code> region, so a filter change is announced rather than happening silently.",
                  "<code>aria-expanded</code> na filtrach i sortowaniu, <code>aria-pressed</code> na przełącznikach języka, waluty i filtrów, <code>role=&quot;menu&quot;</code> z <code>aria-checked</code> na pozycjach sortowania, <code>role=&quot;dialog&quot;</code> z <code>aria-modal</code> w obu szufladach, poparte atrybutem <code>inert</code> na wszystkim poza nimi, więc atrybut opisuje to, co faktycznie się dzieje, <code>aria-invalid</code> wraz z <code>aria-describedby</code> na polu, którego wartość nie przeszła. Siatka produktów jest obszarem <code>aria-live</code>, więc zmiana filtra jest ogłaszana, a nie zachodzi bezgłośnie.")}</td></tr>
      <tr><td>${L("Grouping","Grupowanie")}</td>
          <td>${L("Each row of filters is a <code>role=&quot;group&quot;</code> labelled by the heading standing above it, and the language and currency pairs in the header are groups of their own. A sighted reader takes that grouping from the layout; without the label tied to the row, a screen reader would read a run of toggles with nothing saying what they narrow down.",
                  "Każdy rząd filtrów jest grupą <code>role=&quot;group&quot;</code>, opisaną nagłówkiem stojącym nad nim, a pary języka i waluty w nagłówku są osobnymi grupami. Osoba widząca odczytuje to grupowanie z układu; bez etykiety powiązanej z rzędem czytnik ekranu odczytałby serię przełączników, nie mówiąc, czego dotyczą.")}</td></tr>
      <tr><td>${L("Reduced motion","Ograniczony ruch")}</td>
          <td>${L("Everything that travels &ndash; anything sliding, scaling or changing size &ndash; yields to <code>prefers-reduced-motion</code>. Colour and shadow stay, because they answer the pointer rather than move the page. In the stylesheet a rule sits beside each animation; the transitions driven from the script check the setting before running.",
                  "Wszystko, co się przemieszcza &ndash; przesuwa, skaluje albo zmienia rozmiar &ndash; ustępuje przy <code>prefers-reduced-motion</code>. Kolor i cień zostają, bo odpowiadają na wskaźnik, a nie ruszają stroną. W arkuszu reguła stoi obok każdej animacji, a przejścia sterowane skryptem sprawdzają to ustawienie przed uruchomieniem.")}</td></tr>
      <tr><td>${L("Language","Język")}</td>
          <td>${L("The document's <code>lang</code> follows the switch, so a screen reader changes voice with the interface. No string stays as the markup wrote it &ndash; every one passes through <code>I18N</code> at start-up and on every change of language, including the labels only a screen reader reaches.",
                  "Atrybut <code>lang</code> dokumentu podąża za przełącznikiem, więc czytnik ekranu zmienia głos razem z interfejsem. Żaden napis nie zostaje w postaci wpisanej w znacznikach &ndash; wszystkie przechodzą przez <code>I18N</code> przy starcie i przy każdej zmianie języka, łącznie z etykietami, do których dociera wyłącznie czytnik.")}</td></tr>
      <tr><td>${L("Images","Obrazy")}</td>
          <td>${L("Covers and author photographs carry <code>alt</code>; glyphs standing in for icons are marked <code>aria-hidden</code> and labelled on the button instead.",
                  "Okładki i zdjęcia autorek mają <code>alt</code>; znaki zastępujące ikony oznaczone są jako <code>aria-hidden</code>, a etykieta stoi na przycisku.")}</td></tr>
    </tbody></table>
    <h3>${L("Contrast","Kontrast")}</h3>
    <p>${L(
      "The figures are computed from the tokens as this page renders.",
      "Wartości liczone są z tokenów w chwili wyświetlenia tej strony.")}</p>
    <table class="tok-table">
    <colgroup><col class="c-token"><col class="c-source"><col></colgroup>
    <thead><tr><th>${L("Pair","Para")}</th><th>${L("Ratio","Stosunek")}</th><th>${L("Where","Gdzie")}</th></tr></thead><tbody>
      <tr><td class="spec"><code>fg-primary</code> / <code>bg-primary</code></td><td>${dsContrastCell("--nu-fg-primary","--nu-bg-primary")}</td>
          <td>${L("Titles, copy, prices","Tytuły, tekst, ceny")}</td></tr>
      <tr><td class="spec"><code>fg-secondary</code> / <code>bg-primary</code></td><td>${dsContrastCell("--nu-fg-secondary","--nu-bg-primary")}</td>
          <td>${L("Authors, labels, quotes","Autorzy, etykiety, cytaty")}</td></tr>
      <tr><td class="spec"><code>fg-secondary</code> / <code>bg-secondary</code></td><td>${dsContrastCell("--nu-fg-secondary","--nu-bg-secondary")}</td>
          <td>${L("Order summary headings, empty cart &ndash; supporting text on a panel misses the threshold for body size","Nagłówki podsumowania zamówienia, pusty koszyk &ndash; tekst wspierający na panelu nie osiąga progu dla rozmiaru tekstowego")}</td></tr>
      <tr><td class="spec"><code>fg-tertiary</code> / <code>bg-primary</code></td><td>${dsContrastCell("--nu-fg-tertiary","--nu-bg-primary")}</td>
          <td>${L("Filter counts, disabled chips, placeholders in fields. A disabled control is exempt from the requirement; the count and the placeholder are not","Liczniki przy filtrach, wyłączone chipy, podpowiedzi w polach. Kontrolka wyłączona jest z wymogu zwolniona; licznik i podpowiedź nie są")}</td></tr>
      <tr><td class="spec"><code>fg-inverse</code> / <code>bg-inverse</code></td><td>${dsContrastCell("--nu-fg-inverse","--nu-bg-inverse")}</td>
          <td>${L("Cart counter, pre-order badge","Licznik koszyka, odznaka przedpremierowa")}</td></tr>
      <tr><td class="spec"><code>fg-warning</code> / <code>bg-primary</code></td><td>${dsContrastCell("--nu-fg-warning","--nu-bg-primary")}</td>
          <td>${L("Low-stock badge","Odznaka kończącego się nakładu")}</td></tr>
      <tr><td class="spec"><code>fg-alert</code> / <code>bg-primary</code></td><td>${dsContrastCell("--nu-fg-alert","--nu-bg-primary")}</td>
          <td>${L("Form errors, invalid discount code","Błędy formularza, błędny kod rabatowy")}</td></tr>
      <tr><td class="spec"><code>fg-highlight</code> / <code>bg-highlight</code></td><td>${dsContrastCell("--nu-fg-highlight","--nu-bg-highlight")}</td>
          <td>${L("Award badge","Odznaka nagrody")}</td></tr>
    </tbody></table>
    <h3>${L("Still open","Nadal otwarte")}</h3>
    <table><colgroup><col style="width:190px"><col></colgroup><tbody>
      <tr><td>${L("Two contrast pairs","Dwie pary kontrastu")}</td>
          <td>${L("Marked above. Both are fixed by darkening a grey primitive, which moves every token built from it &ndash; a decision for the palette, not for a single component.",
                  "Oznaczone powyżej. Obie naprawia przyciemnienie prymitywu szarości, co porusza każdy token z niego zbudowany &ndash; to decyzja dla palety, nie dla pojedynczego komponentu.")}</td></tr>
    </tbody></table>` },

  { group:{en:"",pl:""}, id:"tokens", label:{en:"Tokens",pl:"Tokeny"}, body: ()=>{
    const G = dsTokenGroups();
    const names = {
      colour: L("Colour","Kolor"), type: L("Typography","Typografia"),
      space: L("Spacing","Odstępy"), layout: L("Layout and components","Układ i komponenty"),
      icon: L("Icons","Ikony"), motion: L("Motion","Ruch"), focus: L("Focus","Fokus"),
      docs: L("Documentation","Dokumentacja"), other: L("Not sorted yet","Jeszcze nieprzypisane"),
      primitive: L("Primitives","Prymitywy"), semantic: L("Semantic","Semantyczne"),
      style: L("Styles","Style"),
      scale: L("From the scale","Ze skali"), own: L("A value of its own","Własna wartość"),
    };
    const total = G.reduce((n, g) => n + g.count, 0);
    const unreadable = `<p class="note">${L(
      "The list of names cannot be read in this way of opening the page: the stylesheet arrives through a <code>link</code> from a local file and the browser will not hand its text back. Open the built page, or serve the folder over http, and the inventory fills itself in. Everything else on this tab holds either way.",
      "Spisu nazw nie da się odczytać przy tym sposobie otwarcia strony: arkusz przychodzi przez <code>link</code> z pliku lokalnego, a przeglądarka nie oddaje jego treści. Otwórz stronę zbudowaną albo podaj folder przez http, a spis wypełni się sam. Wszystko pozostałe na tej zakładce obowiązuje tak czy inaczej.")}</p>`;
    /* Two columns, because a third would repeat the second. A browser hands back
       a custom property as it was declared rather than resolving it, so asking
       for the value of an aliased token returns the alias. One column says what
       the token is made of: its value where it holds one, the token it points at
       where it points. A primitive always holds one, which is why its table
       calls the column by that name. */
    const table = list => {
      const built = list.every(dsIsBuilt);
      return `<table><thead><tr><th ${DS_COL_NAME}>Token</th><th>${
        built ? L("Built from","Zbudowany z") : L("Value","Wartość")}</th></tr></thead><tbody>
        ${list.map(n => `<tr><td class="spec"><code>${n}</code></td><td>${
          built ? dsDecl(n) : dsVal(n)}</td></tr>`).join("")}
      </tbody></table>`;
    };
    return `
    <h1>${L("Tokens","Tokeny")}</h1>
    <p class="ds-lede">${L(
      "<strong>Design tokens</strong> are the single source of truth for the shop's design decisions: they give each decision a name and a place to be kept, so the whole interface reads it from there.",
      "<strong>Tokeny projektowe</strong> (design tokens) to jedno źródło prawdy dla decyzji projektowych w sklepie: nadają każdej decyzji nazwę i miejsce, w którym jest przechowywana, żeby cały interfejs czytał ją stamtąd.")}</p>

    <h3>${L("Purpose","Cel")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("One place to change","Jedno miejsce zmiany")}</td><td>${L(
        "A colour used in forty rules is one declaration, so changing it is one edit and there is no fortieth that gets missed.",
        "Kolor użyty w czterdziestu regułach to jedna deklaracja, więc zmiana to jedna poprawka i nie ma czterdziestej, o której ktoś zapomni.")}</td></tr>
      <tr><td>${L("A name says the intent","Nazwa mówi o zamiarze")}</td><td>${L(
        "<code>--nu-fg-secondary</code> says what the colour is for; <code>#727272</code> says only what it is.",
        "<code>--nu-fg-secondary</code> mówi, do czego kolor służy; <code>#727272</code> mówi tylko, jaki jest.")}</td></tr>
      <tr><td>${L("A deviation can be found","Odstępstwo da się wykryć")}</td><td>${L(
        "Once every value is meant to come from a token, one written by hand is the only value matching none of them, so a script finds it. This documentation reads its values from the same sheet as the shop, so it cannot part ways with it either.",
        "Kiedy każda wartość ma pochodzić z tokenu, ta wpisana ręcznie jako jedyna nie pasuje do żadnego, więc skrypt ją znajdzie. Ta dokumentacja czyta wartości z tego samego arkusza co sklep, więc też nie może się z nim rozminąć.")}</td></tr>
    </tbody></table>

    <h2>${L("How they are built","Jak są budowane")}</h2>
    <p>${L(
      "In the stylesheet a token is a CSS property declared in <code>:root</code>. Tokens stand on three levels, and the name says which one.",
      "W arkuszu token jest właściwością CSS zadeklarowaną w <code>:root</code>. Tokeny stoją na trzech poziomach, a nazwa wskazuje, na którym.")}</p>

    <h3>${L("Primitive","Prymityw")}</h3>
    <p>${L(
      "Holds a value and nothing else. A step is named after the job it does rather than after a number, so a value can move between steps without a single rule being renamed. Colour primitives and text sizes are the exception: they are named by their own measure &ndash; lightness and size &ndash; because there the job belongs to the token standing above them.",
      "Trzyma wartość i nic poza tym. Stopień nazwany jest zadaniem, które wykonuje, a nie liczbą, więc wartość może przejść między stopniami bez przemianowania choćby jednej reguły. Wyjątkiem są prymitywy koloru i rozmiary pisma, nazwane własną miarą &ndash; jasnością i wielkością &ndash; bo tam zadanie należy do tokenu stojącego nad nimi.")}</p>
    ${dsNamePattern([L("prefix","prefiks"), L("area","obszar"), L("step","stopień")])}
    ${dsTokenExamples(["--nu-grey-600","--nu-space-milli","--nu-text-size-lg","--nu-motion-slow"], true)}
    <p>${L(
      "A colour primitive is read inside <code>:root</code> and nowhere else: a grey can be changed in one place, without going through the rules that use it. The typographic primitives are read directly, because the <code>font:</code> shorthand carries neither letter-spacing nor uppercase, so a style cannot always stand in for them.",
      "Prymityw koloru czytany jest wyłącznie w <code>:root</code>: szarość da się zmienić w jednym miejscu, bez przeglądania reguł, które jej używają. Prymitywy typograficzne są czytane wprost, bo skrót <code>font:</code> nie niesie ani trackingu, ani wersalików, więc styl nie zawsze może je zastąpić.")}</p>

    <h3>${L("Semantic","Semantyczny")}</h3>
    <p>${L(
      "Names a role and points at the level below. This is the level a rule in the sheet reads. The typographic styles stand here too, laid out property by property in the Typography tab. Two roles holding one value get two names, so that one of them can be changed later without the other: <code>--nu-border-muted</code> and <code>--nu-border-hover</code> point at the same grey today.",
      "Nazywa rolę i wskazuje na poziom niżej. Po ten poziom sięgają reguły w arkuszu. Stoją tu również style typograficzne, rozłożone na osobne właściwości w zakładce Typografia. Dwie role o tej samej wartości dostają dwie nazwy, żeby dało się później zmienić jedną, nie ruszając drugiej: <code>--nu-border-muted</code> i <code>--nu-border-hover</code> wskazują dziś na tę samą szarość.")}</p>
    ${dsNamePattern([L("prefix","prefiks"), L("area","obszar"), L("role","rola")])}
    ${dsTokenExamples(["--nu-fg-secondary","--nu-border-alert","--nu-bg-scrim"], false)}

    <h3>${L("Component","Komponentowy")}</h3>
    <p>${L(
      "Belongs to one component and is read by that component alone.",
      "Należy do jednego komponentu i czyta go tylko ten komponent.")}</p>
    ${dsNamePattern([L("prefix","prefiks"), L("component","komponent"), L("property","właściwość")])}
    ${dsTokenExamples(["--nu-mobar-height","--nu-cobar-height","--nu-gutter-column"], false)}
    <p class="note">${L(
      "Common practice puts the rule more strictly: a component should never point at a primitive at all. <a class=\"link in-text\" href=\"https://primer.style/product/primitives/token-names/\" target=\"_blank\" rel=\"noopener\">Primer</a>, GitHub's design system, keeps the same three levels and allows a component token only in that component's own CSS. Here a component token points straight at the spacing scale, which has no semantic layer above it and needs none: a step is already named after the job it does, so a name on top of it would say the same thing twice. That rule is written for a system serving many products and many themes, where the middle layer is what keeps them apart. One shop has nothing to keep apart.",
      "Praktyka branżowa ujmuje tę zasadę ostrzej: komponent nie powinien wskazywać na prymityw w ogóle. <a class=\"link in-text\" href=\"https://primer.style/product/primitives/token-names/\" target=\"_blank\" rel=\"noopener\">Primer</a>, system projektowy GitHuba, trzyma te same trzy poziomy i dopuszcza token komponentowy wyłącznie w CSS swojego komponentu. Tutaj token komponentowy wskazuje wprost na skalę odstępów, nad którą nie ma warstwy semantycznej i nie jest ona potrzebna: stopień jest już nazwany zadaniem, które wykonuje, więc nazwa nad nim powtarzałaby to samo. Tamta reguła pisana jest pod system obsługujący wiele produktów i wiele motywów, gdzie warstwa pośrednia jest tym, co je od siebie oddziela. W jednym sklepie nie ma czego oddzielać.")}</p>

    <h3>${L("Pixels and rem","Piksele i rem")}</h3>
    <p>${L(
      "A reader who sets a larger default text size in the browser is telling every site what they need. A value in <code>px</code> ignores that; a value in <code>rem</code> follows it. Which is right depends on one question: should this value grow along with the text?",
      "Czytelniczka, która ustawia w przeglądarce większy domyślny rozmiar tekstu, mówi każdej stronie, czego potrzebuje. Wartość w <code>px</code> to ignoruje, wartość w <code>rem</code> za tym idzie. Co jest właściwe, rozstrzyga jedno pytanie: czy ta wartość ma rosnąć razem z tekstem?")}</p>
    <table><thead><tr><th ${DS_COL_NAME}>${L("Unit","Jednostka")}</th><th>${L("What is written in it","Co jest w niej zapisane")}</th></tr></thead><tbody>
      <tr><td class="spec"><code>rem</code></td><td>${L(
        "What should grow along with the text: padding is meant to keep its proportion to the words it surrounds, an icon beside a word to stay the size of that word, a control to stay the size of the icon it holds.",
        "Co ma rosnąć razem z tekstem: wypełnienie ma zachować proporcję do słów, które obejmuje, ikona przy słowie ma zostać wielkości tego słowa, a kontrolka wielkości ikony, którą trzyma.")}</td></tr>
      <tr><td class="spec"><code>px</code></td><td>${L(
        "What should stay as it is: the focus ring is equally thin at every text size, the maximum width of a view is measured against the window, and the figures inside an icon's drawing grid belong to the drawing.",
        "Co ma zostać takie samo: obwódka fokusu jest tak samo cienka przy każdym rozmiarze pisma, maksymalna szerokość widoku mierzy się względem okna, a liczby wewnątrz siatki rysunku ikony należą do rysunku.")}</td></tr>
    </tbody></table>

    <h2>${L("Every token","Wszystkie tokeny")}</h2>
    <p>${L(
      "Read back from the stylesheet: a category by the prefix a token carries, a section by whether the token holds a value or points at another token. The last category gathers what the <code>--ds-</code> prefix marks &ndash; tokens declared for these documentation pages and used nowhere in the shop. What a token is for is described by the tab of its layer; this list is the inventory.",
      "Odczytane z arkusza: kategoria po przedrostku, który token nosi, sekcja po tym, czy token trzyma wartość, czy wskazuje na inny token. Ostatnia kategoria zbiera to, co oznacza przedrostek <code>--ds-</code> &ndash; tokeny zadeklarowane dla stron dokumentacji i nieużywane nigdzie w sklepie. O tym, do czego dany token służy, mówi zakładka jego warstwy; ta lista jest spisem.")}</p>
    ${total ? G.map(g =>
      `<h3>${names[g.key]}</h3>${
        g.sections.map(sec => (sec.key ? `<h4>${names[sec.key]}</h4>` : "")
          + table(sec.list)).join("")}`).join("") : unreadable}

    <p class="note">${L("The W3C Design Tokens Community Group publishes a format for exchanging tokens between tools; its first stable version came out in October 2025. That specification is about the exchange format, not about how a stylesheet declares them.","Grupa robocza W3C Design Tokens Community Group publikuje format wymiany tokenów między narzędziami; pierwsza stabilna wersja ukazała się w październiku 2025. Ta specyfikacja dotyczy formatu wymiany, a nie tego, jak arkusz stylów deklaruje tokeny.")} ${L("Sources","Źródła")}: <a class="link in-text" href="https://www.designtokens.org/" target="_blank" rel="noopener">Design Tokens Community Group</a>, <a class="link in-text" href="https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/" target="_blank" rel="noopener">W3C</a> ${L("(checked August 2026)","(sprawdzone w sierpniu 2026)")}.</p>`;
  } },

  { group:{en:"Foundations",pl:"Fundamenty"}, id:"colour", label:{en:"Colour",pl:"Kolor"}, body: ()=>`
    <h1>${L("Colour","Kolor")}</h1>
    <p class="ds-lede">${L(
      "Every token reads as <code>--nu-&lt;position&gt;-&lt;meaning&gt;</code>. Position states where the colour sits &ndash; background, foreground or border. Meaning states the role it plays there. Selecting a colour is therefore answering those two, not choosing a shade.",
      "Każdy token czyta się jako <code>--nu-&lt;pozycja&gt;-&lt;znaczenie&gt;</code>. Pozycja określa, gdzie kolor siedzi &ndash; tło, treść albo obrys. Znaczenie określa rolę, jaką tam pełni. Dobór koloru sprowadza się więc do odpowiedzi na te dwa pytania, a nie do wyboru odcienia.")}</p>
    <h3>${L("Two layers","Dwie warstwy")}</h3>
    <p>${L(
      `<strong>Primitives</strong> are the raw palette, named after the colour itself, and the only place a hex value appears. <strong>Semantic</strong> tokens state what a colour is for and are built exclusively from primitives. Components reference the semantic layer only, so re-toning the brand is an edit to ${dsPrimitiveCount()} declarations rather than a search through the stylesheet.`,
      `<strong>Prymitywy</strong> to surowa paleta, nazwana od samego koloru, i jedyne miejsce, w którym pojawia się wartość heks. Tokeny <strong>semantyczne</strong> określają, do czego kolor służy, i budowane są wyłącznie z prymitywów. Komponenty odwołują się wyłącznie do warstwy semantycznej, więc zmiana tonacji marki to edycja ${dsPrimitiveCount()} deklaracji, a nie przeszukiwanie arkusza.`)}</p>
    <table><thead><tr><th>${L("Primitive","Prymityw")}</th><th>${L("Value","Wartość")}</th></tr></thead>
    <tbody>${dsPrimitiveRows()}</tbody></table>
    <h3>${L("Naming","Nazewnictwo")}</h3>
    <table><thead><tr><th>${L("Layer","Warstwa")}</th><th>${L("Values","Wartości")}</th></tr></thead><tbody>
      <tr><td>${L("Position","Pozycja")}</td><td><code>bg</code> &middot; <code>fg</code> &middot; <code>border</code></td></tr>
      <tr><td>${L("Meaning","Znaczenie")}</td><td>${dsMeanings()}</td></tr>
    </tbody></table>
    <h3>Background</h3>
    <table class="tok-table">
    <colgroup><col class="c-token"><col class="c-source"><col><col></colgroup>
    <thead><tr><th>Token</th><th>${L("Built from","Zbudowany z")}</th><th>${L("Meaning","Znaczenie")}</th></tr></thead>
    <tbody>${dsColorRows([
      ["--nu-bg-primary",L("Default surface","Powierzchnia domyślna")],
      ["--nu-bg-secondary",L("Raised / recessed panel","Panel wyniesiony")],
      ["--nu-bg-tertiary",L("Third surface step","Trzeci stopień powierzchni")],
      ["--nu-bg-inverse",L("Darkest surface","Powierzchnia najciemniejsza")],
      ["--nu-bg-action",L("Primary action, glass body","Akcja główna, korpus szkła")],
      ["--nu-bg-action-glow",L("Primary action, inner glow","Akcja główna, łuna wewnętrzna")],
      ["--nu-bg-action-glow-deep",L("Primary action, cast aura","Akcja główna, aura rzucana")],
      ["--nu-bg-action-secondary",L("Secondary action, glass body","Akcja drugorzędna, korpus szkła")],
      ["--nu-bg-highlight",L("Distinction","Wyróżnienie")],
      ["--nu-bg-scrim",L("Dim behind a modal layer","Przyciemnienie pod warstwą modalną")],
      ["--nu-bg-shadow",L("What a shadow is made of","Barwa, z której zrobiony jest cień")],
      ["--nu-bg-measure",L("A measured distance","Mierzona odległość")],
    ])}</tbody></table>
    <p class="note">${L(
      "Both glow tokens belong to the primary button. The secondary button carries neither; the absence is what separates the two. <code>--nu-bg-shadow</code> holds the same value as the inverse surface and stands apart from it because the two answer different questions &ndash; what is the opposite of the page, and what colour is a shadow. On a light page one answer serves both; the moment a page is dark they part.",
      "Oba tokeny łuny należą do przycisku głównego. Przycisk drugorzędny nie ma żadnego z nich i ten brak jest tym, co odróżnia oba przyciski. <code>--nu-bg-shadow</code> ma tę samą wartość co powierzchnia odwrócona i stoi osobno, bo odpowiadają na różne pytania &ndash; co jest przeciwieństwem strony, a z czego zrobiony jest cień. Na jasnej stronie jedna odpowiedź obsługuje oba; z chwilą, gdy strona jest ciemna, rozchodzą się.")}</p>
    <h3>Foreground</h3>
    <table class="tok-table">
    <colgroup><col class="c-token"><col class="c-source"><col><col></colgroup>
    <thead><tr><th>Token</th><th>${L("Built from","Zbudowany z")}</th><th>${L("Meaning","Znaczenie")}</th></tr></thead>
    <tbody>${dsColorRows([
      ["--nu-fg-primary",L("Primary content","Treść główna")],
      ["--nu-fg-secondary",L("Supporting content","Treść wspierająca")],
      ["--nu-fg-tertiary",L("Disabled or less prominent text","Tekst wyłączony lub mniej istotny")],
      ["--nu-fg-inverse",L("Content on an inverse background","Treść na ciemnym tle")],
      ["--nu-fg-highlight",L("Distinction","Wyróżnienie")],
      ["--nu-fg-warning",L("Inventory running out","Kończący się nakład")],
      ["--nu-fg-alert",L("Failed validation","Nieudana walidacja")],
    ])}</tbody></table>
    <h3>Border</h3>
    <table class="tok-table">
    <colgroup><col class="c-token"><col class="c-source"><col><col></colgroup>
    <thead><tr><th>Token</th><th>${L("Built from","Zbudowany z")}</th><th>${L("Meaning","Znaczenie")}</th></tr></thead>
    <tbody>${dsColorRows([
      ["--nu-border-neutral",L("Separation","Rozdzielenie")],
      ["--nu-border-primary",L("Emphasis / selection","Podkreślenie / zaznaczenie")],
      ["--nu-border-muted",L("Receded","Wyciszony")],
      ["--nu-border-hover",L("Answering the pointer","Odpowiedź na kursor")],
      ["--nu-border-highlight",L("Distinction","Wyróżnienie")],
      ["--nu-border-warning",L("Inventory running out","Kończący się nakład")],
      ["--nu-border-alert",L("Failed validation","Nieudana walidacja")],
    ])}</tbody></table>
    <h3>${L("Rules","Zasady")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Never hardcoded","Nigdy na sztywno")}</td>
          <td>${L("A component never carries a hex value. Where no token fits, the system is missing one and it has to be added.",
                  "Komponent nigdy nie nosi wartości heks. Gdy żaden token nie pasuje, systemowi go brakuje i trzeba go dodać.")}</td></tr>
      <tr><td>${L("Same value, different role","Ta sama wartość, inna rola")}</td>
          <td>${L("<code>--nu-bg-inverse</code> still equals <code>--nu-fg-primary</code>. They stay apart because &ldquo;the darkest ink&rdquo; and &ldquo;a filled surface&rdquo; are different ideas and have to be able to diverge. Warning and alert are separate for the same reason: the burgundy of a dwindling print run ties it to the colour the primary button emits, the red of an alert is kept for a failure.",
                  "<code>--nu-bg-inverse</code> nadal równa się <code>--nu-fg-primary</code>. Zostają osobne, bo „najciemniejszy atrament” i „wypełniona powierzchnia” to różne pojęcia i muszą móc się rozejść. Tak samo osobne są ostrzeżenie i błąd: burgund kończącego się nakładu wiąże go z barwą przycisku głównego, czerwień alertu zostaje dla awarii.")}</td></tr>
      <tr><td>${L("The logotype dot","Kolory kropki")}</td>
          <td>${L("The dot in the logotype is the one place with colours of its own: five hues that bloom once in a long cycle and appear nowhere else. They stay literal rather than entering the palette, which they would grow by half for a single flourish.",
                  "Kropka w logotypie to jedyne miejsce z własnymi kolorami: pięć barw rozkwitających raz na długi cykl i nieobecnych nigdzie indziej. Zostają wartościami dosłownymi, zamiast wchodzić do palety, którą powiększyłyby o połowę dla jednego ozdobnika.")}</td></tr>
      <tr><td>${L("Optical correction","Korekta optyczna")}</td>
          <td>${L("<code>--nu-border-muted</code> is one step lighter than the text it encloses: <code>--nu-grey-400</code> against the badge's <code>--nu-grey-600</code>. A solid 1px rule reads heavier than antialiased 11px type, so matching the value exactly looks mismatched.",
                  "<code>--nu-border-muted</code> jest o stopień jaśniejszy niż tekst, który otacza: <code>--nu-grey-400</code> wobec <code>--nu-grey-600</code> odznaki. Lita linia 1px czyta się ciężej niż wygładzany tekst 11px, więc dokładne zrównanie wartości wygląda na niedopasowane.")}</td></tr>
    </tbody></table>` },

  { group:{en:"Foundations",pl:"Fundamenty"}, id:"typography", label:{en:"Typography",pl:"Typografia"}, body: ()=>{
    const styles = dsTypeStyles();
    /* When to reach for a style, not where it currently stands: the second is
       inventory the code holds and the component tabs already state. */
    const useOf = {
      "--nu-type-h1": L("The subject of a view","Temat widoku"),
      "--nu-type-h2": L("A section within a view","Sekcja wewnątrz widoku"),
      "--nu-type-h3": L("A section that needs a heading but not its weight","Sekcja, która potrzebuje nagłówka, ale nie jego ciężaru"),
      "--nu-type-body-l": L("Emphasis within running copy","Wyróżnienie w tekście ciągłym"),
      "--nu-type-body-m": L("The page's own style, inherited by everything that does not say otherwise","Własny styl strony, dziedziczony przez wszystko, co nie mówi inaczej"),
      "--nu-type-body-s": L("Small running text that can still break onto a second line: a field's label and its message, the strapline under the wordmark. Also the uppercase headings over a group &ndash; a filter group, a specimen, a bar &ndash; where the rule adds the capitals and the tracking on top of it, the <code>font:</code> shorthand carrying neither.","Mały tekst ciągły, który wciąż może złamać się na drugi wiersz: etykieta pola i jej komunikat, podpis pod sygnetem. Także wersalikowe nagłówki nad grupą &ndash; grupą filtrów, okazem, belką &ndash; gdzie reguła dokłada do niego wersaliki i światło, bo skrót <code>font:</code> nie unosi ani jednego, ani drugiego."),
      "--nu-type-label": L("Text that names another element rather than being read as content. Its box is one line high, which is what separates it from <code>--nu-type-body-s</code>: that one can break onto a second line, this one is not meant to.","Napis, który nazywa inny element, zamiast być treścią do czytania. Jego pudełko ma wysokość jednego wiersza i tym różni się od <code>--nu-type-body-s</code>: tamten może złamać się na drugi wiersz, ten nie ma prawa."),
      "--nu-type-caption": L("A count bound to a larger element. Never for reading.","Liczba przypięta do większego elementu. Nigdy do czytania."),
    };
    return `
    <h1>${L("Typography","Typografia")}</h1>
    <p class="ds-lede">${L(
      "Two families, four scales, and the styles assembled from them. A style is named by level &ndash; Heading 1, Body, Label &ndash; not by the view it appears in, so one style serves every context that calls for it.",
      "Dwie rodziny, cztery skale i złożone z nich style. Styl nazwany jest przez poziom &ndash; Heading 1, Body, Label &ndash; a nie przez widok, w którym występuje, więc jeden styl obsługuje każdy kontekst, który go wymaga.")}</p>

    <h3>${L("Families","Rodziny")}</h3>
    <div class="ds-faces">
      ${["--nu-font-display","--nu-font-text"].map(token => `
        <div class="ds-face">
          <div class="ds-face-head"><span class="name">${token}</span></div>
          <div class="ds-face-aa" style="font-family:var(${token})">Aa</div>
          <div class="ds-face-set" style="font-family:var(${token})">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz &#260;&#262;&#280;&#321;&#323;&#211;&#346;&#377;&#379; &#261;&#263;&#281;&#322;&#324;&#243;&#347;&#378;&#380; 0123456789 , . ; : ! ? &bdquo;&rdquo; &mdash; &ndash; z&#322; &euro;</div>
        </div>`).join("")}
    </div>
    <table><thead><tr><th ${DS_COL_NAME}>Token</th><th>${L("Value","Wartość")}</th><th>${L("Used for","Zastosowanie")}</th></tr></thead><tbody>
      <tr><td class="spec"><code>--nu-font-display</code></td><td>${dsVal("--nu-font-display")}</td>
          <td>${L("Identity and headings.","Identyfikacja i nagłówki.")}</td></tr>
      <tr><td class="spec"><code>--nu-font-text</code></td><td>${dsVal("--nu-font-text")}</td>
          <td>${L("Everything that is read or operated.",
                  "Wszystko, co się czyta albo czym się operuje.")}</td></tr>
    </tbody></table>

    <h3>${L("Size","Rozmiar")}</h3>
    <p>${L("A size token sets the size and nothing else. What that size is for is decided by the style that reaches for it.",
           "Token rozmiaru ustala tylko wielkość pisma. O tym, do czego ta wielkość służy, decyduje styl, który po nią sięga.")}</p>
    <table><thead><tr><th ${DS_COL_NAME}>Token</th><th>${L("Value","Wartość")}</th><th>${L("Example","Przykład")}</th></tr></thead><tbody>
      ${dsTypeSteps().map(([token, sample]) =>
        `<tr><td class="spec"><code>${token}</code></td><td>${dsVal(token)}</td><td>${sample}</td></tr>`).join("")}
    </tbody></table>

    <h3>${L("Line height","Interlinia")}</h3>
    <p>${L("A step is a ratio, so it holds at every size.",
           "Stopień jest proporcją, więc trzyma się przy każdym stopniu pisma.")}</p>
    <table><thead><tr><th ${DS_COL_NAME}>Token</th><th>${L("Value","Wartość")}</th><th>${L("Used for","Zastosowanie")}</th></tr></thead><tbody>
      <tr><td class="spec"><code>--nu-line-flat</code></td><td>${dsVal("--nu-line-flat")}</td><td>${L("The box sets the height, not the line.","Wysokość ustala kontener, a nie wiersz.")}</td></tr>
      <tr><td class="spec"><code>--nu-line-tight</code></td><td>${dsVal("--nu-line-tight")}</td><td>${L("Display sizes: a looser line would leave the heading gaping.","Stopnie tytułowe: luźniejszy wiersz zostawiłby w nagłówku dziurę.")}</td></tr>
      <tr><td class="spec"><code>--nu-line-snug</code></td><td>${dsVal("--nu-line-snug")}</td><td>${L("Two lines that have to read as one object.","Dwa wiersze, które mają czytać się jako jeden przedmiot.")}</td></tr>
      <tr><td class="spec"><code>--nu-line-normal</code></td><td>${dsVal("--nu-line-normal")}</td><td>${L("Everything read as text.","Wszystko, co czyta się jako tekst.")}</td></tr>
    </tbody></table>
    <p class="note">${L(
      "A code block in this documentation runs looser still, at 1.7. It is not a step of this scale: the block is set in a face the shop never loads, so its line height carries the documentation's own prefix rather than the shop's.",
      "Blok kodu w tej dokumentacji ma wiersz jeszcze luźniejszy, 1.7. Nie jest to stopień tej skali: blok składany jest krojem, którego sklep nie wczytuje, więc jego interlinia nosi przedrostek dokumentacji, a nie sklepu.")}</p>

    <h3>${L("Weight","Grubość")}</h3>
    <table><thead><tr><th ${DS_COL_NAME}>Token</th><th>${L("Value","Wartość")}</th><th>${L("Used for","Zastosowanie")}</th></tr></thead><tbody>
      <tr><td class="spec"><code>--nu-weight-normal</code></td><td>${dsVal("--nu-weight-normal")}</td><td>${L("Everything, headings included.","Wszystko, łącznie z nagłówkami.")}</td></tr>
      <tr><td class="spec"><code>--nu-weight-medium</code></td><td>${dsVal("--nu-weight-medium")}</td><td>${L("Emphasis where size is not enough: a section heading too small to stand out by size alone, and a word inside a sentence.","Wyróżnienie tam, gdzie nie wystarcza rozmiar: nagłówek sekcji za mały, żeby odciąć się samą wielkością, i pojedyncze słowo w zdaniu.")}</td></tr>
    </tbody></table>
    <p class="note">${L(
      "The display family ships one weight and the text family two. Nothing heavier is loaded, so asking for a weight the shop does not hold would have the browser synthesise it from 400 and smear the letterforms &ndash; which is why the weight is stated by the style token rather than left to a default.",
      "Rodzina tytułowa dostarczana jest w jednej grubości, tekstowa w dwóch. Nic cięższego nie jest wczytywane, więc prośba o grubość, której sklep nie posiada, kazałaby przeglądarce wygenerować ją z 400 i rozmyć litery &ndash; dlatego grubość wnosi token stylu, zamiast zostawiać ją wartości domyślnej.")}</p>

    <h3>${L("Letter-spacing","Światło międzyliterowe")}</h3>
    <p>${L(
      "Set against size and string length, not against case. Four values cover the shop, all relative, so they follow the type size instead of being restated per breakpoint. A style token carries four properties and this is not one of them, so a rule that needs tracking declares it beside the style.",
      "Dobierane do stopnia i długości ciągu, nie do wielkości liter. Cztery wartości obsługują cały sklep, wszystkie względne, więc idą za stopniem pisma, zamiast być powtarzane przy każdym progu. Token stylu unosi cztery właściwości i światła wśród nich nie ma, więc reguła, która go potrzebuje, deklaruje je obok stylu.")}</p>
    <table><thead><tr><th ${DS_COL_NAME}>Token</th><th>${L("Value","Wartość")}</th><th>${L("Used for","Zastosowanie")}</th></tr></thead><tbody>
      <tr><td class="spec"><code>--nu-tracking-display</code></td><td>${dsVal("--nu-tracking-display")}</td>
          <td>${L("Negative. Large display type sets loosely by default, so it is drawn in.","Ujemne. Duży krój tytułowy składa się z natury luźno, więc jest ściągany.")}</td></tr>
      <tr><td class="spec"><code>--nu-tracking-body</code></td><td>${dsVal("--nu-tracking-body")}</td>
          <td>${L("Zero, declared on <code>body</code>. Tracking applied to a paragraph distorts word shapes and slows reading.","Zero, zadeklarowane na <code>body</code>. Światło nałożone na akapit zniekształca kształty słów i spowalnia czytanie.")}</td></tr>
      <tr><td class="spec"><code>--nu-tracking-compact</code></td><td>${dsVal("--nu-tracking-compact")}</td>
          <td>${L("Short mixed-case strings that read as objects rather than prose.","Krótkie ciągi pisane normalnie, czytające się jako obiekty, a nie proza.")}</td></tr>
      <tr><td class="spec"><code>--nu-tracking-caps</code></td><td>${dsVal("--nu-tracking-caps")}</td>
          <td>${L("Every uppercase interface string and only those: uppercase letterforms sit tighter than lowercase and need the air put back.","Każdy napis interfejsu pisany wersalikami i tylko one: wersaliki stoją ciaśniej niż małe litery i trzeba im to powietrze oddać.")}</td></tr>
    </tbody></table>

    <h3>${L("The underline","Podkreślenie")}</h3>
    <p>${L(
      "A word underlined by a control &ndash; a link standing in text, a ghost button, a pressed chip, the chosen option in the sort menu &ndash; needs air between the letters and the rule, or the rule lands on the descenders. One token holds that distance for all of them.",
      "Słowo podkreślone przez kontrolkę &ndash; link stojący w tekście, przycisk ghost, wciśnięty chip, obowiązująca opcja w menu sortowania &ndash; potrzebuje powietrza między literami a kreską, bo inaczej kreska ląduje na ogonkach. Jeden token trzyma tę odległość dla wszystkich.")}</p>
    <table><thead><tr><th ${DS_COL_NAME}>Token</th><th>${L("Value","Wartość")}</th><th>${L("Used for","Zastosowanie")}</th></tr></thead><tbody>
      <tr><td class="spec"><code>--nu-underline-offset</code></td><td>${dsVal("--nu-underline-offset")}</td>
          <td>${L("The distance between a word and the rule under it. In <code>px</code>, unlike everything else on this tab: a hairline&rsquo;s distance from a hairline is measured against the rule, not against the text, so it does not grow with it. It sits below the spacing scale, which starts four times higher.",
                  "Odległość słowa od kreski pod nim. W <code>px</code>, inaczej niż wszystko pozostałe na tej zakładce: włosowa odległość od włosa mierzy się względem kreski, a nie tekstu, więc z nim nie rośnie. Leży poniżej skali odstępów, która zaczyna się czterokrotnie wyżej.")}</td></tr>
    </tbody></table>

    <h3>${L("The styles","Style")}</h3>
    <p>${L(
      "A text style is four properties that have to travel together: weight, size, line height and family. Changing the size without the line height breaks the rhythm; changing the family without the tracking changes the width of everything. So each style is packed into one token, assembled from the four scales above.",
      "Styl tekstu to cztery właściwości, które muszą podróżować razem: grubość, stopień, interlinia i rodzina. Zmiana stopnia bez interlinii psuje rytm, zmiana rodziny bez światła zmienia szerokość wszystkiego. Dlatego każdy styl jest spakowany w jeden token, złożony z czterech skal powyżej.")}</p>
    <div class="demo on-page" style="display:block">
      ${dsTypeSpecimens().map(([token, sample, extra]) =>
        `<div class="ds-style-row"><span class="lbl">${token}</span>
          <span style="font:var(${token})${extra ? ";" + extra : ""}">${sample}</span></div>`).join("")}
    </div>
    ${styles.length ? `<table><thead><tr><th ${DS_COL_NAME}>Token</th><th>${L("Weight","Grubość")}</th><th>${L("Size","Stopień")}</th><th>${L("Line","Interlinia")}</th><th>${L("Family","Rodzina")}</th></tr></thead><tbody>
      ${styles.map(t => `<tr><td class="spec"><code>${t.name}</code></td><td class="spec"><code>${t.weight}</code></td><td class="spec"><code>${t.size}</code></td><td class="spec"><code>${t.line}</code></td><td class="spec"><code>${t.family}</code></td></tr>`).join("")}
    </tbody></table>
    <table><thead><tr><th ${DS_COL_NAME}>Token</th><th>${L("Used for","Zastosowanie")}</th></tr></thead><tbody>
      ${styles.map(t => `<tr><td class="spec"><code>${t.name}</code></td><td>${useOf[t.name] || ""}</td></tr>`).join("")}
    </tbody></table>` : `<p class="note">${L(
      "The table of styles needs the stylesheet to be readable, which it is not in this way of opening the page. Open the built page, or serve the folder over http.",
      "Tabela stylów potrzebuje czytelnego arkusza, a przy tym sposobie otwarcia strony arkusz czytelny nie jest. Otwórz stronę zbudowaną albo podaj folder przez http.")}</p>`}

    <h3>${L("How a rule reads them","Jak sięga po nie reguła")}</h3>
    <p>${L(
      "A rule says which style it is and stops assembling type by hand:",
      "Reguła mówi, którym stylem jest, i przestaje składać krój ręcznie:")}</p>
    <pre class="ds-code">.p-title{ font:var(--nu-type-h1); margin-bottom:var(--nu-space-nano) }</pre>
    <p class="note">${L(
      "The shorthand resets every font property it does not mention, font-style and tabular figures among them &ndash; so a rule wanting italics or aligned numerals puts the style first and the exception after it.",
      "Skrót zeruje każdą właściwość kroju, której nie wymienia, w tym odmianę i cyfry tabelaryczne &ndash; więc reguła chcąca kursywy albo wyrównanych cyfr stawia styl pierwszy, a wyjątek po nim.")}</p>

    <h3>${L("Rules","Zasady")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Same value, different role","Ta sama wartość, inna rola")}</td>
          <td>${L("Heading 3 and Body L both take <code>lg</code> today. They are separate styles, not one style used twice: the first is the floor of the display family and the second is emphasis inside running copy. Either can be moved by pointing it at a different step, which is what keeps them independent without the scale holding two values of the same size.",
                  "Heading 3 i Body L biorą dziś stopień <code>lg</code>. Są osobnymi stylami, a nie jednym użytym dwa razy: pierwszy jest najniższym stopniem kroju tytułowego, drugi wyróżnieniem w tekście ciągłym. Każdy da się przesunąć, wskazując mu inny stopień, i to trzyma je niezależnie, bez trzymania w skali dwóch wartości tej samej wielkości.")}</td></tr>
      <tr><td>${L("Reaching for a style","Sięganie po styl")}</td>
          <td>${L("A rule reads a style rather than a step of a scale, so that the four properties travel together. The exception is an element that needs a font property the <code>font:</code> shorthand resets: italic, tabular figures, small capitals. There the rule sets only what it changes and leaves the rest to inheritance &ndash; a price is set at <code>lg</code> and nothing more, because the shorthand would take its tabular figures away. The same holds at a breakpoint, where only the size moves.",
                  "Reguła sięga po styl, a nie po stopień skali, żeby cztery właściwości podróżowały razem. Wyjątkiem jest element, który potrzebuje właściwości pisma kasowanej przez skrót <code>font:</code>: kursywy, cyfr tabelarycznych, kapitalików. Wtedy reguła ustawia tylko to, co zmienia, a resztę zostawia dziedziczeniu &ndash; cena dostaje stopień <code>lg</code> i nic poza tym, bo skrót odebrałby jej cyfry tabelaryczne. Tak samo na progu, gdzie zmienia się sam stopień.")}</td></tr>
      <tr><td>${L("Italic","Kursywa")}</td>
          <td>${L("A cut of <code>--nu-type-body-m</code>, declared beside the style because the shorthand does not carry it. Reserved for book quotes; the attribution beneath returns to roman. Nothing else in the shop is set in italic.",
                  "Odmiana <code>--nu-type-body-m</code>, deklarowana obok stylu, bo skrót jej nie unosi. Zarezerwowana dla cytatów z książek; podpis pod cytatem wraca do odmiany prostej. Nic innego w sklepie nie jest składane kursywą.")}</td></tr>
      <tr><td>${L("Numerals","Cyfry")}</td>
          <td>${L("Prices, quantities and totals set in tabular figures, so a column of numbers holds its alignment when a value changes.",
                  "Ceny, ilości i sumy składane są cyframi tabelarycznymi, więc kolumna liczb utrzymuje wyrównanie przy zmianie wartości.")}</td></tr>
      <tr><td>${L("Mobile","Mobile")}</td>
          <td>${L("Below 820px the product title and the wordmark move to Heading 2. Every other application of Heading 1 and the rest of the scale are unchanged.",
                  "Poniżej 820px tytuł produktu i znak marki przechodzą na Heading 2. Pozostałe zastosowania Heading 1 oraz reszta skali zostają bez zmian.")}</td></tr>
    </tbody></table>

    <h3>${L("Outside the scales","Poza skalami")}</h3>
    <table><colgroup><col style="width:190px"><col></colgroup><tbody>
      <tr><td>${L("The wordmark","Znak marki")}</td>
          <td>${L("The one place that assembles a style by hand. It takes the Heading 1 size with the flat line, because a heading's leading at that size would leave the dot after the name floating away from it.",
                  "Jedyne miejsce składające styl ręcznie. Bierze stopień Heading 1 z płaskim wierszem, bo interlinia nagłówka przy tym stopniu zostawiłaby kropkę za nazwą w powietrzu.")}</td></tr>
      <tr><td>${L("The cart counter","Licznik koszyka")}</td>
          <td>${L("The one line height given as a length rather than a ratio: it equals the height of the circle the count sits in, which is what centres it. Both are in <code>rem</code>, so the circle and the digit grow together.",
                  "Jedyna interlinia podana jako długość, a nie proporcja: równa wysokości kółka, w którym stoi liczba, i to ona ją centruje. Oba są w <code>rem</code>, więc kółko i cyfra rosną razem.")}</td></tr>
      <tr><td>${L("Monospace in these pages","Krój maszynowy na tych stronach")}</td>
          <td>${L("Token names and code blocks in this documentation are set in a monospace face, sized against the text around them rather than from the scale. It is not a design system family and the shop neither loads nor uses it &ndash; it exists so that hyphens and underscores in a token name can be read apart.",
                  "Nazwy tokenów i bloki kodu w tej dokumentacji składane są krojem maszynowym, w rozmiarze liczonym od otaczającego tekstu, a nie ze skali. Nie jest to rodzina design systemu i sklep ani go nie wczytuje, ani nie używa &ndash; istnieje po to, żeby myślniki i podkreślenia w nazwie tokenu dało się odróżnić.")}</td></tr>
    </tbody></table>`;
  } },

  { group:{en:"Foundations",pl:"Fundamenty"}, id:"spacing", label:{en:"Spacing",pl:"Odstępy"}, body: ()=>`
    <h1>${L("Spacing","Odstępy")}</h1>
    <p class="ds-lede">${L(
      "Almost every gap, padding, margin and inset in the shop comes from one of nine named steps, each a quarter of the base text size apart. The exception is the hairline distance between a word and the rule under it, which has its own token under Typography and is measured against the rule rather than against the text. They are declared in <code>rem</code>, so the whole rhythm grows when the reader enlarges text. The names order the steps from smallest to largest without binding any of them to an index, so merging a step away means pointing its users at a neighbour and deleting one line &ndash; the rest keep their names and leave no gap in a sequence.",
      "Prawie każdy odstęp, wypełnienie, margines i kotwiczenie w sklepie pochodzi z jednego z dziewięciu nazwanych stopni, odległych o ćwierć bazowego rozmiaru tekstu. Wyjątkiem jest włosowa odległość słowa od kreski pod nim, która ma własny token w Typografii i mierzy się względem kreski, a nie względem tekstu. Zadeklarowane są w <code>rem</code>, więc cały rytm rośnie, kiedy czytelniczka powiększy tekst. Nazwy porządkują stopnie od najmniejszego do największego, nie przypisując żadnego do numeru w kolejności, więc zwinięcie stopnia to wskazanie jego użyciom sąsiada i skasowanie jednej linijki &ndash; reszta zachowuje nazwy i nie zostawia dziury w ciągu.")}</p>

    <h3>${L("Padding and gap","Wypełnienie i odstęp")}</h3>
    <p>${L(
      "Spacing is a distance, not a dimension. It occurs in two roles: padding, measured from an element's edge to its content, and gap or margin, measured between two elements. Both draw from the same scale, as do positive insets on sticky and absolutely positioned elements. In the figures, the pink field marks the measured distance and an outlined block is an element.",
      "Odstęp jest odległością, nie wymiarem. Występuje w dwóch rolach: wypełnienie, mierzone od krawędzi elementu do jego treści, oraz odstęp lub margines, mierzony między dwoma elementami. Obie czerpią z tej samej skali, podobnie jak dodatnie kotwiczenie elementów przyklejonych i pozycjonowanych bezwzględnie. Na rysunkach różowe pole oznacza mierzoną odległość, a obrysowany klocek to element.")}</p>
    <div class="sp-figs">
      <div>
        <div class="sp-cap">${L("Gap &ndash; between two elements","Odstęp &ndash; między dwoma elementami")}</div>
        <div class="sp-flex">
          <div class="sp-thing"></div>
          <div class="sp-gap" style="width:var(--nu-space-medium)"></div>
          <div class="sp-thing"></div>
        </div>
        <p class="sp-note"><code>gap</code>, <code>margin</code></p>
      </div>
      <div>
        <div class="sp-cap">${L("Padding &ndash; edge to content","Wypełnienie &ndash; krawędź do treści")}</div>
        <div class="sp-pad" style="padding:var(--nu-space-medium)"><div class="sp-thing"></div></div>
        <p class="sp-note"><code>padding</code></p>
      </div>
    </div>

    <h3>${L("Proximity","Bliskość")}</h3>
    <p>${L(
      "Proximity groups. Elements set close together read as one unit; the same elements set apart read as separate ones. The scale is a graded set of distances for that decision, and the instrument for building rhythm and hierarchy in a composition: the more strongly two elements belong together, the smaller the step. For padding, one of the two is the element's own edge.",
      "Bliskość grupuje. Elementy postawione blisko siebie czytają się jako jedna całość, te same elementy rozsunięte &ndash; jako osobne. Skala jest stopniowanym zestawem odległości do tej decyzji i narzędziem budowania rytmu oraz hierarchii w kompozycji: im mocniej dwa elementy do siebie należą, tym mniejszy stopień. Przy wypełnieniu jednym z tych dwóch elementów jest własna krawędź.")}</p>
    <div class="sp-figs">
      <div>
        <div class="sp-cap">${L("One unit &ndash; the cover grid","Jedna całość &ndash; siatka okładek")}</div>
        <div class="sp-tiles" style="gap:var(--nu-space-nano)"><div></div><div></div><div></div></div>
        <p class="sp-note">${dsTok("--nu-space-nano")}</p>
      </div>
      <div>
        <div class="sp-cap">${L("Separate groups &ndash; the filters","Osobne grupy &ndash; filtry")}</div>
        <div class="sp-groups" style="gap:var(--nu-space-medium)">
          <div><div class="lb">${L("Genre","Gatunek")}</div><div class="ln"></div></div>
          <div><div class="lb">Tag</div><div class="ln"></div></div>
        </div>
        <p class="sp-note">${dsTok("--nu-space-medium")}</p>
      </div>
    </div>

    <h3>${L("The scale","Skala")}</h3>
    <p>${L(
      "The choice of step starts with whether the distance is padding or a gap. The token is given by the first row that describes the case.",
      "Wybór stopnia zaczyna się od pytania, czy odległość jest wypełnieniem, czy odstępem. Token wskazuje pierwszy wiersz, który opisuje dany przypadek.")}</p>
    <table class="space-table">
    <colgroup><col class="c-token"><col class="c-scale"><col><col></colgroup>
    <thead><tr><th>Token</th><th>${L("Scale","Skala")}</th>
      <th>${L("Padding","Wypełnienie")}</th><th>${L("Gap","Odstęp")}</th></tr></thead>
    <tbody>${dsSpaceSteps().map(([token,val,pad,gap])=>`
      <tr>
        <td class="spec"><code>${token}</code></td>
        <td><span class="sc"><b>${val}</b><span class="space-bar" style="width:var(${token})"></span></span></td>
        <td>${pad}</td>
        <td>${gap}</td>
      </tr>`).join("")}
    </tbody></table>
    <h3>${L("Derived from the scale","Pochodne skali")}</h3>
    <table class="tok-table">
    <colgroup><col class="c-token"><col class="c-source"><col></colgroup>
    <thead><tr><th>Token</th><th>${L("Built from","Zbudowany z")}</th><th>${L("Used for","Zastosowanie")}</th></tr></thead>
    <tbody>
      <tr><td class="spec"><code>--nu-gutter-column</code></td><td>${dsDecl("--nu-gutter-column")} &middot; ${dsVal("--nu-gutter-column")}</td>
          <td>${L("The gap between columns in every side-by-side layout: shop, product, checkout, these docs. One name, because how far apart two columns sit is a single decision.","Odstęp między kolumnami w każdym układzie dwukolumnowym: sklep, produkt, zamówienie, ta dokumentacja. Jedna nazwa, bo to, jak daleko od siebie stoją dwie kolumny, jest jedną decyzją.")}</td></tr>
      <tr><td class="spec"><code>--nu-mobar-height</code><br><code>--nu-cobar-height</code></td><td>${dsDecl("--nu-mobar-height")} &middot; ${dsVal("--nu-mobar-height")}</td>
          <td>${L("The height of each mobile bar: filters and sorting on the product list, the total and the submit in checkout. The page reserves exactly this much room at its foot, and the filter sheet sits on top of it. The step is a starting value: once the bar is rendered, the script replaces it with the measured height rounded up to the 4px rhythm, so a longer sort label in another language, or the safe area on a phone with a gesture bar, is never cropped.","Wysokość każdej mobilnej belki: filtry i sortowanie na liście produktów, suma i złożenie zamówienia w kasie. Strona rezerwuje dokładnie tyle miejsca u dołu, a arkusz filtrów siada na belce. Stopień jest wartością wyjściową: po wyrenderowaniu belki skrypt zastępuje go zmierzoną wysokością, zaokrągloną w górę do rytmu 4px, więc dłuższa etykieta sortowania w innym języku ani pasek gestu na telefonie nie zostaną przycięte.")}</td></tr>
      <tr><td class="spec"><code>--nu-mobar-padding</code><br><code>--nu-mobar-gap</code></td><td>${dsDecl("--nu-mobar-padding")} &middot; ${dsVal("--nu-mobar-padding")}</td>
          <td>${L("The bar's inner padding, and the air between the bar and the sort menu opening above it. One value for both, so the menu clears the bar by exactly as much as the bar holds inside itself.","Wypełnienie wewnątrz belki oraz powietrze między belką a menu sortowania otwierającym się nad nią. Jedna wartość na oba, więc menu odsuwa się od belki dokładnie o tyle, ile belka trzyma w środku.")}</td></tr>
    </tbody></table>
    <h3>${L("Worked example","Przykład")}</h3>
    <p>${L(
      "One component usually spends several steps at once, and the block quote on a product page spends three. The specimen below is the shop's own component, and every distance in the table is read back off it &ndash; restyle the quote and these rows follow.",
      "Jeden komponent zwykle zużywa kilka stopni naraz, a cytat na stronie produktu zużywa trzy. Okaz poniżej to komponent wzięty ze sklepu, a każda odległość w tabeli jest z niego odczytana &ndash; zmień style cytatu, a wiersze pójdą za nim.")}</p>
    <div class="demo on-page" style="display:block">
      <div class="ds-eg">
        <p class="p-quote">${L("There is always the other side, always.","Zawsze jest druga strona, zawsze.")}<span class="q-by"><span class="q-dash">&mdash;</span> ${L("the narrator","narratorka")}</span></p>
        <p class="p-desc">${L("The next block on the page.","Następny blok na stronie.")}</p>
      </div>
    </div>
    <table class="tok-table">
    <colgroup><col class="c-token"><col class="c-source"><col></colgroup>
    <thead><tr><th>${L("Distance","Odległość")}</th><th>${L("Role","Rola")}</th><th>Token</th></tr></thead>
    <tbody>
      <tr><td>${L("Quote to its attribution","Cytat do jego podpisu")}</td><td>${L("Gap","Odstęp")}</td>
          <td class="spec" data-measure=".ds-eg .q-by|marginTop"></td></tr>
      <tr><td>${L("Left rule to the text","Kreska po lewej do tekstu")}</td><td>${L("Padding","Wypełnienie")}</td>
          <td class="spec" data-measure=".ds-eg .p-quote|paddingLeft"></td></tr>
      <tr><td>${L("Quote block to the next block","Blok cytatu do następnego bloku")}</td><td>${L("Gap","Odstęp")}</td>
          <td class="spec" data-measure=".ds-eg .p-quote|marginBottom"></td></tr>
    </tbody></table>
    <h3>${L("Outside the scale","Poza skalą")}</h3>
    <p>${L("Two kinds of spacing are deliberately left off the scale.","Dwa rodzaje odstępu celowo zostają poza skalą.")}</p>
    <table><colgroup><col style="width:190px"><col></colgroup><tbody>
      <tr><td>${L("Hairlines","Kreski włosowe")}</td>
          <td>${L(
            `Optical correction below the grid's resolution: a label offset from its own 1px underline, a 1.5px rule positioned inside a 10px icon, a glyph pulled onto its baseline. They measure 1 or 2px &ndash; the smallest step, ${dsTok("--nu-space-nano")}, is several times too coarse. No other spacing in the shop carries a literal value; dimensions the scale does not cover &ndash; icon containers, the avatar, the width of a drawer &ndash; keep numbers of their own.`,
            `Korekta optyczna poniżej rozdzielczości siatki: etykieta odsunięta od własnego podkreślenia 1px, kreska 1.5px pozycjonowana wewnątrz ikony 10px, znak ściągnięty na linię pisma. Mają 1 albo 2px &ndash; najmniejszy stopień, ${dsTok("--nu-space-nano")}, jest kilkakrotnie zbyt gruby. Żaden inny odstęp w sklepie nie nosi wartości dosłownej; wymiary, których skala nie obejmuje &ndash; kontenery ikon, awatar, szerokość szuflady &ndash; trzymają własne liczby.`)}</td></tr>
      <tr><td>${L("Proportional space","Odstęp proporcjonalny")}</td>
          <td>${L(
            "Distances that must scale with their context instead of holding an absolute value. The wordmark's dot is offset in em, so it tracks the logo's type size; a drawn cover is padded in %, so the jacket keeps its proportions at grid size and at packshot size. A fixed step would break the dependency.",
            "Odległości, które muszą skalować się z kontekstem zamiast trzymać wartość bezwzględną. Kropka znaku marki odsunięta jest w em, więc podąża za stopniem pisma logo; rysowana okładka ma wypełnienie w %, więc zachowuje proporcje w rozmiarze siatki i packshotu. Sztywny stopień zerwałby tę zależność.")}</td></tr>
    </tbody></table>` },

  { group:{en:"Foundations",pl:"Fundamenty"}, id:"icons", label:{en:"Iconography",pl:"Ikonografia"}, body: ()=>`
    <h1>${L("Iconography","Ikonografia")}</h1>
    <p class="ds-lede">${L(
      "Icons are visual representations of commands, features, places and common actions.",
      "Ikony to wizualne reprezentacje poleceń, funkcji, miejsc i typowych działań.")}</p>

    <h3>${L("Parameters","Parametry")}</h3>
    <p>${L(
      `An icon comes in two sizes, ${dsTok("--nu-icon-lg")} and ${dsTok("--nu-icon-sm")}. The drawing sits inside the safe area, stroke width included, so icons of different shapes line up beside one another.`,
      `Ikona ma dwa rozmiary: ${dsTok("--nu-icon-lg")} i ${dsTok("--nu-icon-sm")}. Rysunek mieści się w polu bezpiecznym, razem z grubością obrysu, dzięki czemu ikony o różnych kształtach stoją w jednym szeregu.`)}</p>
    <table class="tok-table"><colgroup><col class="c-token"><col><col><col></colgroup>
    <thead><tr><th>${L("Container","Kontener")}</th><th>${L("Safe area","Pole bezpieczne")}</th><th>${L("Margin","Margines")}</th><th>${L("Stroke","Obrys")}</th></tr></thead>
    <tbody>${dsIconRows()}</tbody></table>
    <p>${L(
      "Icons are linear: an outline, no fill. Colour is inherited through <code>currentColor</code>, so an icon takes the colour of the control it sits in, including that control's states. On its own it takes <code>--nu-fg-primary</code>.",
      "Ikony są liniowe: kontur bez wypełnienia. Kolor dziedziczą przez <code>currentColor</code>, więc ikona przyjmuje barwę kontrolki, w której stoi, razem z jej stanami. Samodzielnie stojąca ikona ma <code>--nu-fg-primary</code>.")}</p>
    <p>${L(
      `An icon drawn at the larger size moves to the smaller one by scaling the drawing down to ${dsIconRatio()} of its size, which turns one safe area into the other. The stroke is set separately, so it keeps a visible weight rather than thinning with the drawing.`,
      `Ikonę narysowaną w większym rozmiarze przenosi się na mniejszy przez pomniejszenie rysunku do ${dsIconRatio()} jego wielkości &ndash; jedno pole bezpieczne przechodzi wtedy w drugie. Obrys ustawiany jest osobno, żeby zachował widoczną grubość, zamiast cienieć razem z rysunkiem.`)}</p>

    <h3>${L("An icon beside a word","Ikona przy słowie")}</h3>
    <p>${L(
      `A control that pairs an icon with a word carries <code>.has-icon</code>, whichever component it is: a link or a tertiary button. The icon and the word stand in a row with ${dsTok("--nu-space-micro")} between them, centred on each other.`,
      `Kontrolka, która łączy ikonę ze słowem, nosi klasę <code>.has-icon</code>, niezależnie od tego, jakim jest komponentem: link albo przycisk trzeciorzędny. Ikona i słowo stoją w rzędzie z odstępem ${dsTok("--nu-space-micro")}, wyśrodkowane względem siebie.`)}</p>
    <p>${L(
      `Centring lines up the two boxes, and a word's box is taller than the word: the leading and the space for descenders sit under the letters, so the middle of the box falls below the middle of the word. The icon is lifted back onto it by ${dsTok("--nu-icon-lift")}. That value is judged by eye rather than derived, which is what an optical correction is, and it is in <code>px</code> because it corrects one mark against another rather than a length against the text.`,
      `Wyśrodkowanie zestawia dwa pudełka, a pudełko słowa jest wyższe niż samo słowo: interlinia i miejsce na ogonki leżą pod literami, więc środek pudełka wypada poniżej środka słowa. Ikonę podnosi z powrotem na jego wysokość ${dsTok("--nu-icon-lift")}. Ta wartość jest dobrana okiem, a nie wyliczona &ndash; tym właśnie jest korekta optyczna &ndash; i zapisana w <code>px</code>, bo poprawia jeden ślad względem drugiego, a nie długość względem tekstu.`)}</p>

    <h3>${L("An icon inside a field","Ikona wewnątrz pola")}</h3>
    <p>${L(
      `The second arrangement, and a different one: the glyph stands inside the field rather than beside a word. It is positioned against the field, takes no pointer events and carries no name, because it says what the field is for rather than doing anything. The field leaves it room with padding on that side, so the value never runs under it. Two components read this way &ndash; the chevron in the select, at the right, and the magnifier in search, at the left.`,
      `Drugi układ i inny co do zasady: znak stoi wewnątrz pola, a nie obok słowa. Pozycjonowany jest względem pola, nie przyjmuje kliknięć i nie ma nazwy, bo mówi, do czego pole służy, a nie robi czegokolwiek. Pole zostawia mu miejsce wypełnieniem od tej strony, żeby wartość nigdy pod niego nie wchodziła. Tak zbudowane są dwa komponenty &ndash; chevron w selekcie, po prawej, i lupa w wyszukiwarce, po lewej.`)}</p>

    <h3>${L("The set","Zestaw")}</h3>
    <table><thead><tr><th>${L("Icon","Ikona")}</th><th>${L("Name","Nazwa")}</th></tr></thead><tbody>
      <tr><td class="ico-cell"><svg class="ico-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.69L4.45 12.14C2.75 10.44 2.75 7.71 4.45 6.01c1.7-1.7 4.34-1.7 6.04 0L12 7.52 13.51 6.01c1.7-1.7 4.34-1.7 6.04 0 1.7 1.7 1.7 4.44 0 6.13z"/></svg></td>
        <td>${L("Heart","Serce")}</td><td>${L("The favourites list. Header.","Lista ulubionych. Nagłówek.")}</td></tr>
      <tr><td class="ico-cell"><svg class="ico-lg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="3.5"/><path d="M5 20v-1.2C5 15.9 8.1 14 12 14s7 1.9 7 4.8V20"/></svg></td>
        <td>${L("Figure","Sylwetka")}</td><td>${L("The account. Header.","Konto. Nagłówek.")}</td></tr>
      <tr><td class="ico-cell"><svg class="ico-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.18 6.64h13.64l1.94 14.61H3.24z"/><path d="M8.59 8.59V6.16a3.41 3.41 0 0 1 6.82 0v2.43"/></svg></td>
        <td>${L("Bag","Torba")}</td><td>${L("The cart; carries the item counter. Header, last position.","Koszyk; nosi licznik pozycji. Nagłówek, ostatnia pozycja.")}</td></tr>
      <tr><td class="ico-cell">${ICON_BACK}</td>
        <td>${L("Back arrow","Strzałka wstecz")}</td><td>${L("Return to where the reader came from. Leads a link that names its destination, and a tertiary button that steps back through history.","Powrót tam, skąd czytelniczka przyszła. Prowadzi link wskazujący swój cel oraz przycisk trzeciorzędny cofający przez historię.")}</td></tr>
      <tr><td class="ico-cell"><svg class="ico-sm" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.05 5.55h8.4v8.4h-8.4z"/><path d="M5.55 5.55V2.05h8.4v8.4h-3.5"/></svg></td>
        <td>${L("Sheets","Kartki")}</td><td>${L("Copy to the clipboard. The promotion bar, after the code.","Skopiuj do schowka. Belka promocyjna, za kodem.")}</td></tr>
      <tr><td class="ico-cell"><svg class="ico-sm ico-search" viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.6"/><path d="M13.9 13.9l-3.1-3.1"/></svg></td>
        <td>${L("Magnifier","Lupa")}</td><td>${L("Search. Inside the field in the bar over the grid, at its left edge.","Wyszukiwanie. Wewnątrz pola w belce nad siatką, przy jego lewej krawędzi.")}</td></tr>
      <tr><td class="ico-cell"><svg class="ico-sm" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 5h12"/><path d="M2 11h12"/></svg></td>
        <td>${L("Filter","Filtry")}</td><td>${L("Opens and closes the filter panel. The lower bar runs full width while the panel is closed and shortens once it opens.","Otwiera i zamyka panel filtrów. Dolna kreska ma pełną szerokość przy zamkniętym panelu i skraca się po jego otwarciu.")}</td></tr>
      <tr><td class="ico-cell"><svg class="ico-sm" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8h9"/><path d="M8 3.5v9"/></svg></td>
        <td>${L("Plus","Plus")}</td><td>${L("Adds one: opens the sort menu, where it turns 45&deg; into the cross while the menu is open, and raises the quantity in the stepper.","Dokłada jeden: otwiera menu sortowania, gdzie przy otwartym menu obraca się o 45&deg; w krzyżyk, i zwiększa ilość w stepperze.")}</td></tr>
      <tr><td class="ico-cell"><svg class="ico-sm" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8h9"/></svg></td>
        <td>${L("Minus","Minus")}</td><td>${L("Takes one away in the stepper. Disabled at one, where there is nothing left to take.","Odejmuje jeden w stepperze. Wyłączony przy jednej sztuce, gdy nie ma już czego odejmować.")}</td></tr>
      <tr><td class="ico-cell"><svg class="ico-sm ico-close" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8h9"/><path d="M8 3.5v9"/></svg></td>
        <td>${L("Cross","Krzyżyk")}</td><td>${L("Closes a drawer or the filter sheet, and empties the search field. The same drawing as the plus, turned.","Zamyka szufladę i arkusz filtrów, czyści pole wyszukiwania. Ten sam rysunek co plus, obrócony.")}</td></tr>
      <tr><td class="ico-cell"><svg class="ico-sm" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 6.25 8 10.75 12.5 6.25"/></svg></td>
        <td>${L("Chevron","Chevron")}</td><td>${L("Marks a select as a list to open. Sits inside the field, on its right. It does not turn when the list opens, because a native select gives the page no signal that it did &ndash; unlike the plus, which sits on a control that knows.","Oznacza pole wyboru jako listę do rozwinięcia. Stoi wewnątrz pola, po jego prawej. Nie obraca się przy rozwinięciu listy, bo natywny select nie daje stronie znać, że to nastąpiło &ndash; inaczej niż plus, który siedzi na kontrolce, która wie.")}</td></tr>
      <tr><td class="ico-cell"><svg class="ico-sm" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.75 8.35l3.5 3.5 7-8.05"/></svg></td>
        <td>${L("Check","Ptaszek")}</td><td>${L("Something just succeeded. Leads the primary button through the &ldquo;Added&rdquo; sequence; in the promotion bar it replaces the sheets for 1.8s.","Coś się właśnie udało. Prowadzi przycisk główny w sekwencji „Dodano”; w belce promocyjnej zastępuje kartki na 1,8s.")}</td></tr>
    </tbody></table>
    <p class="note">${L(
      "The icon is marked <code>aria-hidden</code> and the name is carried by the control: its visible text, or an <code>aria-label</code> where the control shows the icon alone. Every icon in the shop is on this list and follows the rules above.",
      "Ikona jest oznaczona <code>aria-hidden</code>, a nazwę ma kontrolka: jej widoczny tekst albo <code>aria-label</code>, gdy kontrolka pokazuje samą ikonę. Każda ikona w sklepie jest na tej liście i trzyma się powyższych reguł.")}</p>` },

  { group:{en:"Components",pl:"Komponenty"}, id:"badge", label:{en:"Badge",pl:"Odznaka"}, body: ()=>`
    <h1>${L("Badge","Odznaka")}</h1>
    <p class="ds-lede">${L(
      "A badge states one fact about a title &ndash; its availability or a distinction it holds. It is positioned against the packshot, and a book carries at most one, because status is a single field in the catalogue.",
      "Odznaka podaje jeden fakt o tytule &ndash; jego dostępność albo wyróżnienie, które nosi. Pozycjonowana jest względem packshotu, a książka nosi najwyżej jedną, bo status jest w katalogu pojedynczym polem.")}</p>
    <div class="ds-specimens ds-badges">
      <figure><div class="tile"><span class="badge">${L("New","Nowość")}</span></div>
        <figcaption>${L("Default","Domyślna")}</figcaption></figure>
      <figure><div class="tile"><span class="badge soon">${L("Coming soon","Wkrótce")}</span></div>
        <figcaption><code>.soon</code></figcaption></figure>
      <figure><div class="tile"><span class="badge last">${L("Last copies","Ostatnie sztuki")}</span></div>
        <figcaption><code>.last</code></figcaption></figure>
      <figure><div class="tile"><span class="badge out">${L("Unavailable","Niedostępna")}</span></div>
        <figcaption><code>.out</code></figcaption></figure>
      <figure><div class="tile"><span class="badge award">${L("Pulitzer Prize","Nagroda Pulitzera")}</span></div>
        <figcaption><code>.award</code></figcaption></figure>
    </div>
    <table id="badgeVariants"><thead><tr><th>${L("Variant","Wariant")}</th><th>${L("Meaning","Znaczenie")}</th><th ${DS_COL_TOK}>${L("Tokens","Tokeny")}</th></tr></thead><tbody>
      <tr><td>${L("Default","Domyślna")}</td><td>${L("Recently added to the catalogue","Niedawno dodana do katalogu")}</td>
        <td><code>--nu-bg-primary</code>, <code>--nu-border-primary</code>, <code>--nu-fg-primary</code></td></tr>
      <tr><td><code>.soon</code></td><td>${L("Announced, not yet shipping","Zapowiedziana, jeszcze nie wysyłana")}</td>
        <td><code>--nu-bg-inverse</code>, <code>--nu-fg-inverse</code></td></tr>
      <tr><td><code>.last</code></td><td>${L("Print run nearing its end","Nakład na wyczerpaniu")}</td>
        <td><code>--nu-border-warning</code>, <code>--nu-fg-warning</code></td></tr>
      <tr><td><code>.out</code></td><td>${L("Not available for purchase","Niedostępna do kupienia")}</td>
        <td><code>--nu-border-muted</code>, <code>--nu-fg-secondary</code>, ${L("transparent ground","tło przezroczyste")}</td></tr>
      <tr><td><code>.award</code></td><td>${L("Literary prize held by the title","Nagroda literacka, którą nosi tytuł")}</td>
        <td><code>--nu-bg-highlight</code>, <code>--nu-border-highlight</code>, <code>--nu-fg-highlight</code></td></tr>
    </tbody></table>
    <h3>${L("Specification","Specyfikacja")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Type","Typografia")}</td><td>${L(
        `Label, ${dsTok("--nu-text-size-sm")}, uppercase, tracking ${dsTok("--nu-tracking-caps")}, line-height 1`,
        `Label, ${dsTok("--nu-text-size-sm")}, wersaliki, światło ${dsTok("--nu-tracking-caps")}, interlinia 1`)}</td></tr>
      <tr><td>${L("Padding","Wypełnienie")}</td><td>${L(
        `${dsTok("--nu-space-nano")} vertical, ${dsTok("--nu-space-micro")} horizontal.`,
        `${dsTok("--nu-space-nano")} w pionie, ${dsTok("--nu-space-micro")} w poziomie.`)}</td></tr>
      <tr><td>${L("Border","Obramowanie")}</td><td>${L("1px solid, square corners","1px, narożniki ostre")}</td></tr>
      <tr><td>${L("Position","Pozycja")}</td><td>${L(
        `Absolute, ${dsTok("--nu-space-milli")} from the tile edges, ${dsTok("--nu-space-small")} on the product packshot &ndash; the larger box holds the badge further in.`,
        `Absolutna, ${dsTok("--nu-space-milli")} od krawędzi kafla, ${dsTok("--nu-space-small")} na packshocie produktu &ndash; większy kontener trzyma odznakę dalej od brzegu.`)}</td></tr>
    </tbody></table>
    <p class="note">${L(
      "The <code>.out</code> variant is the only one that drops its ground to transparent, so an unavailable title is marked without masking its cover. Its border takes <code>--nu-border-muted</code>, one step lighter than the text it encloses: a solid 1px rule reads heavier than antialiased 11px type, so matching the two exactly would look mismatched.",
      "Wariant <code>.out</code> jako jedyny rezygnuje z tła na rzecz przezroczystości, więc tytuł niedostępny jest oznaczony, ale nie zasłania własnej okładki. Jego obramowanie bierze <code>--nu-border-muted</code>, o stopień jaśniejszy niż tekst, który otacza: lita linia 1px czyta się ciężej niż wygładzany tekst 11px, więc dokładne zrównanie obu wyglądałoby na niedopasowane.")}</p>

    <h3>${L("Live preview","Podgląd na żywo")}</h3>
    <p>${L(
      "The options below are read from the variants table on this page, the rendering from the stylesheet the shop runs on, and the snippet from the element actually standing in the frame.",
      "Opcje poniżej pochodzą z tabeli wariantów na tej stronie, wygląd z arkusza, na którym działa sklep, a fragment kodu z elementu faktycznie stojącego w ramce.")}</p>
    <div class="ds-play" data-src="#badgeVariants" data-demo=".ds-badges" data-tag="span" data-base="badge" data-wrap="tile ds-crop">
      <div class="ds-play-row"><span class="ds-play-lbl">${L("Variant","Wariant")}</span><div class="chip-row ds-play-opts"></div></div>
      <div class="demo on-page ds-play-stage"></div>
      <div class="ds-play-code"></div>
    </div>` },

  { group:{en:"Components",pl:"Komponenty"}, id:"button", label:{en:"Button",pl:"Przycisk"}, body: ()=>`
    <h1>${L("Button","Przycisk")}</h1>
    <p class="ds-lede">${L(
      "A button initiates an action: something happens in place, on the page the reader is already on &ndash; a title enters the cart, an order is placed, a panel opens. The four tiers differ in how much weight that action carries. When the point is to move the reader elsewhere &ndash; another page of the shop, or an external address &ndash; the element is a link, whatever it looks like.",
      "Przycisk inicjuje akcję: coś dzieje się na miejscu, na stronie, na której czytelniczka już jest &ndash; tytuł trafia do koszyka, zamówienie zostaje złożone, otwiera się panel. Cztery stopnie różnią się wagą tej akcji. Kiedy celem jest przeniesienie czytelniczki gdzie indziej &ndash; na inną stronę sklepu albo pod adres zewnętrzny &ndash; elementem jest link, niezależnie od tego, jak wygląda.")}</p>
    <div class="ds-specimens ds-buttons">
      <figure><div class="demo on-page"><span class="btn-primary">${L("Add to cart","Dodaj do koszyka")}</span></div>
        <figcaption>${L("Primary","Główny")}</figcaption></figure>
      <figure><div class="demo on-page"><span class="btn-secondary">${L("Apply","Zastosuj")}</span></div>
        <figcaption>${L("Secondary","Drugorzędny")}</figcaption></figure>
      <figure><div class="demo on-page">
          <span class="filter-toggle btn-tertiary has-icon"><svg class="ico-sm ico-filter" viewBox="0 0 16 16" aria-hidden="true"><path class="bar-top" d="M2 5h12"/><path class="bar-bot" d="M2 11h12"/></svg>${L("Filter","Filtry")}</span>
          <span class="sort-btn btn-tertiary has-icon">${L("Sort by:","Sortuj:")} <svg class="ico-sm ico-plus" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8h9"/><path d="M8 3.5v9"/></svg></span>
          <span class="btn-tertiary"><svg class="ico-sm ico-close" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8h9"/><path d="M8 3.5v9"/></svg></span>
        </div>
        <figcaption>${L("Tertiary","Trzeciorzędny")}</figcaption></figure>
      <figure><div class="demo on-page"><span class="btn-ghost"><span class="lbl">Margaret Atwood</span></span></div>
        <figcaption>Ghost</figcaption></figure>
    </div>
    <table id="btnTypes"><thead><tr><th>${L("Type","Typ")}</th><th ${DS_COL_TOK}>${L("Tokens","Tokeny")}</th></tr></thead><tbody>
      <tr><td>${L("Primary","Główny")}<br><code>.btn-primary</code></td><td>${L("The committing action &ndash; the most consequential thing a view offers, and the only one of its kind on that view. Add to cart, go to checkout, place order. Beside the tier class sit <code>.p-cta</code>, <code>.cart-cta</code> and <code>.order-btn</code>, holding only what the place requires &ndash; width, margin, the add-to-cart sequence","Akcja wiążąca &ndash; najważniejsza rzecz, jaką widok oferuje, i jedyna tego rodzaju w tym widoku. Dodaj do koszyka, przejdź do kasy, zamów. Obok klasy stopnia stoją <code>.p-cta</code>, <code>.cart-cta</code> i <code>.order-btn</code>, trzymające wyłącznie to, czego wymaga miejsce &ndash; szerokość, margines, sekwencję dodawania do koszyka")}</td>
        <td><code>--nu-bg-action</code> ${L("body","korpus")}, <code>--nu-bg-action-glow</code> ${L("edges","krawędzie")}, <code>--nu-bg-action-glow-deep</code> ${L("aura","aura")}, <code>--nu-bg-primary</code> ${L("upper edge","górna krawędź")}, <code>--nu-bg-inverse</code> ${L("contact shadow","cień styku")}, <code>--nu-fg-inverse</code> ${L("label","napis")}</td></tr>
      <tr><td>${L("Secondary","Drugorzędny")}<br><code>.btn-secondary</code></td><td>${L("A supporting action, standing beside a primary or a field without competing with it. Applying a discount code. The same glass construction without colour &ndash; a grey body a step darker than the page, outlined in <code>--nu-bg-tertiary</code>. There is no burgundy aura; a shallow grey shadow stays underneath. Hover works as it does on the primary &ndash; the light around the button grows and the body stays put","Akcja wspierająca, stojąca obok głównej albo obok pola, nie konkurując z nimi. Zastosowanie kodu rabatowego. Ta sama konstrukcja szkła, bez koloru &ndash; szary korpus o stopień ciemniejszy niż tło, obrysowany <code>--nu-bg-tertiary</code>. Nie ma burgundowej aury; pod spodem zostaje płytki szary cień. Najechanie działa tak jak w głównym &ndash; światło wokół przycisku rośnie, a korpus zostaje na miejscu")}</td>
        <td><code>--nu-bg-action-secondary</code> ${L("body","korpus")}, <code>--nu-bg-primary</code> ${L("upper edge","górna krawędź")}, <code>--nu-bg-tertiary</code> ${L("outline","obrys")}, <code>--nu-bg-inverse</code> ${L("contact shadow","cień styku")}, <code>--nu-fg-primary</code> ${L("label","napis")}</td></tr>
      <tr><td>${L("Tertiary","Trzeciorzędny")}<br><code>.btn-tertiary</code></td><td>${L("A control over what the reader can see rather than over the content itself &ndash; the least weight of the three, carried by an icon and a short label. The filter panel, the sort menu, closing either drawer, stepping back from the product view and from the cart, and copying the code from the promotion bar &ndash; the one place a control stands on an inverse ground and swaps both of its colours for their opposites &ndash; and the three header icons &ndash; favourites, account, cart &ndash; where it appears as an icon alone. Stepping back is a button rather than a link because it has no destination: it returns the reader one step through their own history, and where that leads depends on how they arrived. It reveals and hides through <code>aria-expanded</code>","Kontrolka nad tym, co czytelniczka widzi, a nie nad samą treścią &ndash; najmniejsza waga z trzech, niesiona ikoną i krótkim podpisem. Panel filtrów, menu sortowania, zamykanie obu szuflad, cofnięcie z widoku produktu i z koszyka skopiowanie kodu z belki promocyjnej &ndash; jedyne miejsce, gdzie kontrolka stoi na ciemnym tle i zamienia oba swoje kolory na odwrotne &ndash; oraz trzy ikony nagłówka &ndash; ulubione, konto, koszyk &ndash; gdzie występuje jako sama ikona. Cofnięcie jest przyciskiem, a nie linkiem, bo nie ma celu: odsyła czytelniczkę o krok wstecz w jej własnej historii, a dokąd on prowadzi, zależy od tego, którędy przyszła. Odsłania i chowa przez <code>aria-expanded</code>")}</td>
        <td><code>--nu-fg-primary</code>; ${L("on hover","przy najechaniu")} <code>--nu-fg-secondary</code></td></tr>
      <tr><td>Ghost<br><code>.btn-ghost</code></td><td>${L("An action woven into the text it belongs to, with no visual weight of its own beyond an underline. Opening the author drawer, removing a line from the cart, removing an applied discount code, clearing the filters when nothing is left","Akcja wpleciona w tekst, do którego należy, bez własnej wagi wizualnej poza podkreśleniem. Otwarcie szuflady autorki, usunięcie pozycji z koszyka, usunięcie zastosowanego kodu rabatowego, wyczyszczenie filtrów, gdy nic nie zostaje")}</td>
        <td><code>--nu-fg-secondary</code>, <code>--nu-border-neutral</code> ${L("underline","podkreślenie")}; ${L("on hover","przy najechaniu")} <code>--nu-fg-primary</code>, <code>--nu-border-primary</code></td></tr>
    </tbody></table>
    <h3>${L("Specification","Specyfikacja")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Padding","Wypełnienie")}</td><td>${L(
        `Primary: ${dsTok("--nu-space-milli")} vertical, ${dsTok("--nu-space-xlarge")} horizontal. Secondary: the same vertical and ${dsTok("--nu-space-small")} horizontal.`,
        `Główny: ${dsTok("--nu-space-milli")} w pionie, ${dsTok("--nu-space-xlarge")} w poziomie. Drugorzędny: ten sam pion i poziom ${dsTok("--nu-space-small")}.`)}</td></tr>
      <tr><td>${L("Icon and label","Ikona i podpis")}</td><td>${L(
        "Four arrangements, all valid: a leading icon with a label, a label with a trailing icon, a label alone, an icon alone. The filter toggle leads with its icon, the sort button trails with one, and both keep the same gap between the two. The marks are 16&times;16 icons, except the four in the header, which stand at 24&times;24. Where the button shows an icon and no words, the name it would have said goes into an <code>aria-label</code> on the button.",
        "Cztery układy, wszystkie dopuszczalne: ikona z przodu i podpis, podpis i ikona z tyłu, sam podpis, sama ikona. Przełącznik filtrów prowadzi ikoną, przycisk sortowania zamyka nią, a oba trzymają ten sam odstęp między jednym a drugim. Znaki to ikony 16&times;16, poza czterema w nagłówku, które stoją w 24&times;24. Tam, gdzie przycisk pokazuje ikonę bez słów, nazwa, którą by wypowiedział, trafia do <code>aria-label</code> na przycisku.")}</td></tr>
      <tr><td>${L("Border","Obramowanie")}</td><td>${L(
        "Primary and secondary: 1px, square corners, the top edge lighter than the rest &ndash; that is what reads as light catching the upper edge of a pane of glass. The primary draws its outline in <code>--nu-bg-primary</code>, the secondary in <code>--nu-bg-tertiary</code>. Tertiary and ghost carry no border.",
        "Główny i drugorzędny: 1px, narożniki ostre, górna krawędź jaśniejsza od pozostałych &ndash; to ona czyta się jako światło na krawędzi tafli. Główny rysuje obrys w <code>--nu-bg-primary</code>, drugorzędny w <code>--nu-bg-tertiary</code>. Trzeciorzędny i ghost obramowania nie mają.")}</td></tr>
      <tr><td>${L("Type","Typografia")}</td><td>${L(
        `Body M inherited from the page. Primary and secondary take ${dsTok("--nu-tracking-compact")}, their label being a short string closed inside a container; tertiary and ghost stay at the zero tracking of the text they stand in.`,
        `Body M dziedziczone ze strony. Główny i drugorzędny biorą światło ${dsTok("--nu-tracking-compact")}, bo ich napis jest krótkim ciągiem zamkniętym w kontenerze; trzeciorzędny i ghost zostają przy zerowym świetle tekstu, w którym stoją.`)}</td></tr>
    </tbody></table>
    <h3>${L("States","Stany")}</h3>
    <table class="tok-table">
    <colgroup><col class="c-token"><col><col><col></colgroup>
    <thead><tr><th>${L("State","Stan")}</th><th>${L("Primary","Główny")}</th><th>${L("Secondary","Drugorzędny")}</th><th>${L("Tertiary and ghost","Trzeciorzędny i ghost")}</th></tr></thead><tbody>
      <tr><td>${L("Resting","Spoczynek")}</td>
        <td>${L("Dark translucent glass, burgundy along both horizontal edges, aura beneath","Ciemne szkło, burgund przy obu poziomych krawędziach, aura pod spodem")}</td>
        <td>${L("The same glass without colour, no aura","To samo szkło bez koloru, bez aury")}</td>
        <td>${L("Text alone, ghost with a standing underline","Sam tekst, ghost ze stałym podkreśleniem")}</td></tr>
      <tr><td>Hover<br><code>:hover</code></td>
        <td>${L("The burgundy strengthens and the aura grows; the hue never changes","Burgund się wzmacnia, aura rośnie; barwa nigdy się nie zmienia")}</td>
        <td>${L("The same move without colour: the body holds, the highlight lifts and the drop shadow lengthens","Ten sam ruch bez koloru: korpus się nie zmienia, odblask się podnosi, a cień rzucany się wydłuża")}</td>
        <td>${L(`Tertiary lightens to <code>--nu-fg-secondary</code>; ghost darkens to <code>--nu-fg-primary</code> and its underline follows. Both fade over ${dsTok("--nu-motion-quick")}, the step the two solid types answer over`,`Trzeciorzędny jaśnieje do <code>--nu-fg-secondary</code>; ghost ciemnieje do <code>--nu-fg-primary</code>, a podkreślenie idzie za nim. Oba przechodzą w ${dsTok("--nu-motion-quick")}, tym samym stopniu, w którym odpowiadają dwa pełne typy`)}</td></tr>
      <tr><td>${L("Press","Wciśnięcie")}<br><code>:active</code></td>
        <td>${L("1px down and scaled to 98.5% while the aura tightens","1px w dół i skala 98,5%, a aura się zacieśnia")}</td>
        <td>${L("The same movement in its grey register","Ten sam ruch w szarym rejestrze")}</td>
        <td>${L("Not defined","Nie zdefiniowane")}</td></tr>
      <tr><td>${L("Disabled","Wyłączony")}<br><code>:disabled</code></td>
        <td>${L("Flat and matte: a <code>--nu-bg-secondary</code> fill, no glass, no border, no shadow. Glass is reserved for an action that works. One treatment for the whole tier, including the order button while it submits","Płaski i matowy: wypełnienie <code>--nu-bg-secondary</code>, bez szkła, obramowania i cienia. Szkło zarezerwowane jest dla działającej akcji. Jedno potraktowanie dla całego stopnia, łącznie z przyciskiem zamówienia w trakcie wysyłki")}</td>
        <td>${L("Not defined &ndash; the discount button is the only instance and is never disabled","Nie zdefiniowane &ndash; przycisk rabatu jest jedynym wystąpieniem i nigdy nie bywa wyłączony")}</td>
        <td>${L("Not defined","Nie zdefiniowane")}</td></tr>
      <tr><td>${L("Expanded / collapsed","Rozwinięty / zwinięty")}<br><code>[aria-expanded]</code></td>
        <td>${L("Not defined","Nie dotyczy")}</td>
        <td>${L("Not defined","Nie dotyczy")}</td>
        <td>${L("The two tertiary buttons that open something &ndash; Filter and Sort. They do not finish their work on the click: they leave a region of the page open, so they have to say which of the two positions they are in","Dotyczy dwóch trzeciorzędnych przycisków, które coś otwierają &ndash; Filtry i Sortuj. Nie kończą działania na kliknięciu: zostawiają otwarty fragment strony, więc muszą powiedzieć, w której z dwóch pozycji są")}</td></tr>
      <tr><td>${L("Focus","Fokus")}<br><code>:focus-visible</code></td>
        <td colspan="3">${L(
          `${dsTok("--nu-focus-ring")} in <code>--nu-border-primary</code> at ${dsTok("--nu-focus-offset")}, the same on every type. Never removed`,
          `${dsTok("--nu-focus-ring")} w kolorze <code>--nu-border-primary</code> z odsunięciem ${dsTok("--nu-focus-offset")}, tak samo na każdym typie. Nigdy nieusuwane`)}</td></tr>
    </tbody></table>
    <h3>${L("Adding to cart","Dodawanie do koszyka")}</h3>
    <p>${L(
      "One extra state, and it belongs to the primary button alone. While the &ldquo;Added&rdquo; sequence runs, the glass stays fully active and only the outer aura lifts (<code>.is-adding</code>); the button stops accepting clicks through <code>pointer-events</code> rather than through the disabled treatment.",
      "Jeden dodatkowy stan i należy wyłącznie do przycisku głównego. Podczas sekwencji „Dodano” szkło pozostaje w pełni aktywne, znika jedynie zewnętrzna aura (<code>.is-adding</code>); przycisk przestaje przyjmować kliknięcia przez <code>pointer-events</code>, a nie przez wygląd nieaktywny.")}</p>
    <p class="note">${L(
      `Timings: the press and the shadow run over ${dsTok("--nu-motion-quick")}, the ground over ${dsTok("--nu-motion-base")}.`,
      `Czasy: wciśnięcie i cień idą w ${dsTok("--nu-motion-quick")}, tło w ${dsTok("--nu-motion-base")}.`)}</p>

    <h3>${L("Live preview","Podgląd na żywo")}</h3>
    <p>${L(
      "The options below are read from the types table on this page, the rendering from the stylesheet the shop runs on, and the snippet from the element actually standing in the frame.",
      "Opcje poniżej pochodzą z tabeli typów na tej stronie, wygląd z arkusza, na którym działa sklep, a fragment kodu z elementu faktycznie stojącego w ramce.")}</p>
    <div class="ds-play" data-src="#btnTypes" data-demo=".ds-buttons" data-tag="button" data-base="" data-wrap="">
      <div class="ds-play-row"><span class="ds-play-lbl">${L("Type","Typ")}</span><div class="chip-row ds-play-opts"></div></div>
      <div class="demo on-page ds-play-stage"></div>
      <div class="ds-play-code"></div>
    </div>
` },

  { group:{en:"Components",pl:"Komponenty"}, id:"chip", label:{en:"Chip",pl:"Chip"}, body: ()=>`
    <h1>Chip</h1>
    <p class="ds-lede">${L(
      "A chip toggles one facet of a set: a genre, a tag or an edition language in the filter column, and the language and currency pairs in the header. One class, <code>.chip</code>, covers all of them. Its selected state is a 1px underline rather than a fill, so a row of chips reads as a line of text instead of a row of controls.",
      "Chip przełącza jedno kryterium zbioru: gatunek, tag albo język wydania w kolumnie filtrów oraz parę języka i parę waluty w nagłówku. Wszystkie te miejsca obsługuje jedna klasa, <code>.chip</code>. Zaznaczenie to podkreślenie 1px, nie wypełnienie, więc rząd chipów czyta się jak wiersz tekstu, a nie jak rząd kontrolek.")}</p>
    <div class="demo on-page ds-chips">
      <button class="chip" type="button" aria-pressed="true"><span class="chip-t">${L("Classic","Klasyka")}</span><sup>6</sup></button>
      <button class="chip" type="button" aria-pressed="false"><span class="chip-t">Queer</span><sup>4</sup></button>
      <button class="chip" type="button" disabled><span class="chip-t">${L("Coming soon","Wkrótce")}</span><sup>0</sup></button>
    </div>
    <table id="chipStates"><thead><tr><th>${L("State","Stan")}</th><th>${L("Meaning","Znaczenie")}</th><th ${DS_COL_TOK}>${L("Tokens","Tokeny")}</th></tr></thead><tbody>
      <tr><td>${L("Default","Domyślny")}<br><code>[aria-pressed="false"]</code></td><td>${L("The facet is available and not selected; the underline is present but transparent, so selecting one shifts nothing","Kryterium dostępne i niezaznaczone; podkreślenie istnieje, ale jest przezroczyste, więc zaznaczenie niczego nie przesuwa")}</td>
        <td><code>--nu-fg-primary</code></td></tr>
      <tr><td>${L("Selected","Zaznaczony")}<br><code>[aria-pressed="true"]</code></td><td>${L("The state lives in the attribute, not in a class, so assistive technology reads it without help","Stan zapisany jest w atrybucie, nie w klasie, więc technologie wspomagające odczytują go bez dodatkowej pomocy")}</td>
        <td><code>--nu-border-primary</code> ${L("underline","podkreślenie")}</td></tr>
      <tr><td>Hover<br><code>:hover</code></td><td>${L(`The underline appears in a lighter tone, one step short of selection, over ${dsTok("--nu-motion-quick")}`,`Podkreślenie pojawia się w jaśniejszym tonie, o stopień przed zaznaczeniem, w ${dsTok("--nu-motion-quick")}`)}</td>
        <td><code>--nu-fg-secondary</code> ${L("underline","podkreślenie")}</td></tr>
      <tr><td>${L("Disabled","Wyłączony")}<br><code>:disabled</code></td><td>${L("The facet would return nothing in the current combination. Set automatically when the count reaches zero, and skipped for a chip that is already selected &ndash; a filter can always be switched off","Kryterium nie dałoby nic w bieżącej kombinacji. Ustawiane automatycznie, gdy licznik osiąga zero, i pomijane dla chipa już zaznaczonego &ndash; filtr zawsze da się wyłączyć")}</td>
        <td><code>--nu-fg-tertiary</code></td></tr>
    </tbody></table>
    <h3>${L("Specification","Specyfikacja")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Type","Typografia")}</td><td>${L(
        "Body M, inherited from the page. A chip does not use the Label step and takes no uppercase or tracking.",
        "Body M, dziedziczone ze strony. Chip nie używa stopnia Label i nie przyjmuje ani wersalików, ani światła.")}</td></tr>
      <tr><td>${L("Count","Licznik")}</td><td>${L(
        "A <code>sup</code> in Caption and <code>--nu-fg-tertiary</code>, stating how many results the facet would give given every other filter currently set. The header chips carry none: a pair of languages or currencies has nothing to count.",
        "<code>sup</code> w stopniu Caption i kolorze <code>--nu-fg-tertiary</code>, podający, ile wyników dałoby kryterium przy wszystkich pozostałych ustawionych filtrach. Chipy w nagłówku licznika nie noszą: para języka albo waluty nie ma czego liczyć.")}</td></tr>
      <tr><td>${L("Padding","Wypełnienie")}</td><td>${L(
        `${dsTok("--nu-underline-offset")} below the label, none elsewhere. That token separates the text from its own underline and sits below the spacing scale, which starts four times higher. The underline is carried by <code>.chip-t</code> rather than by the button, so it stops before the count.`,
        `${dsTok("--nu-underline-offset")} pod etykietą, zero poza nią. Ten token oddziela tekst od własnego podkreślenia i leży poniżej skali odstępów, która zaczyna się czterokrotnie wyżej. Podkreślenie rysuje <code>.chip-t</code>, a nie przycisk, więc kończy się przed licznikiem.`)}</td></tr>
      <tr><td>${L("Row","Rząd")}</td><td>${L(
        `Filter chips wrap in <code>.chip-row</code> with ${dsTok("--nu-space-nano")} between lines and ${dsTok("--nu-space-small")} between chips, aligned on the baseline so the counts line up. The row is also the unit of meaning: it carries <code>role=&quot;group&quot;</code> and takes its name from the heading above it, so a chip is never read out without the facet it belongs to. The header pairs stand in <code>.sw-group</code> instead: two options either side of a slash, no wrapping, and the group name written into an <code>aria-label</code>, there being no heading above them.`,
        `Chipy filtrów zawijają się w <code>.chip-row</code> z ${dsTok("--nu-space-nano")} między wierszami i ${dsTok("--nu-space-small")} między chipami, wyrównane do linii pisma, żeby liczniki stały w jednej linii. Rząd jest też jednostką znaczeniową: ma <code>role=&quot;group&quot;</code> i bierze nazwę z nagłówka nad sobą, więc chip nigdy nie zostaje odczytany bez kryterium, do którego należy. Pary w nagłówku stoją w <code>.sw-group</code>: dwie opcje po obu stronach ukośnika, bez zawijania, z nazwą grupy wpisaną w <code>aria-label</code>, bo nie mają nad sobą nagłówka.`)}</td></tr>
      <tr><td>${L("Focus","Fokus")}</td><td>${L(
        `${dsTok("--nu-focus-ring")} in <code>--nu-border-primary</code> at ${dsTok("--nu-focus-offset")}, the distance every control standing on the page keeps.`,
        `${dsTok("--nu-focus-ring")} w kolorze <code>--nu-border-primary</code> z odsunięciem ${dsTok("--nu-focus-offset")}, czyli tyle, co każda kontrolka stojąca na stronie.`)}</td></tr>
    </tbody></table>

    <h3>${L("Live preview","Podgląd na żywo")}</h3>
    <p>${L(
      "The options below are read from the states table on this page, the rendering from the stylesheet the shop runs on, and the snippet from the element actually standing in the frame. Only states a developer writes into the markup appear here; hover belongs to the pointer, not to the code.",
      "Opcje poniżej pochodzą z tabeli stanów na tej stronie, wygląd z arkusza, na którym działa sklep, a fragment kodu z elementu faktycznie stojącego w ramce. Pojawiają się tylko stany, które deweloper zapisuje w markupie; najechanie należy do wskaźnika, nie do kodu.")}</p>
    <div class="ds-play" data-src="#chipStates" data-demo=".ds-chips" data-tag="button" data-base="chip" data-wrap="">
      <div class="ds-play-row"><span class="ds-play-lbl">${L("State","Stan")}</span><div class="chip-row ds-play-opts"></div></div>
      <div class="demo on-page ds-play-stage"></div>
      <div class="ds-play-code"></div>
    </div>` },

  { group:{en:"Components",pl:"Komponenty"}, id:"link", label:{en:"Link",pl:"Link"}, body: ()=>`
    <h1>${L("Link","Link")}</h1>
    <p class="ds-lede">${L(
      "A link is there to take people to a new location &ndash; another view of the shop, or another website.",
      "Link ma za zadanie przenieść w nowe miejsce &ndash; do innego widoku sklepu albo na inną stronę.")}</p>
    <div class="demo on-page ds-links">
      <span class="link">${L("Design system","System projektowy")}</span>
      <span class="link has-icon">${ICON_BACK}<span class="lbl">${L("Back to shop","Wróć do sklepu")}</span></span>
      <span class="link in-text">${L("a link inside a sentence","link wewnątrz zdania")}</span>
    </div>
    <table id="linkVariants"><thead><tr><th>${L("Variant","Wariant")}</th><th>${L("Meaning","Znaczenie")}</th><th ${DS_COL_TOK}>${L("Tokens","Tokeny")}</th></tr></thead><tbody>
      <tr><td>${L("Standalone","Samodzielny")}<br><code>.link</code></td>
        <td>${L("Stands on its own, outside a sentence, so its place is what identifies it: the design system from the footer, the way back out of checkout.","Stoi sam, poza zdaniem, więc rozpoznaje się go po miejscu: system projektowy ze stopki, wyjście z kasy.")}</td>
        <td><code>--nu-fg-primary</code>; ${L("on hover","przy najechaniu")} <code>--nu-fg-secondary</code></td></tr>
      <tr><td>${L("In text","W tekście")}<br><code>.in-text</code></td>
        <td>${L("Stands among words, where a reader has to find it, so it carries a permanent underline.","Stoi między słowami, gdzie trzeba go znaleźć, więc nosi stałe podkreślenie.")}</td>
        <td>${L("the same, plus a 1px rule in","to samo, plus kreska 1px w")} <code>currentColor</code></td></tr>
      <tr><td>${L("Outside the two","Poza tymi dwoma")}<br><code>.skip-link</code></td>
        <td>${L("The link past the header, set out under Accessibility. Not a variant: it takes neither the colour nor the underline, being invisible until it takes focus.","Link pomijający nagłówek, opisany w Dostępności. Nie jest wariantem: nie nosi ani koloru, ani podkreślenia, bo jest niewidoczny do chwili, gdy przyjmie fokus.")}</td>
        <td>${L("its own","własne")}</td></tr>
      <tr><td><code>.has-icon</code></td>
        <td>${L("An addition to the standalone variant, and the arrow says which way the link leads: back out of checkout, out of the order confirmation, out of the documentation header. A link standing in text never carries one.","Dodatek do wariantu samodzielnego; strzałka mówi, w którą stronę link prowadzi: z kasy, z potwierdzenia zamówienia, z nagłówka dokumentacji. Link stojący w tekście nigdy jej nie nosi.")}</td>
        <td>${L("the same, plus","to samo, plus")} ${dsTok("--nu-space-micro")}</td></tr>
    </tbody></table>
    <h3>${L("Specification","Specyfikacja")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Colour","Kolor")}</td><td>${L(
        "<code>--nu-fg-primary</code> at rest, <code>--nu-fg-secondary</code> on hover &ndash; full strength first, lightening under the pointer. That is the tertiary button's register, and a link borrows it: both take the reader out of where they are, so they read as the same kind of offer. A link carries no fill and no box.",
        "<code>--nu-fg-primary</code> w spoczynku, <code>--nu-fg-secondary</code> przy najechaniu &ndash; najpierw pełna siła, potem rozjaśnienie pod kursorem. To rejestr przycisku trzeciorzędnego, a link go pożycza: oba wyprowadzają czytelniczkę z miejsca, w którym jest, więc czytają się jako ta sama propozycja. Link nie nosi ani wypełnienia, ani kontenera.")}</td></tr>
      <tr><td>${L("Underline","Podkreślenie")}</td><td>${L(
        "Belongs to the in-text variant and stands there permanently, 1px in <code>currentColor</code>. A standalone link has none in any state. What decides is whether the reader has to find the link: among words, colour is the only other cue, and a colour on its own is what WCAG 1.4.1 rules out. The rule follows the text through <code>currentColor</code> rather than naming a border token, so it never ends up darker than the words above it.",
        "Należy do wariantu w tekście i stoi tam stale, 1px w <code>currentColor</code>. Link samodzielny nie ma go w żadnym stanie. Rozstrzyga to, czy czytelniczka musi link znaleźć: między słowami jedyną inną wskazówką jest kolor, a sam kolor jest tym, czego WCAG 1.4.1 nie dopuszcza. Kreska idzie za tekstem przez <code>currentColor</code>, a nie przez nazwany token obramowania, więc nigdy nie wychodzi ciemniejsza niż słowa nad nią.")}</td></tr>
      <tr><td>${L("Icon","Ikona")}</td><td>${L(
        `Optional on a standalone link, and a 16&times;16 icon on the terms set out under Iconography. <code>.has-icon</code> lays the control out as a row with ${dsTok("--nu-space-micro")} between glyph and word. The glyph is lifted by ${dsTok("--nu-icon-lift")}, the optical correction set out under Iconography, so it sits on the middle of the word rather than on the middle of its box. A link standing in text does not take an icon: a glyph among words reads as punctuation, and the rule would have to run under it or stop short of it, neither of which looks like an underlined word.`,
        `Opcjonalna przy linku samodzielnym, ikona 16&times;16 na zasadach opisanych w Ikonografii. <code>.has-icon</code> układa kontrolkę w rząd z odstępem ${dsTok("--nu-space-micro")} między znakiem a słowem. Znak podnosi ${dsTok("--nu-icon-lift")}, korekta optyczna opisana w Ikonografii, żeby siedział na środku słowa, a nie na środku jego pudełka. Link stojący w tekście ikony nie przyjmuje: znak między słowami czyta się jak znak interpunkcyjny, a kreska musiałaby albo biec pod nim, albo urwać się przed nim &ndash; żadne z tego nie wygląda jak podkreślone słowo.`)}</td></tr>
      <tr><td>${L("Type","Typografia")}</td><td>${L(
        "Inherited from its surroundings, so a link in the footer sits at the footer's size without being told.",
        "Dziedziczona z otoczenia, więc link w stopce siedzi w rozmiarze stopki, nie będąc o tym informowany.")}</td></tr>
      <tr><td>${L("Element","Element")}</td><td>${L(
        "An <code>a</code> with an <code>href</code>, always. The shop routes on the hash, and the router listens for the address changing, so the address alone is enough &ndash; no click handler. That is what makes the control announce as a link, open in a new tab on a middle click and hand its address to the context menu. A control with nowhere to point is not a link but a button.",
        "<code>a</code> z atrybutem <code>href</code>, zawsze. Sklep trasuje po fragmencie adresu, a router nasłuchuje jego zmiany, więc sam adres wystarczy &ndash; bez obsługi kliknięcia. To dzięki temu kontrolka jest ogłaszana jako link, otwiera się w nowej karcie po kliknięciu środkowym i oddaje swój adres menu kontekstowemu. Kontrolka, która nie ma dokąd wskazać, nie jest linkiem, tylko przyciskiem.")}</td></tr>
    </tbody></table>

    <h3>${L("Live preview","Podgląd na żywo")}</h3>
    <p>${L(
      "The options below are read from the variants table on this page, the rendering from the stylesheet the shop runs on, and the snippet from the element actually standing in the frame.",
      "Opcje poniżej pochodzą z tabeli wariantów na tej stronie, wygląd z arkusza, na którym działa sklep, a fragment kodu z elementu faktycznie stojącego w ramce.")}</p>
    <div class="ds-play" data-src="#linkVariants" data-demo=".ds-links" data-tag="a" data-base="link" data-wrap="" data-attrs='href="#"'>
      <div class="ds-play-row"><span class="ds-play-lbl">${L("Variant","Wariant")}</span><div class="chip-row ds-play-opts"></div></div>
      <div class="demo on-page ds-play-stage"></div>
      <div class="ds-play-code"></div>
    </div>
` },

  { group:{en:"Components",pl:"Komponenty"}, id:"tile", label:{en:"Tile and cover",pl:"Kafel i okładka"}, body: ()=>`
    <h1>${L("Tile and cover","Kafel i okładka")}</h1>
    <p class="ds-lede">${L(
      "The tile is a 4:5 grey field with a cover inside it &ndash; the shop's signature object. The same tile appears in the grid and on the product page, at two scales. The cover also appears without the tile, as a thumbnail in the cart lists.",
      "Kafel to szare pole w proporcji 4:5 z okładką w środku &ndash; znak rozpoznawczy sklepu. Ten sam kafel występuje w siatce i na karcie produktu, w dwóch skalach. Okładka pojawia się również bez kafla, jako miniatura na listach w koszyku.")}</p>
    <div class="demo on-page ds-tiles">
      <div class="tile">${coverHTML(BOOKS[2])}</div>
      <div class="ci-cover">${coverHTML(BOOKS[2])}</div>
    </div>
    <table id="tileVariants"><thead><tr><th>${L("Variant","Wariant")}</th><th>${L("Meaning","Znaczenie")}</th><th ${DS_COL_TOK}>${L("Tokens","Tokeny")}</th></tr></thead><tbody>
      <tr><td>${L("Tile","Kafel")}<br><code>.tile</code></td>
        <td>${L("A field with a cover centred in it, and room for one badge. The grid and the product page carry the same tile at two scales, which is what lets opening a book be one uninterrupted zoom.","Pole z wyśrodkowaną okładką i miejscem na jedną odznakę. Siatka i karta produktu mają ten sam kafel w dwóch skalach i to właśnie pozwala, by otwarcie książki było jednym nieprzerwanym powiększeniem.")}</td>
        <td><code>--nu-bg-secondary</code>, ${dsTok("--nu-cover-width")}</td></tr>
      <tr><td>${L("Thumbnail","Miniatura")}<br><code>.ci-cover</code></td>
        <td>${L("The cover alone: no field, no badge, and a width of its own. Used in the cart drawer and on the cart page, where a title only has to be recognisable in a list.","Sama okładka: bez pola, bez odznaki, z własną szerokością. Używana w szufladzie koszyka i na stronie koszyka, gdzie tytuł ma być tylko rozpoznawalny na liście.")}</td>
        <td>${dsTok("--nu-thumb-size-sm")}, ${dsTok("--nu-thumb-size-md")}</td></tr>
    </tbody></table>
    <h3>${L("Specification","Specyfikacja")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Tile ratio","Proporcje kafla")}</td><td>${L(
        "4:5, the same in the grid and on the product page.","4:5, takie same w siatce i na karcie produktu.")}</td></tr>
      <tr><td>${L("Tile surface","Powierzchnia kafla")}</td><td><code>--nu-bg-secondary</code></td></tr>
      <tr><td>${L("Cover ratio","Proporcje okładki")}</td><td>${L(
        "7:10, held by the box rather than by the image, so a cover of any proportion is cropped to one shape across the whole shop.",
        "7:10, trzymane przez pole, a nie przez obrazek, więc okładka o dowolnych proporcjach jest kadrowana do jednego kształtu w całym sklepie.")}</td></tr>
      <tr><td>${L("Cover width","Szerokość okładki")}</td><td>${L(
        `Inside a tile: ${dsTok("--nu-cover-width")} of it, one value per breakpoint. Standing alone, the cover fills its thumbnail instead, and the thumbnail carries the width: ${dsTok("--nu-thumb-size-sm")} in the cart drawer, ${dsTok("--nu-thumb-size-md")} on the cart page.`,
        `W kaflu: ${dsTok("--nu-cover-width")} jego szerokości, jedna wartość na próg. Stojąc sama, okładka wypełnia miniaturę, a szerokość ma miniatura: ${dsTok("--nu-thumb-size-sm")} w szufladzie koszyka, ${dsTok("--nu-thumb-size-md")} na stronie koszyka.`)}</td></tr>
      <tr><td>${L("Shadow","Cień")}</td><td>${L(
        "The cover casts a shadow, the tile does not &ndash; that is what separates the two. A thumbnail casts a shallower one, because it stands in a list rather than on a surface.",
        "Cień rzuca okładka, nie kafel &ndash; dzięki temu odcina się od pola. Miniatura rzuca płytszy, bo stoi na liście, a nie na powierzchni.")}</td></tr>
      <tr><td>${L("Hover","Najechanie")}</td><td>${L(
        "In the grid the cover rises 4px under the pointer while the tile stays put, so the card responds without the layout moving. On the product page and in the cart nothing rises, because there is nothing left to choose between.",
        "W siatce okładka unosi się o 4px pod kursorem, a kafel zostaje na miejscu, więc karta odpowiada bez przesuwania układu. Na karcie produktu i w koszyku nic się nie unosi, bo nie ma już między czym wybierać.")}</td></tr>
      <tr><td>${L("Unavailable","Stan niedostępny")}</td><td>${L(
        "In the grid the cover fades to 38% and loses saturation, and the price below is struck through. On the product page the cover is left untouched: the reader came to look at this one, and the badge and the disabled button carry the unavailability there. The fade belongs to the listing, not to the book.",
        "W siatce okładka przygasza się do 38% krycia i traci nasycenie, a cena pod nią zostaje przekreślona. Na karcie produktu okładka zostaje nietknięta: czytelniczka przyszła obejrzeć właśnie tę, a o niedostępności mówią odznaka i wyłączony przycisk. Przygaszenie należy do listy, nie do książki.")}</td></tr>
      <tr><td>${L("Badge","Odznaka")}</td><td>${L(
        "The tile holds at most one, in its top-left corner. A thumbnail holds none &ndash; the title stands beside it in words.",
        "Kafel mieści najwyżej jedną, w lewym górnym rogu. Miniatura nie mieści żadnej &ndash; tytuł stoi obok niej słowami.")}</td></tr>
    </tbody></table>

    <h3>${L("Live preview","Podgląd na żywo")}</h3>
    <p>${L(
      "The options below are read from the variants table on this page, the rendering from the stylesheet the shop runs on, and the snippet from the element actually standing in the frame.",
      "Opcje poniżej pochodzą z tabeli wariantów na tej stronie, wygląd z arkusza, na którym działa sklep, a fragment kodu z elementu faktycznie stojącego w ramce.")}</p>
    <div class="ds-play" data-src="#tileVariants" data-demo=".ds-tiles" data-tag="div" data-base="" data-wrap="">
      <div class="ds-play-row"><span class="ds-play-lbl">${L("Variant","Wariant")}</span><div class="chip-row ds-play-opts"></div></div>
      <div class="demo on-page ds-play-stage"></div>
      <div class="ds-play-code"></div>
    </div>` },

  { group:{en:"Components",pl:"Komponenty"}, id:"stepper", label:{en:"Quantity stepper",pl:"Stepper ilości"}, body: ()=>`
    <h1>${L("Quantity stepper","Stepper ilości")}</h1>
    <p class="ds-lede">${L(
      "Minus, value and plus in one outline. It changes how many copies of a title are in the cart, and it appears in the cart drawer and on the cart page.",
      "Minus, wartość i plus w jednym obrysie. Zmienia liczbę egzemplarzy tytułu w koszyku i występuje w szufladzie koszyka oraz na stronie koszyka.")}</p>
    <div class="demo on-page ds-qty">
      ${qtyHTML(-1, 1)}
      ${qtyHTML(-2, 3)}
    </div>
    <p class="note">${L(
      "Both specimens work: raise the left one and its minus becomes active.",
      "Oba okazy działają: podnieś lewy, a jego minus stanie się aktywny.")}</p>
    <table><thead><tr><th>${L("State","Stan")}</th><th>${L("Meaning","Znaczenie")}</th><th ${DS_COL_TOK}>${L("Tokens","Tokeny")}</th></tr></thead><tbody>
      <tr><td>${L("Default","Domyślny")}</td>
        <td>${L("Two or more copies. Both buttons work.","Dwa egzemplarze lub więcej. Oba przyciski działają.")}</td>
        <td><code>--nu-fg-primary</code>, <code>--nu-border-neutral</code></td></tr>
      <tr><td>${L("One copy","Jedna sztuka")}<br><code>:disabled</code></td>
        <td>${L("The minus is disabled. Taking the last copy away is what the Remove button does, and doing it from here would put two different actions under one button.","Minus jest wyłączony. Zabranie ostatniego egzemplarza należy do przycisku „Usuń”, a wykonanie tego stąd oznaczałoby dwie różne czynności pod jednym przyciskiem.")}</td>
        <td><code>--nu-fg-tertiary</code></td></tr>
      <tr><td>Hover<br><code>:hover</code></td>
        <td>${L("The button cell fills, the outline stays put.","Komórka przycisku wypełnia się, obrys zostaje na miejscu.")}</td>
        <td><code>--nu-bg-secondary</code></td></tr>
    </tbody></table>
    <h3>${L("Specification","Specyfikacja")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Button size","Rozmiar przycisku")}</td><td>${L(
        `${dsTok("--nu-control-size-sm")} square, the smallest touch target in the shop. WCAG asks for 24&times;24 CSS px, which this exceeds with a margin.`,
        `Kwadrat ${dsTok("--nu-control-size-sm")}, najmniejsze pole dotyku w sklepie. WCAG wymaga 24&times;24 px CSS, co ta wartość przekracza z zapasem.`)}</td></tr>
      <tr><td>${L("Value column","Kolumna wartości")}</td><td>${L(
        `The same value as a minimum width, in tabular figures &ndash; that is what keeps the control from resizing between 9 and 10.`,
        `Ta sama wartość jako szerokość minimalna, cyfry tabelaryczne &ndash; dzięki temu kontrolka nie zmienia szerokości między 9 a 10.`)}</td></tr>
      <tr><td>${L("Icons","Ikony")}</td><td>${L(
        "Minus and plus at the smaller of the two icon sizes, on the terms set out under Iconography. The plus is the same drawing the sort menu uses.",
        "Minus i plus w mniejszym z dwóch rozmiarów ikon, na zasadach opisanych w Ikonografii. Plus to ten sam rysunek, którego używa menu sortowania.")}</td></tr>
      <tr><td>${L("Name","Nazwa")}</td><td>${L(
        "Each button carries an <code>aria-label</code> naming the action, not the sign: a screen reader says &ldquo;increase quantity&rdquo; rather than &ldquo;plus&rdquo;.",
        "Każdy przycisk ma <code>aria-label</code> nazywający czynność, a nie znak: czytnik ekranu mówi „zwiększ ilość”, a nie „plus”.")}</td></tr>
      <tr><td>${L("Border","Obramowanie")}</td><td>${L(
        "1px <code>--nu-border-neutral</code> around the whole control, square corners. The buttons have none of their own &ndash; the outline holds all three cells together.",
        "1px <code>--nu-border-neutral</code> wokół całej kontrolki, narożniki ostre. Przyciski nie mają własnego &ndash; obrys spina wszystkie trzy komórki.")}</td></tr>
      <tr><td>${L("Focus","Fokus")}</td><td>${L(
        `${dsTok("--nu-focus-ring")} in <code>--nu-border-primary</code>, drawn inward at ${dsTok("--nu-focus-offset-inset")}: the button sits flush inside the stepper's outline and a ring set outward would land on it.`,
        `${dsTok("--nu-focus-ring")} w kolorze <code>--nu-border-primary</code>, rysowana do środka z odsunięciem ${dsTok("--nu-focus-offset-inset")}: przycisk siedzi ciasno w obrysie steppera, a obwódka na zewnątrz położyłaby się na nim.`)}</td></tr>
      <tr><td>${L("Paired with","W parze z")}</td><td>${L(
        `A ghost button &ldquo;Remove&rdquo;, ${dsTok("--nu-space-micro")} below and aligned left. Changing the count and removing the line are two actions, so they are two controls.`,
        `Przyciskiem ghost „Usuń”, ${dsTok("--nu-space-micro")} niżej, wyrównanym do lewej. Zmiana liczby i usunięcie pozycji to dwie różne czynności, więc mają dwie kontrolki.`)}</td></tr>
    </tbody></table>
    <p class="note">${L(
      "This tab has no live preview. The stepper's state depends on the count and on whether the minus is disabled, not on a class on the control, so a preview driven by class names would show something the component does not have.",
      "Ta zakładka nie ma podglądu na żywo. Stan steppera zależy od liczby i od tego, czy minus jest wyłączony, a nie od klasy na kontrolce, więc podgląd sterowany nazwami klas pokazywałby coś, czego komponent nie ma.")}</p>` },

  { group:{en:"Components",pl:"Komponenty"}, id:"sort", label:{en:"Sort menu",pl:"Menu sortowania"}, body: ()=>`
    <h1>${L("Sort menu","Menu sortowania")}</h1>
    <p class="ds-lede">${L(
      "A button that opens a short list and changes the order of the grid. The component is <code>.sort</code>: the trigger <code>.sort-btn</code> and the panel <code>.sort-menu</code> hanging off it. It stands once in the shop, above the product grid.",
      "Przycisk, który rozwija krótką listę i zmienia kolejność siatki. Komponent to <code>.sort</code>: przycisk <code>.sort-btn</code> i wiszący przy nim panel <code>.sort-menu</code>. W sklepie stoi raz, nad siatką produktów.")}</p>
    <div class="ds-specimens ds-sorts">
      <figure>
        <div class="demo on-page ds-sort">
          <div class="sort">
            <span class="sort-btn btn-tertiary has-icon">${L("Sort by:","Sortuj:")} ${L("Our recommendations","Nasze rekomendacje")}
              <svg class="ico-sm ico-plus" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8h9"/><path d="M8 3.5v9"/></svg></span>
          </div>
        </div>
        <figcaption>${L("Closed","Zamknięte")}</figcaption>
      </figure>
      <figure>
        <div class="demo on-page ds-sort">
          <div class="sort">
            <div class="sort-menu">
              <button type="button" aria-checked="true"><span class="lbl">${L("Our recommendations","Nasze rekomendacje")}</span></button>
              <button type="button" aria-checked="false"><span class="lbl">${L("Newest first","Od najnowszych")}</span></button>
              <button type="button" aria-checked="false"><span class="lbl">${L("Price, low to high","Cena: od najniższej")}</span></button>
            </div>
          </div>
        </div>
        <figcaption>${L("The open panel","Rozwinięty panel")}</figcaption>
      </figure>
    </div>
    <table><thead><tr><th>${L("State","Stan")}</th><th>${L("Meaning","Znaczenie")}</th><th ${DS_COL_TOK}>${L("Tokens","Tokeny")}</th></tr></thead><tbody>
      <tr><td>${L("Closed","Zamknięte")}</td>
        <td>${L("The button shows the label and the order in force, so the current sort can be read without opening anything.","Przycisk pokazuje podpis i obowiązującą kolejność, więc bieżące sortowanie da się odczytać bez rozwijania.")}</td>
        <td><code>--nu-fg-primary</code></td></tr>
      <tr><td>${L("Open","Rozwinięte")}<br><code>[aria-expanded="true"]</code></td>
        <td>${L("The panel appears under the button and the plus turns 45&deg; into a cross. The attribute sits on the trigger and the panel is its next sibling, so one attribute drives both.","Panel pojawia się pod przyciskiem, a plus obraca się o 45&deg; w krzyżyk. Atrybut stoi na przycisku, a panel jest jego następnym sąsiadem, więc jeden atrybut prowadzi oba.")}</td>
        <td><code>--nu-bg-primary</code>, <code>--nu-border-neutral</code></td></tr>
      <tr><td>${L("Option in force","Opcja obowiązująca")}<br><code>[aria-checked="true"]</code></td>
        <td>${L("Underlined, on the same terms as a pressed chip and a link standing in text. One option carries it at any time; the same attribute tells a screen reader which one is chosen.","Podkreślona, na tych samych zasadach co wciśnięty chip i link stojący w tekście. W danej chwili ma je jedna opcja; ten sam atrybut mówi czytnikowi ekranu, która jest wybrana.")}</td>
        <td><code>--nu-border-primary</code></td></tr>
      <tr><td>Hover<br><code>:hover</code></td>
        <td>${L(`The row fills across the whole width of the panel, so the target is the row and not the words. The ground fades over ${dsTok("--nu-motion-quick")}.`,`Wiersz wypełnia się na całą szerokość panelu, więc celem jest wiersz, a nie same słowa. Tło przechodzi w ${dsTok("--nu-motion-quick")}.`)}</td>
        <td><code>--nu-bg-secondary</code></td></tr>
    </tbody></table>
    <h3>${L("Specification","Specyfikacja")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Element","Element")}</td><td>${L(
        "A menu button: the trigger declares <code>aria-haspopup=&quot;menu&quot;</code>, the panel is a <code>menu</code> and each option is a <code>menuitemradio</code> &ndash; one choice out of a set, the way radio buttons work. <code>aria-checked</code> belongs to a role of that kind and says which one is in force.",
        "Przycisk menu: przycisk deklaruje <code>aria-haspopup=&quot;menu&quot;</code>, panel jest elementem <code>menu</code>, a każda opcja to <code>menuitemradio</code> &ndash; jeden wybór ze zbioru, tak jak działają przyciski radiowe. <code>aria-checked</code> należy do roli tego rodzaju i mówi, która opcja obowiązuje.")}</td></tr>
      <tr><td>${L("Trigger","Przycisk")}</td><td>${L(
        `The tertiary button, the component described under Button, carrying <code>.btn-tertiary</code> and nothing of its own but <code>.sort-btn</code>. That class adds one thing: ${dsTok("--nu-space-nano")} above and below and none at the sides, because the button stands at the edge of the grid and side padding would push it out of line with the column beneath it.`,
        `Przycisk trzeciorzędny, czyli komponent opisany w Przycisku, z klasą <code>.btn-tertiary</code> i niczym własnym poza <code>.sort-btn</code>. Ta klasa dokłada jedno: odstęp ${dsTok("--nu-space-nano")} u góry i u dołu, a żadnego z boków, bo przycisk stoi przy krawędzi siatki i boczne wypełnienie wypchnęłoby go z linii kolumny pod nim.`)}</td></tr>
      <tr><td>${L("Panel","Panel")}</td><td>${L(
        `1px <code>--nu-border-neutral</code> on <code>--nu-bg-primary</code>, ${dsTok("--nu-space-micro")} of air above and below the options and ${dsTok("--nu-space-micro")} between the panel and the button. <code>width:max-content</code> makes it exactly as wide as its longest option, with no floor under it, and and measures itself again when the labels change language &ndash; the Polish and the English set come out different widths.`,
        `1px <code>--nu-border-neutral</code> na <code>--nu-bg-primary</code>, ${dsTok("--nu-space-micro")} powietrza nad opcjami i pod nimi oraz ${dsTok("--nu-space-micro")} między panelem a przyciskiem. <code>width:max-content</code> daje mu szerokość dokładnie swojej najdłuższej opcji, bez żadnej podłogi pod spodem, i mierzy się na nowo, gdy podpisy zmieniają język &ndash; polski i angielski zestaw wychodzą różnej szerokości.`)}</td></tr>
      <tr><td>${L("Option","Opcja")}</td><td>${L(
        `Full width of the panel, text to the left, ${dsTok("--nu-space-micro")} of padding vertically and ${dsTok("--nu-space-small")} horizontally. Labels do not wrap: a two-line option would read as two. The underline marking the option in force rides on the label, not on the row, and keeps the 1px of air every underline in the shop keeps.`,
        `Cała szerokość panelu, tekst do lewej, wypełnienie ${dsTok("--nu-space-micro")} w pionie i ${dsTok("--nu-space-small")} w poziomie. Podpisy się nie łamią: opcja w dwóch wierszach czytałaby się jak dwie. Podkreślenie opcji obowiązującej biegnie pod podpisem, a nie pod wierszem, i trzyma ten sam 1px powietrza co każde podkreślenie w sklepie.`)}</td></tr>
      <tr><td>${L("Icon","Ikona")}</td><td>${L(
        "The plus at the smaller of the two sizes, on the terms set out under Iconography, turning 45&deg; into the cross while the panel is open. The same drawing the stepper uses.",
        "Plus w mniejszym z dwóch rozmiarów, na zasadach opisanych w Ikonografii, obracający się o 45&deg; w krzyżyk przy rozwiniętym panelu. Ten sam rysunek, którego używa stepper.")}</td></tr>
      <tr><td>${L("Keyboard","Klawiatura")}</td><td>${L(
        "<code>role=&quot;menu&quot;</code> tells a screen reader that this control answers the arrows, Home, End and Escape, so it has to answer them. The down arrow opens the menu and lands on the option in force, the arrows walk the options and wrap at the ends, Home and End reach the first and the last, Escape closes and hands focus back to the trigger, Tab closes and lets focus travel on. Escape stops at the menu instead of travelling on to close a drawer.",
        "<code>role=&quot;menu&quot;</code> mówi czytnikowi ekranu, że ta kontrolka odpowiada na strzałki, Home, End i Escape &ndash; więc musi na nie odpowiadać. Strzałka w dół rozwija menu i staje na obowiązującej opcji, strzałki przechodzą między opcjami i zawijają na krańcach, Home i End sięgają pierwszej i ostatniej, Escape zamyka i oddaje fokus przyciskowi, a Tab zamyka i puszcza fokus dalej. Escape zatrzymuje się na menu, zamiast lecieć dalej i zamykać szufladę.")}</td></tr>
      <tr><td>${L("Focus","Fokus")}</td><td>${L(
        `${dsTok("--nu-focus-ring")} in <code>--nu-border-primary</code>, drawn inward at ${dsTok("--nu-focus-offset-inset")}: an option runs the full width of the panel, so its side edges are the panel's border and a ring set outward would cross it.`,
        `${dsTok("--nu-focus-ring")} w kolorze <code>--nu-border-primary</code>, rysowana do środka z odsunięciem ${dsTok("--nu-focus-offset-inset")}: opcja zajmuje całą szerokość panelu, więc jej boczne krawędzie są obramowaniem panelu, a obwódka na zewnątrz przeszłaby przez nie.`)}</td></tr>
      <tr><td>${L("On a narrow screen","Na wąskim ekranie")}</td><td>${L(
        "The panel opens upwards, above the bottom bar, and the button's label is cut with an ellipsis rather than taking a second line.",
        "Panel rozwija się w górę, nad dolną belką, a podpis przycisku jest przycinany wielokropkiem, zamiast zajmować drugi wiersz.")}</td></tr>
    </tbody></table>
    <p class="note">${L(
      "The panel arrives without motion. It is switched between <code>display:none</code> and <code>display:block</code>, and display cannot be animated &ndash; giving it the movement the drawer has would mean building it differently.",
      "Panel pojawia się bez ruchu. Przełącza się między <code>display:none</code> a <code>display:block</code>, a wyświetlania nie da się animować &ndash; nadanie mu ruchu, który ma szuflada, oznaczałoby inną konstrukcję.")}</p>
    <p class="note">${L(
      "This tab has no live preview. The component is a trigger and a panel driven by one attribute, and the preview builds a single element from a class name.",
      "Ta zakładka nie ma podglądu na żywo. Komponent to przycisk i panel prowadzone jednym atrybutem, a podgląd buduje pojedynczy element z nazwy klasy.")}</p>

    <h3>${L("Why this is not a select","Dlaczego to nie jest select")}</h3>
    <p>${L(
      "Both controls pick one option out of a list, so a single component covering the two of them looks tempting. It is not possible today: a native <code>select</code> renders its open list through the operating system, and that list takes no styling &ndash; no padding, no border, no mark on the option in force. Building the sort menu as a select would mean giving up the panel; building the country field as a menu would mean giving up the native keyboard, the native picker on a phone and everything screen readers know about a select without being told.",
      "Obie kontrolki wybierają jedną opcję z listy, więc jeden komponent obejmujący obie wygląda kusząco. Dziś nie jest to możliwe: natywny <code>select</code> rysuje rozwiniętą listę przez system operacyjny, a ta lista nie przyjmuje stylów &ndash; ani wypełnienia, ani obramowania, ani oznaczenia opcji obowiązującej. Zbudowanie menu sortowania jako selecta oznaczałoby rezygnację z panelu; zbudowanie pola „Kraj” jako menu oznaczałoby rezygnację z natywnej klawiatury, natywnego wybieraka na telefonie i z tego, co czytniki ekranu wiedzą o selekcie bez pytania.")}</p>
    <p>${L(
      "This is a matter of time rather than of principle. <code>appearance: base-select</code> lets a native select's own panel be styled, and it works in Chromium browsers. In August 2026 it is not Baseline &ndash; Safari has it in a technology preview and Firefox behind a flag &ndash; so it cannot carry a shop without a fallback path. When it becomes ordinary, the two controls can become one: native behaviour with a panel of our own.",
      "To kwestia czasu, a nie zasady. <code>appearance: base-select</code> pozwala ostylować własny panel natywnego selecta i działa w przeglądarkach opartych na Chromium. W sierpniu 2026 nie ma statusu Baseline &ndash; Safari ma to w przeglądzie technicznym, Firefox za flagą &ndash; więc nie uniesie sklepu bez ścieżki zapasowej. Kiedy stanie się zwyczajne, obie kontrolki będą mogły stać się jedną: natywne zachowanie z własnym panelem.")}</p>
    <p class="note">${L("Sources","Źródła")}: <a class="link in-text" href="https://developer.chrome.com/blog/a-customizable-select" target="_blank" rel="noopener">Chrome for Developers</a>, <a class="link in-text" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select" target="_blank" rel="noopener">MDN</a>, <a class="link in-text" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1958445" target="_blank" rel="noopener">Bugzilla</a> ${L("(checked August 2026)","(sprawdzone w sierpniu 2026)")}.</p>` },

  { group:{en:"Components",pl:"Komponenty"}, id:"input", label:{en:"Text field",pl:"Pole tekstowe"}, body: ()=>`
    <h1>${L("Text field","Pole tekstowe")}</h1>
    <p class="ds-lede">${L(
      "The field the reader types an answer into, class <code>.input</code>. It appears in checkout and at the discount code in the cart.",
      "Pole, w które czytelniczka wpisuje odpowiedź, klasa <code>.input</code>. Występuje w kasie i przy kodzie rabatowym w koszyku.")}</p>
    <div class="ds-specimens ds-fields">
      <figure>
        <div class="demo on-page">
          <div class="field">
            <label for="ds-in-a">${L("City","Miasto")}</label>
            <input class="input" id="ds-in-a" value="Wrocław" readonly>
          </div>
        </div>
        <figcaption>${L("Default","Domyślny")}</figcaption>
      </figure>
      <figure>
        <div class="demo on-page">
          <div class="field">
            <label for="ds-in-b">${L("E-mail","E-mail")}</label>
            <input class="input is-error" id="ds-in-b" value="aga.pl" aria-invalid="true" aria-describedby="ds-in-b-msg" readonly>
            <p class="field-msg" id="ds-in-b-msg">${L("Enter an address in the form name@domain.com.","Podaj adres w postaci nazwa@domena.pl.")}</p>
          </div>
        </div>
        <figcaption>${L("Error","Błąd")}</figcaption>
      </figure>
    </div>
    <table><thead><tr><th>${L("State","Stan")}</th><th>${L("Meaning","Znaczenie")}</th><th ${DS_COL_TOK}>${L("Tokens","Tokeny")}</th></tr></thead><tbody>
      <tr><td>${L("Default","Domyślny")}</td>
        <td>${L("Empty, or holding a value that passed the check.","Pole puste albo z wartością, która przeszła sprawdzenie.")}</td>
        <td><code>--nu-border-neutral</code>, <code>--nu-bg-primary</code></td></tr>
      <tr><td>${L("Focus","Fokus")}<br><code>:focus</code></td>
        <td>${L("The border darkens. The system ring is dropped, because a ring drawn inside a box that already has a border reads as a second border. The mark appears on a click too, not only on arriving by keyboard: entering a field is followed by typing.","Ramka ciemnieje. Systemowa obwódka jest zdjęta, bo obwódka rysowana wewnątrz kontenera, który ma już ramkę, czyta się jak druga ramka. Oznaczenie pojawia się także po kliknięciu, nie tylko przy przejściu klawiaturą: po wejściu w pole zaraz zaczyna się pisanie.")}</td>
        <td><code>--nu-border-primary</code></td></tr>
      <tr><td>${L("Error","Błąd")}<br><code>.is-error</code></td>
        <td>${L("The value does not match what the field accepts. The class is put on by the script that checks the value, and the message underneath says what is wrong.","Wartość nie zgadza się z tym, co pole przyjmuje. Klasę nakłada skrypt sprawdzający wartość, a komunikat pod spodem mówi, co jest nie tak.")}</td>
        <td><code>--nu-border-alert</code></td></tr>
    </tbody></table>
    <h3>${L("Specification","Specyfikacja")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Border","Ramka")}</td><td>${L(
        "1px <code>--nu-border-neutral</code>, square corners. The corners are declared rather than left alone, because iOS rounds a text field by default.",
        "1px <code>--nu-border-neutral</code>, narożniki ostre. Narożniki są zadeklarowane, a nie zostawione, bo na iOS pole tekstowe jest domyślnie zaokrąglone.")}</td></tr>
      <tr><td>${L("Padding","Wypełnienie")}</td><td>${dsTok("--nu-space-milli")} ${L("on every side","z każdej strony")}</td></tr>
      <tr><td>${L("Type","Typografia")}</td><td>${L(
        `Inherited from its surroundings. The field sets no face and no size of its own, only ${dsTok("--nu-line-normal")} to give the value the same rhythm the text around it has.`,
        `Dziedziczona z otoczenia. Pole nie ustawia własnego kroju ani stopnia, tylko ${dsTok("--nu-line-normal")}, żeby wpisana wartość miała ten sam rytm co tekst wokół niej.`)}</td></tr>
      <tr><td>${L("Placeholder","Podpowiedź")}</td><td>${L(
        "<code>--nu-fg-tertiary</code>, lighter than an answer so the two do not read alike. It shows the shape of the answer &ndash; <code>00-000</code> for a postal code &ndash; and never carries the name of the field: a label that disappears once typing starts leaves the reader with a filled field and nothing saying what is in it.",
        "<code>--nu-fg-tertiary</code>, jaśniejsza niż odpowiedź, żeby jedno nie czytało się jak drugie. Pokazuje kształt odpowiedzi &ndash; <code>00-000</code> przy kodzie pocztowym &ndash; i nigdy nie podaje nazwy pola: etykieta znikająca po pierwszym znaku zostawia czytelniczkę z wypełnionym polem i bez informacji, co w nim jest.")}</td></tr>
      <tr><td>${L("Width","Szerokość")}</td><td>${L(
        "The full width of the place it stands in, borders counted in. That place decides how wide it is, not the field.",
        "Cała szerokość miejsca, w którym stoi, wraz z ramką. Szerokość ustala to miejsce, a nie pole.")}</td></tr>
      <tr><td>${L("Type and keyboard","Typ i klawiatura")}</td><td>${L(
        "The field sets neither its type nor its keyboard mode &ndash; the place it is used does, and it always does. <code>type</code> and <code>inputmode</code> decide which keyboard a phone offers, and <code>autocomplete</code> lets the browser supply a value it already knows.",
        "Pole nie ustawia ani typu, ani trybu klawiatury &ndash; robi to miejsce użycia i robi to zawsze. <code>type</code> i <code>inputmode</code> decydują o tym, jaką klawiaturę poda telefon, a <code>autocomplete</code> pozwala przeglądarce podać wartość, którą już zna.")}</td></tr>
      <tr><td>${L("Own declaration","Własna deklaracja")}</td><td>${L(
        "The text field and the select declare the same box separately. Each one then works outside a form field, and a group of two controls has no rule of somebody else's to undo.",
        "Pole tekstowe i select deklarują tę samą ramkę osobno. Dzięki temu każde z nich działa poza polem formularza, a grupa dwóch kontrolek nie ma cudzej reguły do cofania.")}</td></tr>
      <tr><td>${L("In the cart","W koszyku")}</td><td>${L(
        "The discount code field is the same field, with two differences: it grows into its row and reads in capitals, with the placeholder left in sentence case. A code that does not exist is marked the way every other wrong value is.",
        "Pole kodu rabatowego jest tym samym polem, z dwiema różnicami: rośnie w swoim rzędzie i czyta się wersalikami, a podpowiedź zostaje w zwykłym zapisie. Kod, którego nie ma, jest oznaczany tak samo jak każda inna błędna wartość.")}</td></tr>
    </tbody></table>
    <p class="note">${L(
      "This tab has no live preview. The only state a class can express is the error one, and it stands among the specimens above; focus belongs to the browser, not to the markup.",
      "Ta zakładka nie ma podglądu na żywo. Jedyny stan, który da się wyrazić klasą, to błąd, a ten stoi wśród okazów powyżej; fokus należy do przeglądarki, a nie do znaczników.")}</p>` },

  { group:{en:"Components",pl:"Komponenty"}, id:"select", label:{en:"Select",pl:"Select"}, body: ()=>`
    <h1>Select</h1>
    <p class="ds-lede">${L(
      "A control whose answer is picked from a list, class <code>.select</code>. There are two in the shop: country and telephone dialling code.",
      "Kontrolka, w której odpowiedź wybiera się z listy, klasa <code>.select</code>. W sklepie są dwie: kraj i prefiks telefonu.")}</p>
    <div class="demo on-page ds-select">
      <div class="field" style="width:260px">
        <label for="ds-sel">${L("Country","Kraj")}</label>
        <span class="select-wrap">
          <select class="select" id="ds-sel">
            ${COUNTRIES.map(c => `<option>${c.name}</option>`).join("")}
          </select>${ICON_CHEVRON}
        </span>
      </div>
    </div>
    <table><thead><tr><th>${L("State","Stan")}</th><th>${L("Meaning","Znaczenie")}</th><th ${DS_COL_TOK}>${L("Tokens","Tokeny")}</th></tr></thead><tbody>
      <tr><td>${L("Default","Domyślny")}</td>
        <td>${L("Shows the chosen option.","Pokazuje wybraną opcję.")}</td>
        <td><code>--nu-border-neutral</code>, <code>--nu-bg-primary</code></td></tr>
      <tr><td>${L("Focus","Fokus")}<br><code>:focus</code></td>
        <td>${L("The border darkens, on the same terms as a text field: the system ring is dropped, and the mark appears on a click as well as on arriving by keyboard.","Ramka ciemnieje, na tych samych zasadach co w polu tekstowym: systemowa obwódka jest zdjęta, a oznaczenie pojawia się zarówno po kliknięciu, jak i przy przejściu klawiaturą.")}</td>
        <td><code>--nu-border-primary</code></td></tr>
    </tbody></table>
    <h3>${L("Specification","Specyfikacja")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Border","Ramka")}</td><td>${L(
        `The same box and the same inset as a text field &ndash; 1px <code>--nu-border-neutral</code>, square corners, ${dsTok("--nu-space-milli")} from the border on every side &ndash; declared here rather than borrowed. The chevron stands in that inset on the right, so the value stops earlier than in a text field: by the width of the icon and the gap in front of it. The declared right padding is those three added together.`,
        `Ta sama ramka i to samo wcięcie co w polu tekstowym &ndash; 1px <code>--nu-border-neutral</code>, narożniki ostre, ${dsTok("--nu-space-milli")} od ramki z każdej strony &ndash; zadeklarowane tutaj, a nie pożyczone. W prawym wcięciu stoi chevron, więc wartość zatrzymuje się wcześniej niż w polu tekstowym: o szerokość ikony i odstęp przed nią. Zadeklarowane prawe wypełnienie to suma tych trzech.`)}</td></tr>
      <tr><td>${L("Native look","Natywny wygląd")}</td><td>${L(
        "Dropped with <code>appearance:none</code>, along with the system marker on the edge. The box and the chevron are drawn.",
        "Zdjęty przez <code>appearance:none</code>, razem z systemowym znacznikiem na krawędzi. Ramka i chevron są rysowane.")}</td></tr>
      <tr><td>Chevron</td><td>${L(
        `An icon at the smaller of the two sizes, ${dsTok("--nu-icon-sm")}, on the terms set out under Iconography. It stands in the field's right padding, ${dsTok("--nu-space-milli")} from the edge, and the value ends at least ${dsTok("--nu-space-medium")} before it. Pointer events are off, so a click on the chevron opens the list, and the colour comes from the field through <code>currentColor</code>.`,
        `Ikona w mniejszym z dwóch rozmiarów, ${dsTok("--nu-icon-sm")}, na zasadach opisanych w Ikonografii. Stoi w prawym wypełnieniu pola, ${dsTok("--nu-space-milli")} od krawędzi, a wartość kończy się co najmniej ${dsTok("--nu-space-medium")} przed nią. Obsługa wskaźnika jest wyłączona, więc kliknięcie w chevron rozwija listę, a kolor bierze się z pola przez <code>currentColor</code>.`)}</td></tr>
      <tr><td>${L("Type","Typografia")}</td><td>${L(
        `Inherited from its surroundings. The select sets no face and no size of its own, only ${dsTok("--nu-line-normal")}, on the same terms as the text field.`,
        `Dziedziczona z otoczenia. Select nie ustawia własnego kroju ani stopnia, tylko ${dsTok("--nu-line-normal")}, na tych samych zasadach co pole tekstowe.`)}</td></tr>
      <tr><td>${L("Width","Szerokość")}</td><td>${L(
        "The full width of the place it stands in, borders counted in. That place decides how wide it is, not the select.",
        "Cała szerokość miejsca, w którym stoi, wraz z ramką. Szerokość ustala to miejsce, a nie select.")}</td></tr>
      <tr><td>${L("Group names","Nazwy grup")}</td><td>${L(
        "<code>optgroup label</code> shows on the open list and never in the closed field. At the dialling code the country name therefore stands above its code on the list, while the field itself holds digits alone.",
        "<code>optgroup label</code> pokazuje się na rozwiniętej liście i nigdy w zamkniętym polu. Dzięki temu przy prefiksie nazwa kraju stoi na liście nad swoim kodem, a w samym polu zostają same cyfry.")}</td></tr>
      <tr><td>${L("Value","Wartość")}</td><td>${L(
        "One of the listed options. A select has no error state, because there is nothing outside the list to choose.",
        "Jedna z wypisanych opcji. Select nie ma stanu błędu, bo poza listą nie ma czego wybrać.")}</td></tr>
      <tr><td>${L("Or the sort menu","Albo menu sortowania")}</td><td>${L(
        "Both pick one option out of a list, and the choice between them is what the answer does. A select answers a question in a form and the answer is submitted with it. The sort menu changes what is on screen at once, and its list is styled, which a native select does not allow.",
        "Oba wybierają jedną opcję z listy, a o wyborze między nimi decyduje to, co odpowiedź robi. Select odpowiada na pytanie w formularzu i odpowiedź wysyła się razem z nim. Menu sortowania zmienia to, co jest na ekranie, od razu, a jego lista jest ostylowana, na co natywny select nie pozwala.")}</td></tr>
    </tbody></table>
    <p class="note">${L(
      "This tab has no live preview, for the same reason as the text field: the states it has are the browser's, not the markup's.",
      "Ta zakładka nie ma podglądu na żywo z tego samego powodu co pole tekstowe: stany, które ma, należą do przeglądarki, a nie do znaczników.")}</p>` },

  { group:{en:"Patterns",pl:"Wzorce"}, id:"form", label:{en:"Form",pl:"Formularz"}, body: ()=>`
    <h1>${L("Form","Formularz")}</h1>
    <p class="ds-lede">${L(
      "How controls become a form: what describes them, how they lie beside one another, and what happens when an answer is missing or malformed. It covers the text field, the select, and the delivery, payment and consent rows.",
      "Jak z kontrolek powstaje formularz: co je opisuje, jak leżą obok siebie i co się dzieje, gdy odpowiedź jest niepełna albo niepoprawna. Dotyczy pola tekstowego, selecta oraz wierszy dostawy, płatności i zgód.")}</p>

    <h3>${L("Layout","Układ")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Field","Pole")}<br><code>.field</code></td><td>${L(
        "Label above, control below, message under the control, in that order in the markup. The class declares nothing of its own: a label, an input and a paragraph are block elements and stack by themselves. It is there for other rules to point at &ndash; the label and the address row &ndash; and the border belongs to the control.",
        "Etykieta nad kontrolką, kontrolka, komunikat pod nią &ndash; w tej kolejności w znacznikach. Sama klasa nic nie deklaruje: etykieta, pole i akapit są elementami blokowymi i układają się w kolumnie same z siebie. Jest po to, żeby wskazywały ją inne reguły &ndash; etykiety i wiersza adresu &ndash; a ramkę rysuje kontrolka.")}</td></tr>
      <tr><td>${L("Label","Etykieta")}</td><td>${L(
        `Label type, <code>--nu-fg-secondary</code>, ${dsTok("--nu-space-nano")} above the control. It is bound to the control by <code>for</code>, so clicking the words puts the cursor in the field and a screen reader reads them as its name.`,
        `Typografia Label, <code>--nu-fg-secondary</code>, ${dsTok("--nu-space-nano")} nad kontrolką. Wiąże się z kontrolką przez <code>for</code>, więc kliknięcie w napis stawia kursor w polu, a czytnik ekranu czyta go jako nazwę pola.`)}</td></tr>
      <tr><td>${L("Note in a label","Dopisek w etykiecie")}<br><code>.f-hint</code></td><td>${L(
        "&ldquo;(optional)&rdquo; beside the label, in <code>--nu-fg-tertiary</code> and without the capitals, so it reads as an aside rather than as part of the name.",
        "„(opcjonalnie)” obok etykiety, w <code>--nu-fg-tertiary</code> i bez wersalików, żeby czytało się jako dopisek, a nie jako część nazwy.")}</td></tr>
      <tr><td>${L("Grid","Siatka")}<br><code>.f-grid</code></td><td>${L(
        `Two equal columns with ${dsTok("--nu-space-milli")} between them. <code>.wide</code> takes both. Below the narrow breakpoint there is one column.`,
        `Dwie równe kolumny, ${dsTok("--nu-space-milli")} między nimi. <code>.wide</code> zajmuje obie. Poniżej progu wąskiego ekranu zostaje jedna kolumna.`)}</td></tr>
      <tr><td>${L("Address row","Wiersz adresu")}<br><code>.f-addr</code></td><td>${L(
        "Street, building number and flat number are one address, so they share a row. Each field hands its three rows &ndash; label, control, message &ndash; up to the row through subgrid. A label that wraps to two lines, or a message appearing under one field, then moves that row for the whole group instead of shifting one field against its neighbours. Labels sit at the bottom of their row, so each one keeps the same distance from the control it names.",
        "Ulica, numer domu i numer lokalu to jeden adres, więc dzielą wiersz. Każde pole oddaje wierszowi swoje trzy rzędy &ndash; etykietę, kontrolkę i komunikat &ndash; przez subgrid. Etykieta łamiąca się na dwie linie albo komunikat pojawiający się pod jednym polem przesuwa wtedy cały rząd, a nie jedno pole względem sąsiadów. Etykiety siedzą przy dolnej krawędzi swojego rzędu, więc każda stoi w tej samej odległości od kontrolki, którą nazywa.")}</td></tr>
      <tr><td>${L("Field width","Szerokość pola")}</td><td>${L(
        `A control takes the full width of the place it stands in, and the place is either a grid column sharing the row evenly or a track of its own. A building number, a flat number and a dialling code are sized for four characters, so all three take one width: ${dsTok("--nu-field-width-short")}. It is set by the widest case, the dialling code, because a select holds the four characters, the gap and the chevron; the plain fields follow it and the row lines up. Four characters is the size, not a limit &ndash; a longer number scrolls inside the field, because refusing an address would cost more than a tight box.`,
        `Kontrolka zajmuje całą szerokość miejsca, w którym stoi, a miejsce jest albo kolumną siatki dzielącą wiersz po równo, albo własnym torem. Numer domu, numer lokalu i prefiks są zwymiarowane pod cztery znaki, więc wszystkie trzy mają jedną szerokość: ${dsTok("--nu-field-width-short")}. Ustala ją przypadek najszerszy, czyli prefiks, bo select mieści cztery znaki, odstęp i chevron; pozostałe pola idą za nim i wiersz się wyrównuje. Cztery znaki to rozmiar, a nie granica &ndash; dłuższy numer przewija się w polu, bo odmówienie przyjęcia adresu kosztowałoby więcej niż ciasne pole.`)}</td></tr>
    </tbody></table>

    <h3>${L("Two controls, one answer","Dwie kontrolki, jedna odpowiedź")}</h3>
    <p>${L(
      "A dialling code and a telephone number are one answer, so they stand side by side without a gap: <code>.f-group</code>. The left control gives up its right border, which leaves a single line between them instead of two. Focus and error take the whole group &ndash; otherwise the outline would change colour halfway along its top edge.",
      "Prefiks i numer telefonu to jedna odpowiedź, więc stoją obok siebie bez odstępu: <code>.f-group</code>. Lewa kontrolka oddaje swoją prawą ramkę, przez co między nimi zostaje jedna kreska zamiast dwóch. Fokus i błąd obejmują całą grupę &ndash; inaczej ramka zmieniałaby kolor w połowie górnej krawędzi.")}</p>
    <div class="demo on-page ds-group">
      <div class="field" style="width:300px">
        <label for="ds-tel">${L("Phone","Telefon")}</label>
        <div class="f-group">
          <span class="select-wrap">
            <select class="select" id="ds-tel-p" aria-label="${L("Prefix","Prefiks")}">
              ${COUNTRIES.map(c => `<optgroup label="${c.name}"><option>+${c.code}</option></optgroup>`).join("")}
            </select>${ICON_CHEVRON}
          </span>
          <input class="input" id="ds-tel" value="600 100 200" readonly>
        </div>
      </div>
    </div>
    <p class="note">${L(
      "The group is written for the one that exists. A general group taking any pair of controls would have to stop knowing what stands inside it, and there is no second group to say what that would need.",
      "Grupa jest napisana pod tę jedną, która istnieje. Grupa ogólna, przyjmująca dowolną parę kontrolek, musiałaby przestać wiedzieć, co w niej stoi, a nie ma drugiego przypadku, który powiedziałby, czego to wymaga.")}</p>

    <h3>${L("Character rules","Weryfikacja znaków")}</h3>
    <p>${L(
      "Every field has two gates. A mask runs while the reader types and only ever takes characters away, so nothing can be entered that would later fail. A pattern is checked on leaving the field and again on submit. Both are declared side by side in the code, because a mask that lets through what the pattern rejects is how these two drift apart.",
      "Każde pole ma dwie bramki. Maska działa w trakcie pisania i wyłącznie odbiera znaki, więc nie da się wpisać czegoś, co później nie przejdzie. Wzorzec sprawdza się przy opuszczeniu pola i ponownie przy wysyłce. Oba są zadeklarowane obok siebie w kodzie, bo maska przepuszczająca to, co wzorzec odrzuca, jest sposobem, w jaki te dwie rzeczy się rozjeżdżają.")}</p>
    <table><thead><tr><th>${L("Field","Pole")}</th><th>${L("Mask","Maska")}</th><th>${L("Pattern","Wzorzec")}</th></tr></thead><tbody>
      <tr><td>${L("Full name, street, city","Imię i nazwisko, ulica, miasto")}</td><td>&ndash;</td>
        <td>${L("Any answer, but not none.","Dowolna odpowiedź, byle nie żadna.")}</td></tr>
      <tr><td>${L("E-mail","E-mail")}</td><td>&ndash;</td>
        <td>${L("An <code>@</code>, then a domain with a dot in it. <code>aga.pl</code> and <code>aga@pl</code> do not pass.","Znak <code>@</code>, a po nim domena z kropką. <code>aga.pl</code> i <code>aga@pl</code> nie przechodzą.")}</td></tr>
      <tr><td>${L("Phone","Telefon")}</td><td>${L("Digits only","Tylko cyfry")}</td>
        <td>${L("Exactly nine.","Dokładnie dziewięć.")}</td></tr>
      <tr><td>${L("Building and flat number","Numer domu i lokalu")}</td><td>${L("Digits and letters","Cyfry i litery")}</td>
        <td>${L("At least one character; the flat number may stay empty.","Przynajmniej jeden znak; numer lokalu może zostać pusty.")}</td></tr>
      <tr><td>${L("Postal code","Kod pocztowy")}</td><td>${L("Digits only, with the hyphen written by the field after the second one","Tylko cyfry, myślnik po drugiej dopisuje pole")}</td>
        <td>${L("Five digits, in the form 00-000.","Pięć cyfr, w postaci 00-000.")}</td></tr>
      <tr><td>${L("Dialling code, country","Prefiks, kraj")}</td><td>&ndash;</td>
        <td>${L("Picked from a list, so there is nothing to check.","Wybierane z listy, więc nie ma czego sprawdzać.")}</td></tr>
      <tr><td>${L("Terms","Zgoda na regulamin")}</td><td>&ndash;</td>
        <td>${L("Ticked.","Zaznaczona.")}</td></tr>
    </tbody></table>

    <h3>${L("Error state","Stan błędu")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("When it appears","Kiedy się pojawia")}</td><td>${L(
        "On leaving a field the reader has typed in, and on submit for everything. A field nobody has typed in says nothing on the way out: leaving an empty field is not a mistake, it is a reader who has not got there.",
        "Przy opuszczeniu pola, w którym czytelniczka pisała, i przy wysyłce dla wszystkiego. Pole, w którym nikt nie pisał, przy wyjściu milczy: opuszczenie pustego pola nie jest pomyłką, tylko czytelniczką, która jeszcze tam nie dotarła.")}</td></tr>
      <tr><td>${L("When it goes","Kiedy znika")}</td><td>${L(
        "At the first character typed after it appeared, rather than at the next check. Correcting an answer stops the field arguing straight away.",
        "Przy pierwszym znaku wpisanym po jego pojawieniu się, a nie przy kolejnym sprawdzeniu. Poprawianie odpowiedzi od razu kończy spór z polem.")}</td></tr>
      <tr><td>${L("Mark","Oznaczenie")}</td><td>${L(
        "<code>.is-error</code> on the control, which turns its border to <code>--nu-border-alert</code>. A checkbox draws no border of its own, so the consent row takes an outline instead.",
        "<code>.is-error</code> na kontrolce, co zmienia jej ramkę na <code>--nu-border-alert</code>. Checkbox nie rysuje własnej ramki, więc wiersz zgody dostaje kontur.")}</td></tr>
      <tr><td>${L("Message","Komunikat")}<br><code>.field-msg</code></td><td>${L(
        `Label type in <code>--nu-fg-alert</code>, ${dsTok("--nu-space-nano")} under the control. An empty message takes no space at all, so eight fields do not each hold a blank line waiting for a mistake that will land in one of them.`,
        `Typografia Label w <code>--nu-fg-alert</code>, ${dsTok("--nu-space-nano")} pod kontrolką. Pusty komunikat nie zajmuje miejsca, więc osiem pól nie trzyma po pustym wierszu w oczekiwaniu na pomyłkę, która trafi w jedno z nich.`)}</td></tr>
      <tr><td>${L("Announcement","Ogłoszenie")}</td><td>${L(
        "<code>aria-invalid</code> on the control and <code>aria-describedby</code> pointing at the message, so a screen reader reads it as part of the field rather than as loose text nearby.",
        "<code>aria-invalid</code> na kontrolce i <code>aria-describedby</code> wskazujący komunikat, więc czytnik ekranu czyta go jako część pola, a nie jako luźny tekst obok.")}</td></tr>
      <tr><td>${L("On submit","Przy wysyłce")}</td><td>${L(
        "Every field is checked, all the failures are marked at once, and focus goes to the first of them. An error the reader cannot find is an error twice over.",
        "Sprawdzane są wszystkie pola, wszystkie błędy zostają oznaczone naraz, a fokus przechodzi na pierwszy z nich. Błąd, którego czytelniczka nie umie znaleźć, jest błędem podwójnym.")}</td></tr>
    </tbody></table>

    <h3>${L("Choices and consents","Wybór i zgody")}</h3>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Choice row","Wiersz wyboru")}<br><code>.opt</code></td><td>${L(
        `A radio button and a name in one bordered row. Delivery adds a note with the waiting time and a price; payment stays at the name alone. The whole row is a <code>label</code>, so the click target is the row and not the dot. The border answers the pointer with <code>--nu-border-hover</code> and the chosen row holds <code>--nu-border-primary</code>.`,
        `Przycisk radio i nazwa w jednym obramowanym wierszu. Sposób dostawy dokłada dopisek z czasem oczekiwania i cenę, metoda płatności zostaje przy samej nazwie. Cały wiersz jest elementem <code>label</code>, więc celem kliknięcia jest wiersz, a nie kropka. Ramka odpowiada na wskaźnik kolorem <code>--nu-border-hover</code>, a wiersz wybrany trzyma <code>--nu-border-primary</code>.`)}</td></tr>
      <tr><td>${L("Consent","Zgoda")}<br><code>.consent</code></td><td>${L(
        "A checkbox and a sentence, with no border of its own. The required one says so in its own wording, and is checked on submit like any other field.",
        "Checkbox i zdanie, bez własnej ramki. Ta wymagana mówi o tym we własnym brzmieniu i jest sprawdzana przy wysyłce jak każde inne pole.")}</td></tr>
    </tbody></table>
` },

  { group:{en:"Patterns",pl:"Wzorce"}, id:"motion", label:{en:"Motion",pl:"Ruch"}, body: ()=>`
    <h1>${L("Motion","Ruch")}</h1>
    <p class="ds-lede">${L("Animation is part of the interface's answer. It confirms that a click worked, shows where a new view came from, and takes the eye to whatever has just changed.","Animacja jest częścią odpowiedzi interfejsu. Potwierdza, że kliknięcie zadziałało, pokazuje, skąd wziął się nowy widok, i prowadzi wzrok do miejsca, w którym coś się właśnie zmieniło.")}</p>

    <h3>${L("Scale","Skala")}</h3>
    <p>${L(
      "Six steps, each named after the job it does, so changing a value does not mean renaming rules. The stylesheet and the script read the same tokens, so every duration is written down in one place.",
      "Stopni jest sześć, a każdy ma nazwę od zadania, które wykonuje. Dzięki temu zmiana wartości nie wymaga poprawiania nazw w regułach. Arkusz i skrypt czytają te same tokeny, więc każdy czas jest zapisany w jednym miejscu.")}</p>
    <table><thead><tr><th ${DS_COL_NAME}>Token</th><th>${L("Value","Wartość")}</th><th>${L("What it carries","Co się w nim mieści")}</th></tr></thead><tbody>
      ${dsMotionSteps().map(([name, val, note]) =>
        `<tr><td class="spec"><code>${name}</code></td><td>${val}</td><td>${note}</td></tr>`).join("")}
    </tbody></table>

    <h3>${L("Curves","Krzywe")}</h3>
    <p>${L(
      "A curve says how the movement is spread over its duration, not how long it lasts. Time runs left to right, the distance already covered runs bottom to top, and the dashed diagonal is <code>linear</code> for comparison: the steeper the curve at a point, the faster the element moves just then.",
      "Krzywa mówi, jak ruch rozkłada się w czasie, a nie jak długo trwa. Poziomo płynie czas, pionowo rośnie przebyta droga, a przerywana przekątna to <code>linear</code> do porównania: im krzywa stromsza w danym miejscu, tym szybciej element się wtedy porusza.")}</p>
    <table><thead><tr><th ${DS_COL_NAME}>${L("Curve","Krzywa")}</th><th>${L("Shape","Kształt")}</th><th>${L("Where it runs","Gdzie działa")}</th></tr></thead><tbody>
      <tr><td class="spec">${dsTok("--nu-ease-zoom")}</td><td>${dsCurveGraph("--nu-ease-zoom")}</td>
        <td>${L("The most decisive of the four: about four fifths of the way is behind it in the first quarter of the time, and the rest settles gently. The tile growing into a packshot.","Najbardziej zdecydowana z czterech: w pierwszej ćwiartce czasu ma za sobą jakieś cztery piąte drogi, a resztę osiada łagodnie. Kafel rosnący do packshotu.")}</td></tr>
      <tr><td class="spec">${dsTok("--nu-ease-slide")}</td><td>${dsCurveGraph("--nu-ease-slide")}</td>
        <td>${L("The same family, a tone calmer. Both drawers &ndash; the author's and the cart's &ndash; and the filter sheet arrive decisively, without looking fired from somewhere.","Ta sama rodzina, o ton spokojniejsza. Obie szuflady &ndash; z informacją o autorce i koszyka &ndash; oraz panel filtrów przyjeżdżają zdecydowanie, bez wrażenia wystrzelenia.")}</td></tr>
      <tr><td class="spec"><code>ease</code></td><td>${dsCurveGraph("ease")}</td>
        <td>${L("The browser's default. Sets off briskly, covers most of the way early, finishes calmly. It fits wherever the movement has nothing to say beyond &ldquo;it happened&rdquo;, which is most of the shop.","Domyślna krzywa przeglądarki. Rusza żwawo, większość drogi ma za sobą wcześnie, końcówkę dojeżdża spokojnie. Pasuje wszędzie tam, gdzie ruch nie ma nic do powiedzenia poza „stało się”, czyli w większości sklepu.")}</td></tr>
      <tr><td class="spec"><code>ease-in-out</code></td><td>${dsCurveGraph("ease-in-out")}</td>
        <td>${L("Symmetrical: slow off the mark, quick through the middle, slow into the end. With no marked start and no marked landing it takes repetition well, which is why it carries the one loop in the shop &ndash; the accent in the logo.","Symetryczna: wolno rusza, przyspiesza w środku, wolno hamuje. Bez wyraźnego startu i bez wyraźnego lądowania dobrze znosi powtarzanie, dlatego prowadzi jedyną pętlę w sklepie &ndash; akcent w logo.")}</td></tr>
      <tr><td class="spec"><code>linear</code></td><td>${dsCurveGraph("linear")}</td>
        <td>${L("The same speed throughout. The filter toggle uses it because the tiles are being measured from one place to another, and any easing would read as the layout hesitating.","Stała prędkość przez cały czas. Używa jej przełączenie filtrów, bo kafle są przemierzane z jednego miejsca w drugie, a każde wygładzenie czytałoby się jako wahanie układu.")}</td></tr>
    </tbody></table>
    <p class="note">${L(
      "None of them starts slowly. A curve with a lazy opening makes a click look ignored for the first tenth of a second, which reads as the interface stalling rather than as a style.",
      "Żadna z nich nie zaczyna się powoli. Krzywa z leniwym startem sprawia, że kliknięcie wygląda na zignorowane przez pierwszą dziesiątą sekundy, a to czyta się jako zacinanie interfejsu, nie jako styl.")}</p>

    <h3>${L("Transitions","Przejścia")}</h3>
    <table><thead><tr><th>${L("Transition","Przejście")}</th><th>${L("Duration","Czas")}</th><th>${L("Curve","Krzywa")}</th><th>${L("Why","Po co")}</th></tr></thead><tbody>
      <tr><td>${L("Open a product","Otwarcie produktu")}</td><td>${dsTok("--nu-motion-slower")}</td><td>${dsTok("--nu-ease-zoom")}</td>
        <td>${L("The tile grows into the packshot, and once it settles the book details appear first, then the button","Kafel powiększa się do packshotu, a kiedy dojdzie na miejsce, pojawiają się najpierw informacje o książce, potem przycisk")}</td></tr>
      <tr><td>${L("Toggle filters","Przełączenie filtrów")}</td><td>${L("tiles","kafle")} ${dsTok("--nu-motion-base")}, ${L("column","kolumna")} ${dsTok("--nu-motion-instant")}</td><td>linear</td>
        <td>${L("Tiles resize in place; the column clears first so nothing overlaps","Kafle skalują się w miejscu; kolumna znika pierwsza, żeby nic na siebie nie nachodziło")}</td></tr>
      <tr><td>${L("First paint of the grid","Pierwsze wyświetlenie siatki")}</td><td>${dsTok("--nu-motion-slower")} ${L("a card, starts spread over","na kartę, starty rozłożone w")} ${dsTok("--nu-motion-stagger")}</td><td>ease</td>
        <td>${L("Cards dissolve in a random order &ndash; a mosaic, shown once per visit","Karty pojawiają się w losowej kolejności &ndash; mozaika, raz na wizytę")}</td></tr>
      <tr><td>${L("Add to cart","Dodanie do koszyka")}</td><td>${L("from","od")} ${dsTok("--nu-motion-quick")} ${L("to","do")} ${dsTok("--nu-motion-slow")}</td><td>${L("ease, the drawer on","ease, szuflada na")} ${dsTok("--nu-ease-slide")}</td>
        <td>${L("Label crossfades, counter fades in, drawer follows","Napis przenika, licznik się pojawia, potem wysuwa się szuflada")}</td></tr>
      <tr><td>${L("Logo accent","Akcent w logo")}</td><td>${dsTok("--nu-motion-loop")}</td><td>ease-in-out</td>
        <td>${L("The dot blooms into a rainbow glow once per cycle &ndash; a rare accent, not a loop that demands attention","Kropka raz na cykl rozkwita tęczową poświatą &ndash; rzadki akcent, nie pętla domagająca się uwagi")}</td></tr>
    </tbody></table>
    <p class="note">${L(
      "All of the movement above yields to <code>prefers-reduced-motion: reduce</code>, in two places: the logo, the mosaic, the counter, the drawer and the button label through a rule in the stylesheet, and opening a product and toggling the filters through the script, which checks the setting before it runs.",
      "Cały powyższy ruch ustępuje przy <code>prefers-reduced-motion: reduce</code>, w dwóch miejscach: logo, mozaika, licznik, szuflada i napis przycisku przez regułę w arkuszu, a otwarcie produktu i przełączenie filtrów przez skrypt, który sprawdza to ustawienie przed uruchomieniem.")}</p>` },

  { group:{en:"Patterns",pl:"Wzorce"}, id:"content", label:{en:"Content",pl:"Treść"}, body: ()=>`
    <h1>${L("Content","Treść")}</h1>
    <p class="ds-lede">${L(
      "The shop is fully bilingual (PL / EN) and dual-currency (PLN / EUR). No string stays in the interface as the markup wrote it: every one of them passes through <code>I18N</code> at start-up and again on every change of language. This documentation follows the same rule.",
      "Sklep jest w pełni dwujęzyczny (PL / EN) i dwuwalutowy (PLN / EUR). Żaden napis nie zostaje w interfejsie w postaci wpisanej w znacznikach: wszystkie przechodzą przez <code>I18N</code> przy starcie i przy każdej zmianie języka. Ta dokumentacja stosuje tę samą zasadę.")}</p>
    <table><tbody>
      <tr><td ${DS_COL_NAME}>${L("Book copy","Teksty książek")}</td><td>${L("Plain hyphens, never em dashes","Zwykłe myślniki, nigdy długie")}</td></tr>
      <tr><td>${L("Quote attribution","Podpis pod cytatem")}</td><td>${L("Em dash + speaker (&ldquo;&mdash;&nbsp;Offred&rdquo;), in <code>--nu-fg-secondary</code> so the rule does not outweigh the type","Długi myślnik + postać („&mdash;&nbsp;Offred”), w kolorze <code>--nu-fg-secondary</code>, żeby kreska nie przeważyła nad tekstem")}</td></tr>
      <tr><td>${L("Prices","Ceny")}</td><td>${L("Tabular numerals. PLN with a comma (59,90&nbsp;z&#322;), EUR with a dot (&euro;14.00)","Cyfry tabelaryczne. PLN z przecinkiem (59,90&nbsp;z&#322;), EUR z kropką (&euro;14.00)")}</td></tr>
      <tr><td>${L("Filter counts","Liczniki filtrów")}</td><td>${L("Always reflect the current combination of other filters; options that would return zero are disabled","Zawsze odzwierciedlają bieżącą kombinację pozostałych filtrów; opcje bez wyników są wyłączone")}</td></tr>
      <tr><td>${L("Dictionary keys","Klucze słownika")}</td><td>${L(
        "A key opens with a short name for the place the string lives in, then says what the string is: <code>fName</code>, <code>errZip</code>, <code>secPay</code>, <code>qtyLess</code>. Nested groups are keyed by an id that comes from the data &ndash; <code>shipNames.inpost</code>, <code>aboutAuthor.f</code> &ndash; so the code can reach a value with whatever it already holds. Strings from the shop's earlier layer are named after their content (<code>back</code>, <code>clear</code>); the prefix binds new keys.",
        "Klucz zaczyna się od skróconej nazwy miejsca, w którym napis żyje, a dalej mówi, czym ten napis jest: <code>fName</code>, <code>errZip</code>, <code>secPay</code>, <code>qtyLess</code>. Grupy zagnieżdżone mają za klucze identyfikatory pochodzące z danych &ndash; <code>shipNames.inpost</code>, <code>aboutAuthor.f</code> &ndash; żeby kod sięgał po wartość tym, co już trzyma. Napisy z wcześniejszej warstwy sklepu nazywają się od treści (<code>back</code>, <code>clear</code>); przedrostek obowiązuje przy nowych.")}</td></tr>
      <tr><td>${L("Documentation","Dokumentacja")}</td><td>${L(
        "En dashes in prose. The em dash is kept for the quote attribution in the shop, where it stands for the act of naming the speaker.",
        "W prozie krótkie myślniki. Długi jest zarezerwowany dla podpisu pod cytatem w sklepie, gdzie zastępuje samo wskazanie mówiącego.")}</td></tr>
      <tr><td>${L("Author labels","Etykiety autorstwa")}</td><td>${L("Gendered in Polish (o autorce / o autorze / o osobie autorskiej) from the book's <code>gd</code> field","Odmieniane po polsku (o autorce / o autorze / o osobie autorskiej) na podstawie pola <code>gd</code>")}</td></tr>
    </tbody></table>` },
];

let dsCurrent = "overview";
/* The open tab is part of the address rather than a variable of its own: a
   reload keeps the reader where they were, Back steps between tabs, and a single
   tab can be linked to on its own - which is the point of documentation somebody
   else is meant to read. The id in the address is the section's own, so the same
   link holds in both languages. An address naming a tab that does not exist falls
   back to the first one instead of rewriting itself, which would put a step
   nobody took into the history. */
function dsFromHash(){
  const m = location.hash.match(/^#design\/(.+)$/);
  const id = m && decodeURIComponent(m[1]);
  return DS_SECTIONS.some(s => s.id === id) ? id : DS_SECTIONS[0].id;
}

/* Live preview, one implementation for every component that has one. Each
   section declares on the .ds-play element which table lists its options and
   which specimen row holds their content; nothing about the component itself is
   written here. A row is offered only when a developer could reach its state
   from the markup - a class, an attribute, or nothing at all. Pointer states
   like :hover are skipped, because there is no code to copy for them. */
function dsPlay(root){
  const escHTML = t => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const textOf = td => [...td.childNodes].filter(n => n.nodeType === 3)
    .map(n => n.textContent).join(" ").trim();
  const copyIcons = () => {
    const src = document.getElementById("promoCode");
    return src ? [...src.querySelectorAll("svg")].map(n => n.outerHTML).join("") : "";
  };

  root.querySelectorAll(".ds-play").forEach(wrap => {
    const cfg = wrap.dataset;
    const table = root.querySelector(cfg.src);
    const demo  = cfg.demo ? root.querySelector(cfg.demo) : null;
    if (!table) return;

    const opts = [...table.querySelectorAll("tbody tr")].map(tr => {
      const code = tr.children[0].querySelector("code")?.textContent.trim() || "";
      // some tables name the row in words, others let the selector be the name
      return {name: textOf(tr.children[0]) || code, code};
    }).filter(o => o.name && (!o.code.startsWith(":") || o.code === ":disabled"));
    if (!opts.length) return;

    const stage = wrap.querySelector(".ds-play-stage");
    const box   = wrap.querySelector(".ds-play-code");
    let oi = 0;

    const build = o => {
      const cls = o.code.startsWith(".") ? o.code.slice(1) : "";
      const el = document.createElement(cfg.tag);
      if (cfg.tag === "button") el.type = "button";
      // an <a> is not a link without one, so the section states what it needs
      if (cfg.attrs) for (const m of cfg.attrs.matchAll(/([\w-]+)="([^"]*)"/g)) el.setAttribute(m[1], m[2]);
      el.className = [cfg.base, cls].filter(Boolean).join(" ");
      const src = demo && demo.querySelector(cls ? "." + cls : (cfg.base ? "." + cfg.base : "[class]"));
      el.innerHTML = src ? src.innerHTML : o.name;
      if (o.code === ":disabled") el.disabled = true;
      const attr = o.code.match(/^\[([\w-]+)(?:="([^"]*)")?\]$/);
      if (attr) el.setAttribute(attr[1], attr[2] ?? "true");
      return el;
    };

    function chips(){
      const host = wrap.querySelector(".ds-play-opts");
      host.innerHTML = "";
      opts.forEach((o, i) => {
        const b = document.createElement("button");
        b.type = "button"; b.className = "chip";
        b.innerHTML = `<span class="chip-t"></span>`;
        b.firstChild.textContent = o.name;
        b.setAttribute("aria-pressed", String(oi === i));
        b.onclick = () => { oi = i; paint(); };
        host.appendChild(b);
      });
    }

    function paint(){
      const el = build(opts[oi]);
      stage.innerHTML = "";
      if (cfg.wrap){
        const frame = document.createElement("div");
        frame.className = cfg.wrap;
        frame.appendChild(el);
        stage.appendChild(frame);
      } else stage.appendChild(el);

      /* The build inlines every image as base64, so a specimen carrying one would
         put a few hundred kilobytes of data URI into a snippet meant to be copied.
         The path is what a developer needs there. */
      const clean = el.cloneNode(true);
      clean.querySelectorAll("img[src^='data:']").forEach(i => i.setAttribute("src", "…"));
      // the serialiser writes disabled=""; the shorthand is what anyone would type
      const openTag = clean.outerHTML.slice(0, clean.outerHTML.indexOf(">") + 1)
        .replace(/ disabled=""/, " disabled");
      const inner = [...clean.childNodes]
        .map(n => n.nodeType === 3 ? n.textContent.trim() : n.outerHTML).filter(Boolean);
      const close = `</${cfg.tag}>`;
      const markup = inner.length > 1
        ? `${openTag}\n  ${inner.join("\n  ")}\n${close}`
        : `${openTag}${inner.join("")}${close}`;

      box.innerHTML =
        `<div class="ds-code-head"><span class="ds-play-lbl">${L("Markup", "Markup")}</span>
           <button type="button" class="btn-tertiary has-icon" data-copy>
             <span class="lbl">${L("Copy", "Kopiuj")}</span>${copyIcons()}</button></div>
         <pre class="ds-code">${escHTML(markup)}</pre>`;
      box.querySelector("[data-copy]").onclick = async function(){
        const ok = await copyText(markup);
        this.classList.toggle("is-copied", ok);
        setTimeout(() => this.classList.remove("is-copied"), 1800);
      };
      chips();
    }
    paint();
  });
}

function renderDesignSystem(){
  const groups = [];
  DS_SECTIONS.forEach(s=>{
    const name = L(s.group.en, s.group.pl);
    let g = groups.find(x=>x.name === name);
    if (!g){ g = {name, items:[]}; groups.push(g); }
    g.items.push(s);
  });

  const nav = groups.map(g=>`
    ${g.name ? `<span class="ds-nav-group">${g.name}</span>` : ""}
    ${g.items.map(s=>`
      <button type="button" class="ds-nav-item ${s.id===dsCurrent?"is-active":""}"
              data-ds="${s.id}">${L(s.label.en, s.label.pl)}</button>`).join("")}
  `).join("");

  const section = DS_SECTIONS.find(s=>s.id===dsCurrent) || DS_SECTIONS[0];

  dsEl.innerHTML = `
    <div class="ds-head">
      <a class="foot-link link has-icon" id="dsBack" href="#">${ICON_BACK}<span class="lbl">nubook.</span></a>
    </div>
    <div class="ds-layout">
      <aside class="ds-nav">${nav}</aside>
      <div class="ds-body">${section.body()}</div>
    </div>`;

  dsMeasure(dsEl);
  dsHighlight(dsEl);
  dsPlay(dsEl);
  /* The chip row is the one specimen that works: toggling it is the quickest way
     to see that the state lives in the attribute and the underline follows. */
  /* The stepper specimens count for real: the disabled minus at one is the whole
     point of the component, and it only reads as a rule once it is felt. */
  dsEl.querySelectorAll(".ds-qty").forEach(row => {
    row.querySelectorAll(".qty").forEach(q => {
      const val = q.querySelector("span"), [less, more] = q.querySelectorAll("button");
      // the attribute has to go first: it and the property are the same slot,
      // so removing it afterwards would wipe the handler just assigned
      less.removeAttribute("onclick"); more.removeAttribute("onclick");
      const set = n => { val.textContent = n; less.disabled = n <= 1; };
      less.onclick = () => set(+val.textContent - 1);
      more.onclick = () => set(+val.textContent + 1);
    });
  });
  dsEl.querySelectorAll(".ds-chips .chip:not([disabled])").forEach(c => {
    c.onclick = () => c.setAttribute("aria-pressed", String(c.getAttribute("aria-pressed") !== "true"));
  });
  dsEl.querySelectorAll(".ds-nav-item").forEach(btn=>{
    /* The address does the work: route() reads it, sets the tab and scrolls. */
    btn.onclick = ()=>{ location.hash = "design/" + btn.dataset.ds; };
  });
}

/* ---------------------------------------------------------------- footer */
function renderFooter(){
  document.getElementById("footCopy").textContent =
    `\u00a9 ${new Date().getFullYear()} nubook. ${T().rights}`;
}
const _applyLangFoot = applyLang;
applyLang = function(){ _applyLangFoot(); renderFooter(); if (!dsEl.hidden) renderDesignSystem(); };
renderFooter();

applyLang();
applyCur();
render();
/* The badge counted only what happened in this visit; with a cart that outlives
   a reload it has to start from what was restored. */
applyScheme();
playIntro();
updateBadge(false);
route();
syncFilterToggle();
