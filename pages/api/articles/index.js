import { articles } from '../../../data';

export default function handler(req, res) {
	// retrieve all the articles
	res.status(200).json(articles);
}
