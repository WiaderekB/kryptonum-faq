"use client";
import { useState } from "react";
import styles from "./question.module.scss";
import { FaqQuestionDataType } from "./question.types";

function FaqQuestion(props: { index: number; questionData: FaqQuestionDataType }) {
	const [open, setOpen] = useState(false);
	const questionId = `faq-question-${props.index}`;
	const answerId = `faq-answer-${props.index}`;

	return (
		<article className={`${styles.question} ${open ? styles.open : ""}`}>
			<p className={styles.index} aria-hidden="true">
				{props.index + 1 < 10 ? `0${props.index + 1}` : props.index + 1}
			</p>

			<div className={styles.content}>
				<div className={styles.title}>
					<h2 id={questionId}>{props.questionData.question}</h2>
					<button aria-expanded={open} aria-controls={answerId} onClick={() => setOpen((previous) => !previous)} aria-label={open ? "Close answer" : "Open answer"}>
						<span className={styles.horizontal} aria-hidden="true"></span>
						<span className={styles.vertical} aria-hidden="true"></span>
					</button>
				</div>

				<div className={styles.answerWrapper} id={answerId} role="region" aria-labelledby={questionId}>
					<p>{props.questionData.answer}</p>
				</div>
			</div>
		</article>
	);
}

export default FaqQuestion;
