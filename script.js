const EXAM_META = {
  "title": "GregMat GRE Vocab Group 1 Exam",
  "day": 1,
  "wordRange": "Words 1–30",
  "totalWords": 30,
  "words": [
    "Abound",
    "Amorphous",
    "Austere",
    "Belie",
    "Capricious",
    "Cerebral",
    "Congenial",
    "Conspicuous",
    "Cursory",
    "Daunting",
    "Deify",
    "Didactic",
    "Disseminate",
    "Feasible",
    "Flout",
    "Homogeneous",
    "Humdrum",
    "Insipid",
    "Loquacious",
    "Misanthropic",
    "Misnomer",
    "Negligent",
    "Obsequious",
    "Placate",
    "Proclivity",
    "Puerile",
    "Quixotic",
    "Spendthrift",
    "Taciturn",
    "Wary"
  ]
};
const EXAMS = {
  "basic": {
    "key": "basic",
    "name": "Basic Easy Recall Exam",
    "difficulty": "Easy to Lower-Medium",
    "marks": 40,
    "minutes": 25,
    "parts": 4,
    "description": "Meaning, GRE synonym, antonym, and simple usage recall.",
    "questions": [
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which word means to exist in large numbers or amounts?",
        "options": [
          "Abound",
          "Belie",
          "Flout",
          "Placate"
        ],
        "answer": "Abound",
        "relatedWord": "Abound",
        "id": "b01"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which word means lacking a clear shape, structure, or form?",
        "options": [
          "Austere",
          "Amorphous",
          "Feasible",
          "Wary"
        ],
        "answer": "Amorphous",
        "relatedWord": "Amorphous",
        "id": "b02"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which word means strict, plain, and without luxury?",
        "options": [
          "Austere",
          "Congenial",
          "Insipid",
          "Quixotic"
        ],
        "answer": "Austere",
        "relatedWord": "Austere",
        "id": "b03"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which word means to give a false impression or contradict the truth?",
        "options": [
          "Belie",
          "Deify",
          "Disseminate",
          "Placate"
        ],
        "answer": "Belie",
        "relatedWord": "Belie",
        "id": "b04"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which word means suddenly changeable or unpredictable?",
        "options": [
          "Capricious",
          "Homogeneous",
          "Taciturn",
          "Puerile"
        ],
        "answer": "Capricious",
        "relatedWord": "Capricious",
        "id": "b05"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which word means related to the brain or serious intellectual thinking?",
        "options": [
          "Cerebral",
          "Humdrum",
          "Spendthrift",
          "Negligent"
        ],
        "answer": "Cerebral",
        "relatedWord": "Cerebral",
        "id": "b06"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which word means pleasant, suitable, or compatible?",
        "options": [
          "Congenial",
          "Cursory",
          "Obsequious",
          "Wary"
        ],
        "answer": "Congenial",
        "relatedWord": "Congenial",
        "id": "b07"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which word means easily noticed or clearly visible?",
        "options": [
          "Conspicuous",
          "Misanthropic",
          "Misnomer",
          "Feasible"
        ],
        "answer": "Conspicuous",
        "relatedWord": "Conspicuous",
        "id": "b08"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which word means quick, shallow, and not careful?",
        "options": [
          "Cursory",
          "Daunting",
          "Loquacious",
          "Homogeneous"
        ],
        "answer": "Cursory",
        "relatedWord": "Cursory",
        "id": "b09"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which word means difficult or intimidating enough to discourage someone?",
        "options": [
          "Daunting",
          "Insipid",
          "Taciturn",
          "Placate"
        ],
        "answer": "Daunting",
        "relatedWord": "Daunting",
        "id": "b10"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the closest GRE synonym of deify.",
        "options": [
          "venerate",
          "neglect",
          "withhold",
          "simplify"
        ],
        "answer": "venerate",
        "relatedWord": "Deify",
        "id": "b11"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the closest GRE synonym of didactic.",
        "options": [
          "instructive",
          "reckless",
          "inconspicuous",
          "flavorful"
        ],
        "answer": "instructive",
        "relatedWord": "Didactic",
        "id": "b12"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the closest GRE synonym of disseminate.",
        "options": [
          "circulate",
          "conceal",
          "condemn",
          "standardize"
        ],
        "answer": "circulate",
        "relatedWord": "Disseminate",
        "id": "b13"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the closest GRE synonym of feasible.",
        "options": [
          "viable",
          "erratic",
          "servile",
          "vapid"
        ],
        "answer": "viable",
        "relatedWord": "Feasible",
        "id": "b14"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the closest GRE synonym of flout.",
        "options": [
          "defy",
          "appease",
          "classify",
          "analyze"
        ],
        "answer": "defy",
        "relatedWord": "Flout",
        "id": "b15"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the closest GRE synonym of homogeneous.",
        "options": [
          "uniform",
          "diverse",
          "puerile",
          "fawning"
        ],
        "answer": "uniform",
        "relatedWord": "Homogeneous",
        "id": "b16"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the closest GRE synonym of humdrum.",
        "options": [
          "monotonous",
          "intellectual",
          "conspicuous",
          "cautious"
        ],
        "answer": "monotonous",
        "relatedWord": "Humdrum",
        "id": "b17"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the closest GRE synonym of insipid.",
        "options": [
          "vapid",
          "stern",
          "compatible",
          "abundant"
        ],
        "answer": "vapid",
        "relatedWord": "Insipid",
        "id": "b18"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the closest GRE synonym of loquacious.",
        "options": [
          "garrulous",
          "laconic",
          "misanthropic",
          "frugal"
        ],
        "answer": "garrulous",
        "relatedWord": "Loquacious",
        "id": "b19"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the closest GRE synonym of obsequious.",
        "options": [
          "sycophantic",
          "watchful",
          "idealistic",
          "negligible"
        ],
        "answer": "sycophantic",
        "relatedWord": "Obsequious",
        "id": "b20"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the best antonym of misanthropic.",
        "options": [
          "philanthropic",
          "cynical",
          "reclusive",
          "antisocial"
        ],
        "answer": "philanthropic",
        "relatedWord": "Misanthropic",
        "id": "b21"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the best antonym of negligent.",
        "options": [
          "diligent",
          "remiss",
          "lax",
          "careless"
        ],
        "answer": "diligent",
        "relatedWord": "Negligent",
        "id": "b22"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the best antonym of puerile.",
        "options": [
          "mature",
          "juvenile",
          "silly",
          "infantile"
        ],
        "answer": "mature",
        "relatedWord": "Puerile",
        "id": "b23"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the best antonym of quixotic.",
        "options": [
          "pragmatic",
          "utopian",
          "visionary",
          "impractical"
        ],
        "answer": "pragmatic",
        "relatedWord": "Quixotic",
        "id": "b24"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the best antonym of spendthrift.",
        "options": [
          "frugal",
          "profligate",
          "extravagant",
          "wasteful"
        ],
        "answer": "frugal",
        "relatedWord": "Spendthrift",
        "id": "b25"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Choose the best antonym of taciturn.",
        "options": [
          "loquacious",
          "reticent",
          "laconic",
          "reserved"
        ],
        "answer": "loquacious",
        "relatedWord": "Taciturn",
        "id": "b26"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "Because the official database contained millions of observations, evidence for the trend seemed to ____.",
        "options": [
          "abound",
          "placate",
          "flout",
          "deify"
        ],
        "answer": "abound",
        "relatedWord": "Abound",
        "id": "b27"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The committee rejected the proposal because its goals were too ____ to measure or implement.",
        "options": [
          "amorphous",
          "homogeneous",
          "wary",
          "taciturn"
        ],
        "answer": "amorphous",
        "relatedWord": "Amorphous",
        "id": "b28"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The professor's ____ office, containing only a desk and two chairs, reflected his dislike of luxury.",
        "options": [
          "austere",
          "capricious",
          "insipid",
          "conspicuous"
        ],
        "answer": "austere",
        "relatedWord": "Austere",
        "id": "b29"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The mayor's calm press conference ____ the panic spreading inside the administration.",
        "options": [
          "belied",
          "disseminated",
          "placated",
          "abounded"
        ],
        "answer": "belied",
        "relatedWord": "Belie",
        "id": "b30"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "Since the funding agency changed its criteria every month, researchers found the process ____.",
        "options": [
          "capricious",
          "feasible",
          "didactic",
          "congenial"
        ],
        "answer": "capricious",
        "relatedWord": "Capricious",
        "id": "b31"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The new platform helped scientists ____ their findings to rural health workers.",
        "options": [
          "disseminate",
          "flout",
          "deify",
          "misname"
        ],
        "answer": "disseminate",
        "relatedWord": "Disseminate",
        "id": "b32"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The engineers concluded that the design was technically ____ but financially risky.",
        "options": [
          "feasible",
          "puerile",
          "humdrum",
          "misanthropic"
        ],
        "answer": "feasible",
        "relatedWord": "Feasible",
        "id": "b33"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "Rather than follow the safety code, the contractor chose to ____ it openly.",
        "options": [
          "flout",
          "placate",
          "standardize",
          "venerate"
        ],
        "answer": "flout",
        "relatedWord": "Flout",
        "id": "b34"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "A person who spends money recklessly is called a ____.",
        "options": [
          "spendthrift",
          "philanthropist",
          "misanthrope",
          "pedagogue"
        ],
        "answer": "spendthrift",
        "relatedWord": "Spendthrift",
        "id": "b35"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "A wrong or inaccurate name is a ____.",
        "options": [
          "misnomer",
          "proclivity",
          "placation",
          "homogeneity"
        ],
        "answer": "misnomer",
        "relatedWord": "Misnomer",
        "id": "b36"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "A natural tendency or inclination is a ____.",
        "options": [
          "proclivity",
          "misnomer",
          "austerity",
          "vigilance"
        ],
        "answer": "proclivity",
        "relatedWord": "Proclivity",
        "id": "b37"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Excessively flattering behavior toward powerful people is ____.",
        "options": [
          "obsequious",
          "wary",
          "taciturn",
          "homogeneous"
        ],
        "answer": "obsequious",
        "relatedWord": "Obsequious",
        "id": "b38"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "The best word for calming an angry group is ____.",
        "options": [
          "placate",
          "proliferate",
          "violate",
          "mislabel"
        ],
        "answer": "placate",
        "relatedWord": "Placate",
        "id": "b39"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "The best word for being careful because danger may exist is ____.",
        "options": [
          "wary",
          "weary",
          "vapid",
          "garrulous"
        ],
        "answer": "wary",
        "relatedWord": "Wary",
        "id": "b40"
      }
    ]
  },
  "medium": {
    "key": "medium",
    "name": "Medium Mixed Exam",
    "difficulty": "Medium",
    "marks": 35,
    "minutes": 25,
    "parts": 3,
    "description": "Balanced mixed practice with MCQ, single blank, double blank, triple blank, sentence equivalence, and typed answers.",
    "questions": [
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "A research team would prefer a sample with similar characteristics when it wants the sample to be:",
        "options": [
          "homogeneous",
          "misanthropic",
          "quixotic",
          "obsequious"
        ],
        "answer": "homogeneous",
        "relatedWord": "Homogeneous",
        "id": "m01"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "A paper that is technically correct but lifeless and intellectually flat would most nearly be described as:",
        "options": [
          "insipid",
          "congenial",
          "daunting",
          "wary"
        ],
        "answer": "insipid",
        "relatedWord": "Insipid",
        "id": "m02"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "A witness who gives unnecessarily long answers is best described as:",
        "options": [
          "loquacious",
          "taciturn",
          "cursory",
          "austere"
        ],
        "answer": "loquacious",
        "relatedWord": "Loquacious",
        "id": "m03"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "The term 'affordable housing' becomes a ____ if the apartments remain beyond the reach of low-income workers.",
        "options": [
          "misnomer",
          "proclivity",
          "placation",
          "austerity"
        ],
        "answer": "misnomer",
        "relatedWord": "Misnomer",
        "id": "m04"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "An assistant who praises every decision of a powerful supervisor, even foolish ones, is:",
        "options": [
          "obsequious",
          "cerebral",
          "homogeneous",
          "wary"
        ],
        "answer": "obsequious",
        "relatedWord": "Obsequious",
        "id": "m05"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "A policy that is noble in intention but impossible to implement is:",
        "options": [
          "quixotic",
          "feasible",
          "conspicuous",
          "didactic"
        ],
        "answer": "quixotic",
        "relatedWord": "Quixotic",
        "id": "m06"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "A researcher who refuses to draw conclusions from limited data is being:",
        "options": [
          "wary",
          "spendthrift",
          "puerile",
          "humdrum"
        ],
        "answer": "wary",
        "relatedWord": "Wary",
        "id": "m07"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which word best describes immature jokes in a serious academic meeting?",
        "options": [
          "puerile",
          "cerebral",
          "congenial",
          "austere"
        ],
        "answer": "puerile",
        "relatedWord": "Puerile",
        "id": "m08"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The article's ____ tone annoyed readers because it seemed more interested in preaching than in analyzing.",
        "options": [
          "didactic",
          "taciturn",
          "homogeneous",
          "wary"
        ],
        "answer": "didactic",
        "relatedWord": "Didactic",
        "id": "m09"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The data dashboard made the error so ____ that even non-specialists noticed it immediately.",
        "options": [
          "conspicuous",
          "cursory",
          "insipid",
          "quixotic"
        ],
        "answer": "conspicuous",
        "relatedWord": "Conspicuous",
        "id": "m10"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "Because the inspector performed only a ____ check, the structural crack was not detected.",
        "options": [
          "cursory",
          "formidable",
          "cerebral",
          "vigilant"
        ],
        "answer": "cursory",
        "relatedWord": "Cursory",
        "id": "m11"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The grant application seemed ____ to new researchers because it required technical, financial, and ethical documentation.",
        "options": [
          "daunting",
          "congenial",
          "humdrum",
          "spendthrift"
        ],
        "answer": "daunting",
        "relatedWord": "Daunting",
        "id": "m12"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "Rather than simply praising the scientist, the biography almost seemed to ____ him.",
        "options": [
          "deify",
          "placate",
          "flout",
          "mislabel"
        ],
        "answer": "deify",
        "relatedWord": "Deify",
        "id": "m13"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The manager's apology failed to ____ employees who had already lost trust in the company.",
        "options": [
          "placate",
          "proliferate",
          "belie",
          "standardize"
        ],
        "answer": "placate",
        "relatedWord": "Placate",
        "id": "m14"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "A leader with a strong ____ for secrecy may damage institutional trust.",
        "options": [
          "proclivity",
          "misnomer",
          "homogeneity",
          "placation"
        ],
        "answer": "proclivity",
        "relatedWord": "Proclivity",
        "id": "m15"
      },
      {
        "type": "double",
        "label": "Double Blank",
        "question": "Although the proposal was presented as a practical reform, its goals were so ____ and its budget so unrealistic that reviewers called it ____.",
        "relatedWord": "Amorphous",
        "blanks": [
          {
            "label": "Blank 1",
            "options": [
              "amorphous",
              "conspicuous",
              "homogeneous",
              "taciturn"
            ],
            "answer": "amorphous"
          },
          {
            "label": "Blank 2",
            "options": [
              "quixotic",
              "feasible",
              "congenial",
              "wary"
            ],
            "answer": "quixotic"
          }
        ],
        "id": "m16"
      },
      {
        "type": "double",
        "label": "Double Blank",
        "question": "The official's ____ praise of the minister did little to ____ critics, who saw the speech as political theater.",
        "relatedWord": "Obsequious",
        "blanks": [
          {
            "label": "Blank 1",
            "options": [
              "obsequious",
              "cerebral",
              "austere",
              "cursory"
            ],
            "answer": "obsequious"
          },
          {
            "label": "Blank 2",
            "options": [
              "placate",
              "flout",
              "deify",
              "disseminate"
            ],
            "answer": "placate"
          }
        ],
        "id": "m17"
      },
      {
        "type": "double",
        "label": "Double Blank",
        "question": "The administrator's ____ review of the safety logs was not merely shallow; it was legally ____ because it ignored clear warning signs.",
        "relatedWord": "Negligent",
        "blanks": [
          {
            "label": "Blank 1",
            "options": [
              "cursory",
              "conspicuous",
              "loquacious",
              "congenial"
            ],
            "answer": "cursory"
          },
          {
            "label": "Blank 2",
            "options": [
              "negligent",
              "homogeneous",
              "didactic",
              "misanthropic"
            ],
            "answer": "negligent"
          }
        ],
        "id": "m18"
      },
      {
        "type": "triple",
        "label": "Triple Blank",
        "question": "In the early draft, the review article was ____ in organization, ____ in tone, and too ____ to guide future researchers.",
        "relatedWord": "Insipid",
        "blanks": [
          {
            "label": "Blank 1",
            "options": [
              "amorphous",
              "uniform",
              "vigilant"
            ],
            "answer": "amorphous"
          },
          {
            "label": "Blank 2",
            "options": [
              "insipid",
              "formidable",
              "frugal"
            ],
            "answer": "insipid"
          },
          {
            "label": "Blank 3",
            "options": [
              "cursory",
              "congenial",
              "abundant"
            ],
            "answer": "cursory"
          }
        ],
        "id": "m19"
      },
      {
        "type": "se",
        "label": "Sentence Equivalence",
        "question": "The editor criticized the manuscript as _____, arguing that its bland claims and predictable examples offered no real insight.",
        "options": [
          "vapid",
          "insipid",
          "cerebral",
          "conspicuous",
          "feasible",
          "austere"
        ],
        "answers": [
          "vapid",
          "insipid"
        ],
        "relatedWord": "Insipid",
        "id": "m20"
      },
      {
        "type": "se",
        "label": "Sentence Equivalence",
        "question": "The historian described the monarch as _____, since his policies changed abruptly according to personal moods rather than evidence.",
        "options": [
          "capricious",
          "erratic",
          "homogeneous",
          "didactic",
          "placating",
          "frugal"
        ],
        "answers": [
          "capricious",
          "erratic"
        ],
        "relatedWord": "Capricious",
        "id": "m21"
      },
      {
        "type": "se",
        "label": "Sentence Equivalence",
        "question": "The respondent was unusually _____, answering complex questions with only a few clipped phrases.",
        "options": [
          "taciturn",
          "reticent",
          "loquacious",
          "garrulous",
          "obsequious",
          "spendthrift"
        ],
        "answers": [
          "taciturn",
          "reticent"
        ],
        "relatedWord": "Taciturn",
        "id": "m22"
      },
      {
        "type": "typed",
        "label": "Typed Answer",
        "question": "Type the word that means an inaccurate or wrong name.",
        "accepted": [
          "misnomer"
        ],
        "relatedWord": "Misnomer",
        "id": "m23"
      },
      {
        "type": "typed",
        "label": "Typed Answer",
        "question": "Type the word that means openly disobeying a rule or law.",
        "accepted": [
          "flout",
          "flouting"
        ],
        "relatedWord": "Flout",
        "id": "m24"
      },
      {
        "type": "typed",
        "label": "Typed Answer",
        "question": "Type the word that means disliking or distrusting humankind.",
        "accepted": [
          "misanthropic"
        ],
        "relatedWord": "Misanthropic",
        "id": "m25"
      },
      {
        "type": "typed",
        "label": "Typed Answer",
        "question": "Type the word that means reckless with money.",
        "accepted": [
          "spendthrift"
        ],
        "relatedWord": "Spendthrift",
        "id": "m26"
      },
      {
        "type": "typed",
        "label": "Typed Answer",
        "question": "Type the word that means careful because of possible danger.",
        "accepted": [
          "wary"
        ],
        "relatedWord": "Wary",
        "id": "m27"
      }
    ]
  },
  "hard": {
    "key": "hard",
    "name": "Hard GRE-Like Exam",
    "difficulty": "Hard",
    "marks": 30,
    "minutes": 20,
    "parts": 2,
    "description": "Real GRE-style challenge under tighter time pressure with advanced sentence logic.",
    "questions": [
      {
        "type": "single",
        "label": "Single Blank",
        "question": "Although the study's sample size was large, its participants were so ____ that the findings could not be generalized to a diverse national population.",
        "options": [
          "homogeneous",
          "capricious",
          "loquacious",
          "spendthrift"
        ],
        "answer": "homogeneous",
        "relatedWord": "Homogeneous",
        "id": "h01"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The paper's abstract promised a rigorous theory, but the argument itself remained ____: suggestive, undefined, and resistant to empirical testing.",
        "options": [
          "amorphous",
          "conspicuous",
          "austere",
          "wary"
        ],
        "answer": "amorphous",
        "relatedWord": "Amorphous",
        "id": "h02"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The minister's carefully staged calmness ____ the administration's internal alarm over the sudden economic contraction.",
        "options": [
          "belied",
          "placated",
          "deified",
          "abounded"
        ],
        "answer": "belied",
        "relatedWord": "Belie",
        "id": "h03"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The safety board criticized the contractor not for ignorance but for ____ disregard of inspection protocols.",
        "options": [
          "negligent",
          "congenial",
          "cerebral",
          "humdrum"
        ],
        "answer": "negligent",
        "relatedWord": "Negligent",
        "id": "h04"
      },
      {
        "type": "single",
        "label": "Single Blank",
        "question": "The scholar's proposal to eliminate misinformation entirely through a single algorithm was admirable but ____.",
        "options": [
          "quixotic",
          "feasible",
          "taciturn",
          "austere"
        ],
        "answer": "quixotic",
        "relatedWord": "Quixotic",
        "id": "h05"
      },
      {
        "type": "double",
        "label": "Double Blank",
        "question": "The article was meant to be a neutral review, yet its ____ tone and tendency to ____ one theorist made it read more like advocacy than scholarship.",
        "relatedWord": "Didactic",
        "blanks": [
          {
            "label": "Blank 1",
            "options": [
              "didactic",
              "taciturn",
              "homogeneous",
              "wary"
            ],
            "answer": "didactic"
          },
          {
            "label": "Blank 2",
            "options": [
              "deify",
              "flout",
              "placate",
              "standardize"
            ],
            "answer": "deify"
          }
        ],
        "id": "h06"
      },
      {
        "type": "double",
        "label": "Double Blank",
        "question": "Because independent laboratories could not reproduce the results, claims of a universal effect began to look less ____ and more ____.",
        "relatedWord": "Feasible",
        "blanks": [
          {
            "label": "Blank 1",
            "options": [
              "feasible",
              "puerile",
              "obsequious",
              "misanthropic"
            ],
            "answer": "feasible"
          },
          {
            "label": "Blank 2",
            "options": [
              "quixotic",
              "congenial",
              "cerebral",
              "frugal"
            ],
            "answer": "quixotic"
          }
        ],
        "id": "h07"
      },
      {
        "type": "double",
        "label": "Double Blank",
        "question": "The company's slogan was a ____: far from being environmentally responsible, the firm repeatedly tried to ____ pollution standards.",
        "relatedWord": "Misnomer",
        "blanks": [
          {
            "label": "Blank 1",
            "options": [
              "misnomer",
              "proclivity",
              "placation",
              "homogeneity"
            ],
            "answer": "misnomer"
          },
          {
            "label": "Blank 2",
            "options": [
              "flout",
              "placate",
              "abound",
              "venerate"
            ],
            "answer": "flout"
          }
        ],
        "id": "h08"
      },
      {
        "type": "double",
        "label": "Double Blank",
        "question": "The grant reviewers were ____ of the team's unusually optimistic projections, especially because the pilot data were only ____.",
        "relatedWord": "Wary",
        "blanks": [
          {
            "label": "Blank 1",
            "options": [
              "wary",
              "loquacious",
              "spendthrift",
              "congenial"
            ],
            "answer": "wary"
          },
          {
            "label": "Blank 2",
            "options": [
              "cursory",
              "formidable",
              "uniform",
              "vigilant"
            ],
            "answer": "cursory"
          }
        ],
        "id": "h09"
      },
      {
        "type": "triple",
        "label": "Triple Blank",
        "question": "The consultant's report was simultaneously ____ in style, ____ in evidence, and ____ in its praise of the client, making its conclusions difficult to trust.",
        "relatedWord": "Obsequious",
        "blanks": [
          {
            "label": "Blank 1",
            "options": [
              "cerebral",
              "insipid",
              "vigilant"
            ],
            "answer": "insipid"
          },
          {
            "label": "Blank 2",
            "options": [
              "cursory",
              "abundant",
              "uniform"
            ],
            "answer": "cursory"
          },
          {
            "label": "Blank 3",
            "options": [
              "obsequious",
              "frugal",
              "reticent"
            ],
            "answer": "obsequious"
          }
        ],
        "id": "h10"
      },
      {
        "type": "triple",
        "label": "Triple Blank",
        "question": "In periods of weak regulation, misleading claims may ____, public anger may become ____, and officials often offer symbolic concessions to ____ voters.",
        "relatedWord": "Disseminate",
        "blanks": [
          {
            "label": "Blank 1",
            "options": [
              "proliferate",
              "recede",
              "stabilize"
            ],
            "answer": "proliferate"
          },
          {
            "label": "Blank 2",
            "options": [
              "conspicuous",
              "homogeneous",
              "taciturn"
            ],
            "answer": "conspicuous"
          },
          {
            "label": "Blank 3",
            "options": [
              "placate",
              "deify",
              "misname"
            ],
            "answer": "placate"
          }
        ],
        "id": "h11"
      },
      {
        "type": "se",
        "label": "Sentence Equivalence",
        "question": "The committee called the preliminary inspection _____ because it lasted only minutes and ignored several critical safety documents.",
        "options": [
          "cursory",
          "perfunctory",
          "formidable",
          "vigilant",
          "congenial",
          "austere"
        ],
        "answers": [
          "cursory",
          "perfunctory"
        ],
        "relatedWord": "Cursory",
        "id": "h12"
      },
      {
        "type": "se",
        "label": "Sentence Equivalence",
        "question": "The public health agency tried to _____ accurate information before rumors could dominate local discussion.",
        "options": [
          "disseminate",
          "circulate",
          "conceal",
          "flout",
          "deify",
          "neglect"
        ],
        "answers": [
          "disseminate",
          "circulate"
        ],
        "relatedWord": "Disseminate",
        "id": "h13"
      },
      {
        "type": "se",
        "label": "Sentence Equivalence",
        "question": "The novelist's view of society is deeply _____; nearly every character assumes that others are selfish, corrupt, or cruel.",
        "options": [
          "misanthropic",
          "cynical",
          "congenial",
          "didactic",
          "feasible",
          "frugal"
        ],
        "answers": [
          "misanthropic",
          "cynical"
        ],
        "relatedWord": "Misanthropic",
        "id": "h14"
      },
      {
        "type": "se",
        "label": "Sentence Equivalence",
        "question": "The chief financial officer criticized the department's _____ habits, noting that it spent lavishly on symbolic projects while basic systems failed.",
        "options": [
          "spendthrift",
          "profligate",
          "frugal",
          "reticent",
          "homogeneous",
          "vigilant"
        ],
        "answers": [
          "spendthrift",
          "profligate"
        ],
        "relatedWord": "Spendthrift",
        "id": "h15"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "In an academic critique, calling an argument 'puerile' most strongly suggests that it is:",
        "options": [
          "immature and childish",
          "strict and severe",
          "pleasantly compatible",
          "quietly cautious"
        ],
        "answer": "immature and childish",
        "relatedWord": "Puerile",
        "id": "h16"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "Which revision best fixes the misuse? 'The report flaunted the new safety law by ignoring every required inspection.'",
        "options": [
          "Replace flaunted with flouted",
          "Replace law with synonym",
          "Replace ignoring with praising",
          "No change is needed"
        ],
        "answer": "Replace flaunted with flouted",
        "relatedWord": "Flout",
        "id": "h17"
      },
      {
        "type": "mcq",
        "label": "MCQ",
        "question": "A 'congenial research environment' is one that is:",
        "options": [
          "pleasant and suitable for work",
          "hostile to collaboration",
          "careless about evidence",
          "silent and uncommunicative"
        ],
        "answer": "pleasant and suitable for work",
        "relatedWord": "Congenial",
        "id": "h18"
      }
    ]
  }
};

