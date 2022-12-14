
const A = {
  domain: 'A',
  title: 'Convivialité',
  shortDescription: "La convivialité évalue l'esprit d'équipe, les interactions sociales et la capacité à bien s'entendre avec les autres",
  description: "Les personnes conviviales se considérent comme amicales, généreuses, serviables et sont plus enclines aux compromis, ils ont également une vision optimiste du genre humain. Ils croient en l'honnêteté, la décence et la confiance envers les autres.  <br /><br />Les moins conviviaux placent leurs intérêts au-dessus de ceux d'autrui. Ils se sentent moins concernés par le bien-être des autres et donc ne les aident pas. Ils sont souvent sceptiques sur les motivations des autres, voire suspicieux, froids et peu coopératifs.  <br /><br /> Etre convivial est évidemment un avantage, pour atteindre et maintenir une popularité. Les individus conviviaux sont plus appréciés. D'un autre coté, c'est un désavantage dans des situations nécessitant une certaine objectivité. Les individus avec un score bas font d'excellents scientifiques, critiques ou soldats.",
  results: [
    {
      score: 'low',
      text: "Votre score est bas, cela indique que vous vous sentez moins concerné par les autres que par vous même. Votre entourage dit de vous que vous êtes dur, critique et n'êtes pas enclin au compromis."
    },
    {
      score: 'neutral',
      text: 'Votre score est dans la moyenne, cela indique que vous vous sentez concerné par les autres mais que vous avez des reticences à vous sacrifiez pour eux.'
    },
    {
      score: 'high',
      text: "Votre score haut, cela indique que vous portez un grand intérêt au autres et leur bien être. Votre entourage dit de vous que vous êtes quelqu'un d'agréable, sympathique et coopératif."
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Confiance',
      text: "Avec un score bas, vous partez du principe que la plupart des gens sont égocentriques, sournois et potentiellement dangereux. Avec un score dans la moyenne, vous n'avez pas d'a priori sur les gens et vous leurs faites confiance tout en étant prudent. Avec un score haut, vous partez du principe que la plupart des gens sont justes, honnêtes et ont de bonnes intentions."
    },
    {
      facet: 2,
      title: 'Moralité',
      text: "Avec un score bas, vous êtes partisan d'une dose de déception dans vos relations sociales. Elles sont plus complexes et prudentes qu'ouvertes et sincères. Avec un score dans la moyenne, vous êtes plutot honnête mais savez manier la ruse quand cela est nécessaire. Avec un score haut, vous ne voyez aucun intérêt aux faux-semblants ou à la manipulation lors de vos interactions avec les autres, vous préférez la franchise et la sincérité. Vos relations sociales sont simples et apaisées."
    },
    {
      facet: 3,
      title: 'Altruisme',
      text: "Avec un score bas, vous n'aimez pas particulièrement aider ceux qui sont dans le besoin. Vous vivez les demandes d'assistance comme un ordre et non une opportunité d'épanouissement. Avec un score dans la moyenne, vous aidez les gens dans le besoin avec bon cœur quand ils le demandent. Avec un score haut, vous apréciez aider les autres sans forcément attendre de gratification en retour. En conséquence, vous aidez volontairement ceux dans le besoin. Vous trouvez une forme d'épanouissement en accomplissant des choses pour les autres."
    },
    {
      facet: 4,
      title: 'Coopération',
      text: "Avec un score bas, vous préférez intimider les autres pour mener les choses où vous le souhaitez. Avec un score dans la moyenne, vous êtes coopératif tout en sachant défendre vos points de vue. Avec un score haut, vous n'aimez pas la confrontation. Vous préférez faire des compromis ou renier vos besoins pour bien vous entendre avec les autres."
    },
    {
      facet: 5,
      title: 'Modestie',
      text: "Avec un score bas, vous adorez la compétition et vous mesurer aux autres. Vous avez une grande confiance en vous et vos capacités. Avec un score dans la moyenne, la compétition ne vous fait pas peur, mais vous ne la recherchez pas particulièrement. Avec un score haut, vous n'appréciez pas la comparaison aux autres. Dans certains cas, vous aurez moins confiance en vous ou une tendance à vous sous-estimer. Néanmoins, vous trouvez inconvenants les gens ayant une haute estime d'eux même. Ceux se décrivant comme supérieurs vous sont désagréables et vous semblent arrogants."
    },
    {
      facet: 6,
      title: 'Sympathie',
      text: "Avec un score bas, vous n'êtes pas touché par les souffances des autres. Vous vous considérez comme quelqu'un d'objectif au jugement basé sur la raison plus concerné par l'impartialité que par la compassion. Avec un score dans la moyenne, vous faite preuve d'empathie tout en ne vous laissant pas submerger par elle. Avec un score haut, vous êtes tendre et empathique. Vous ressentez la douleur ou les soucis des autres et éprouvez de la compassion."
    }
  ]
};

