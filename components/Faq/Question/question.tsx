"use client";
import styles from "./question.module.scss";
import { FaqQuestionDataType } from "./question.types";

function FaqQuestion({ index, questionData }: { index: number; questionData: FaqQuestionDataType }) {
  const questionId = `faq-question-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <details className={styles.question}>
      <summary>
        <p className={styles.index} aria-hidden="true">
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </p>
        <div className={styles.title}>
          <h2 id={questionId}>{questionData.question}</h2>
          <div className={styles.button} aria-hidden="true">
            <span className={styles.horizontal} aria-hidden="true"></span>
            <span className={styles.vertical} aria-hidden="true"></span>
          </div>
        </div>
      </summary>
      <div className={styles.content} id={answerId} role="region" aria-labelledby={questionId}>
        <p>{questionData.answer}</p>
      </div>
    </details>
  );
}

export default FaqQuestion;
