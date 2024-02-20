import DOMPurify from "dompurify"

function Sanitized() {
  const data = `<p>Dangerously set <b onmouseover="alert('OWNED!');">Inner HTML</b></p>`
  const sanitized = DOMPurify.sanitize(data)
  return <div dangerouslySetInnerHTML={{ __html: sanitized }}/>
}

export default Sanitized