const E = {
  domain: 'E',
  title: 'Extraversion',
  shortDescription: "L'extraversion est marquée par un engagement prononcé pour le monde extérieur.",
  description: "Les extravertis s'épanouissent en groupe, sont énergiques et sont enclins à ressentir des émotions positives. Ils sont enthousiastes, orientés vers l'action. Ils préférent dire \"Oui\" ou \"C'est parti !\" aux opportunités excitantes. En groupe ils apprécient de discuter, s'affirmer et attirer l'attention sur eux.  <br /><br />Les introvertis n'apprécient pas l'exubérance, l'énergie et le niveau d'activité des extravertis. Ils aspirent au calme, la discrétion et le désengagement du monde social. Ils fuient l'implication sociale qui ne doit pas être interprétée comme de la timidité ou de la dépression. Ils ont juste besoin de moins de stimulations que les extravertis et préfèrent la solitude.  <br /><br />L'indépendance et la réserve des introvertis sont parfois interprétées à tort comme de la froideur ou de l'arrogance. En réalité, un introverti qui a un score haut en Convialité ne recherchera pas la compagnie des autres mais prendra plaisir à les rencontrer.",
  results: [
    {
      score: 'low',
      text: "Votre score bas, cela indique que vous êtes introverti, reservé et silencieux. Vous appréciez la solitude et les activités individuelles. Votre cercle d'amis est assez restreint."
    },
    {
      score: 'neutral',
      text: "Votre score dans la moyenne, cela indique que vous n'êtes ni une personne solitaire, ni joviale. Vous appréciez le temps passé avec les autres mais également la solitude de certains moments."
    },
    {
      score: 'high',
      text: 'Votre score haut, cela indique que vous êtes sociable, ouvert et plein de vie. Vous préférez passer votre temps avec les autres plutôt que seul.'
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Bienveillance',
      text: "Avec un score bas, vous n'êtes pas froid ou hostile, mais vous ne recherchez pas spécialement les autres et préférez préserver une certaine distance ou réserve. Avec un score dans la moyenne, vous appréciez les autres mais savez également conserver une distance quand c'est nécessaire. Avec un score haut, vous appréciez sincèrement les autres, et exprimez ces sentiments positifs. Vous vous faites des amis rapidement et facilement."
    },
    {
      facet: 2,
      title: 'Conformisme',
      text: "Avec un score bas, vous vous sentez submergé par la foule ou le groupe. Vous appréciez être avec les autres, mais vous avez besoin d'intimité et de temps pour vous. Avec un score dans la moyenne, vous appréciez la compagnie des autres mais également les moments de solitude. Avec un score haut, vous trouvez la compagnie des autres plaisante et stimulante. Vous aimez l'excitation de la foule."
    },
    {
      facet: 3,
      title: 'Assurance',
      text: "Avec un score bas, vous ne parlez pas beaucoup et laissez les autres le soin de diriger. Avec un score dans la moyenne, vous prenez la parole ou dirigez quand c'est nécessaire sans que cela vous coûte. Avec un score haut, vous aimez dire ce que vous pensez, prendre le contrôle des choses et diriger."
    },
    {
      facet: 4,
      title: 'Activité',
      text: "Avec un score bas, vous suivez le mouvement paisiblement à votre rythme. Avec un score dans la moyenne, vous avez un niveau d'activité normal. Vous savez / pouvez mettre un coup d'accélérateur quand c'est nécessaire. Avec un score haut, vous avez une vie effrénée et bien remplie. Vous vous déplacez rapidement, énergiquement et vigoureusement. Vous vous impliquez dans beaucoup d'activités."
    },
    {
      facet: 5,
      title: 'Enthousiasme',
      text: "Avec un score bas, vous préférez le calme. Avec un score dans la moyenne, vous savez apprécier le calme mais aussi les activités en général. Avec un score haut, vous vous ennuyez facilement sans un niveau élevé de stimulation. Vous aimez les grandes activités, l'agitation, prendre des risques et ressentir le frisson."
    },
    {
      facet: 6,
      title: 'Gaieté',
      text: "Ce score mesure le sentiment et l'état d'esprit positif ou négatif. Avec un score bas, vous êtes moins dynamique et moins joyeux. Avec un score dans la moyenne, vous êtes quelqu'un d'optimiste sans être exubérant Avec un score haut, vous ressentez plutôt les émotions positives comme le bonheur, l'optimisme ou la joie."
    }
  ]
};

