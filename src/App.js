import React, { useState, useEffect } from 'react'
import './styles.css'

function App() {
  return <WordByWord />
}

const WordByWord = () => {
  const [inputText, setInputText] = useState('') // Kullanıcının yazdığı metin
  const [displayedText, setDisplayedText] = useState('') // Ekranda gösterilecek metin
  const [currentIndex, setCurrentIndex] = useState(0) // Gösterilen kelimenin indeksini tutar
  const [words, setWords] = useState([]) // Metni kelimelere ayırır

  useEffect(() => {
    setDisplayedText('')
    setCurrentIndex(0)

    // Metni kelimelere ayır ve kelimeleri ayarla
    if (inputText.trim()) {
      setWords(inputText.trim().split(' '))
    } else {
      setWords([])
    }
  }, [inputText])

  //Metindeki kelimeleri sırayla ekrana yazdırır. -->
  useEffect(() => {
    // Kelimeleri sırayla göstermek için bir interval ayarla
    if (words.length > 0 && currentIndex < words.length) {
      const interval = setInterval(() => {
        setDisplayedText((prev) =>
          prev ? `${prev} ${words[currentIndex]}` : words[currentIndex]
        )
        setCurrentIndex((prev) => prev + 1)
      }, 500) // Her 500ms'de bir kelime ekler

      return () => clearInterval(interval) // Interval'i temizle
    }
  }, [words, currentIndex])

  return (
    <div className="container">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Bir metin girin"
        className="input-text"
      />
      <p className="p-text">{displayedText}</p>
    </div>
  )
}

export default App
