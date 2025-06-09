import './index.scss'

interface Props {
  result: {
    word: number;
    character: number;
    sentence: number;
    paragraph: number;
    pronouns: number;
  }
}

const ResultBox: React.FC<Props> = ({ result }) => {



  const resultBar = [
    {
      title: 'Words',
      value: result.word,
    },
    {
      title: 'Characters',
      value: result.character,
    },
    {
      title: 'Sentences',
      value: result.sentence,
    },
    {
      title: 'Paragraphs ',
      value: result.paragraph,
    },
    {
      title: 'Pronouns',
      value: result.pronouns,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
