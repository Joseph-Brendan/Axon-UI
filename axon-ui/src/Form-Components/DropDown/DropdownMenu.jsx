import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import styles from "./Dropdown.module.css"

export default function DropdownMenu({ label, options = [], placeholder = "Input text", onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    onChange?.(option)
  }

  return (
    <div className={styles.container} ref={dropdownRef}>
      {label && <label className={styles.label}>{label}</label>}
      <div onClick={() => setIsOpen(!isOpen)} className={styles.trigger}>
        <span className={selectedOption ? styles.selectedContent : styles.placeholder}>
          {selectedOption || placeholder}
        </span>
        <ChevronDown className={styles.chevron} />
      </div>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          <ul className={styles.optionsList}>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className={`${styles.option} ${option === selectedOption ? styles.selectedOption : ""}`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