const state = {
  selectedExamKey: null,
  currentExam: null,
  studentName: "Student",
  currentPart: 0,
  answers: {},
  timerId: null,
  timeLeft: 0,
  submitted: false
};

const screens = ["mainMenu", "instructionScreen", "examScreen", "resultScreen", "exitScreen"];
const $ = (id) => document.getElementById(id);

function showScreen(id) {
  screens.forEach(s => $(s).classList.toggle("active-screen", s === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getStudentName() {
  const name = ($("studentName").value || "").trim();
  return name || "Student";
}

function renderExamCards() {
  const cards = $("examCards");
  cards.innerHTML = "";
  Object.values(EXAMS).forEach((exam, idx) => {
    const card = document.createElement("article");
    card.className = "card exam-card";
    card.innerHTML = `
      <div class="badge-row">
        <span class="badge">Level ${idx + 1}</span>
        <span class="badge time">${exam.marks} marks</span>
        <span class="badge ${exam.key === 'hard' ? 'hard' : ''}">${exam.minutes} minutes</span>
      </div>
      <h2>${exam.name}</h2>
      <p><strong>Difficulty:</strong> ${exam.difficulty}</p>
      <p>${exam.description}</p>
      <button class="primary-btn" type="button">Start ${exam.name.replace(' Exam','')}</button>
    `;
    card.querySelector("button").addEventListener("click", () => chooseExam(exam.key));
    cards.appendChild(card);
  });
}

function chooseExam(key) {
  state.selectedExamKey = key;
  state.currentExam = EXAMS[key];
  state.studentName = getStudentName();
  const exam = state.currentExam;
  const totalQuestions = exam.questions.length;
  $("instructionTitle").textContent = exam.name;
  $("instructionMeta").innerHTML = `
    <div class="meta-item"><span>Difficulty</span><strong>${exam.difficulty}</strong></div>
    <div class="meta-item"><span>Marks</span><strong>${exam.marks}</strong></div>
    <div class="meta-item"><span>Time</span><strong>${exam.minutes} minutes</strong></div>
    <div class="meta-item"><span>Questions / Parts</span><strong>${totalQuestions} questions · ${exam.parts} parts</strong></div>
  `;
  showScreen("instructionScreen");
}

function startExam() {
  state.answers = {};
  state.currentPart = 0;
  state.submitted = false;
  state.timeLeft = state.currentExam.minutes * 60;
  clearInterval(state.timerId);
  state.timerId = setInterval(tickTimer, 1000);
  renderExamPart();
  showScreen("examScreen");
}

function tickTimer() {
  if (state.submitted) return;
  state.timeLeft--;
  renderStatusBar();
  if (state.timeLeft <= 0) submitExam(true);
}

function formatTime(seconds) {
  const safe = Math.max(0, seconds);
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function getPartBounds() {
  const exam = state.currentExam;
  const total = exam.questions.length;
  const size = Math.ceil(total / exam.parts);
  const start = state.currentPart * size;
  const end = Math.min(start + size, total);
  return { start, end, size, total };
}

function countAnswered() {
  return state.currentExam.questions.reduce((count, q) => count + (isAnswered(q) ? 1 : 0), 0);
}

function isAnswered(q) {
  const ans = state.answers[q.id];
  if (q.type === "double" || q.type === "triple") {
    return ans && q.blanks.every((_, i) => ans[i]);
  }
  if (q.type === "se") return Array.isArray(ans) && ans.length === 2;
  if (q.type === "typed") return typeof ans === "string" && ans.trim().length > 0;
  return typeof ans === "string" && ans.length > 0;
}

function renderStatusBar() {
  const exam = state.currentExam;
  const { start, end, total } = getPartBounds();
  const timerClass = state.timeLeft <= 300 ? "status-chip timer-chip warning" : "status-chip timer-chip";
  $("statusBar").innerHTML = `
    <span class="status-chip">${escapeHtml(state.studentName)}</span>
    <span class="status-chip">${exam.name}</span>
    <span class="${timerClass}">${formatTime(state.timeLeft)} left</span>
    <span class="status-chip">Part ${state.currentPart + 1} of ${exam.parts}</span>
    <span class="status-chip">Questions ${start + 1}–${end} of ${total}</span>
    <span class="status-chip">Answered ${countAnswered()}/${total}</span>
    <span class="status-chip">${exam.marks} marks</span>
  `;
}

function renderExamPart() {
  renderStatusBar();
  const area = $("questionArea");
  area.innerHTML = "";
  const { start, end } = getPartBounds();
  state.currentExam.questions.slice(start, end).forEach((q, idx) => {
    area.appendChild(renderQuestionCard(q, start + idx + 1));
  });
  renderNavigation();
}

function getQuestionMarks(q) {
  if (q.type === "double" || q.type === "triple") return q.blanks.length;
  if (q.type === "se") return 2;
  return 1;
}

function renderQuestionCard(q, number) {
  const card = document.createElement("article");
  card.className = "question-card";
  card.innerHTML = `
    <div class="question-head">
      <div class="q-meta"><span class="q-number">${number}</span><span class="q-type">${q.label}</span></div>
      <span class="q-marks">${getQuestionMarks(q)} mark${getQuestionMarks(q)>1?'s':''}</span>
    </div>
    <p class="question-text">${escapeHtml(q.question)}</p>
  `;
  const body = document.createElement("div");
  body.appendChild(renderAnswerControl(q));
  card.appendChild(body);
  return card;
}

function renderAnswerControl(q) {
  if (["mcq", "single"].includes(q.type)) return renderOptions(q, q.options, state.answers[q.id] || "", (value) => { state.answers[q.id] = value; renderExamPart(); });
  if (q.type === "typed") {
    const wrap = document.createElement("div");
    wrap.innerHTML = `<input class="typed-input" type="text" placeholder="Type your answer" value="${escapeAttr(state.answers[q.id] || '')}" />`;
    wrap.querySelector("input").addEventListener("input", e => { state.answers[q.id] = e.target.value; renderStatusBar(); });
    return wrap;
  }
  if (q.type === "double" || q.type === "triple") {
    const wrap = document.createElement("div");
    wrap.className = q.type === "triple" ? "blank-columns three" : "blank-columns";
    const current = state.answers[q.id] || {};
    q.blanks.forEach((blank, idx) => {
      const col = document.createElement("div");
      col.className = "blank-column";
      col.innerHTML = `<div class="blank-title">${blank.label}</div>`;
      col.appendChild(renderOptions(q, blank.options, current[idx] || "", (value) => {
        state.answers[q.id] = { ...(state.answers[q.id] || {}), [idx]: value };
        renderExamPart();
      }));
      wrap.appendChild(col);
    });
    return wrap;
  }
  if (q.type === "se") {
    const wrap = document.createElement("div");
    const note = document.createElement("p");
    note.className = "helper-text";
    note.textContent = "Select exactly two answers.";
    wrap.appendChild(note);
    const selected = state.answers[q.id] || [];
    wrap.appendChild(renderOptions(q, q.options, selected, (value) => {
      const set = new Set(state.answers[q.id] || []);
      if (set.has(value)) set.delete(value);
      else if (set.size < 2) set.add(value);
      state.answers[q.id] = Array.from(set);
      renderExamPart();
    }, true));
    return wrap;
  }
  return document.createElement("div");
}

function renderOptions(q, options, selected, onPick, multi=false) {
  const grid = document.createElement("div");
  grid.className = "options-grid";
  options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    const isSelected = multi ? (Array.isArray(selected) && selected.includes(opt)) : selected === opt;
    if (isSelected) btn.classList.add("is-selected");
    btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65+idx)}</span><span>${escapeHtml(opt)}</span>`;
    btn.addEventListener("click", () => onPick(opt));
    grid.appendChild(btn);
  });
  return grid;
}

function renderNavigation() {
  const row = $("navigationRow");
  row.innerHTML = "";
  const prev = document.createElement("button");
  prev.type = "button"; prev.className = "secondary-btn"; prev.textContent = "Previous Part";
  prev.disabled = state.currentPart === 0;
  prev.style.visibility = state.currentPart === 0 ? "hidden" : "visible";
  prev.addEventListener("click", () => { state.currentPart--; renderExamPart(); window.scrollTo({top:0,behavior:'smooth'}); });
  row.appendChild(prev);
  if (state.currentPart < state.currentExam.parts - 1) {
    const next = document.createElement("button");
    next.type = "button"; next.className = "primary-btn"; next.textContent = "Next Part";
    next.addEventListener("click", () => { state.currentPart++; renderExamPart(); window.scrollTo({top:0,behavior:'smooth'}); });
    row.appendChild(next);
  } else {
    const submit = document.createElement("button");
    submit.type = "button"; submit.className = "danger-btn"; submit.textContent = "Submit Exam";
    submit.addEventListener("click", () => {
      if (confirm("Submit exam now? You will see your result and review.")) submitExam(false);
    });
    row.appendChild(submit);
  }
}

function normalize(value) { return String(value || "").trim().toLowerCase().replace(/\s+/g, " "); }
function sorted(arr) { return [...arr].sort((a,b)=>a.localeCompare(b)); }

function gradeQuestion(q) {
  const ans = state.answers[q.id];
  if (["mcq", "single"].includes(q.type)) {
    const correct = ans === q.answer;
    return { score: correct ? 1 : 0, max: 1, correct, details: [] };
  }
  if (q.type === "typed") {
    const correct = q.accepted.map(normalize).includes(normalize(ans));
    return { score: correct ? 1 : 0, max: 1, correct, details: [] };
  }
  if (q.type === "double" || q.type === "triple") {
    let score = 0;
    const details = q.blanks.map((b, i) => {
      const user = ans && ans[i] ? ans[i] : "Not answered";
      const ok = user === b.answer;
      if (ok) score++;
      return { blank: b.label, user, correct: b.answer, ok };
    });
    return { score, max: q.blanks.length, correct: score === q.blanks.length, details };
  }
  if (q.type === "se") {
    const selected = Array.isArray(ans) ? ans : [];
    const correctSet = new Set(q.answers);
    const score = selected.filter(v => correctSet.has(v)).length;
    const fullCorrect = selected.length === q.answers.length && sorted(selected).join("|") === sorted(q.answers).join("|");
    return { score, max: 2, correct: fullCorrect, details: [] };
  }
  return { score: 0, max: 0, correct: false, details: [] };
}

function submitExam(auto=false) {
  if (state.submitted) return;
  state.submitted = true;
  clearInterval(state.timerId);
  const graded = state.currentExam.questions.map(q => ({ q, grade: gradeQuestion(q) }));
  const totalScore = graded.reduce((sum, item) => sum + item.grade.score, 0);
  const maxScore = state.currentExam.marks;
  const pct = Math.round((totalScore / maxScore) * 100);
  const level = pct >= 85 ? "Excellent" : pct >= 70 ? "Good" : pct >= 50 ? "Needs Revision" : "Weak — Review Again";
  $("resultSummary").innerHTML = `
    <div class="eyebrow">${auto ? 'Auto-submitted when time ended' : 'Submitted'}</div>
    <h1>${state.currentExam.name}</h1>
    <p class="subtitle">${escapeHtml(state.studentName)} · Day ${EXAM_META.day} · ${EXAM_META.wordRange}</p>
    <div class="score-big">${totalScore}/${maxScore}</div>
    <p><strong>Percentage:</strong> ${pct}% · <strong>Performance:</strong> ${level}</p>
  `;
  renderStrongWeak(graded);
  renderReview(graded);
  const nextKey = state.selectedExamKey === "basic" ? "medium" : state.selectedExamKey === "medium" ? "hard" : null;
  $("nextLevelBtn").textContent = nextKey ? `Proceed to ${EXAMS[nextKey].name}` : "Finish All Levels";
  $("nextLevelBtn").onclick = () => {
    if (nextKey) chooseExam(nextKey); else showScreen("exitScreen");
  };
  showScreen("resultScreen");
}

function renderStrongWeak(graded) {
  const map = {};
  EXAM_META.words.forEach(w => map[w] = { score: 0, max: 0 });
  graded.forEach(({q, grade}) => {
    const w = q.relatedWord;
    if (!map[w]) map[w] = { score: 0, max: 0 };
    map[w].score += grade.score;
    map[w].max += grade.max;
  });
  const strong = [];
  const weak = [];
  Object.entries(map).forEach(([word, v]) => {
    if (v.max === 0) return;
    if (v.score === v.max) strong.push(word); else weak.push(word);
  });
  $("strongWords").innerHTML = strong.length ? strong.map(w => `<span class="word-pill">${escapeHtml(w)}</span>`).join("") : `<span class="muted">No fully strong words yet.</span>`;
  $("weakWords").innerHTML = weak.length ? weak.map(w => `<span class="word-pill">${escapeHtml(w)}</span>`).join("") : `<span class="muted">No weak words detected.</span>`;
}

function renderReview(graded) {
  const list = $("reviewList");
  list.innerHTML = "";
  graded.forEach(({q, grade}, index) => {
    const card = document.createElement("article");
    card.className = "review-card";
    const status = grade.correct ? `<span class="status-correct">Correct</span>` : `<span class="status-wrong">Not Correct</span>`;
    card.innerHTML = `
      <button class="review-header" type="button">
        <span class="review-title"><strong>Q${index + 1}</strong> <span>${q.label}</span> <span class="badge">${escapeHtml(q.relatedWord)}</span></span>
        <span>${status} <strong>${grade.score}/${grade.max}</strong></span>
      </button>
      <div class="review-body">${buildReviewBody(q, grade)}</div>
    `;
    card.querySelector(".review-header").addEventListener("click", () => card.classList.toggle("open"));
    list.appendChild(card);
  });
}

function buildReviewBody(q, grade) {
  let html = `<div class="review-block"><strong>Full question:</strong><br>${escapeHtml(q.question)}</div>`;
  if (["mcq", "single"].includes(q.type)) {
    const user = state.answers[q.id] || "Not answered";
    html += optionReview(q.options, user, q.answer);
    html += `<div class="review-block"><strong>Your answer:</strong> ${escapeHtml(user)}<br><strong>Correct answer:</strong> ${escapeHtml(q.answer)}<br><strong>Marks:</strong> ${grade.score}/${grade.max}</div>`;
  } else if (q.type === "typed") {
    const user = state.answers[q.id] || "Not answered";
    html += `<div class="review-block"><strong>Your typed answer:</strong> ${escapeHtml(user)}<br><strong>Accepted answer:</strong> ${escapeHtml(q.accepted[0])}<br><strong>Marks:</strong> ${grade.score}/${grade.max}</div>`;
  } else if (q.type === "double" || q.type === "triple") {
    const ans = state.answers[q.id] || {};
    q.blanks.forEach((blank, idx) => {
      const user = ans[idx] || "Not answered";
      html += `<div class="review-block"><strong>${blank.label} options:</strong>${optionReview(blank.options, user, blank.answer, true)}<p><strong>Your ${blank.label}:</strong> ${escapeHtml(user)}<br><strong>Correct ${blank.label}:</strong> ${escapeHtml(blank.answer)}</p></div>`;
    });
    const wrongs = grade.details.filter(d => !d.ok).map(d => d.blank).join(", ") || "None";
    html += `<div class="review-block"><strong>Wrong blank(s):</strong> ${escapeHtml(wrongs)}<br><strong>Marks:</strong> ${grade.score}/${grade.max}</div>`;
  } else if (q.type === "se") {
    const user = state.answers[q.id] || [];
    html += optionReview(q.options, user, q.answers);
    html += `<div class="review-block"><strong>Your selected answers:</strong> ${escapeHtml(user.length ? user.join(', ') : 'Not answered')}<br><strong>Correct answers:</strong> ${escapeHtml(q.answers.join(', '))}<br><strong>Marks:</strong> ${grade.score}/${grade.max}</div>`;
  }
  return html;
}

function optionReview(options, user, correct, compact=false) {
  const userArray = Array.isArray(user) ? user : [user];
  const correctArray = Array.isArray(correct) ? correct : [correct];
  const rows = options.map((opt, idx) => {
    const isUser = userArray.includes(opt);
    const isCorrect = correctArray.includes(opt);
    let cls = "review-option";
    if (isCorrect) cls += " correct";
    if (isUser && !isCorrect) cls += " wrong";
    if (isUser && isCorrect) cls += " student";
    const labels = [];
    if (isUser) labels.push("Your answer");
    if (isCorrect) labels.push("Correct");
    return `<div class="${cls}"><strong>${String.fromCharCode(65+idx)}.</strong> ${escapeHtml(opt)}${labels.length ? ` <em>(${labels.join(' + ')})</em>` : ''}</div>`;
  }).join("");
  return compact ? `<div class="review-options">${rows}</div>` : `<div class="review-block"><strong>All options:</strong><div class="review-options">${rows}</div></div>`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[char]));
}
function escapeAttr(value) { return escapeHtml(value).replace(/`/g, "&#96;"); }

$("startExamBtn").addEventListener("click", startExam);
$("instructionBackBtn").addEventListener("click", () => showScreen("mainMenu"));
$("backToMenuBtn").addEventListener("click", () => { clearInterval(state.timerId); showScreen("mainMenu"); });
$("exitBtn").addEventListener("click", () => showScreen("exitScreen"));
$("exitBackBtn").addEventListener("click", () => showScreen("mainMenu"));

renderExamCards();
