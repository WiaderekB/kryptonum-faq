"use client";
import styles from "./question.module.scss";
import { FaqQuestionDataType } from "./question.types";

function FaqQuestion({ index, questionData, isVisible }: { index: number; questionData: FaqQuestionDataType; isVisible: boolean }) {
  const questionId = `faq-question-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <details className={`${styles.question} ${isVisible ? styles.visible : styles.hidden}`} style={{ display: isVisible ? "" : "none" }}>
      <summary>
        <h2 data-index={index + 1 < 10 ? `0${index + 1}` : index + 1} id={questionId}>
          {questionData.question}
        </h2>
        <div className={styles.button} aria-hidden="true">
          <span className={styles.horizontal} aria-hidden="true"></span>
          <span className={styles.vertical} aria-hidden="true"></span>
        </div>
      </summary>

      <p className={styles.content} id={answerId} role="region" aria-labelledby={questionId}>
        {questionData.answer}
      </p>
    </details>
  );
}

export default FaqQuestion;
