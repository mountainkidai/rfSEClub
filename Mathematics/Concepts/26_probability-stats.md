# Probability - rfSE Club

## 1. Basics

- **Definition**: Probability measures the likelihood of an event occurring, expressed as a number between 0 (impossible) and 1 (certain).
- **Formula**:
  P(Event) = (Number of favorable outcomes) / (Total outcomes)

- **Example**: A bag has 10 balls: 4 red, 6 blue. Probability of picking a red ball:
- Favorable outcomes: 4 red balls
- Total outcomes: 10 balls
- P(red) = 4/10 = 0.4 (40%)

---

## 2. Sample Space

The sample space is the complete set of all possible outcomes of an experiment.

- **Discrete**: A finite/countable set of outcomes (e.g., flipping a coin: {Heads, Tails}).
- **Continuous**: An infinite range of outcomes (e.g., exact body temperature: 36.1°C, 36.123°C, etc.).

**Analogy**: A fruit basket. The sample space is every fruit you _could_ pick: {Apple, Banana, Orange}.

---

## 3. General Example

- **Experiment**: Rolling two dice
- **Sample Space**: {(1,1), (1,2), …, (6,6)} → 36 outcomes
- **Probability**: Chance of rolling a total of 7
- Outcomes: {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)} → 6 outcomes
- P(7) = 6/36 = 1/6 ≈ 0.167

---

## 4. Health-Related AI Examples

### **Calorie Calculator AI**

- **Experiment**: Classify daily intake as {High, Low}
- **Sample Space**: {High, Low}
- **AI Use**: If 60% of users eat >2000 calories → P(High) = 0.6
- **Example**: In 10 users, 6 exceed → P(High) = 6/10 = 0.6

### **Heart Rate Monitor AI**

- **Experiment**: Workout {Intense, Moderate}
- **Sample Space**: {Intense, Moderate}
- **AI Use**: If 40% sessions are Intense → P(Intense) = 0.4

### **Sleep Quality AI**

- **Experiment**: Sleep {Good, Poor}
- **Sample Space**: {Good, Poor}
- **AI Use**: If 70% nights are Good → P(Good) = 0.7

---

## 5. Events

- **Definition**: Subset of the sample space
- **Types**:
- _Simple_: Single outcome (e.g., roll a 3)
- _Compound_: Multiple outcomes (e.g., even number {2,4,6})

**Example**: Rolling a die

- A = even number {2,4,6}
- P(A) = 3/6 = 0.5

---

## 6. Complementary Events

- **Definition**: Probability event _does not_ occur → P(not A) = 1 − P(A)
- **Example**: 5 candies: 2 chocolate, 3 gummy
- P(chocolate) = 2/5 = 0.4
- P(not chocolate) = 1 − 0.4 = 0.6

---

## 7. Independent Events

- **Definition**: One event does not affect the other
- **Formula**: P(A and B) = P(A) × P(B)

**Example**: Flipping 2 coins

- A = first coin heads → P(A) = 0.5
- B = second coin heads → P(B) = 0.5
- P(A and B) = 0.5 × 0.5 = 0.25

**Health AI Example**:

- A = High calorie intake → P(A) = 0.6
- B = Good sleep → P(B) = 0.7
- Assume independence → P(A and B) = 0.6 × 0.7 = 0.42 (42%)

---

## 8. Mutually Exclusive Events

- **Definition**: Can’t happen together
- **Formula**: P(A or B) = P(A) + P(B)

**Example**: Roll a die

- A = roll 1 → P(A) = 1/6
- B = roll 3 → P(B) = 1/6
- Mutually exclusive → P(A or B) = 1/6 + 1/6 = 1/3

**Health AI Example**:

- Blood pressure: {Normal, High, Low}
- A = Normal (0.7), B = High (0.2)
- Mutually exclusive → P(A or B) = 0.7 + 0.2 = 0.9

---

## 9. Non-Mutually Exclusive Events

- **Definition**: Can happen together, so subtract overlap
- **Formula**: P(A or B) = P(A) + P(B) − P(A and B)

**Example**: Snacks

- 10 snacks → 6 chocolate, 4 cookie, 2 both
- P(chocolate) = 0.6
- P(cookie) = 0.4
- P(both) = 0.2
- P(chocolate or cookie) = 0.6 + 0.4 − 0.2 = 0.8

---