const N = {
  domain: 'N',
  title: 'Névrosisme',
  shortDescription: 'Névrosisme réfère à une tendance à vivre des émotions négatives',
  description: "Freud utilisait originellement le terme \"névrose\" pour décrire une situation mentalement bouleversante, émotionnellement blessante et une incapacité à surmonter les situations normales de la vie. Il a suggéré que chacun montre des signes de névrose, mais que nous en souffrons à différents degrés et de façons différentes. Aujourd'hui le névrosisme se référe à la gestion des situations émotionnellement négatives. <br /><br />Ceux ayant un score haut éprouvent principalement un sentiment spécifique négatif comme l'anxiété, la colère ou la dépression, mais probalement plusieurs de ces derniers. <br /><br />Les individus au score haut sont émotionnellement réactifs. Ils répondent émotionnellement aux événements qui normalement n'affecteraient pas les autres, et ils réagissent plus intensément que la normale. Ils interprètent les situations normales comme menaçantes, et minorent les frustrations comme le désespoir. <br /><br />Leurs réactions émotionnelles négatives ont tendance à persister exceptionnellement sur de longues périodes, ce qui signifie qu'ils se sentent mal. Ces problèmes dans le régulations des émotions peuvent être diminués par une capacité à penser clairement, à prendre des décisions et à surmonter efficacement le stress",
  results: [
    {
      score: 'low',
      text: 'Votre score bas indique que vous êtes exceptionnellement calme et imperturbable. Vous ne réagissez pas intensément à vos émotions, même dans des situations stressantes.'
    },
    {
      score: 'neutral',
      text: 'Votre score dans la moyenne indique que vous réagissez à vos émotions comme la plupart des gens. Les situations stressantes et frustrantes vous agacent, mais généralement vous contrôlez vos sentiments pour faire face à ces situations.'
    },
    {
      score: 'high',
      text: 'Votre score haut indique que vous vous agacez facilement, même dans des situations considérées comme normales. Les autres vous considèrent comme sensible et émotionnellement réceptif.'
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Anxiété',
      text: "Avec un score bas, vous n'êtes pas facilement inquiet. Avec un score dans la moyenne, vous n'êtes pas particulièrement anxieux mais vous ressentez le stress et la pression. Avec un score haut, le mécanisme \"combat-fuite\" de votre cerveau se déclenche plus facilement ou trop souvent. Cela induit un haut niveau d'anxiété et souvent un sentiment de danger vous submerge dans certaines situations ou en permanence. Vous vous sentez tendu et nerveux."
    },
    {
      facet: 2,
      title: 'Colère',
      text: "Cet indice mesure la tendance à ressentir de la colère. Avec un score bas, vous ne vous enervez que très rarement Avec un score dans la moyenne, certains sujets vous agacent mais vous savez vous contrôler. Avec un score haut, vous vous sentez enragé quand les choses vont de travers. Vous exigez d'être traité avec équité et vous vous sentez aigri et amer quand vous avez l'impression d'être floué. En fonction de votre niveau de convivialité vous exprimez votre hostilité et votre mécontentement."
    },
    {
      facet: 3,
      title: 'Dépression',
      text: "Cet indice mesure la tendance à se sentir triste, rejeté et découragé. Avec un score bas, vous tendez à vous libérer des sentiments dépressifs. Avec un score dans la moyenne, il peut parfois vous arriver d'éprouver ces émotions mais cela ne dure pas. Avec un score haut, vous avez moins d'énergie et des difficultés à prendre des initiatives."
    },
    {
      facet: 4,
      title: 'Conscience de soi',
      text: "La conscience de soi est sensible à ce que les autres pensent de vous. Elle concerne les causes de rejet et de ridicule et entraîne un sentiment d'inconfort et de la timidité. Avec un score bas, vous ne souffrez pas du regard ou du jugement des autres. Vous n'êtes pas nerveux dans vos interactions sociales. Avec un score dans la moyenne,rares sont les situations qui vous mettent mal à l'aise. Avec un score haut, vous vous sentez souvent embarassé et honteux. Vous avez peur que les autres vous critiquent ou se moquent de vous de façon exagérée et irréaliste. vous avez peur que votre maladresse et votre inconfort vous empêche d'évoluer."
    },
    {
      facet: 5,
      title: 'Immodération',
      text: "Avec un score bas, vous n'avez pas d'envie irrésistible et n'êtes pas tenté par les excès. Avec un score dans la moyenne, vous n'êtes pas particulièrement addict mais vous appréciez un petit excès de temps à autre. Avec un score haut, vous ressentez de fortes envies ou urgences que vous avez du mal à contrôler. Vous vous tournez plus facilement vers les récompenses ou plaisirs immédiats plutôt qu'à long terme."
    },
    {
      facet: 6,
      title: 'Vulnérabilité',
      text: "Avec un score bas, vous vous sentez posé, confiant et clairvoyant sous l'effet du stress. Avec un score dans la moyenne, vous vous sentez habituellement capable de faire face aux situations. Avec un score haut vous pouvez vous sentir paniqué, confus et impuissant quand vous êtes soumis au stress ou à la pression."
    }
  ]
};

