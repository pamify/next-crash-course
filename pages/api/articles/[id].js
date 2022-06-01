import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {
  // filter out the specific article that matches the id of the article passed in to the request
  const filtered = articles.filter(article => article.id === id)

  if (filtered.length > 0) {
    // return the single article from the array
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` })
  }
}
