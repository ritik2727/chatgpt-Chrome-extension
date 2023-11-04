import { useEffect, useState } from "react"

const styles = {
  popup: {
    width: "500px",
    height: "500px",
    border: "1px solid black",
    overflow: "hidden",
    backgroundColor: "white",
    zIndex: "9999"
  },
  popupHeader: {
    backgroundColor: "#f1f1f1",
    padding: "10px",
    textAlign: "right"
  },
  closeIcon: {
    fontSize: "20px",
    cursor: "pointer",
    color: "black"
  },
  popupContent: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  responseContainer: {
    textAlign: "center",
    marginBottom: "20px",
    color: "black"
  },
  inputContainer: {
    display: "flex",
    alignItems: "center"
  },
  commandInput: {
    flex: "1",
    padding: "5px",
    marginRight: "10px",
    backgroundColor: "white",
    borderRadius: 20,
    color: "black"
  },
  generateButton: {
    padding: "5px 10px",
    cursor: "pointer",
    color: "white",
    backgroundColor: "green"
  }
} as { [key: string]: React.CSSProperties }

function IndexPopup({ onClose }) {
  const [command, setCommand] = useState<string>("")
  const [response, setResponse] = useState<string>("")

  const handleGenerate = async () => {
    try {
      const apiResponse = await fetch(
        `http://localhost:3000/api/generate?command=${encodeURIComponent(
          command
        )}`
      )

      if (!apiResponse.ok) {
        throw new Error(`API request failed with status: ${apiResponse.status}`)
      }

      const responseData = await apiResponse.json()

      // Parse the streamingResponse JSON string
      const streamingResponseArray = JSON.parse(responseData.streamingResponse)

      console.log(streamingResponseArray)

      // Access the generated_text property
      const generatedText =
        streamingResponseArray[0]?.generated_text ||
        "No generated text available"

      setResponse(generatedText)


    } catch (error) {
      console.error("Error during API request: 500", error)
      setResponse(`Error during API request ${error}`)
    }
  }

  useEffect(() => {}, [response, command, setResponse])
  return (
    <div style={styles.popup}>
      <div style={styles.popupHeader}>
        <span style={styles.closeIcon} onClick={onClose}>&times;</span>
      </div>
      <div style={styles.popupContent}>
        <div style={styles.responseContainer}>{response}</div>
        <div style={styles.inputContainer}>
          <input
            type="text"
            id="commandInput"
            placeholder="Enter your command"
            style={styles.commandInput}
            value={command}
            onChange={(e) => setCommand(e.target.value)}
          />
          <button style={styles.generateButton} onClick={handleGenerate}>
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
