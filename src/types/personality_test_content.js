const A = {
  domain: 'A',
  title: 'Agreeableness',
  shortDescription: 'Agreeableness reflects individual differences in concern with cooperation and social harmony. Agreeable individuals value getting along with others.',
  description: `They are therefore considerate, friendly,
generous, helpful, and willing to compromise their interests with
others'. Agreeable people also have an optimistic view of human
nature. They believe people are basically honest, decent, and
trustworthy. <br /><br />
Disagreeable individuals place self-interest above getting along with
others.  They are generally unconcerned with others' well-being, and
therefore are unlikely to extend themselves for other people.
Sometimes their skepticism about others' motives causes them to be
suspicious, unfriendly, and uncooperative.
<br /><br />
Agreeableness is obviously advantageous for attaining and maintaining
popularity. Agreeable people are better liked than disagreeable
people. On the other hand, agreeableness is not useful in situations
that require tough or absolute objective decisions. Disagreeable
people can make excellent scientists, critics, or soldiers.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Your score on Agreeableness is low, indicating less concern
with others' needs than with your own. People see you as tough,
critical, and uncompromising.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Your level of Agreeableness is average, indicating some concern
with others' Needs, but, generally, unwillingness to sacrifice
yourself for others.`
    },
    {
      score: 'high', // do not translate this line
      text: `Your high level of Agreeableness indicates a strong interest in
others' needs and well-being. You are pleasant, sympathetic, and
cooperative.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Trust',
      text: `A person with high trust assumes that most people
are fair, honest, and have good intentions. Persons low in trust
see others as selfish, devious, and potentially dangerous.`
    },
    {
      facet: 2,
      title: 'Morality',
      text: `High scorers on this scale see no need for
pretense or manipulation when dealing with others and are therefore
candid, frank, and sincere. Low scorers believe that a certain
amount of deception in social relationships is necessary. People
find it relatively easy to relate to the straightforward
high-scorers on this scale. They generally find it more difficult
to relate to the unstraightforward low-scorers on this scale. It
should be made clear that low scorers are not unprincipled
or immoral; they are simply more guarded and less willing to openly
reveal the whole truth.`
    },
    {
      facet: 3,
      title: 'Altruism',
      text: `Altruistic people find helping other people
genuinely rewarding. Consequently, they are generally willing to
assist those who are in need. Altruistic people find that doing
things for others is a form of self-fulfillment rather than
self-sacrifice. Low scorers on this scale do not particularly like
helping those in need. Requests for help feel like an imposition
rather than an opportunity for self-fulfillment.`
    },
    {
      facet: 4,
      title: 'Cooperation',
      text: `Individuals who score high on this scale
dislike confrontations. They are perfectly willing to compromise or
to deny their own needs in order to get along with others. Those
who score low on this scale are more likely to intimidate others to
get their way.`
    },
    {
      facet: 5,
      title: 'Modesty',
      text: `High scorers on this scale do not like to claim
that they are better than other people. In some cases this attitude
may derive from low self-confidence or self-esteem. Nonetheless,
some people with high self-esteem find immodesty unseemly. Those
who are willing to describe themselves as superior tend to
be seen as disagreeably arrogant by other people.`
    },
    {
      facet: 6,
      title: 'Sympathy',
      text: `People who score high on this scale are
tenderhearted and compassionate. They feel the pain of others
vicariously and are easily moved to pity. Low scorers are not
affected strongly by human suffering. They pride themselves on
making objective judgments based on reason. They are more concerned
with truth and impartial justice than with mercy.`
    }
  ]
};

const E = {
  domain: 'E',
  title: 'Extraversion',
  shortDescription: 'Extraversion is marked by pronounced engagement with the external world.',
  description: `Extraverts enjoy being with people, are full of energy, and
often experience positive emotions. They tend to be enthusiastic,
action-oriented, individuals who are likely to say "Yes!" or "Let's
go!" to opportunities for excitement. In groups they like to talk,
assert themselves, and draw attention to themselves.
<br /><br />
Introverts lack the exuberance, energy, and activity levels of
extraverts. They tend to be quiet, low-key, deliberate, and
disengaged from the social world. Their lack of social involvement
should not be interpreted as shyness or depression; the
introvert simply needs less stimulation than an extravert and prefers
to be alone. <br /><br />The independence and reserve of the introvert is
sometimes mistaken as unfriendliness or arrogance. In reality, an
introvert who scores high on the agreeableness dimension will not
seek others out but will be quite pleasant when approached.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Your score on Extraversion is low, indicating you are
introverted, reserved, and quiet. You enjoy solitude and solitary
activities. Your socialization tends to be restricted to a few close friends.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Your score on Extraversion is average, indicating you are
neither a subdued loner nor a jovial chatterbox. You enjoy time with
others but also time alone.`
    },
    {
      score: 'high', // do not translate this line
      text: `Your score on Extraversion is high, indicating you are
sociable, outgoing, energetic, and lively. You prefer to be around
people much of the time.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Friendliness',
      text: `Friendly people genuinely like other people
and openly demonstrate positive feelings toward others. They make
friends quickly and it is easy for them to form close, intimate
relationships. Low scorers on Friendliness are not necessarily cold
and hostile, but they do not reach out to others and are perceived
as distant and reserved.`
    },
    {
      facet: 2,
      title: 'Gregariousness',
      text: `Gregarious people find the company of
others pleasantly stimulating and rewarding. They enjoy the
excitement of crowds. Low scorers tend to feel overwhelmed by, and
therefore actively avoid, large crowds. They do not necessarily
dislike being with people sometimes, but their need for privacy and
time to themselves is much greater than for individuals who score
high on this scale.`
    },
    {
      facet: 3,
      title: 'Assertiveness',
      text: `High scorers Assertiveness like to speak
 out, take charge, and direct the activities of others. They tend to
 be leaders in groups. Low scorers tend not to talk much and let
 others control the activities of groups.`
    },
    {
      facet: 4,
      title: 'Activity Level',
      text: `Active individuals lead fast-paced, busy
 lives. They move about quickly, energetically, and vigorously, and
 they are involved in many activities. People who score low on this
 scale follow a slower and more leisurely, relaxed pace.`
    },
    {
      facet: 5,
      title: 'Excitement-Seeking',
      text: `High scorers on this scale are easily
bored without high levels of stimulation. They love bright lights
and hustle and bustle. They are likely to take risks and seek
thrills. Low scorers are overwhelmed by noise and commotion and are
adverse to thrill-seeking.`
    },
    {
      facet: 6,
      title: 'Cheerfulness',
      text: `This scale measures positive mood and
feelings, not negative emotions (which are a part of the
Neuroticism domain). Persons who score high on this scale typically
experience a range of positive feelings, including happiness,
enthusiasm, optimism, and joy. Low scorers are not as prone to such
energetic, high spirits.`
    }
  ]
};

