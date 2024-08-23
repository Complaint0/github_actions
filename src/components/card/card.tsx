import { CardType } from '../card-list/card-list';
import styles from './card.module.scss';
type CardProps = Pick<CardType, 'name'>;

export default function Card({ name }: CardProps) {
	return (
		<article className={styles.card}>
			<h3 className={styles.title}>{name}</h3>
		</article>
	);
}
