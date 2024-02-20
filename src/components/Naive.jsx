function Naive() {
  const data = "<p>Dangerously set <b>Inner HTML</b></p>"
  return <div dangerouslySetInnerHTML={{ __html: data }}/>
}

export default Naive