const N = {
  domain: 'N',
  title: 'Neuroticism',
  shortDescription: 'Neuroticism refers to the tendency to experience negative feelings.',
  description: `Freud originally used the term neurosis to describe a
condition marked by mental distress, emotional suffering, and an
inability to cope effectively with the normal demands of life. He
suggested that everyone shows some signs of neurosis, but that we
differ in our degree of suffering and our specific symptoms of
distress. Today neuroticism refers to the tendency to experience
negative feelings. <br /><br />Those who score high on Neuroticism may
experience primarily one specific negative feeling such as anxiety,
anger, or depression, but are likely to experience several of these
emotions. <br /><br />People high in neuroticism are emotionally reactive. They
respond emotionally to events that would not affect most people, and
their reactions tend to be more intense than normal. They are more
likely to interpret ordinary situations as threatening, and minor
frustrations as hopelessly difficult. <br /><br />Their negative emotional
reactions tend to persist for unusually long periods of time, which
means they are often in a bad mood. These problems in emotional
regulation can diminish a neurotic's ability to think clearly, make
decisions, and cope effectively with stress.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Your score on Neuroticism is low, indicating that you are
exceptionally calm, composed and unflappable. You do not react with
intense emotions, even to situations that most people would describe
as stressful.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Your score on Neuroticism is average, indicating that your level of
emotional reactivity is typical of the general population.
Stressful and frustrating situations are somewhat upsetting to you,
but you are generally able to get over these feelings and cope with
these situations.`
    },
    {
      score: 'high', // do not translate this line
      text: `Your score on Neuroticism is high, indicating that you are easily
upset, even by what most people consider the normal demands of
living. People consider you to be sensitive and emotional.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Anxiety',
      text: `The "fight-or-flight" system of the brain of anxious
individuals is too easily and too often engaged. Therefore, people who
are high in anxiety often feel like something dangerous is about to happen.
They may be afraid of specific situations or be just generally fearful.
They feel tense, jittery, and nervous. Persons low in Anxiety are generally
calm and fearless.`
    },
    {
      facet: 2,
      title: 'Anger',
      text: `Persons who score high in Anger feel enraged when
things do not go their way. They are sensitive about being treated fairly
and feel resentful and bitter when they feel they are being cheated.
This scale measures the tendency to feel angry; whether or not the
person expresses annoyance and hostility depends on the individual's
level on Agreeableness. Low scorers do not get angry often or easily.`
    },
    {
      facet: 3,
      title: 'Depression',
      text: `This scale measures the tendency to feel sad, dejected,
and discouraged. High scorers lack energy and have difficulty initiating
activities. Low scorers tend to be free from these depressive feelings.`
    },
    {
      facet: 4,
      title: 'Self-Consciousness',
      text: `Self-conscious individuals are sensitive
about what others think of them. Their concern about rejection and
ridicule cause them to feel shy and uncomfortable around others. They
are easily embarrassed and often feel ashamed. Their fears that others
will criticize or make fun of them are exaggerated and unrealistic, but
their awkwardness and discomfort may make these fears a self-fulfilling
prophecy. Low scorers, in contrast, do not suffer from the mistaken
impression that everyone is watching and judging them. They do not feel
nervous in social situations.`
    },
    {
      facet: 5,
      title: 'Immoderation',
      text: `Immoderate individuals feel strong cravings and
urges that they have have difficulty resisting. They tend to be
oriented toward short-term pleasures and rewards rather than long-
term consequences. Low scorers do not experience strong, irresistible
cravings and consequently do not find themselves tempted to overindulge.`
    },
    {
      facet: 6,
      title: 'Vulnerability',
      text: `High scorers on Vulnerability experience
panic, confusion, and helplessness when under pressure or stress.
Low scorers feel more poised, confident, and clear-thinking when
stressed.`
    }
  ]
};

const C = {
  domain: 'C',
  title: 'Conscientiousness',
  shortDescription: 'Conscientiousness concerns the way in which we control, regulate, and direct our impulses.',
  description: `Impulses are not inherently bad;
occasionally time constraints require a snap decision, and acting on
our first impulse can be an effective response. Also, in times of
play rather than work, acting spontaneously and impulsively can be
fun. Impulsive individuals can be seen by others as colorful,
fun-to-be-with, and zany.
<br /><br />
Nonetheless, acting on impulse can lead to trouble in a number of
ways. Some impulses are antisocial. Uncontrolled antisocial acts
not only harm other members of society, but also can result in
retribution toward the perpetrator of such impulsive acts. Another
problem with impulsive acts is that they often produce immediate
rewards but undesirable, long-term consequences. Examples include
excessive socializing that leads to being fired from one's job,
hurling an insult that causes the breakup of an important
relationship, or using pleasure-inducing drugs that eventually
destroy one's health.
<br /><br />
Impulsive behavior, even when not seriously destructive, diminishes
a person's effectiveness in significant ways. Acting impulsively
disallows contemplating alternative courses of action, some of which
would have been wiser than the impulsive choice. Impulsivity also
sidetracks people during projects that require organized sequences
of steps or stages. Accomplishments of an impulsive person are
therefore small, scattered, and inconsistent.
<br /><br />
A hallmark of intelligence, what potentially separates human beings
from earlier life forms, is the ability to think about future
consequences before acting on an impulse. Intelligent activity
involves contemplation of long-range goals, organizing and planning
routes to these goals, and persisting toward one's goals in the face
of short-lived impulses to the contrary. The idea that intelligence
involves impulse control is nicely captured by the term prudence, an
alternative label for the Conscientiousness domain. Prudent means
both wise and cautious.
<br /><br/>
Persons who score high on the
Conscientiousness scale are, in fact, perceived by others as intelligent.
The benefits of high conscientiousness are obvious. Conscientious
individuals avoid trouble and achieve high levels of success through
purposeful planning and persistence. They are also positively
regarded by others as intelligent and reliable. On the negative
side, they can be compulsive perfectionists and workaholics.
Furthermore, extremely conscientious individuals might be regarded
as stuffy and boring.
<br /><br />
Unconscientious people may be criticized for
their unreliability, lack of ambition, and failure to stay within
the lines, but they will experience many short-lived pleasures and
they will never be called stuffy.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Your score on Conscientiousness is low, indicating you like to live
for the moment and do what feels good now. Your work tends to be
careless and disorganized.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Your score on Conscientiousness is average. This means you are
reasonably reliable, organized, and self-controlled.`
    },
    {
      score: 'high', // do not translate this line
      text: `Your score on Conscientiousness is high. This means you set clear
goals and pursue them with determination. People regard you as
reliable and hard-working.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Self-Efficacy',
      text: `Self-Efficacy describes confidence in one's ability
to accomplish things. High scorers believe they have the intelligence
(common sense), drive, and self-control necessary for achieving success.
Low scorers do not feel effective, and may have a sense that they are not
in control of their lives.`
    },
    {
      facet: 2,
      title: 'Orderliness',
      text: `Persons with high scores on orderliness are
well-organized. They like to live according to routines and schedules. They
keep lists and make plans. Low scorers tend to be disorganized and
scattered.`
    },
    {
      facet: 3,
      title: 'Dutifulness',
      text: `This scale reflects the strength of a person's sense
 of duty and obligation. Those who score high on this scale have a strong
 sense of moral obligation. Low scorers find contracts, rules, and
 regulations overly confining. They are likely to be seen as unreliable or
 even irresponsible.`
    },
    {
      facet: 4,
      title: 'Achievement-Striving',
      text: `Individuals who score high on this
scale strive hard to achieve excellence. Their drive to be recognized as
successful keeps them on track toward their lofty goals. They often have
a strong sense of direction in life, but extremely high scores may
be too single-minded and obsessed with their work. Low scorers are content
to get by with a minimal amount of work, and might be seen by others
as lazy.`
    },
    {
      facet: 5,
      title: 'Self-Discipline',
      text: `Self-discipline-what many people call
will-power-refers to the ability to persist at difficult or unpleasant
tasks until they are completed. People who possess high self-discipline
are able to overcome reluctance to begin tasks and stay on track despite
distractions. Those with low self-discipline procrastinate and show poor
follow-through, often failing to complete tasks-even tasks they want very
much to complete.`
    },
    {
      facet: 6,
      title: 'Cautiousness',
      text: `Cautiousness describes the disposition to
think through possibilities before acting. High scorers on the Cautiousness
scale take their time when making decisions. Low scorers often say or do
first thing that comes to mind without deliberating alternatives and the
probable consequences of those alternatives.`
    }
  ]
};

