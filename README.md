# GregMat GRE Vocab Group 1 Exam

A clean, offline GRE vocabulary exam portal for daily practice. This project is designed for **GregMat GRE Vocabulary Group 1** and provides a polished exam-style interface with multiple difficulty levels, countdown timer, automatic scoring, and post-exam review.

## Project Overview

This exam portal helps students practice GRE vocabulary in a structured and interactive way. Instead of using a plain question list, the portal works like a real online exam system that can run locally in any modern browser.

The Day 1 exam is based on **30 GRE vocabulary words** and includes three exam levels:

1. **Basic Easy Recall Exam**
2. **Medium Mixed Exam**
3. **Hard GRE-Like Exam**

Each level uses the same vocabulary set but tests the words with different difficulty, question styles, and time limits.

## Features

- Offline exam portal
- No login required
- Student name input
- Three exam levels
- Countdown timer
- Auto-submit when time ends
- Part/page-based exam system
- Clickable MCQ options
- Single-blank, double-blank, and triple-blank questions
- Sentence equivalence questions
- Typed answer support
- Automatic scoring
- Strong words and weak words analysis
- Full post-submission review
- Shows what the student selected or typed
- Shows the correct answer after submission
- Shows wrong blank or wrong part for multi-blank questions
- Mobile-friendly and desktop-friendly design
- Clean, eye-soothing UI
- Works by opening `index.html`

## Exam Levels

| Level | Exam Name | Marks | Time | Purpose |
|---|---:|---:|---:|---|
| 1 | Basic Easy Recall Exam | 40 | 25 minutes | Meaning, synonym, antonym, and simple usage recall |
| 2 | Medium Mixed Exam | 35 | 25 minutes | Balanced mixed practice with major question types |
| 3 | Hard GRE-Like Exam | 30 | 20 minutes | GRE-style sentence logic and advanced vocabulary use |

## Day 1 Word Range

**Day 1:** Words 1–30

This portal is designed for the first 30 vocabulary words from GregMat GRE Vocabulary Group 1.

## File Structure

```text
GregMat-GRE-Vocab-Group-1-Exam/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

Contains the main page structure:

- Main menu
- Student name input
- Exam level selection
- Instruction screen
- Exam screen
- Result screen
- Exit/completion screen

### `style.css`

Contains all UI styling:

- Layout
- Colors
- Cards
- Buttons
- Timer
- Question design
- Result review design
- Mobile responsiveness

### `script.js`

Contains all exam logic:

- Question data
- Timer
- Answer selection
- Part navigation
- Scoring
- Result generation
- Strong/weak word analysis
- Clickable review cards

## How to Use Locally

1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html`.
4. Enter your name.
5. Choose an exam level.
6. Start the exam.
7. Submit the exam or wait for auto-submit when time ends.
8. Review your result and weak words.

No internet connection is required after downloading the files.

## How to Run on GitHub Pages

You can host this exam portal using GitHub Pages.

1. Upload `index.html`, `style.css`, and `script.js` to your GitHub repository.
2. Go to the repository settings.
3. Open **Pages**.
4. Under **Build and deployment**, select the main branch.
5. Save the settings.
6. GitHub will generate a live link for your exam portal.

After deployment, students can take the exam directly from the browser.

## Post-Exam Review

After submission, each question result is clickable. The student can review:

- Full question
- All answer options
- Selected or typed answer
- Correct answer
- Marks received
- Wrong blank or wrong part
- Related vocabulary word
- Correct / Not Correct status

This helps students identify mistakes clearly without showing long explanations during the result review.

## Strong and Weak Word Analysis

The portal automatically separates vocabulary words into:

- **Strong Words**: words answered correctly
- **Weak Words**: words answered incorrectly or partially correctly

Weak words should be revised again before moving to the next vocabulary day.

## Design Goals

The UI is designed to be:

- Calm
- Clean
- Eye-soothing
- Mobile-friendly
- Desktop-friendly
- Exam-like
- Easy to use
- Free from visual clutter

The project avoids external libraries, CDNs, online fonts, and internet-dependent resources.

## Technologies Used

- HTML
- CSS
- JavaScript

No external framework is required.

## Best Use Case

This project is useful for:

- GRE vocabulary practice
- Daily vocabulary revision
- Self-testing
- Timed exam practice
- Identifying weak vocabulary words
- Building GRE-style sentence completion skill

## Future Improvements

Possible future updates:

- Add more daily word sets
- Add progress tracking
- Add downloadable result summary
- Add review-only mode
- Add dark mode
- Add randomized question order
- Add more GRE-style hard questions

## License

This project is for personal study and educational use.

## Author

Created by **Johir Uddin Khan** for GRE vocabulary practice.
