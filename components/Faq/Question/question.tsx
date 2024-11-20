"use client";
import { useState } from "react";
import styles from "./question.module.scss";
import { FaqQuestionDataType } from "./question.types";

function FaqQuestion(props: { index: number; questionData: FaqQuestionDataType }) {
	const [open, setOpen] = useState(false);
	return (
		<div className={`${styles.question} ${open ? styles.open : ""}`}>
			<p className={styles.index}>0{props.index + 1}</p>

			<div className={styles.content}>
				<div className={styles.title}>
					<h2>{props.questionData.question}</h2>
					<button aria-label={open ? "Close answer" : "Open answer"} onClick={() => setOpen((previous) => !previous)}>
						<span className={styles.horizontal}></span>
						<span className={styles.vertical}></span>
					</button>
				</div>

				<div className={styles.answerWrapper}>
					<p>{props.questionData.answer}</p>
				</div>
			</div>
		</div>
	);
}

export default FaqQuestion;
