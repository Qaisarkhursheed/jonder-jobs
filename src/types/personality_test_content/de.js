const A = {
  domain: 'A',
  title: 'Verträglichkeit ',
  shortDescription: 'Verträglichkeit zeigt die individuellen Unterschiede für die Bereitschaft zur Kooperation für die soziale Harmonie. Menschen mit stark ausgeprägter Verträglichkeit ist es wichtig sich mit anderen zu verstehen.',
  description: `Daher sind sie rücksichtsvoll, freundlich, großzügig, 
hilfsbereit und zu Kompromissen für das Wohl anderer bereit.  
Wohltuende Personen haben ebenfalls eine optimistische Sichtweise auf die 
menschliche Natur. Sie glauben, dass Menschen ehrlich, anständig und 
vertrauenswürdig sind. <br /><br /> 
Unverträgliche Individuen stellen ihr eigenes Interesse über das soziale Wohl.
Das Wohlergehen anderer ist ihnen generell gleichgültig, damit ist es unüblich
für sie sich für das Wohl anderer zu verausgaben. Gelegentlich hat ihre Skepsis
zur Folge, dass sie von anderen als verdächtig, unfreundlich und nicht kooperativ 
gesehen werden.
<br /><br />
Verträglichkeit ist offensichtlich von Vorteil um Popularität zu erlangen und zu 
halten. Verträgliche Menschen sind eher beliebt als unverträgliche Menschen.
Andererseits ist Verträglichkeit nicht in Situationen hilfreich, in 
denen harte oder absolut objektive Entscheidungen gefällt werden müssen. 
Unverträgliche Menschen können exzellente Wissenschaftler, Kritiker und Soldaten sein.`,
  results: [
    {
      score: 'low',
      text: `Deine Punktzahl für Verträglichkeit ist niedrig, was auf weniger
Interesse auf das Wohl anderer als dein eigenes hindeutet. Leute sehen dich als
hart, kritisch und kompromisslos.`
    },
    {
      score: 'neutral',
      text: `Dein Verträglichkeitslevel ist normal, welches auf etwas Interesse
auf das Wohl anderer hindeutet. Allerdings würdest du dich nicht unbedingt für
das Wohl anderer aufopfern.`
    },
    {
      score: 'high',
      text: `Dein hohes Level an Verträglichkeit deutet auf ein starkes
Interesse für die Bedürfnisse anderer. Du wirst als angenehm, sympathisch
und kooperativ angesehen.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Vertrauen',
      text: `Eine Person mit ausgeprägtem Vertrauen geht davon aus, dass
die meisten Leute fair, ehrlich, und guter Dinge sind. Personen mit niedrigem
Vertrauen sehen andere als egoistisch, hinterhältig und potentiell gefährlich.`
    },
    {
      facet: 2,
      title: 'Moral',
      text: `Menschen mit hohen Punkten auf dieser Skala sehen keine Notwendigkeit
auf Manipulation oder Täuschung zu greifen, wenn sie es mit anderen 
Menschen zu tun haben und wirken aufrichtig, offen und ehrlich. Menschen mit
niedrigen Punktzahlen glauben, dass eine gewisse Unehrlichkeit in sozialen
Beziehungen dazugehört. Leute empfinden es als einfach sich mit einem Menschen
mit hoher Punktzahl zu verknüpfen. Generell finden es Leute schwer sich mit
einem Menschen mit wenigen Punkten zu verknüpfen. Hier sei gesagt, dass eine
niedrige Punktzahl nicht bedeutet, dass jene Menschen unmoralisch sind; sie
sind lediglich verschlossener und halten sich mehr bedeckt.`
    },
    {
      facet: 3,
      title: 'Altruismus',
      text: `Altruistische Leute finden den Akt des Helfens anderer als 
wirklich bereichernd. Infolgedessen sind sie generell gewillt anderen Menschen
in Not zu helfen. Altruistische Menschen empfinden es als eine Form von 
Selbsterfüllung statt Selbstaufopferung, wenn sie Leuten in Not helfen. Menschen
mit wenig Punkten in dieser Skala mögen es nicht besonders Menschen in Not zu
helfen. Sie sehen den Aufruf zur Hilfe eher als Zwang statt einer Chance
zur Selbsterfüllung.`
    },
    {
      facet: 4,
      title: 'Kooperation',
      text: `Individuen mit einer hohen Punktzahl in dieser Kategorie mögen
keine Konfrontationen. Sie sind durchaus zu einem Kompromiss bereit oder
stellen ihre eigenen Bedürfnisse für das Wohl anderer zurück. Jene Menschen 
mit einer niedrigen Punktzahl sind eher dazu veranlagt andere einzuschüchtern
um ihren Willen durchzusetzen.`
    },
    {
      facet: 5,
      title: 'Bescheidenheit',
      text: `Menschen mit hoher Punktzahl in dieser Skala geben nicht gerne
zu, dass sie besser als andere Leute sind. In einigen Fällen leitet sich
diese Einstellung von niedrigem Selbstbewusstsein oder Selbstwertgefühl ab.
Dennoch finden manche Leute mit hohem Selbstbewusstsein Unanständigkeit als
ungehörig. Diejenigen die gewillt sind sich als überlegen zu beschreiben, 
tendieren dazu von anderen Leuten als arrogant gesehen zu werden.`
    },
    {
      facet: 6,
      title: 'Sympathie',
      text: `Menschen mit einer hohen Punktzahl in dieser Skala sind 
weichherzig und mitfühlend. Sie empfinden viel Mitleid und lassen sich leicht
von diesem berühren. Menschen mit niedriger Punktzahl sind nicht stark von
menschlichem Leid betroffen. Sie sind stolz auf ihre auf Tatsachen begründeten
objektiven Entscheidungen. Sie sorgen sich mehr um Wahrheiten und
unparteiischer Gerechtigkeit als Mitleid.`
    }
  ]
};

const E = {
  domain: 'E',
  title: 'Extraversion',
  shortDescription: 'Extraversion beschreibt das ausgeprägte Engagement mit der Außenwelt.',
  description: `Extrovertierte lieben die Gesellschaft anderer Leute, 
sind voller Energie, und empfinden oft positive Gefühle. Sie sind 
enthusiastische, handlungsorientierte Individuen, die dazu neigen mit 
"Ja!" oder "Auf geht's" auf neue Chancen für aufregende Aktivitäten zu antworten.
In Gruppen reden sie gerne, setzen sich durch und ziehen die 
Aufmerksamkeit auf sich.
<br /><br />
Introvertierten fehlt die Ausgelassenheit, die Energie, und die Lust auf 
Aktivitäten des Extrovertierten. Sie tendieren dazu leise, 
zurückhaltend, wohlüberlegt, und von der sozialen Welt losgelöst zu 
sein. Ihr Mangel an sozialer Beteiligung sollte nicht als Schüchternheit 
oder Depression interpretiert werden; die Introvertierten brauchen 
lediglich weniger Stimulation als ein Extrovertierter und sind gerne 
allein.<br /><br />Die Unabhängigkeit und die zurückhaltende Weise eines 
Introvertierten wird manchmal als Unfreundlichkeit oder Arroganz 
misverstanden. In Wirklichkeit wird ein Introvertierter mit hoher 
Verträglichkeit nicht auf Menschen zugehen, ist aber ein geselliger Typ 
wenn sie/er von anderen angesprochen wird.`,
  results: [
    {
      score: 'low',
      text: `Deine Punktzahl in Extraversion ist niedrig, was darauf 
hinweist, dass du introvertiert, zurückhaltend und leise bist. Du magst 
die Einsamkeit und Aktivitäten die du alleine machen kannst. Deine 
sozialen Aktivitäten beschränken sich auf wenige, aber nahe Freunde.`
    },
    {
      score: 'neutral',
      text: `Deine Punktzahl in Extraversion ist mittelmäßig, was darauf 
hinweist, dass du weder ein leiser Einzelgänger noch eine heitere 
Labertasche bist. Dir gefällt es Zeit mit anderen als auch mit dir 
selbst zu verbringen.`
    },
    {
      score: 'high',
      text: `Deine Punktzahl in Extraversion ist hoch, was eine 
gesellige, extrovertierte, energetische und lebendige Art hinweist. Du 
ziehst es vor so viel Zeit wie möglich mit anderen Leuten zu 
verbringen.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Freundlichkeit',
      text: `Freundliche Menschen zeigen aufrichtige positive Gefühle 
gegenüber anderen Leuten. Sie finden schnell Freunde und es fällt ihnen 
leicht enge, intime Beziehungen zu knüpfen. Menschen mit niedriger 
Punktzahl in Freundlichkeit sind nicht unbedingt kalt und feindselig, 
aber sie neigen dazu nicht auf Leute zuzugehen und werden von anderen 
als distanziert und zurückhaltend angesehen.`
    },
    {
      facet: 2,
      title: 'Geselligkeit',
      text: `Gesellige Menschen empfinden die Gesellschaft anderer Leute 
als positive Stimulation und belohnend. Sie genießen eine Aufregung für 
Menschenmengen. Menschen mit niedrigen Punkten in Geselligkeit sind 
leicht von Menschenmassen überfordert und meiden diese oft. Sie hassen 
die Gesellschaft anderer Menschen nicht, aber ihr Bedürfnis nach 
Privatsphäre und Zeit für sich selbst ist viel größer als das der Leute, 
die eine hohe Punktzahl in dieser Skala haben.`
    },
    {
      facet: 3,
      title: 'Durchsetzungsvermögen',
      text: `Menschen mit einer hohen Punktzahl in Durchsetzungsvermögen 
lieben es ihre Meinung zu sagen und das Kommando zu übernehmen. Sie 
tendieren dazu der Leiter in Gruppen zu sein. Menschen mit niedriger 
Punktzahl neigen dazu nicht viel zu reden und überlassen anderen das 
Kommando in Gruppenaktivitäten.`
    },
    {
      facet: 4,
      title: 'Tatendrang',
      text: `Aktive Individuen leben einen schnelles, beschäftigtes 
Leben. Sie sind energisch und nehmen an vielen Aktivitäten teil. 
Menschen mit einer niedrigen Punktzahl in dieser Skala führen ein 
langsameres und müßigeres, entspannteres Leben.`
    },
    {
      facet: 5,
      title: 'Risikobereitschaft',
      text: `Menschen mit hoher Punktzahl in dieser Skala sind 
ohne ein hohes Stimulationsniveau oft gelangweilt. Sie lieben grelle Lichter 
und das Gedränge der Massen. Sie gehen oft ein Risiko ein und suchen den 
Nervenkitzel. Menschen mit einer niedrigen Punktzahl sind oft von Lärm 
und Tumult überfordert und von Nervenkitzel abgeneigt.`
    },
    {
      facet: 6,
      title: 'Heiterkeit',
      text: `Diese Skala misst die positive Stimmung und die Gefühle, 
nicht die negativen Gefühle (diese sind Teil der Neurotizismus Domäne). 
Personen mit hoher Punktzahl auf dieser Skala empfinden typischerweise 
oft zahlreiche positive Gefühle, einschließlich von Glückseligkeit, 
Enthusiasmus, Optimismus und Freude. Menschen mit niedriger Punktzahl 
sind nicht so anfällig für diese energetische Munterkeit.`
    }
  ]
};

