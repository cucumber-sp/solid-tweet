import { createSignal, Show } from 'solid-js'
import { Tweet } from 'solid-tweet'
import 'solid-tweet/solid-tweet.css'

export default function App() {
  const [input, setInput] = createSignal('')
  const [tweetId, setTweetId] = createSignal('')

  const extractId = (value: string) => {
    const trimmed = value.trim()
    // handle full URLs like https://x.com/user/status/1234567890
    const match = trimmed.match(/status\/(\d+)/)
    if (match) return match[1]
    // handle plain IDs
    if (/^\d+$/.test(trimmed)) return trimmed
    return ''
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    const id = extractId(input())
    if (id) setTweetId(id)
  }

  return (
    <div style={{
      'max-width': '600px',
      margin: '2rem auto',
      padding: '0 1rem',
      'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <h1 style={{ 'font-size': '1.5rem', 'margin-bottom': '1rem' }}>
        solid-tweet demo
      </h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', 'margin-bottom': '1.5rem' }}>
        <input
          type="text"
          placeholder="Tweet ID or URL"
          value={input()}
          onInput={(e) => setInput(e.currentTarget.value)}
          style={{
            flex: '1',
            padding: '0.5rem 0.75rem',
            'font-size': '1rem',
            border: '1px solid #ccc',
            'border-radius': '8px',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.5rem 1.25rem',
            'font-size': '1rem',
            'font-weight': '600',
            background: '#1d9bf0',
            color: 'white',
            border: 'none',
            'border-radius': '8px',
            cursor: 'pointer',
          }}
        >
          Load
        </button>
      </form>

      <Show when={tweetId()}>
        {(id) => <Tweet id={id()} />}
      </Show>
    </div>
  )
}