const O = {
  domain: 'O',
  title: 'Openness To Experience',
  shortDescription: 'Openness to Experience describes a dimension of cognitive style that distinguishes imaginative, creative people from down-to-earth, conventional people.',
  description: `Open people are intellectually curious,
appreciative of art, and sensitive to beauty. They tend to be,
compared to closed people, more aware of their feelings. They tend to
think and act in individualistic and nonconforming
ways. Intellectuals typically score high on Openness to Experience;
consequently, this factor has also been called Culture or
Intellect. <br /><br />Nonetheless, Intellect is probably best regarded as one aspect of openness
to experience. Scores on Openness to Experience are only modestly
related to years of education and scores on standard intelligent tests.
<br /><br />
Another characteristic of the open cognitive style is a facility for thinking
in symbols and abstractions far removed from concrete experience. Depending on
the individual's specific intellectual abilities, this symbolic cognition may
take the form of mathematical, logical, or geometric thinking, artistic and
metaphorical use of language, music composition or performance, or one of the
many visual or performing arts.
<br /><br />
People with low scores on openness to experience tend to have narrow, common
interests. They prefer the plain, straightforward, and obvious over the
complex, ambiguous, and subtle. They may regard the arts and sciences with
suspicion, regarding these endeavors as abstruse or of no practical use.
Closed people prefer familiarity over novelty; they are conservative and
resistant to change.
<br /><br />
Openness is often presented as healthier or more mature by psychologists, who
are often themselves open to experience. However, open and closed styles of
thinking are useful in different environments. The intellectual style of the
open person may serve a professor well, but research has shown that closed
thinking is related to superior job performance in police work, sales, and
a number of service occupations.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Your score on Openness to Experience is low, indicating you like to think in
plain and simple terms. Others describe you as down-to-earth, practical,
and conservative.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Your score on Openness to Experience is average, indicating you enjoy
tradition but are willing to try new things. Your thinking is neither
simple nor complex. To others you appear to be a well-educated person
but not an intellectual.`
    },
    {
      score: 'high', // do not translate this line
      text: `Your score on Openness to Experience is high, indicating you enjoy novelty,
variety, and change. You are curious, imaginative, and creative.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Imagination',
      text: `To imaginative individuals, the real world is
often too plain and ordinary. High scorers on this scale use fantasy as a
way of creating a richer, more interesting world. Low scorers are on this
scale are more oriented to facts than fantasy.`
    },
    {
      facet: 2,
      title: 'Artistic Interests',
      text: `High scorers on this scale love beauty, both in
art and in nature. They become easily involved and absorbed in artistic
and natural events. They are not necessarily artistically trained nor
talented, although many will be. The defining features of this scale are
interest in, and appreciation of natural and
artificial beauty. Low scorers lack aesthetic sensitivity and interest in
the arts.`
    },
    {
      facet: 3,
      title: 'Emotionality',
      text: `Persons high on Emotionality have good access
to and awareness of their own feelings. Low scorers are less aware of
their feelings and tend not to express their emotions openly.`
    },
    {
      facet: 4,
      title: 'Adventurousness',
      text: `High scorers on adventurousness are eager to
try new activities, travel to foreign lands, and experience different
things. They find familiarity and routine boring, and will take a new
route home just because it is different. Low scorers tend to feel
uncomfortable with change and prefer familiar routines.`
    },
    {
      facet: 5,
      title: 'Intellect',
      text: `Intellect and artistic interests are the two most
important, central aspects of openness to experience. High scorers on
Intellect love to play with ideas. They are open-minded to new and unusual
ideas, and like to debate intellectual issues. They enjoy riddles, puzzles,
and brain teasers. Low scorers on Intellect prefer dealing with either
people or things rather than ideas. They regard intellectual exercises as a
waste of time. Intellect should not be equated with intelligence.
Intellect is an intellectual style, not an intellectual ability, although
high scorers on Intellect score slightly higher than low-Intellect
individuals on standardized intelligence tests.`
    },
    {
      facet: 6,
      title: 'Liberalism',
      text: `Psychological liberalism refers to a readiness to
challenge authority, convention, and traditional values. In its most
extreme form, psychological liberalism can even represent outright
hostility toward rules, sympathy for law-breakers, and love of ambiguity,
chaos, and disorder. Psychological conservatives prefer the security and
stability brought by conformity to tradition. Psychological liberalism
and conservatism are not identical to political affiliation, but certainly
incline individuals toward certain political parties.`
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