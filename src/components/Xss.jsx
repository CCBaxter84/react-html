function Xss() {
  const data = `<p>Dangerously set <b onmouseover="alert('OWNED!');">Inner HTML</b></p>`
  return <div dangerouslySetInnerHTML={{ __html: data }}/>
}

export default Xss