const C = {
  domain: 'C',
  title: 'Conscience',
  shortDescription: 'La conscience concerne la façon dont on controle, régule, ou dirige nos impulsions.',
  description: "Les impulsions sont par définition mauvaises. Occasionnellement, certaines contraintes impliquent de casser des décisions et nécessitent une action rapide, alors les impulsions sont efficaces. De plus hors du cadre du travail, lors de jeux par exemple, agir de façon spontanée et impulsive peut être amusant. Les impulsifs peuvent être vus comme divertissants ou loufoques.  <br /><br />Néanmoins, agir sous le coup d'une impulsion peut être mauvais. Certaines impulsions sont anti-sociales. Les actes anti-sociaux non contrôlés ne blessent pas seulement des membres de la société, mais les auteurs peuvent également encourir des sanctions. Un autre souci est l'immédiateté d'un résultat pas toujours désiré ou ayant des conséquences sur le long-terme. Par exemple impliquant un licenciement, hurler et insulter sur un collègue peut causer la destruction d'une importante relation de travail ou encore l'utilisation de drogue induit un plaisir immédiat mais une détérioration de l'état de santé sur le long terme.  <br /><br />Un comportement impulsif, non destructif, peut fortement réduire l'efficacité. Agir de façon impulsive interdit les actions alternatives, qui auraient pu être envisagées. L'impulsivité peut également distraire les participants d'un projet nécessitant une organisation séquentielle. La réussite d'une personne impulsive est donc faible, éparpillée et inconsistante.  <br /><br />Une des caractéristiques de l'intelligence, ce qui potentiellement différencie l'être humain des anciennes formes de vie, est la capacité à penser aux conséquences avant d'agir sur une impulsion. Une activité intelligente implique la prise en compte de but à long terme, l'organisation et la planification des différents chemins pour arriver à ces buts pour désamorcer les impulsions à court terme. L'idée que l'intelligence implique le contrôle de ses impulsions est représentée  par l'indice de prudence, un synonyme du domaine de la Conscience.  <br /><br />Les individus ayant un score haut passent auprès des autres pour être intelligents et fiables. Les bénéfices sont indéniables. Ils évitent les soucis et réussissent à travers leur détermination et leur planification. Un des côtés négatifs, est qu'ils peuvent être compulsifs, perfectionnistes ou addictes au travail. A l'extrême ils peuvent passer pour étouffants ou ennuyeux.  <br /><br />Les individus présentant un score bas peuvent être critiqués pour leur faillibilité, leur manque d'ambition et leurs échecs à rester dans les clous, mais ils expérimenteront le plaisir du court-terme et ne seront jamais perçus comme étouffants.",
  results: [
    {
      score: 'low',
      text: 'Votre score bas indique que vous aimez vivre le moment présent et faire ce qui vous rend heureux sur le moment. Votre travail tend à être négligé et désorganisé.'
    },
    {
      score: 'neutral',
      text: 'Votre score dans la moyenne indique que vous êtes plutôt fiable, organisé et que vous savez vous contrôler.'
    },
    {
      score: 'high',
      text: 'Votre score haut indique que vous vous fixez des buts précis et les atteignez avec détermination. Les autres vous voient comme un travailleur acharné.'
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Auto-efficacité',
      text: "L'auto-efficacité décrit votre confiance en votre capacité à accomplir les choses. Avec un score bas, vous ne vous sentez pas efficace et ressentez un sentiment de perte de contrôle dans ce que vous entreprenez. Avec un score dans la moyenne, vous connaissez vos limites et arrivez à estimer vos capacités à accomplir une tâche assez justement. Avec un score haut, vous pensez avoir les capacités de contrôle ou de gestion nécessaires pour accomplir avec succès n'importe quoi."
    },
    {
      facet: 2,
      title: 'Organisation',
      text: 'Avec un score bas, vous avez tendance à vous désorganiser et vous éparpiller. Avec un score dans la moyenne, vous êtes organisé sans être trop pointilleux. Avec un score haut, vous êtes bien organisé. Vous aimez vos routines et planifier les choses. Vous faites des listes et des plans.'
    },
    {
      facet: 3,
      title: 'Respect',
      text: "Le respect représente votre sentiment de devoir et d'obligation. Avec un score bas, vous trouvez les contrats, règles et règlementations trop contraignantes. Vous êtes vu comme quelqu'un de peu fiable ou irresponsable. Avec un score dans la moyenne, les règles et contraintes ne vous dérangent pas. Avec un score haut, vous avez un grand sens moral et obligataire."
    },
    {
      facet: 4,
      title: 'Persévérance',
      text: "Avec un score bas, vous vous contentez de faire le minimum. Les autres vous voient comme un paresseux. Avec un score dans la moyenne, vous savez être ambitieux quand il le faut. Avec un score haut, vous faites tout votre possible pour atteindre l'excellence. Vous continuez pour être reconnu pour avoir atteint de nobles objectifs. Vous donnez un grand sens à votre vie, mais un score extrême sera également trop déterminé voire obsédé par son but."
    },
    {
      facet: 5,
      title: 'Auto-discipline',
      text: "L'auto-discipline, aussi appelée motivation, est la capacité à se contraindre dans une tâche difficile ou déplaisante jusqu'à son accomplissement. Avec un score bas, vous procrastinez et montrez un faible engagement, le plus souvent vous échouez à finir ce que vous commencez alors que vous souhaitiez vraiment terminer. Avec un score dans la moyenne, vous savez vous astreindre à une tâche, mais pouvez vous laissez distraire. Avec un score haut, vous êtes capable de vaincre vos réticences et de ne pas vous laisser distraire."
    },
    {
      facet: 6,
      title: 'Prudence',
      text: "La prudence décrit les réflexions que vous pouvez mener en amont d'une action. Avec un score bas, vous passez directement à l'action (ou dites ce que vous pensez) sans réfléchir aux conséquences. Avec un score dans la moyenne, vous réfléchissez avant de passer à l'action, mais dans un temps raisonnable. Il vous arrive également de faire certaines choses sans réfléchir. Avec un score haut, la prise de décision et le passage à l'action vous sont chronophages."
    }
  ]
};

