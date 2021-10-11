// move to folder

import result_text from "./personality_test_content/";
import store from "@/store";

const calculateResultDefault = (score, count) => {
  const average = score / count;
  let result = 'neutral';
  if (average > 3) {
    result = 'high';
  } else if (average < 3) {
    result = 'low';
  }
  return result;
};

const calculateScore = options => {
    const calculateResult = options.calculateResult || calculateResultDefault;
  
    const reduceFactors = (a, b) => {
      if (!a[b.domain]) {
        a[b.domain] = { score: 0, count: 0, result: 'neutral', facet: {} };
      }
  
      a[b.domain].score += parseInt(b.score || 0, 10);
      a[b.domain].count += 1;
      a[b.domain].result = calculateResult(a[b.domain].score, a[b.domain].count);
  
      if (b.facet) {
        if (!a[b.domain].facet[b.facet]) {
          a[b.domain].facet[b.facet] = { score: 0, count: 0, result: 'neutral' };
        }
        a[b.domain].facet[b.facet].score += parseInt(b.score || 0, 10);
        a[b.domain].facet[b.facet].count += 1;
        a[b.domain].facet[b.facet].result = calculateResult(a[b.domain].facet[b.facet].score, a[b.domain].facet[b.facet].count);
      }
  
      return a;
    }
  
    return options.answers.reduce(reduceFactors, {});
};

const generateResult = (answers, template) => {

  const domainResults = Object.keys(answers).map(key => {
    const answer = answers[key]
    const answerFacets = answer.facet
    const domain = template.find(r => key === r.domain)
    const facetMapper = facet => {
      const answerFacet = answerFacets[facet.facet.toString()] || {}
      return Object.assign(facet, { scoreText: answerFacet.result, score: answerFacet.score, count: answerFacet.count })
    }
    const facets = domain.facets.map(facetMapper).map(facet => Object.assign({ facet: facet.facet, title: facet.title, text: facet.text, score: facet.score, count: facet.count, scoreText: facet.scoreText }))
    const result = domain.results.find(r => r.score === answer.result)
    return {
      domain: domain.domain,
      title: domain.title,
      shortDescription: domain.shortDescription,
      description: domain.description,
      scoreText: result.score,
      count: answer.count,
      score: answer.score,
      facets: facets.filter(f => f.score),
      text: result.text
    }
  });
  
  return domainResults
};

const calculateResultScore = (data) => {
  let score = calculateScore({ answers: data.answers, calculateResult: data.calculateResult });
  return score;
};

const calculateResult = (data) => {
  let score = calculateScore({ answers: data.answers, calculateResult: data.calculateResult });
  let result = generateResult(score, result_text[store.getters['user/user'].locale]);
  return result;
};
const generateResultData = (data) => {
  let nest = generateResult(data, result_text[store.getters['user/user'].locale]); 
  return nest;
};

export default {
  calculateResult,
  calculateResultScore,
  generateResultData
}