const N = {
  domain: 'N',
  title: 'Neurotizismus',
  shortDescription: 'Neurotizismus beschreibt die Tendenz zu negativen Gefühlen.',
  description: `Freud benutzte ursprünglich den Begriff Neurose um den 
Zustand der mentalen Verzweiflung, emotionalen Leidens und der 
Unfähigkeit die normalen Ansprüche des Lebens effizient zu bewältigen zu 
beschreiben. Er behauptete, dass jeder ein paar Zeichen von Neurose zeigt, 
aber dass sich diese in dem Ausmaß des Leidens und der spezifischen 
Symptome der Verzweiflung unterscheiden. Heutzutage bezieht sich 
Neurotizismus auf die Tendenz negative Gefühle zu durchleben. 
<br /><br />Die Menschen, die eine hohe Punktzahl in Neurotizismus haben, 
erleben primär ein spezifisches negatives Gefühl wie Angst, Wut, oder 
Depression, sind aber Anfällig dafür mehrere dieser Emotionen zu fühlen.
<br /><br />Diese Leute sind emotional reaktionsfreudig. Sie reagieren 
emotionaler auf Ereignisse als andere Menschen und ihre Reaktionen sind 
meist intensiver als bei anderen Menschen. Sie interpretieren gewöhnliche 
Situationen eher als bedrohlich, und kleine Frustrationen als 
hoffnungslose Fälle.
<br /><br />Ihre negativen emotionalen Reaktionen neigen dazu länger als 
gewöhnlich zu sein, was eine öftere schlechte Laune zur Folge hat. Diese 
Probleme bei der emotionalen Regulation reduziert sich bei einem Neurotiker 
auf die Fähigkeit klar zu denken, Entscheidungen zu treffen und Stress 
effektiv zu bewältigen.`,
  results: [
    {
      score: 'low',
      text: `Deine Punktzahl in Neurotizismus ist niedrig, was auf eine 
außergewöhnliche Ruhe, Gelassenheit und Unerschütterlichkeit hinweist. 
Du reagierst nicht mit starken Emotionen, auch wenn die meisten Leute 
die Situation als stressvoll beschreiben würden.`
    },
    {
      score: 'neutral',
      text: `Deine Punktzahl in Neurotizismus ist mittelmäßig, was auf 
eine Reaktionsweise hindeutet, die typisch für die Allgemeinbevölkerung 
ist. Anstrengende und frustrierende Situationen verärgern dich, aber du 
bist generell in der Lage Herr über deine Gefühle zu sein und die 
Situationen zu bewältigen.`
    },
    {
      score: 'high',
      text: `Deine Punktzahl in Neurotizismus ist hoch, was darauf 
hindeutet, dass du schneller verärgert bist, selbst bei dem was die 
meisten Menschen als normale Anforderungen des Lebens erachten. Leute 
sehen dich als sensibel und emotional.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Angst',
      text: `Die "Kampf-oder-Flucht"-Reaktion wird bei ängstlichen 
Individuen zu einfach und zu oft ausgelöst. Deshalb fühlen Menschen mit 
hoher Angst oft, dass jederzeit etwas gefährliches passieren wird. Sie 
können vor einer spezifischen Situation Angst haben oder sind generell 
ängstlich. Sie fühlen sich angespannt, zitterig und nervös. Personen mit 
wenig Angst sind in der Regel ruhig und furchtlos.`
    },
    {
      facet: 2,
      title: 'Wut',
      text: `Personen mit einer hohen Punktzahl in Wut sind oft erzürnt 
wenn etwas nicht auf ihre Weise passiert. Ihnen ist es wichtig fair 
behandelt zu werden und sie reagieren gereizt wenn sie das Gefühl haben, 
dass sie getäuscht werden. Diese Skala misst die Tendenz zur Wut; ob die 
Person Verärgerungen und Feindseligkeit zeigt hängt von der 
Verträglichkeit des Individuums ab. Personen mit niedriger Punktzahl in 
Wut werden weder schnell noch leicht böse.`
    },
    {
      facet: 3,
      title: 'Depression',
      text: `Diese Skala misst die Neigung dazu Traurigkeit, 
Schwermütigkeit, und Entmutigung zu fühlen. Personen mit hoher Punktzahl 
in Depression fehlt Energie und haben Schwierigkeiten Aktivitäten zu 
beginnen. Personen mit niedriger Punktzahl neigen dazu, diese depressiven 
Gefühle nicht zu haben.`
    },
    {
      facet: 4,
      title: 'Selbstbewusstsein',
      text: `Selbstbewussten Individuen ist es wichtig, was andere über 
sie denken. Ihre Sorge über Ablehnung und Spot lassen die Person 
schüchtern und ungemütlich in der Gesellschaft von anderen Leuten. Sie 
sind leicht und oft beschämt. Ihre Ängste, dass andere sie kritisieren 
oder über sie herziehen, sind oft übertrieben und unrealistisch, aber 
ihre Ungeschicklichkeit und Unwohlsein machen diese Ängste zu einer 
selbsterfüllenden Prophezeiung. Menschen mit niedriger Punktzahl 
hingegen leiden nicht unter diesem irrtümlichen Eindruck, dass jeder 
sie überwacht und verurteilt. Sie fühlen sich in sozialen Situationen 
nicht nervös.`
    },
    {
      facet: 5,
      title: 'Übermaß',
      text: `Übermäßige Individuen durchleben oft starke Gelüste und 
Triebe, denen sie nur schwer widerstehen können. Sie neigen zu 
kurzzeitigen Befriedigungen und Belohnungen statt langfristigen Zielen. 
Menschen mit niedriger Punktzahl erleben keine starken, 
unwiderstehlichen Gelüsten und können diesen somit nicht verfallen.`
    },
    {
      facet: 6,
      title: 'Empfindlichkeit',
      text: `Leute mit hoher Punktzahl in Empfindlichkeit erleben Panik, 
Verwirrung und Hilflosigkeit unter Druck oder Stress.
Menschen mit niedriger Punktzahl fühlen sich unter Stress 
selbstsicherer, zuversichtlicher und denken klarer.`
    }
  ]
};

const C = {
  domain: 'C',
  title: 'Gewissenhaftigkeit',
  shortDescription: 'Gewissenhaftigkeit beschäftigt sich mit der Art, wie wir unsere Impulse kontrollieren, regulieren und steuern.',
  description: `Impulse sind nicht grundsätzlich schlecht; gelegentlich ist es 
notwendig wegen Zeitdruck mit einer spontanen Entscheidung zu reagieren
und mit dem ersten Impuls ist es eine effektive Reaktion. Außerdem
kann es in nicht ernsten Lagen spaßig sein spontan und impulsiv zu reagieren. 
Impulsive Individuen können von anderen als facettenreich, kasperhaft und 
gesellig angesehen werden.
<br /><br />
Dennoch kann impulsives Handeln zu Problemen führen. Manche Impulse sind
asozial. Unkontrolliertes asoziales Handeln kann nicht nur anderen schaden,
es kann ebenfalls zu Rachegelüsten gegenüber dem Täter der impulsiven 
Handlungen führen. Ein weiteres Problem sind die ungewollten langfristigen
Konsequenzen, auch wenn vorerst sofortige Belohnungen entstehen. Zum Beispiel
der Verlust eines Jobs nach übermäßigem Sozialisieren, der Zusammenbruch einer
wichtigen Beziehung nachdem eine Beleidigung gefallen ist oder die Zerstörung
der eigenen Gesundheit durch rekreative Drogen.
<br /><br />
Impulsives Verhalten, auch wenn dieses nicht wirklich schädlich ist, reduziert
die Effektivität der Person in mehreren signifikanten Weisen. Das impulsive 
Handeln verhindert alternative Herangehensweisen an ein Problem, welche
weiser als die impulsive Entscheidung gewesen wären. Impulsivität lenkt 
den Menschen ab, wenn ein Projekt einen organisierten Plan verfolgt. 
Errungenschaften einer impulsiven Person sind daher klein, weit gestreut und
inkonsistent.
<br /><br />
Ein Kennzeichen von Intelligenz, etwas was potentiell den Menschen von früheren
Lebensformen unterscheidet, ist die Fähigkeit über zukünftige Konsequenzen
nachzudenken, bevor nach einem Impuls gehandelt wird. Intelligente Aktivitäten 
erfordern das Reflektieren über Langzeitziele, das Planen und Organisieren der
Schritte zu diesem Ziel, sowie das Durchhaltevermögen für das Ziel gegenüber
kurzzeitigen Impulsen. Die Idee, dass Intelligenz das Kontrollieren von Impulsen
beinhaltet, deckt sich mit dem Begriff Vernunft, welches ein anderer Titel für
die Gewissenhaftigkeitsdomäne ist. Vernunft bedeutet hier sowohl Weise als auch
Behutsam zu sein.
<br /><br/>
Personen mit hoher Punktzahl in der Gewissenhaftigkeitsskala werden in der Tat
von anderen als intelligent wahrgenommen. Die Vorteile von hoher 
Gewissenhaftigkeit sind offensichtlich. Gewissenhafte Individuen vermeiden 
Schwierigkeiten und haben ein hohes Maß an Erfolg durch zielgerichtetes Planen
und Beständigkeit. Sie sind außerdem von anderen als intelligent und 
zuverlässig angesehen. Auf der anderen Seite können sie zwanghafte 
Perfektionisten und Workaholics sein. Des weiteren könnten extrem gewissenhafte
Leute als spießig und langweilig angesehen werden.
<br /><br />
Ungewissenhafte Menschen können für ihre Unzuverlässigkeit, Mangel an Ehrgeiz,
und das Scheitern im Rahmen zu bleiben kritisiert werden, aber sie durchleben
viele kurzzeitige Vergnügungen und werden niemals als spießig angesehen.`,
  results: [
    {
      score: 'low',
      text: `Deine Punktzahl in Gewissenhaftigkeit ist niedrig, was darauf 
hinweist, dass du für den Moment lebst und tust, was sich für dich im Moment gut
anfühlt. Deine Arbeitsweise neigt dazu unbekümmert und unorganisiert zu sein.`
    },
    {
      score: 'neutral',
      text: `Deine Punktzahl in Gewissenhaftigkeit ist mittelmäßig. Das 
bedeutet, dass du ziemlich zuverlässig und organisiert bist und dich selbst
beherrscht.`
    },
    {
      score: 'high',
      text: `Deine Punktzahl in Gewissenhaftigkeit ist hoch. Das bedeutet, dass
du dir klare Ziele setzt und diese mit Entschlossenheit verfolgst. Andere Leute
sehen dich als zuverlässig und fleißig.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Kompetenz',
      text: `Kompetenz beschreibt die Selbsticherheit in die eigene Fähigkeit
Dinge zu erreichen. Menschen mit hoher Punktzahl glauben, sie haben die nötige
Intelligenz (gesunden Menschenverstand), Trieb und Selbstkontrolle, um einen
Erfolg zu erzielen. Menschen mit niedriger Punktzahl fühlen sich ineffektiv,
und können den Gedanken haben, ihr Leben nicht im Griff zu haben.`
    },
    {
      facet: 2,
      title: 'Ordnungsliebe',
      text: `Personen mit hoher Punktzahl in Ordnungsliebe sind gut 
organisiert. Sie lieben es, ihr Leben in Routinen und Termine einzuteilen. Sie
schreiben Listen und machen Pläne. Menschen mit niedriger Punktzahl neigen dazu
unorganisiert und zerstreut zu sein.`
    },
    {
      facet: 3,
      title: 'Pflichtbewusstsein',
      text: `Diese Skala reflektiert die Stärke der Pflichtauffassung einer 
Person. Jene, die eine hohe Punktzahl in dieser Skala erzielen, haben einen starken
Drang ihren moralischen Pflichten nachzugehen. Menschen mit niedriger Punktzahl
finden Verträge, Regeln, und Vorschriften zu begrenzend. Sie neigen dazu als 
unzuverlässig oder sogar verantwortungslos gesehen zu werden.`
    },
    {
      facet: 4,
      title: 'Leistungsstreben',
      text: `Individuen, die eine hohe Punktzahl in dieser Skala erreichen, 
streben sehr nach Spitzenleistungen. Ihr als erfolgreich angesehenes Streben
hält sie auf der Spur für ihre hoch gesteckten Ziele. Sie haben oft einen
konkreten Lebensweg, aber Menschen mit extrem hohen Punktzahlen sind möglicherweise zu 
zielgerichtet und besessen mit ihrer Arbeit. Menschen mit niedriger Punktzahl
genügt es ihre Arbeit mit minimalem Aufwand zu erledigen und können von
anderen als faul gesehen werden.`
    },
    {
      facet: 5,
      title: 'Selbstdisziplin',
      text: `Selbstdisziplin, welches viele Leute auch Willenskraft nennen,
beschreibt die Fähigkeit an einem Problem oder einer unangenehmen Tätigkeit
konsequent zu arbeiten, bis diese erledigt ist. Leute mit hoher Selbstdisziplin
sind in der Lage den Widerwillen zu bezwingen um Aufgaben zu beginnen und 
bis zum Ende zu führen, ohne abgelenkt zu werden. Jene mit wenig Selbstdisziplin
schieben ihre Arbeiten auf und zeigen wenig Durchhaltevermögen. Dabei scheitern
sie daran ihre Aufgaben zu erledigen, auch wenn sie das durchaus möchten.`
    },
    {
      facet: 6,
      title: 'Besonnenheit',
      text: `Besonnenheit beschreibt die Einstellung die möglichen Ergebnisse
zu durchdenken, bevor gehandelt wird. Menschen mit hoher Punktzahl in 
Besonnenheit nehmen sich die Zeit und denken über ihre Entscheidungen nach.
Menschen mit niedriger Punktzahl handeln oft nach dem ersten Gedanken ohne 
über Alternativen und mögliche Konsequenzen dieser Alternativen nachzudenken.`
    }
  ]
};