const O = {
  domain: 'O',
  title: "Ouverture d'esprit",
  shortDescription: "L'ouverture d'esprit représente les capacités d'imagination, de créativité et de curiosité de la personnalité.",
  description: "Les personnes ouvertes d'esprit sont intellectuellement curieuses, apprécient l'art et sont sensibles à la beauté. Ils tendent à être perçus comme des gens proches et en phase avec leurs émotions. Ils agissent de façon non conventionnelle. Les intellectuels ont typiquement un score haut en ouverture d'esprit, en conséquence, ce facteur est aussi appelé Culture ou Intellect. <br /><br />Néanmoins, l'intellect est probalement l'aspect le plus important de l'ouverture d'esprit. Ce score n'est que peu corrélé aux années d'expérience ou au test d'intelligence standard. <br /><br />Une autre caractéristique de l'ouverture cognitive est la facilité d'abstration des concepts plutôt que la limitation aux faits. Ramené à un individu, cette capacité peut se traduire par des formes de pensées orientées vers les mathématiques, la logique, la géometrie, l'art, les métaphores verbales, la musique ou bien d'autres formes d'arts. <br /><br />Les individus présentant un score bas tendent à avoir des centres d'intérêts restreints. Ils prefèreront des réflexions simples et claires plutôt que complexes, ambigües ou subtiles. Ils voient les réflexions artistiques et scientifiques comme obscures et complexes à mettre en œuvre. Ils préféreront la routine à la nouveauté. Ils sont conservateurs et résistants aux changements. <br /><br />L'ouverture d'esprit est souvent présentée comme étant une preuve de maturité et plus saine pour l'esprit. Cependant ces systèmes de pensée présentent des avantages et des inconvénients en fonction de l'environnement de l'individu. Par exemple, un score haut aidera les professeurs, à l'inverse un score bas aidera les policiers ou les commerciaux.",
  results: [
    {
      score: 'low',
      text: "Votre score bas indique que vous aimez réfléchir en termes simples. Votre entourage vous décrit comme quelqu'un de conservateur, pratique et terre à terre"
    },
    {
      score: 'neutral',
      text: "Votre score dans la moyenne indique que vous aimez les traditions mais également que vous n'êtes pas contre les nouvelles choses. Votre mode de pensée est plus simple que complexe. Votre entourage vous voit comme quelqu'un de bien éduqué mais pas non plus un intellectuel."
    },
    {
      score: 'high',
      text: 'Votre score haut indique que vous aimez tenter de nouvelles expériences, varier les plaisirs et le changement en règle générale. Vous êtes curieux, imaginatif et créatif.'
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Imagination',
      text: "Avec un score bas, vous êtes plus terre à terre et vous vous intéressez aux faits, au concret. Avec un score dans la moyenne,vous pouvez faire preuve d'imagination tout en étant concentré sur le réel. Avec un score haut, vous trouvez le monde réel trop simple et ordinaire. Vous utilisez la fantaisie pour rendre votre monde plus intéressant."
    },
    {
      facet: 2,
      title: 'Sens Artistique',
      text: "Avec un score bas, vous êtes assez peu sensible ou ne montrez que peu d'intérêt pour les arts en général. Avec un score dans la moyenne, pas insensible à l'art, vous n'êtes pas pour autant facilement touché par celui-ci. Avec un score haut, vous aimez la beauté aussi bien formelle que fonctionnelle. Vous êtes facilement absorbé par les manifestions ou évenements. Vous n'êtes pas necessairement artiste vous même, mais vous savez en apprécier les attraits."
    },
    {
      facet: 3,
      title: 'Affection',
      text: "Avec un score bas, vous êtes moins attentif à vos émotions et avez tendance à les refouler ou ne pas les exprimer ouvertement. Avec un score dans la moyenne, vous faites preuve d'introspection. Avec un score haut, vous accédez facilement à vos émotions et y êtes attentif."
    },
    {
      facet: 4,
      title: 'Aventure',
      text: "Avec un score bas, vous n'aimez pas le changement et préférez la routine. Avec un score dans la moyenne, vous appréciez vos habitudes mais n'êtes pas contre un peu de nouveauté. Avec un score haut, vous êtes un fervent défenseur du changement, vous aimez voyager ou découvrir de nouvelles expériences. Vous trouvez la routine ennuyeuse et cherchez de nouvelles voies juste parce qu'elles sont différentes."
    },
    {
      facet: 5,
      title: 'Intellect',
      text: "L'intellect et le sens artistique sont deux traits importants de l'ouverture d'esprit. L'intellect ne doit pas être confondu avec l'intelligence, c'est un type d'intelligence et non une compétence intellectuelle, bien que ceux avec un score élevé présentent également un score plus élevé aux tests standards d'intelligence. Avec un score bas, vous préférez discuter avec d'autres personnes partageant le même point de vue que vous. Vous considérez comme une perte de temps les exercices intellectuels. Avec un score dans la moyenne, vous êtes globalement ouverts aux nouvelles idées. Avec un score haut, vous aimez jouer avec les concepts, les idées inhabituelles et les débats intellectuels. Vous appréciez les devinettes, les puzzles et autres casse-têtes."
    },
    {
      facet: 6,
      title: 'Libéralisme',
      text: "Le libéralisme psychologique fait référence à la capacité d'acceptation des changements d'autorité, de convention ou de valeurs. Avec un score bas, vous préférez la sécurité, la stabilité et la conformité des traditions. Avec un score dans la moyenne, vous vous montrez traditionnel tout en étant ouvert d'esprit. Avec un score haut, vous préférez les comportements rebelles ou anarchiques."
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