/**
const RES = [
  {
    count: 24,
    description: Freud originally used the term neurosis to describe a\ncondition marked by mental distress, emotional suffering, and an\ninability to cope effectively with the normal demands of life. He\nsuggested that everyone shows some signs of neurosis, but that we\ndiffer in our degree of suffering and our specific symptoms of\ndistress. Today neuroticism refers to the tendency to experience\nnegative feelings. <br /><br />Those who score high on Neuroticism may\nexperience primarily one specific negative feeling such as anxiety,\nanger, or depression, but are likely to experience several of these\nemotions. <br /><br />People high in neuroticism are emotionally reactive. They\nrespond emotionally to events that would not affect most people, and\ntheir reactions tend to be more intense than normal. They are more\nlikely to interpret ordinary situations as threatening, and minor\nfrustrations as hopelessly difficult. <br /><br />Their negative emotional\nreactions tend to persist for unusually long periods of time, which\nmeans they are often in a bad mood. These problems in emotional\nregulation can diminish a neurotic's ability to think clearly, make\ndecisions, and cope effectively with stress.",
    domain: "N",
    facets: [
      {
        count: 4,
        facet: 1,
        score: 15,
        scoreText: "high",
        text: "The \"fight-or-flight\" system of the brain of anxious\nindividuals is too easily and too often engaged. Therefore, people who\nare high in anxiety often feel like something dangerous is about to happen.\nThey may be afraid of specific situations or be just generally fearful.\nThey feel tense, jittery, and nervous. Persons low in Anxiety are generally\ncalm and fearless.",
        title: "Anxiety"
      },
      {
        count: 4,
        facet: 2,
        score: 13,
        scoreText: "high",
        text: "Persons who score high in Anger feel enraged when\nthings do not go their way. They are sensitive about being treated fairly\nand feel resentful and bitter when they feel they are being cheated.\nThis scale measures the tendency to feel angry; whether or not the\nperson expresses annoyance and hostility depends on the individual's\nlevel on Agreeableness. Low scorers do not get angry often or easily.",
        title: "Anger"
      },
      {
        count: 4,
        facet: 3,
        score: 12,
        scoreText: "neutral",
        text: "This scale meas3ures the tendency to feel sad, dejected,\nand discouraged. High scorers lack energy and have difficulty initiating\nactivities. Low scorers tend to be free from these depressive feelings.",
        title: "Depression"
      },
      {
        count: 4,
        facet: 4,
        score: 14,
        scoreText: "high",
        text: "Self-conscious individuals are sensitive\nabout what others think of them. Their concern about rejection and\nridicule cause them to feel shy and uncomfortable around others. They\nare easily embarrassed and often feel ashamed. Their fears that others\nwill criticize or make fun of them are exaggerated and unrealistic, but\ntheir awkwardness and discomfort may make these fears a self-fulfilling\nprophecy. Low scorers, in contrast, do not suffer from the mistaken\nimpression that everyone is watching and judging them. They do not feel\nnervous in social situations.",
        title: "Self-Consciousness"
      },
      {
        count: 4,
        facet: 5,
        score: 12,
        scoreText: "neutral",
        text: "Immoderate individuals feel strong cravings and\nurges that they have have difficulty resisting. They tend to be\noriented toward short-term pleasures and rewards rather than long-\nterm consequences. Low scorers do not experience strong, irresistible\ncravings and consequently do not find themselves tempted to overindulge.",
        title: "Immoderation"
      },
      {
        count: 4,
        facet: 6,
        score: 12,
        scoreText: "neutral",
        text: "High scorers on Vulnerability experience\npanic, confusion, and helplessness when under pressure or stress.\nLow scorers feel more poised, confident, and clear-thinking when\nstressed.",
        title: "Vulnerability"
      }
    ],
    score: 22,
    scoreText: "high",
    shortDescription: "Neuroticism refers to the tendency to experience negative feelings.",
    text: "Your score on Neuroticism is high, indicating that you are easily\nupset, even by what most people consider the normal demands of\nliving. People consider you to be sensitive and emotional.",
    title: "Neuroticism"
  },
  {
    count: 24,
    description: "Freud originally used the term neurosis to describe a\ncondition marked by mental distress, emotional suffering, and an\ninability to cope effectively with the normal demands of life. He\nsuggested that everyone shows some signs of neurosis, but that we\ndiffer in our degree of suffering and our specific symptoms of\ndistress. Today neuroticism refers to the tendency to experience\nnegative feelings. <br /><br />Those who score high on Neuroticism may\nexperience primarily one specific negative feeling such as anxiety,\nanger, or depression, but are likely to experience several of these\nemotions. <br /><br />People high in neuroticism are emotionally reactive. They\nrespond emotionally to events that would not affect most people, and\ntheir reactions tend to be more intense than normal. They are more\nlikely to interpret ordinary situations as threatening, and minor\nfrustrations as hopelessly difficult. <br /><br />Their negative emotional\nreactions tend to persist for unusually long periods of time, which\nmeans they are often in a bad mood. These problems in emotional\nregulation can diminish a neurotic's ability to think clearly, make\ndecisions, and cope effectively with stress.",
    domain: "E",
    facets: [
      {
        count: 4,
        facet: 1,
        score: 15,
        scoreText: "high",
        text: "The \"fight-or-flight\" system of the brain of anxious\nindividuals is too easily and too often engaged. Therefore, people who\nare high in anxiety often feel like something dangerous is about to happen.\nThey may be afraid of specific situations or be just generally fearful.\nThey feel tense, jittery, and nervous. Persons low in Anxiety are generally\ncalm and fearless.",
        title: "Anxiety"
      },
      {
        count: 4,
        facet: 2,
        score: 13,
        scoreText: "high",
        text: "Persons who score high in Anger feel enraged when\nthings do not go their way. They are sensitive about being treated fairly\nand feel resentful and bitter when they feel they are being cheated.\nThis scale measures the tendency to feel angry; whether or not the\nperson expresses annoyance and hostility depends on the individual's\nlevel on Agreeableness. Low scorers do not get angry often or easily.",
        title: "Anger"
      },
      {
        count: 4,
        facet: 3,
        score: 12,
        scoreText: "neutral",
        text: "This scale meas3ures the tendency to feel sad, dejected,\nand discouraged. High scorers lack energy and have difficulty initiating\nactivities. Low scorers tend to be free from these depressive feelings.",
        title: "Depression"
      },
      {
        count: 4,
        facet: 4,
        score: 14,
        scoreText: "high",
        text: "Self-conscious individuals are sensitive\nabout what others think of them. Their concern about rejection and\nridicule cause them to feel shy and uncomfortable around others. They\nare easily embarrassed and often feel ashamed. Their fears that others\nwill criticize or make fun of them are exaggerated and unrealistic, but\ntheir awkwardness and discomfort may make these fears a self-fulfilling\nprophecy. Low scorers, in contrast, do not suffer from the mistaken\nimpression that everyone is watching and judging them. They do not feel\nnervous in social situations.",
        title: "Self-Consciousness"
      },
      {
        count: 4,
        facet: 5,
        score: 12,
        scoreText: "neutral",
        text: "Immoderate individuals feel strong cravings and\nurges that they have have difficulty resisting. They tend to be\noriented toward short-term pleasures and rewards rather than long-\nterm consequences. Low scorers do not experience strong, irresistible\ncravings and consequently do not find themselves tempted to overindulge.",
        title: "Immoderation"
      },
      {
        count: 4,
        facet: 6,
        score: 12,
        scoreText: "neutral",
        text: "High scorers on Vulnerability experience\npanic, confusion, and helplessness when under pressure or stress.\nLow scorers feel more poised, confident, and clear-thinking when\nstressed.",
        title: "Vulnerability"
      }
    ],
    score: 78,
    scoreText: "high",
    shortDescription: "Neuroticism refers to the tendency to experience negative feelings.",
    text: "Your score on Neuroticism is high, indicating that you are easily\nupset, even by what most people consider the normal demands of\nliving. People consider you to be sensitive and emotional.",
    title: "Extraversion"
  },
  {
    count: 24,
    description: "Freud originally used the term neurosis to describe a\ncondition marked by mental distress, emotional suffering, and an\ninability to cope effectively with the normal demands of life. He\nsuggested that everyone shows some signs of neurosis, but that we\ndiffer in our degree of suffering and our specific symptoms of\ndistress. Today neuroticism refers to the tendency to experience\nnegative feelings. <br /><br />Those who score high on Neuroticism may\nexperience primarily one specific negative feeling such as anxiety,\nanger, or depression, but are likely to experience several of these\nemotions. <br /><br />People high in neuroticism are emotionally reactive. They\nrespond emotionally to events that would not affect most people, and\ntheir reactions tend to be more intense than normal. They are more\nlikely to interpret ordinary situations as threatening, and minor\nfrustrations as hopelessly difficult. <br /><br />Their negative emotional\nreactions tend to persist for unusually long periods of time, which\nmeans they are often in a bad mood. These problems in emotional\nregulation can diminish a neurotic's ability to think clearly, make\ndecisions, and cope effectively with stress.",
    domain: "O",
    facets: [
      {
        count: 4,
        facet: 1,
        score: 15,
        scoreText: "high",
        text: "The \"fight-or-flight\" system of the brain of anxious\nindividuals is too easily and too often engaged. Therefore, people who\nare high in anxiety often feel like something dangerous is about to happen.\nThey may be afraid of specific situations or be just generally fearful.\nThey feel tense, jittery, and nervous. Persons low in Anxiety are generally\ncalm and fearless.",
        title: "Anxiety"
      },
      {
        count: 4,
        facet: 2,
        score: 13,
        scoreText: "high",
        text: "Persons who score high in Anger feel enraged when\nthings do not go their way. They are sensitive about being treated fairly\nand feel resentful and bitter when they feel they are being cheated.\nThis scale measures the tendency to feel angry; whether or not the\nperson expresses annoyance and hostility depends on the individual's\nlevel on Agreeableness. Low scorers do not get angry often or easily.",
        title: "Anger"
      },
      {
        count: 4,
        facet: 3,
        score: 12,
        scoreText: "neutral",
        text: "This scale meas3ures the tendency to feel sad, dejected,\nand discouraged. High scorers lack energy and have difficulty initiating\nactivities. Low scorers tend to be free from these depressive feelings.",
        title: "Depression"
      },
      {
        count: 4,
        facet: 4,
        score: 14,
        scoreText: "high",
        text: "Self-conscious individuals are sensitive\nabout what others think of them. Their concern about rejection and\nridicule cause them to feel shy and uncomfortable around others. They\nare easily embarrassed and often feel ashamed. Their fears that others\nwill criticize or make fun of them are exaggerated and unrealistic, but\ntheir awkwardness and discomfort may make these fears a self-fulfilling\nprophecy. Low scorers, in contrast, do not suffer from the mistaken\nimpression that everyone is watching and judging them. They do not feel\nnervous in social situations.",
        title: "Self-Consciousness"
      },
      {
        count: 4,
        facet: 5,
        score: 12,
        scoreText: "neutral",
        text: "Immoderate individuals feel strong cravings and\nurges that they have have difficulty resisting. They tend to be\noriented toward short-term pleasures and rewards rather than long-\nterm consequences. Low scorers do not experience strong, irresistible\ncravings and consequently do not find themselves tempted to overindulge.",
        title: "Immoderation"
      },
      {
        count: 4,
        facet: 6,
        score: 12,
        scoreText: "neutral",
        text: "High scorers on Vulnerability experience\npanic, confusion, and helplessness when under pressure or stress.\nLow scorers feel more poised, confident, and clear-thinking when\nstressed.",
        title: "Vulnerability"
      }
    ],
    score: 100,
    scoreText: "high",
    shortDescription: "Neuroticism refers to the tendency to experience negative feelings.",
    text: "Your score on Neuroticism is high, indicating that you are easily\nupset, even by what most people consider the normal demands of\nliving. People consider you to be sensitive and emotional.",
    title: "Openness To Experience"
  },
  {
    count: 24,
    description: "Freud originally used the term neurosis to describe a\ncondition marked by mental distress, emotional suffering, and an\ninability to cope effectively with the normal demands of life. He\nsuggested that everyone shows some signs of neurosis, but that we\ndiffer in our degree of suffering and our specific symptoms of\ndistress. Today neuroticism refers to the tendency to experience\nnegative feelings. <br /><br />Those who score high on Neuroticism may\nexperience primarily one specific negative feeling such as anxiety,\nanger, or depression, but are likely to experience several of these\nemotions. <br /><br />People high in neuroticism are emotionally reactive. They\nrespond emotionally to events that would not affect most people, and\ntheir reactions tend to be more intense than normal. They are more\nlikely to interpret ordinary situations as threatening, and minor\nfrustrations as hopelessly difficult. <br /><br />Their negative emotional\nreactions tend to persist for unusually long periods of time, which\nmeans they are often in a bad mood. These problems in emotional\nregulation can diminish a neurotic's ability to think clearly, make\ndecisions, and cope effectively with stress.",
    domain: "C",
    facets: [
      {
        count: 4,
        facet: 1,
        score: 15,
        scoreText: "high",
        text: "The \"fight-or-flight\" system of the brain of anxious\nindividuals is too easily and too often engaged. Therefore, people who\nare high in anxiety often feel like something dangerous is about to happen.\nThey may be afraid of specific situations or be just generally fearful.\nThey feel tense, jittery, and nervous. Persons low in Anxiety are generally\ncalm and fearless.",
        title: "Anxiety"
      },
      {
        count: 4,
        facet: 2,
        score: 13,
        scoreText: "high",
        text: "Persons who score high in Anger feel enraged when\nthings do not go their way. They are sensitive about being treated fairly\nand feel resentful and bitter when they feel they are being cheated.\nThis scale measures the tendency to feel angry; whether or not the\nperson expresses annoyance and hostility depends on the individual's\nlevel on Agreeableness. Low scorers do not get angry often or easily.",
        title: "Anger"
      },
      {
        count: 4,
        facet: 3,
        score: 12,
        scoreText: "neutral",
        text: "This scale meas3ures the tendency to feel sad, dejected,\nand discouraged. High scorers lack energy and have difficulty initiating\nactivities. Low scorers tend to be free from these depressive feelings.",
        title: "Depression"
      },
      {
        count: 4,
        facet: 4,
        score: 14,
        scoreText: "high",
        text: "Self-conscious individuals are sensitive\nabout what others think of them. Their concern about rejection and\nridicule cause them to feel shy and uncomfortable around others. They\nare easily embarrassed and often feel ashamed. Their fears that others\nwill criticize or make fun of them are exaggerated and unrealistic, but\ntheir awkwardness and discomfort may make these fears a self-fulfilling\nprophecy. Low scorers, in contrast, do not suffer from the mistaken\nimpression that everyone is watching and judging them. They do not feel\nnervous in social situations.",
        title: "Self-Consciousness"
      },
      {
        count: 4,
        facet: 5,
        score: 12,
        scoreText: "neutral",
        text: "Immoderate individuals feel strong cravings and\nurges that they have have difficulty resisting. They tend to be\noriented toward short-term pleasures and rewards rather than long-\nterm consequences. Low scorers do not experience strong, irresistible\ncravings and consequently do not find themselves tempted to overindulge.",
        title: "Immoderation"
      },
      {
        count: 4,
        facet: 6,
        score: 12,
        scoreText: "neutral",
        text: "High scorers on Vulnerability experience\npanic, confusion, and helplessness when under pressure or stress.\nLow scorers feel more poised, confident, and clear-thinking when\nstressed.",
        title: "Vulnerability"
      }
    ],
    score: 58,
    scoreText: "high",
    shortDescription: "Neuroticism refers to the tendency to experience negative feelings.",
    text: "Your score on Neuroticism is high, indicating that you are easily\nupset, even by what most people consider the normal demands of\nliving. People consider you to be sensitive and emotional.",
    title: "Conscientiousness"
  },
  {
    count: 24,
    description: "Freud originally used the term neurosis to describe a\ncondition marked by mental distress, emotional suffering, and an\ninability to cope effectively with the normal demands of life. He\nsuggested that everyone shows some signs of neurosis, but that we\ndiffer in our degree of suffering and our specific symptoms of\ndistress. Today neuroticism refers to the tendency to experience\nnegative feelings. <br /><br />Those who score high on Neuroticism may\nexperience primarily one specific negative feeling such as anxiety,\nanger, or depression, but are likely to experience several of these\nemotions. <br /><br />People high in neuroticism are emotionally reactive. They\nrespond emotionally to events that would not affect most people, and\ntheir reactions tend to be more intense than normal. They are more\nlikely to interpret ordinary situations as threatening, and minor\nfrustrations as hopelessly difficult. <br /><br />Their negative emotional\nreactions tend to persist for unusually long periods of time, which\nmeans they are often in a bad mood. These problems in emotional\nregulation can diminish a neurotic's ability to think clearly, make\ndecisions, and cope effectively with stress.",
    domain: "A",
    facets: [
      {
        count: 4,
        facet: 1,
        score: 15,
        scoreText: "high",
        text: "The \"fight-or-flight\" system of the brain of anxious\nindividuals is too easily and too often engaged. Therefore, people who\nare high in anxiety often feel like something dangerous is about to happen.\nThey may be afraid of specific situations or be just generally fearful.\nThey feel tense, jittery, and nervous. Persons low in Anxiety are generally\ncalm and fearless.",
        title: "Anxiety"
      },
      {
        count: 4,
        facet: 2,
        score: 13,
        scoreText: "high",
        text: "Persons who score high in Anger feel enraged when\nthings do not go their way. They are sensitive about being treated fairly\nand feel resentful and bitter when they feel they are being cheated.\nThis scale measures the tendency to feel angry; whether or not the\nperson expresses annoyance and hostility depends on the individual's\nlevel on Agreeableness. Low scorers do not get angry often or easily.",
        title: "Anger"
      },
      {
        count: 4,
        facet: 3,
        score: 12,
        scoreText: "neutral",
        text: "This scale meas3ures the tendency to feel sad, dejected,\nand discouraged. High scorers lack energy and have difficulty initiating\nactivities. Low scorers tend to be free from these depressive feelings.",
        title: "Depression"
      },
      {
        count: 4,
        facet: 4,
        score: 14,
        scoreText: "high",
        text: "Self-conscious individuals are sensitive\nabout what others think of them. Their concern about rejection and\nridicule cause them to feel shy and uncomfortable around others. They\nare easily embarrassed and often feel ashamed. Their fears that others\nwill criticize or make fun of them are exaggerated and unrealistic, but\ntheir awkwardness and discomfort may make these fears a self-fulfilling\nprophecy. Low scorers, in contrast, do not suffer from the mistaken\nimpression that everyone is watching and judging them. They do not feel\nnervous in social situations.",
        title: "Self-Consciousness"
      },
      {
        count: 4,
        facet: 5,
        score: 12,
        scoreText: "neutral",
        text: "Immoderate individuals feel strong cravings and\nurges that they have have difficulty resisting. They tend to be\noriented toward short-term pleasures and rewards rather than long-\nterm consequences. Low scorers do not experience strong, irresistible\ncravings and consequently do not find themselves tempted to overindulge.",
        title: "Immoderation"
      },
      {
        count: 4,
        facet: 6,
        score: 12,
        scoreText: "neutral",
        text: "High scorers on Vulnerability experience\npanic, confusion, and helplessness when under pressure or stress.\nLow scorers feel more poised, confident, and clear-thinking when\nstressed.",
        title: "Vulnerability"
      }
    ],
    score: 88,
    scoreText: "high",
    shortDescription: "Neuroticism refers to the tendency to experience negative feelings.",
    text: "Your score on Neuroticism is high, indicating that you are easily\nupset, even by what most people consider the normal demands of\nliving. People consider you to be sensitive and emotional.",
    title: "Agreeableness"
  }
]; 
**/