const O = {
  domain: 'O',
  title: 'Offenheit für Erfahrungen',
  shortDescription: 'Offenheit für Erfahrungen beschreibt eine geistige Dimension, die zwischen einfallsreichen, kreativen Menschen und bodenständigen, konventionellen Menschen unterscheidet.',
  description: `Offene Menschen sind geistig neugierig, schätzen Kunst, und 
haben ein Auge für Schönheit. Sie tendieren dazu, im Gegensatz zu geschlossenen
Leuten, mehr im Einklang mit ihren Gefühlen zu sein. Sie neigen dazu, in 
ungewöhnlicher Weise zu denken oder zu handeln. Intellektuelle erzielen 
üblicherweise eine hohe Punktzahl in Offenheit für Erfahrungen; 
Infolgedessen wird dieser Faktor auch Kultur oder Intellekt genannt.
<br /> <br />
Nichtsdestotrotz wird Intellekt besser als einer der Aspekte von 
Offenheit für Erfahrungen betrachtet. Punktzahlen in Offenheit für 
Erfahrungen sind nur bedingt mit der Bildung oder Ergebnissen von 
standardisierten Intelligenztests verbunden. <br /><br />
Eine andere Charakteristik des geistig offenen Stils ist eine 
Leichtigkeit für abstraktes Denken, weit entfernt von konkreten 
Erfahrungen. Je nachdem was genau diese spezielle Fähigkeit des 
Individuums ist, kann sie in der Form vom Mathematik, logischem 
oder geometrischem Denken, kunstvoller oder metaphorischer Nutzung der 
Sprache, musikalischen Kompositionen oder Auftritten, oder eine der 
vielen visuellen oder darstellenden Künsten ausgeprägt sein.
<br /><br />
Menschen mit niedriger Punktzahl in Offenheit für Erfahrungen tendieren 
zu üblichen, knappen Interessen. Sie bevorzugen das Einfache, 
Unkomplizierte, und Offensichtliche gegenüber dem Komplexen, Mehrdeutigen, und 
Subtilen. Sie könnten Kunst und Wissenschaft gegenüber misstrauisch sein 
und die Bemühungen als abstrus und ohne praktischen Nutzen sehen. 
Verschlossene Menschen ziehen Gewohnheit Neuheiten vor; sie sind 
konservativ und resistent gegenüber Veränderungen.
<br /><br />
Offenheit wird von Psychologen oft als gesünder und erwachsener 
gehalten, wenn sie selbst offen gegenüber neuen Erfahrungen sind. 
Allerdings sind beide Denkweisen in verschiedenen Umgebungen nützlich. 
Der intellektuelle Stil der offenen Person könnte für einen 
Professoren brauchbar sein, während Forschungen zeigten, dass 
geschlossene Denkweisen zu überlegenden Arbeitsleistungen in der 
Polizeiarbeit, im Verkauf und einigen Dienstleistungsberufen führen.`,
  results: [
    {
      score: 'low',
      text: `Deine Punktzahl in Offenheit für Erfahrungen ist niedrig, 
was darauf schließen lässt, dass du gerne in schlichter und einfacher 
Weise denkst. Andere beschreiben dich als bodenständig, pragmatisch und 
konservativ.`
    },
    {
      score: 'neutral',
      text: `Deine Punktzahl in Offenheit für Erfahrungen ist 
durchschnittlich, was darauf schließen lässt, dass du gerne 
traditionell denkst, aber offen für neue Dinge bist. Deine Denkweise ist 
weder simpel noch komplex. Auf andere wirkst du wie eine gebildete 
Person, aber nicht wie ein Intellektueller.`
    },
    {
      score: 'high',
      text: `Deine Punktzahl in Offenheit für Erfahrungen ist hoch, was 
darauf schließen lässt, dass du Neuheiten, Abwechslung und Veränderungen 
magst. Du bist neugierig, einfallsreich und kreativ.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Einbildungskraft',
      text: `Für einfallsreiche Individuen ist die reale Welt
oft zu einfach und gewöhnlich. Menschen mit hoher Punktzahl in dieser 
Skala nutzen die Fantasie als einen Weg um eine reichere, interessantere 
Welt zu schaffen. Menschen mit niedriger Punktzahl auf diesem Gebiet 
sind mehr an Fakten als an Fantasie interessiert.`
    },
    {
      facet: 2,
      title: 'Künstlerisches Interesse',
      text: `Menschen mit hoher Punktzahl in dieser Skala lieben 
Schönheit sowohl in der Kunst als auch in der Natur. Sie vertiefen sich 
schnell und einfach in Kunst- und Naturereignisse. Sie sind oft nicht 
künstlerisch geschult, obwohl es viele später werden. Das entscheidende 
Detail dieser Skala ist das Interesse in, und Wertschätzung von 
natureller und künstlerischer Schönheit. Menschen mit niedriger 
Punktzahl fehlt die ästhetische Sensibilität und das Interesse an 
Kunst.`
    },
    {
      facet: 3,
      title: 'Emotionalität',
      text: `Personen mit hoher Emotionaliät haben eine gute Kontrolle über 
und Wahrnehmung ihrer eigenen Gefühle. Menschen mit niedriger Punktzahl 
sind sich ihrer Gefühle weniger bewustt und tendieren dazu, diese nicht 
offen zu zeigen.`
    },
    {
      facet: 4,
      title: 'Abenteuerlust',
      text: `Menschen mit hoher Punktzahl in Abenteuerlust sind gewillt 
neue Aktivitäten zu versuchen, in fremde Länder zu reisen und 
verschiedene Dinge zu erleben. Sie finden Vertrautheit und Routine 
langweilig und fahren einen neuen Weg nach Hause, nur weil er anders 
ist. Menschen mit niedriger Punktzahl neigen zu Unwohlsein bei 
Veränderungen und ziehen vertraute Routinen vor.`
    },
    {
      facet: 5,
      title: 'Intellekt',
      text: `Intellekt und künstlerisches Interesse sind die zwei 
wichtigsten, zentralen Aspekte von Offenheit für Erfahrungen. Menschen 
mit hoher Punktzahl in Intellekt lieben es mit Ideen zu spielen. Sie 
sind unvoreingenommen gegenüber neuen und ungewöhnlichen Ideen, und 
mögen es über intellektuelle Probleme zu diskutieren. Ihnen gefallen 
Rätsel, Puzzle und Denkaufgaben. Menschen mit niedriger Punktzahl 
bevorzugen es mit Menschen oder Dingen statt Ideen zu arbeiten. Sie 
sehen intellektuelle Übungen als eine Zeitverschwendung. Intellekt 
sollte nicht mit Intelligenz verwechselt werden. Intellekt ist eine 
Denkweise, keine Fähigkeit, auch wenn Menschen mit hoher Punktzahl in 
standardisierten Intelligenztests meist besser abschneiden als Menschen 
mit niedriger Punktzahl.`
    },
    {
      facet: 6,
      title: 'Liberalismus',
      text: `Psychologischer Liberalismus bezieht sich auf eine 
Bereitschaft um die Autorität, Konvention und traditionelle Werte in 
Frage zu stellen. In seiner extremsten Form zeigt psychologischer 
Liberalismus absolute Feindseligkeit gegenüber Regeln, Sympathie für 
Gesetzesbrecher, und eine Liebe für Unklarheit, Chaos und Unordnung. 
Psychologische Konservative bevorzugen die Sicherheit und Stabilität 
durch Anpassung an Traditionen. Psychologischer Liberalismus und 
Konservatismus spiegeln nicht die politische Gesinnung wieder, die 
Individuen neigen aber oft zu bestimmten politischen Parteien.`
    }
  ]
};

export default [
  A,
  N,
  C,
  O,
  E
];