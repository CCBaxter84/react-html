function Naive() {
  const data = "Dangerously set Inner HTML"
  return <div dangerouslySetInnerHTML={{ __html: data }}/>
}

export default Naive